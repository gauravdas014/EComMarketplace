const express = require("express");
const sellerController = require("../controllers/sellerController");
const router = express.Router();
const auth = require("../middleware/auth");

router.route("/create-catalog/:seller_id").post(sellerController.createCatalog);
router.route("/orders/:seller_id").get(sellerController.getAllOrders);

module.exports = router;
