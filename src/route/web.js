import express from "express";
import homeController from '../controller/homeController'

let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.a)
    router.get('/b', homeController.b)
    return app.use('/', router)
}
export default initWebRoute;
// route: folder chua cac tien to