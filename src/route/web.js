import express from "express";
import homeController from '../controller/homeController'
import Aa from '../controller/Aa'
let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomePage)
    router.get('/aa', Aa.getAa)
    return app.use('/', router)
}
export default initWebRoute;
// route: folder chua cac tien to