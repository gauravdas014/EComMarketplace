const Catalog = require("../models/catalogModel");
const Order = require("../models/orderModel");

exports.createCatalog = async (req, res) => {
  try {
    const sellerId = req.params.seller_id;
    const catalog = await Catalog.findOne({ seller: req.params.seller_id });
    if (catalog) {
      return res.status(400).json({
        status: "fail",
        message: "Catalog already exists for the seller",
      });
    }
    const newCatalog = await Catalog.create({
      seller: sellerId,
      products: req.body.products,
    });
    return res.status(201).json({
      status: "success",
      catalog: newCatalog,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({ seller: req.params.seller_id });
    if (!orders) {
      return res.status(400).json({
        status: "fail",
        message: "No orders found for the seller",
      });
    }
    return res.status(200).json({
      status: "success",
      orders,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
