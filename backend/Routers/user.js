const express = require('express');
const router = express.Router();
const User = require('../Models/User'); // Assuming userModel.js contains the provided Mongoose schema
const JWT_SECRET = 'AYUSHDUBEYKYAHO';
const jwt = require('jsonwebtoken');
const fetchuser = require('../Middleware/fetchuser');

// POST route to add user information
router.post('/login', async (req, res) => {
  try {
    const { ph } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ ph });

    if (existingUser) {
      const data = {
        user:{
          id:existingUser.id
        }
      }
      const authToken = jwt.sign(data, JWT_SECRET);
      console.log(authToken)
  
      return res.status(200).json({success:"true",authToken});
    }
    // Create a new user instance
    const newUser = await User.create({
      ph,
    });

    const data = {
      user:{
        id:newUser.id
      }
    }
    const authToken = jwt.sign(data, JWT_SECRET);

    res.status(201).json({success:"true",authToken}); // Return the saved user
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET request to fetch user details
router.get('/users',fetchuser, async (req, res) => {

  try {
      const user = await User.findById(req.user.id);
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
  } catch (error) {
      console.error('Error fetching user:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
});

// PUT request to update user information
router.put('/users',fetchuser, async (req, res) => {
  const userId = req.user.id
  const { fullname, ph, pincode, flatno, area, landmark, city, state } = req.body; // Destructuring req.body for each key

  try {
      // Construct the update object
      const updateData = {
          fullname,
          ph,
          pincode,
          flatno,
          area,
          landmark,
          city,
          state
      };

      // Update the user by ID
      const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true });

      if (!updatedUser) {
          return res.status(404).json({ message: "User not found" });
      }

      res.json(updatedUser);
  } catch (error) {
      console.error("Error updating user:", error);
      res.status(500).json({ message: "Internal Server Error" });
  }
});


module.exports = router;
