// backend/index.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = 5000;

// Load environment variables from .env file
require('dotenv').config();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('MongoDB connection error:', error));

// Routes
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
