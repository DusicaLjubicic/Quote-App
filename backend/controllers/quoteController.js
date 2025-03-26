const Quote = require('../models/quoteModel');

exports.getQuotes = async (req, res) => {
  const quotes = await Quote.find();
  res.json(quotes);
};

exports.addQuote = async (req, res) => {
  const { text, author } = req.body;
  const newQuote = new Quote({ text, author });
  await newQuote.save();
  res.status(201).json(newQuote);
};

exports.deleteQuote = async (req, res) => {
  const { id } = req.params;
  await Quote.findByIdAndDelete(id);
  res.status(204).send();
};
