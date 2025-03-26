import React, { useState, useEffect } from 'react';
import QuoteForm from './components/QuoteForm';
import QuoteList from './components/QuoteList';
import { fetchQuotes, addQuote, removeQuote } from './api';

const App = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetchQuotes().then(setQuotes);
  }, []);

  const handleAddQuote = (quote) => {
    addQuote(quote).then(newQuote => setQuotes([...quotes, newQuote]));
  };

  const handleRemoveQuote = (id) => {
    removeQuote(id).then(() => setQuotes(quotes.filter(quote => quote._id !== id)));
  };

  return (
    <div>
      <h1>Zabeležite omiljene citate</h1>
      <QuoteForm onAddQuote={handleAddQuote} />
      <QuoteList quotes={quotes} onRemoveQuote={handleRemoveQuote} />
    </div>
  );
};

export default App;
