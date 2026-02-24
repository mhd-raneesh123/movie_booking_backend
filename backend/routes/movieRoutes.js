const express = require('express');
const router = express.Router();
const { getMovies, addMovie, updateMovie } = require('../controllers/movieController');

router.get('/', getMovies);
router.post('/', addMovie);
router.put('/:id', updateMovie); // <--- ADD THIS LINE

module.exports = router;