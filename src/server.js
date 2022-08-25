import express from 'express';
import configviewEngine from './configs/viewEngine';
import initWebRoute from './route/web.js'

require('dotenv').config();

const app = express();
const port = process.env.PORT;


configviewEngine(app);
initWebRoute(app);
app.get('/bb', (req, res) => {
    res.render('index.ejs')
})

app.listen(port, () => {
    console.log(`link: http://localhost:${port}`);
})