const express = require("express");
const authController = require("../controllers/authController");
const router = express.Router();
const auth = require("../middleware/auth");

router.route("/register").post(authController.signup);
router.route("/login").post(authController.signin);

module.exports = router;
