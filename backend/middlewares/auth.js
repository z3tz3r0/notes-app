const { errMessage } = require("../utils/errMessage");
const jwt = require("jsonwebtoken");

const authUser = async (req, res, next) => {
  const token = req.cookies?.accessToken;

  if (!token) {
    const error = errMessage(401, "Access denied. No token");
    return next(error);
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodedToken;
    next();
  } catch (err) {
    const isExpired = err.name === "TokenExpiredError";
    next(errMessage(401, isExpired ? "Token expired" : "Invalid token"));
  }
};

module.exports = authUser;
