const express = require('express');
const router = express.Router();
const Cart = require('../Models/Cart'); // Assuming the file path to your Cart model
const Product = require('../Models/Product'); // Assuming the file path to your Product model

// Route to add a product to the cart
router.post('/add', async (req, res) => {
  try {
    // Destructure product details from the request body
    const { userId, productId, quantity } = req.body;

    // Validate input
    if (!userId || !productId || !quantity || quantity <= 0) {
      return res.status(400).json({ success: false, message: 'Invalid input. Please provide valid userId, productId, and quantity' });
    }

    // Find the product by productId
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    // Find the cart for the user
    let cart = await Cart.findOne({ user: userId });

    // If the cart doesn't exist, create a new one
    if (!cart) {
      cart = new Cart({ user: userId, products: [] });
    }

    // Check if the product is already in the cart
    const existingProductIndex = cart.products.findIndex(item => item.product.equals(productId));

    if (existingProductIndex !== -1) {
      // If the product is already in the cart, update the quantity
      cart.products[existingProductIndex].quantity += quantity;
    } else {
      // If the product is not in the cart, add it
      cart.products.push({ product: productId, quantity });
    }

    // Save the updated cart to the database
    await cart.save();

    // Return the updated cart as a JSON response
    return res.status(200).json({ success: true, cart });
  } catch (error) {
    // Handle unexpected errors
    console.error(error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// Route to get all items in the cart for a particular user
router.get('/:userId', async (req, res) => {
    try {
      // Extract the userId from the request parameters
      const userId = req.params.userId;
  
      // Validate input
      if (!userId) {
        return res.status(400).json({ success: false, message: 'Invalid userId' });
      }
  
      // Find the cart for the user
      const cart = await Cart.findOne({ user: userId }).populate('products.product', 'productName mrp discountPrice stocks');
  
      // If the cart doesn't exist, return an empty array
      if (!cart) {
        return res.status(200).json({ success: true, cartItems: [] });
      }
  
      // Return the items in the cart as a JSON response
      return res.status(200).json({ success: true, cartItems: cart.products });
    } catch (error) {
      // Handle unexpected errors
      console.error(error);
      return res.status(500).json({ success: false, message: 'Internal server error' });
    }
  });
// Route to delete a product from the cart
router.delete('/cart/:userId/:productId', async (req, res) => {
    try {
      // Extract the userId and productId from the request parameters
      const userId = req.params.userId;
      const productId = req.params.productId;
  
      // Validate input
      if (!userId || !productId) {
        return res.status(400).json({ success: false, message: 'Invalid userId or productId' });
      }
  
      // Find the cart for the user
      const cart = await Cart.findOne({ user: userId });
  
      // If the cart doesn't exist, return an error
      if (!cart) {
        return res.status(404).json({ success: false, message: 'Cart not found for the user' });
      }
  
      // Find the index of the product in the cart
      const productIndex = cart.products.findIndex(item => item.product.equals(productId));
  
      // If the product is not in the cart, return an error
      if (productIndex === -1) {
        return res.status(404).json({ success: false, message: 'Product not found in the cart' });
      }
  
      // Remove the product from the cart
      cart.products.splice(productIndex, 1);
  
  
      // Save the updated cart to the database
      await cart.save();
  
      // Return the updated cart as a JSON response
      return res.status(200).json({ success: true, cart });
    } catch (error) {
      // Handle unexpected errors
      console.error(error);
      return res.status(500).json({ success: false, message: 'Internal server error' });
    }
  });
  
// Export the router for use in other files
module.exports = router;
