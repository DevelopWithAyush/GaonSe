const express = require('express');
const router = express.Router();
const User = require('../Models/User'); // Assuming userModel.js contains the provided Mongoose schema

// POST route to add user information
router.post('/login', async (req, res) => {
  try {
    const { mobilenumber, uid } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ mobilenumber });

    if (existingUser) {
      return res.status(201).json({ message: "login sucess" });
    }
    // Create a new user instance
    const newUser = new User({
      mobilenumber,
      uid,
    });

    // Save the new user to the database
    const savedUser = await newUser.save();

    res.status(201).json(savedUser); // Return the saved user
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
