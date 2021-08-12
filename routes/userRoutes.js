const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();
const auth = require("../middleware/auth");

router.route("/profile/:userId").get(auth.auth, userController.getOwnProfile);

module.exports = router;
