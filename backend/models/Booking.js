const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  // Required to link the booking to the specific logged-in user
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  movieTitle: { type: String, required: true },
  theater: String,
  date: String,
  time: String,
  seats: [Number],
  totalPrice: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', bookingSchema);