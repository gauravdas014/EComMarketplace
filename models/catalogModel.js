const mongoose = require("mongoose");

const catalogSchema = new mongoose.Schema({
  seller: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    unique: true,
  },
  products: [Object],
});

module.exports = mongoose.model("Catalog", catalogSchema);
