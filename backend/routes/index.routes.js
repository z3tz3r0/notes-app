const { Router } = require("express");
const noteRoute = require("./notes.routes");
const userRoute = require("./users.routes");

const router = Router();

router.use("/notes", noteRoute);
router.use("/users", userRoute);

module.exports = router;
