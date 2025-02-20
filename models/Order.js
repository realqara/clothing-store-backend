const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
    order_id: Number,
    user_id: Number,
    products: Array,
    total_price: Number,
    order_date: String,
  });
  module.exports = mongoose.model("Order", orderSchema);