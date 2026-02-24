const express = require('express');
const router = express.Router();
// 1. Correctly import existing functions from your controller
const { signup, login } = require('../controllers/userController');
// 2. Import your middleware
const { authenticate, isAdmin } = require('../middleware/authMiddleware');

// Public Routes
// We use 'signup' for both /signup and /register to avoid the 'undefined' error
router.post('/signup', signup);
router.post('/register', signup); 
router.post('/login', login);

// Protected Routes
router.get('/profile', authenticate, (req, res) => {
    res.json({ message: `Welcome User ${req.user.id}`, user: req.user });
});

// Admin Route
router.get('/admin-dashboard', authenticate, isAdmin, (req, res) => {
    res.json({ message: 'Welcome Admin' });
});

module.exports = router;