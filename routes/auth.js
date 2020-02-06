const express = require("express");
const router = express.Router();
const controller = require("../controllers/auth");

router.post("/login", controller.loginUser);
router.post("/register", controller.registerUser);

module.exports = router;
