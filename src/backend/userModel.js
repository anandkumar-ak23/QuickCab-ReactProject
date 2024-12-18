const mongoose = require('mongoose');

// Define the user schema with the required fields
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    match: [/.+\@.+\..+/, 'Please enter a valid email']
  },
  mobile: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 10
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  }
});

// Create and export the User model based on the schema with the 'users' collection
const User = mongoose.model('User', userSchema, 'users'); // 'users' is the collection name

module.exports = User;
