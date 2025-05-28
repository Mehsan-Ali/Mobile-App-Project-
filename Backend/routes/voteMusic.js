const express = require("express");
const userCtrl = require("../controller/voteMusic");
const isAuthenticated = require("../middlewares/isAuth");

const router = express.Router();

//!Register
router.post("/api/votemusic/register", userCtrl.register);
// router.post("/api/presidents/login", userCtrl.login);
router.get("/api/votemusic/getdata", userCtrl.profile);

module.exports = router;