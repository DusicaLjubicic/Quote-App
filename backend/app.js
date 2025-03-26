const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const quoteRoutes = require('./routes/quoteRoutes');
const config = require('./config');

const app = express();
const PORT = 5000;

mongoose.connect(config.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());

app.use('/api/quotes', quoteRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
