import React, { useState } from 'react';

const QuoteForm = ({ onAddQuote }) => {
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') {
      setError('Polje "Citat" je obavezno.');
      return;
    }
    const authorValue = author.trim() === '' ? 'Anoniman' : author;
    setError('');
    onAddQuote({ text, author: authorValue });
    setText('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Dodaj novi</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <label>Citat</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <label>Autor</label>
        <input
          type="text"
          value={author}
          placeholder="Anoniman"
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <button type="submit">Dodaj citat</button>
    </form>
  );
};

export default QuoteForm;
