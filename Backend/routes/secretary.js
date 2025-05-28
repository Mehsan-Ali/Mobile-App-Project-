const express = require("express");
const userCtrl = require("../controller/secretary");
const isAuthenticated = require("../middlewares/isAuth");

const router = express.Router();

//!Register
router.post("/api/secretary/register", userCtrl.register);
// router.post("/api/presidents/login", userCtrl.login);
// router.get("/api/presidents/profile", userCtrl.profile);

module.exports = router;