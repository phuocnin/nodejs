import express from 'express';
import configviewEngine from './configs/viewEngine';
require('dotenv').config();

const app = express();
const port = process.env.PORT;


configviewEngine(app);
app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.listen(port, () => {
    console.log(`link: http://localhost:${port}`);
})