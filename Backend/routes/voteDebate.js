const express = require("express");
const userCtrl = require("../controller/voteDebate");
const isAuthenticated = require("../middlewares/isAuth");

const router = express.Router();

//!Register
router.post("/api/votedebate/register", userCtrl.register);
// router.post("/api/presidents/login", userCtrl.login);
router.get("/api/votedebate/getdata", userCtrl.profile);

module.exports = router;