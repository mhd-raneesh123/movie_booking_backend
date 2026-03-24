const express = require('express');
const router = express.Router();
const { getMovies, addMovie, updateMovie, deleteMovie } = require('../controllers/movieController');

router.get('/', getMovies);
router.post('/', addMovie);
router.put('/:id', updateMovie);
router.delete('/:id', deleteMovie);

module.exports = router;