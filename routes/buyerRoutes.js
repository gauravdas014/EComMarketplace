const express = require("express");
const buyerController = require("../controllers/buyerController");
const router = express.Router();
const auth = require("../middleware/auth");

router.route("/list-of-sellers").get(auth.auth, buyerController.getAllSellers);
router
  .route("/seller-catalog/:seller_id")
  .get(auth.auth, buyerController.getCatalogOfSeller);
router
  .route("/:buyer_id/create-order/:seller_id")
  .post(auth.auth, buyerController.createOrder);

module.exports = router;
