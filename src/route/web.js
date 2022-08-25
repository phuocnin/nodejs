import express from "express";

let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', (req, res) => {
        res.render('index.ejs')

    })
    router.get('/aa', (req, res) => {
        res.send(`aa`)

    })
    return app.use('/', router)
}
export default initWebRoute;
// route: folder chua cac tien to