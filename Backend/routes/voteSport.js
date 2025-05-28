const express = require("express");
const userCtrl = require("../controller/voteSport");
const isAuthenticated = require("../middlewares/isAuth");

const router = express.Router();

//!Register
router.post("/api/votesport/register", userCtrl.register);
// router.post("/api/presidents/login", userCtrl.login);
router.get("/api/votesport/getdata", userCtrl.profile);

module.exports = router;