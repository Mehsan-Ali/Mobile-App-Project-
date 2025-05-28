const express = require("express");
const userCtrl = require("../controller/voteSci");
const isAuthenticated = require("../middlewares/isAuth");

const router = express.Router();

//!Register
router.post("/api/votesci/register", userCtrl.register);
// router.post("/api/presidents/login", userCtrl.login);
router.get("/api/votesci/getdata", userCtrl.profile);

module.exports = router;