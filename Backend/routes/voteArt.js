const express = require("express");
const userCtrl = require("../controller/voteArt");
const isAuthenticated = require("../middlewares/isAuth");

const router = express.Router();

//!Register
router.post("/api/voteart/register", userCtrl.register);
// router.post("/api/presidents/login", userCtrl.login);
router.get("/api/voteart/getdata", userCtrl.profile);

module.exports = router;