const express = require('express');
const router = express.Router();
const ctrlAnimals = require('../controllers/animals.js');

/* Animals pages */
router.get('/animals', ctrlAnimals.index);
router.get('/animal', ctrlAnimals.show);

module.exports = router;
