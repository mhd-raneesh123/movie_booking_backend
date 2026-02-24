const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking'); // Ensure you created the Booking model!

// POST route to save booking
router.post('/save', async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    const savedBooking = await newBooking.save();
    res.status(201).json(savedBooking);
  } catch (err) {
    console.error("Save Error:", err);
    res.status(400).json({ message: err.message });
  }
});

// GET route for user history
router.get('/user/:userId', async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.params.userId });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;