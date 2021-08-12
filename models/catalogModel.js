const mongoose = require("mongoose");

const catalogSchema = new mongoose.Schema({
  seller: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    unique: true,
  },
  products: [
    {
      name: {
        type: String,
      },
      price: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model("Catalog", catalogSchema);
