const mongoose = require("mongoose");

var productSchema = new mongoose.Schema({
  userId: {
    type: String
  },
  productName: {
    type: String,
    required: true
  },
  productId: {
    type: String,
    required: true
  },
  price:{
    type: Number,
    required: true
  },
  brand: {
    type: String,
  },
  color: {
    type: String,
  },
  quantity: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Product", productSchema);
