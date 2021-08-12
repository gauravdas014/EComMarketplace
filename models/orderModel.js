const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderId: {
    type: String,
  },
  buyer: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  seller: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  products: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Product",
    },
  ],
});

module.exports = mongoose.model("Order", orderSchema);
