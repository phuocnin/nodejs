import express from 'express';
import configviewEngine from './configs/viewEngine';
import initWebRoute from './route/web.js'
import connectDB from './configs/connectDB'
import initAPIRouter from './route/api';

require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

configviewEngine(app);
initWebRoute(app);
initAPIRouter(app);


app.listen(port, () => {
    console.log(`link: http://localhost:${port}`);
})