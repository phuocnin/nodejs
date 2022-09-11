import express from "express";
import homeController from '../controller/homeController'

let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomePage)
    router.get('/:id', homeController.getInfo)
    router.post("/createuser", homeController.createUser)
    return app.use('/', router)
}
export default initWebRoute;
// route: folder chua cac tien to