const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Import the User model and Booking model
const User = require('./userModel');
const Booking = require('./BookingModel');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("Error connecting to MongoDB:", err));

// Sample route
app.get('/', (req, res) => {
  res.send('Welcome to the Express MongoDB API \n Database Connected Successfully...');
});

// Register route to handle POST request from the frontend
app.post('/register', async (req, res) => {
  const { name, email, mobile, username, password } = req.body;

  try {
    const newUser = new User({
      name,
      email,
      mobile,
      username,
      password
    });
    await newUser.save();
    res.status(200).json({ success: true, message: 'Registration successful!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error registering user' });
  }
});

// Login route to handle POST request from the frontend
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username, password });

    if (user) {
      res.status(200).json({ success: true, message: 'Login successful!' });
    } else {
      res.status(401).json({ success: false, message: 'Invalid username or password' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error during login' });
  }
});


// Get user details by username (using localStorage's username)
app.get('/user/:username', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user); // Send user data as response
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Update user details by username
app.put('/user/:username', (req, res) => {
  const { username } = req.params;
  const { name, email, mobile, password } = req.body;

  // Assuming you are using some database like MongoDB
  User.findOneAndUpdate({ username }, { name, email, mobile, password }, { new: true })
    .then(updatedUser => {
      res.status(200).json(updatedUser);
    })
    .catch(err => {
      res.status(500).json({ message: "Error updating profile", error: err });
    });
});



// Route to handle booking ride requests
app.post('/book-ride', async (req, res) => {
  const { username, cabType, src, dest, dateTime } = req.body;

  try {
    const newBooking = new Booking({
      username,
      cabType,
      src,
      dest,
      dateTime,
    });

    await newBooking.save(); // Save the booking into the database
    res.status(200).json({ success: true, message: 'Booking successful!' });
  } catch (error) {
    console.error('Error booking ride:', error);
    res.status(500).json({ success: false, message: 'Error booking ride' });
  }
});


const PORT = process.env.PORT || 5000; // Change to another port, e.g., 5001
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
