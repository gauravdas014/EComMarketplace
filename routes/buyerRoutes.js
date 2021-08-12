const express = require("express");
const buyerController = require("../controllers/buyerController");
const router = express.Router();
const auth = require("../middleware/auth");

router.route("/list-of-sellers").get(buyerController.getAllSellers);
router
  .route("/seller-catalog/:seller_id")
  .get(buyerController.getCatalogOfSeller);
router
  .route("/:buyer_id/create-order/:seller_id")
  .post(buyerController.createOrder);

module.exports = router;
