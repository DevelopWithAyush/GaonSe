const express = require('express');
const router = express.Router();
const Cart = require('../Models/Cart'); // Assuming the file path to your Cart model
const Product = require('../Models/Product'); // Assuming the file path to your Product model
const fetchuser = require('../Middleware/fetchuser');

// Route to add a product to the cart
router.post('/add', fetchuser, async (req, res) => {
  try {
    // Destructure product details from the request body
    const { productId, quantity } = req.body;
    const userId = req.user.id

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
router.get('/', fetchuser, async (req, res) => {
  try {
    // Extract the userId from the request parameters
    const userId = req.user.id;

    // Validate input
    if (!userId) {
      return res.status(400).json({ success: false, message: 'Invalid userId' });
    }

    // Find the cart for the user
    const cart = await Cart.findOne({ user: userId }).populate('products.product', 'productName mrp discountPrice stocks imgUrls');

    // If the cart doesn't exist, return an empty array
    if (!cart) {
      return res.status(200).json({ success: true, cartItems: [] });
    }

    // Return the items in the cart as a JSON response
    return res.status(200).json({ success: true, cart });
  } catch (error) {
    // Handle unexpected errors
    console.error(error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
});
// Route to delete a product from the cart
router.delete('/cart/:productId', fetchuser, async (req, res) => {
  try {
    // Extract the userId and productId from the request parameters
    const userId = req.user.id;
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


// PUT route to update the quantity of a product in the cart
router.put('/updatecart',fetchuser, async (req, res) => {
  try {
    const { quantity,productId } = req.body;
    const user = req.user.id

    // Validate that quantity is a positive integer
    if (!Number.isInteger(quantity) || quantity <= 0) {
      return res.status(400).json({ error: 'Quantity must be a positive integer' });
    }

    // Update the quantity of the product in the cart
    const updatedCart = await Cart.findOneAndUpdate(
      { user, "products.product" : productId },
      { $set: { 'products.quantity': quantity } },
      { new: true }
    );

    // Check if the cart or product exists
    if (!updatedCart) {
      return res.status(404).json({ error: 'Cart or product not found' });
    }

    res.json(updatedCart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});


// Export the router for use in other files
module.exports = router;
