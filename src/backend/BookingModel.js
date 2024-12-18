const mongoose = require('mongoose');

// Define the booking schema
const bookingSchema = new mongoose.Schema({
  username: { type: String, required: true },
  cabType: { type: String, required: true },
  src: { type: String, required: true },
  dest: { type: String, required: true },
  dateTime: { type: Date, required: true },
});

// Create the model with a specific collection name ("history") in "cabBookingDb"
const Booking = mongoose.model('Booking', bookingSchema, 'history');

module.exports = Booking;
