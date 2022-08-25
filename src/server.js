import express from 'express';
import configviewEngine from './configs/viewEngine';

const app = express();
const port = 8080;

configviewEngine(app);
app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.listen(port, () => {
    console.log(`link: http://localhost:${port}`);
})