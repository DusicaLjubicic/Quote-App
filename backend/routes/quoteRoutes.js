const express = require('express');
const { getQuotes, addQuote, deleteQuote } = require('../controllers/quoteController');

const router = express.Router();

router.get('/', getQuotes);
router.post('/', addQuote);
router.delete('/:id', deleteQuote);

module.exports = router;
