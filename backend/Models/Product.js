const mongoose = require('mongoose');

// Define the Product Schema
const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  mrp: {
    type: Number,
    required: true,
  },
  discountPrice: {
    type: Number,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  stocks: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

// Create a Product model based on the schema
const Product = mongoose.model('Product', productSchema);

// Export the Product model for use in other files
module.exports = Product;
