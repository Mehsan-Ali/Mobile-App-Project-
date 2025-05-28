const express = require("express");
const userCtrl = require("../controller/society");
const isAuthenticated = require("../middlewares/isAuth");

const router = express.Router();

//!Register
router.post("/api/society/register", userCtrl.register);
// router.post("/api/presidents/login", userCtrl.login);
// router.get("/api/presidents/profile", userCtrl.profile);

module.exports = router;