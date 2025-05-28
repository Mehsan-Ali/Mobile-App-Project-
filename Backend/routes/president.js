const express = require("express");
const userCtrl = require("../controller/president");
const isAuthenticated = require("../middlewares/isAuth");

const router = express.Router();

//!Register
router.post("/api/presidents/register", userCtrl.register);
// router.post("/api/presidents/login", userCtrl.login);
router.get("/api/presidents/getdata", userCtrl.profile);

module.exports = router;