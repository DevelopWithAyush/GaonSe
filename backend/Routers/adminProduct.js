const express = require('express');
const router = express.Router();
const Product = require('../Models/Product'); // Assuming the file path to your Product model


// Route to add a new product
router.post('/products', async (req, res) => {
    try {
      // Destructure product details from the request body
      const { productName, mrp, discountPrice, productDescription, stocks, category ,imgUrls,featureImg} = req.body;
  
      // Check if all required fields are provided
      if (!productName || !mrp || !discountPrice || !productDescription || !stocks || !category ||!imgUrls ) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
      }
  
      // Create a new product using the Product model
      const newProduct = await Product.create({
        productName,
        mrp,
        discountPrice,
        productDescription,
        stocks,
        category,
        imgUrls,
      });
  
      // Return the newly created product as a JSON response
      return res.status(201).json({ success: true,message:"product added successfully", product: newProduct });
    } catch (error) {
      // Handle validation errors or unexpected errors
      if (error.name === 'ValidationError') {
        return res.status(400).json({ success: false, message: error.message });
      } else {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
      }
    }
  });

  // Route to update the information of a product
router.put('/products/:productId', async (req, res) => {
    try {
      // Extract the productId from the request parameters
      const productId = req.params.productId;
  
      // Destructure updated product details from the request body
      const { productName, mrp, discountPrice, productDescription, stocks, category,imgUrls,featureImg } = req.body;
  
      // Check if the productId is valid
      if (!productId || !productId.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(400).json({ success: false, message: 'Invalid productId format' });
      }
  
      // Check if at least one field is provided for update
      if (!productName && !mrp && !discountPrice && !productDescription && !stocks && !category && !imgUrls) {
        return res.status(400).json({ success: false, message: 'At least one field is required for update' });
      }
  
      // Find the product by productId and update its information
      const updatedProduct = await Product.findOneAndUpdate(
        { _id: productId },
        {
          $set: {
            productName,
            mrp,
            discountPrice,
            productDescription,
            stocks,
            category,
            imgUrls
          },
        },
        { new: true } // Return the updated document
      );
  
      // Check if the product was found and updated
      if (!updatedProduct) {
        return res.status(404).json({ success: false, message: 'Product not found' });
      }
  
      // Return the updated product as a JSON response
      return res.status(200).json({ success: true,message:"product updated successfully", product: updatedProduct });
    } catch (error) {
      // Handle validation errors or unexpected errors
      console.error(error);
      return res.status(500).json({ success: false, message: 'Internal server error' });
    }
  });
  // Route to delete a product
router.delete('/products/:productId', async (req, res) => {
    try {
      // Extract the productId from the request parameters
      const productId = req.params.productId;
  
      // Check if the productId is valid
      if (!productId || !productId.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(400).json({ success: false, message: 'Invalid productId format' });
      }
  
      // Find the product by productId and delete it
      const deletedProduct = await Product.findOneAndDelete({ _id: productId });
  
      // Check if the product was found and deleted
      if (!deletedProduct) {
        return res.status(404).json({ success: false, message: 'Product not found' });
      }
  
      // Return the deleted product as a JSON response
      return res.status(200).json({ success: true,message:"product deleted successfully", product: deletedProduct });
    } catch (error) {
      // Handle unexpected errors
      console.error(error);
      return res.status(500).json({ success: false, message: 'Internal server error' });
    }
  });
// the code are start form all category and all things



// Export the router for use in other files
module.exports = router;
