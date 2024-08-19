const express = require('express');
const cors = require('cors'); // Import CORS
const app = express();
const port = process.env.PORT || 4000;

app.use(cors()); // Enable CORS for all routes

app.get('/', (req, res) => {
  res.send('Hello, how are you?');
});

app.get('/greet', (req, res) => {
  res.send('I am fine from the backend.');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
