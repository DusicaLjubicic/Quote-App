const API_URL = 'http://localhost:5000/api/quotes';

export const fetchQuotes = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};

export const addQuote = async (quote) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(quote),
  });
  const data = await response.json();
  return data;
};

export const removeQuote = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
};
