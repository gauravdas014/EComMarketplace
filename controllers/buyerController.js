const User = require("../models/userModel");
const Catalog = require("../models/catalogModel");

exports.getAllSellers = async (req, res) => {
  try {
    const sellers = await User.find({ type: "seller" }).select(
      "_id name email phone"
    );
    return res.status(200).json({
      status: "success",
      sellers,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getCatalogOfSeller = async (req, res) => {
  try {
    const catalog = await Catalog.findOne({ seller: req.params.seller_id });
    return res.status(200).json({
      status: "success",
      catalog,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createOrder = async (req, res) => {
  try {
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
