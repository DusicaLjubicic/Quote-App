import React from 'react';

const QuoteList = ({ quotes, onRemoveQuote }) => (
  <ul>
    {quotes.map((quote) => (
      <li key={quote._id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span>
          "{quote.text}" - {quote.author}
        </span>
        <button onClick={() => onRemoveQuote(quote._id)} style={{ marginLeft: '10px' }}>Ukloni</button>
      </li>
    ))}
  </ul>
);

export default QuoteList;
