import express from "express"
import APIController from "../controller/APIController";

let router = express.Router();

const initAPIRouter = (app) => {
    router.get("/user", APIController.getAllUser);
    router.post("/createuser", APIController.createUser);
    router.get("/deleteuser/:id", APIController.deleteUser);
    router.post('/updeleuser/:id', APIController.updeleUser);
    return app.use('/api/', router)
}

export default initAPIRouter;