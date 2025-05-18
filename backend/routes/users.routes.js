const { Router } = require("express");
const {
  registerNewUser,
  userLogin,
  logout,
  verifyToken,
  getUserInfo,
} = require("../controllers/users.controllers");
const authUser = require("../middlewares/auth");
const router = Router();

router.post("/register", registerNewUser);
router.post("/login", userLogin);
router.post("/logout", logout);
router.post("/verify", verifyToken);
router.get("/userInfo", authUser, getUserInfo);

module.exports = router;
