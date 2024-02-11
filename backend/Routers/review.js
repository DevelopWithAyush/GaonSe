const express = require('express');
const router = express.Router();
const Review  = require("../Models/Review");
const fetchuser = require('../Middleware/fetchuser')

// Route to get a user's existing review for a product
router.get('/user-review/:productId',fetchuser, async (req, res) => {
    try {
      const loggedInUserId = req.user.id;
      console.log(loggedInUserId)
      const productId = req.params.productId;
      // const {productId} = req.body
  
      const existingReview = await Review.findOne({ product: productId, reviewer: loggedInUserId });
      res.json(existingReview);
    } catch (error) {
    }
  });

  
// Route to update a user's existing review for a product
router.put('/update-review/:productId',fetchuser, async (req, res) => {
    try {
      const loggedInUserId = req.user.id;
      const productId = req.params.productId;
      const { rating, comments } = req.body;

      // Find and update the existing review
      const updatedReview = await Review.findOneAndUpdate(
        { product: productId, reviewer: loggedInUserId },
        { rating, comments },
        { new: true }
      );
  
      if (!updatedReview) {
        return res.status(404).json({ error: 'Review not found for the user and product' });
      }
  
      res.json(updatedReview);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
// POST route to add a new review
router.post('/add-review',fetchuser, async (req, res) => {
    try {
      // Assuming the request body contains the necessary information for a review
      const { product, rating, comments } = req.body;
  
      // Assuming you have user authentication middleware that sets req.user
  
      // Check if the user has already reviewed the product
      const existingReview = await Review.findOne({ product, reviewer:req.user.id});
  
      if (existingReview) {
        return res.status(400).json({ error: 'User has already reviewed this product' });
      }
  
      // Create a new review instance
      const newReview = new Review({
        product,
        reviewer:req.user.id,
        rating,
        comments,
      });
  
      // Save the review to the database
      const savedReview = await newReview.save();
  
      // You may choose to send the saved review as a response
      res.json(savedReview);
    } catch (error) {
      // Handle errors, e.g., validation errors or database errors
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
module.exports = router;