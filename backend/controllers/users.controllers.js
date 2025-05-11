const { errMessage } = require("../utils/errMessage");
const User = require("../models/User");
const resMessage = require("../utils/resMessage");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerNewUser = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
      const err = errMessage(400, "All fields are required");
      return next(err);
    }

    const user = new User({
      firstName,
      lastName,
      email,
      password,
    });

    await user.save();
    res.status(201).json(resMessage("User created successfully"));
  } catch (error) {
    next(errMessage(500, error.message));
  }
};

// LOGIN
const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(errMessage(400, "Email and Password are required"));
    }

    const user = await User.findOne({ email });

    if (!user) {
      return next(errMessage(404, "User not found"));
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return next(errMessage(401, "Invalid credentials"));
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    const isProd = process.env.NODE_ENV === "production";

    res.cookie("accessToken", token, {
      httpOnly: true,
      secure: isProd,
      sameSite: isProd ? "none" : "lax",
      path: "/",
      maxAge: 3600000,
    });
    res.status(200).json(resMessage("Login successful"));
  } catch (error) {
    next(errMessage(500, error.message));
  }
};

// LOGOUT
const logout = async (req, res, next) => {
  res.clearCookie("accessToken", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
  });
  res.status(200).json(resMessage("Logged out successfully"));
};

// VERIFY... WHY??
const verifyToken = (req, res, next) => {
  const token = req.cookies?.accessToken;
  if (!token) {
    return next(errMessage(401, "Token is required"));
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    res.status(200).json(resMessage("Token is valid"));
  } catch (err) {
    const isExpired = err.name === "TokenExpiredError";
    next(errMessage(401, isExpired ? "Token expired" : "Invalid token"));
  }
};

// GET USER INFO
const getUserInfo = async (req, res, next) => {
  const { userId } = req.user;

  if (!userId) {
    return next(errMessage(401, "User ID is not found in the token"));
  }

  try {
    const foundUser = await User.findById(userId).select("-password");
    if (!foundUser) {
      return next(errMessage(404, "User not found"));
    }
    res.status(200).json(resMessage("User Info: ", { user: foundUser }));
  } catch (error) {
    next(errMessage(500, error.message));
  }
};

module.exports = {
  registerNewUser,
  userLogin,
  logout,
  verifyToken,
  getUserInfo,
};
