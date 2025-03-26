if (!process.env.MONGO_DB_URL) {
    throw new Error('MONGO_DB_URL environment variable is required');
  }
  
  module.exports = {
    MONGO_URI: process.env.MONGO_DB_URL,
  };
  