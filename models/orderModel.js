const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  buyer: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  seller: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  products: [Object],
});

module.exports = mongoose.model("Order", orderSchema);
