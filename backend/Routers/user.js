const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../Models/User");
const JWT_SECRET = "ayushdubey"

// Route for user registration
router.post("/register", async (req, res) => {
  try {
    // Destructuring user input from request body
    const { name, email, phone, password } = req.body;

    // Validation: Check if all required fields are provided
    if (!name || !email || !phone || !password) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    // Check if the email is already in use
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ success: false, message: "This email or phone number is already in use" });
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance
    const newUser = new User({
      name,
      email,
      phone,
      password: hashedPassword,
    });

    // Save the new user to the database
    const savedUser = await newUser.save();

    // Generate a JWT token for authentication
    const tokenData = {
      user: {
        id: savedUser._id,
      },
    };
    const authToken = jwt.sign(tokenData, JWT_SECRET);

    // Send a successful response with the generated token
    return res.status(200).json({ success: true, message: "You are successfully registered", authToken });
  } catch (error) {
    // Handle unexpected errors and return a 500 Internal Server Error response
    console.error(error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// login the user 
router.post("/login", async (req, res) => {
    const { phone, password } = req.body;
    let success = false
  
    try {
      // Validate required fields
      if (!phone || !password) {
        success = false
        return res.status(400).json({success, message: 'All fields are required' });
      }
  
      // Check if a user with the provided email exists
      const existingUser = await User.findOne({ phone });
      success = false
      if (!existingUser) {
        return res.status(401).json({ success,message:'Invalid email or password' });
      }
  
      // Compare the provided password with the stored hashed password
      const comparePassword = await bcrypt.compare(password, existingUser.password);
      if (!comparePassword) {
        success = false
        return res.status(401).json({ success ,message: 'Invalid email or password' });
      }
  
      // Create a JWT token for authentication
      const tokenData = {
        user: {
          id: existingUser._id,
        },
      };
      const authToken = jwt.sign(tokenData, JWT_SECRET); // Use your JWT_SECRET from environment variables
      success = true
      // Send the response with the authentication token and user information
      res.json({
        success,
        authToken,
        user: {
          id: existingUser._id,
          email: existingUser.email,
        },
      });
    } catch (error) {
      console.error(error); // Log the error for debugging
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// Export the router for use in other files
module.exports = router;
