const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    product_id: Number,
    name: String,
    price: Number,
    category: String,
    stock: Number,
  });
  module.exports = mongoose.model("Product", productSchema);