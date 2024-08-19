const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello, how are you?');
});

app.get('/greet', (req, res) => {
    res.send('I am fine from the backend.');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
