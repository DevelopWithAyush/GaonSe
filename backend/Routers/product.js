const express = require('express');
const router = express.Router();
const Product = require('../Models/Product'); // Assuming the file path to your Product model

// Route to get all products
router.get('/products', async (req, res) => {
  try {
    // Use the Product model to find all products in the database
    const products = await Product.find();

    // Return the array of products as a JSON response
    return res.status(200).json({ success: true, products,message:"done" });

  
  } catch (error) {
    // Handle unexpected errors and ret urn a 500 Internal Server Error response
    console.error(error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
});
// Define a route to get all categories
router.get('/category', async (req, res) => {
  try {
    const categories = await Product.find().distinct('category');
    const category = categories.map(category => ({ category }));
    res.json({success:"true",category});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
//Define a route to get a single product
router.get('/singleproduct/:productId', async (req, res) => {
  const productId = req.params.productId;

  try {
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Export the router for use in other files
module.exports = router;
