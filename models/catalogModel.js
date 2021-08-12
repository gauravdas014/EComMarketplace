const mongoose = require("mongoose");

const catalogSchema = new mongoose.Schema({
  seller: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    unique: true,
  },
  products: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Product",
    },
  ],
});

module.exports = mongoose.model("Catalog", catalogSchema);
