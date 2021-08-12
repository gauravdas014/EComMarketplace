const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderId: {
    type: String,
  },
  user: {
    type: mongoose.Types.ObjectId,
  },
  products: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Product",
    },
  ],
});

module.exports = mongoose.model("Order", orderSchema);
