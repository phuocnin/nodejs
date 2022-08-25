import express from 'express';
const path = require('path');

const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
})

app.listen(port, () => {
    console.log(`link: http://localhost:${port}`);
})