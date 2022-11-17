import express from "express";
import homeController from '../controller/homeController'
import path from 'path'
import multer from 'multer'
var approot = require('app-root-path');
let router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log(file.fieldname)
        cb(null, approot + '/src/public/image');
    },

    // By default, multer removes file extensions so let's add them back
    filename: function (req, file, cb) {
        console.log(file.fieldname)
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
const imageFilter = function (req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
    }
    cb(null, true);
};
let upload = multer({ storage: storage, fileFilter: imageFilter });
const initWebRoute = (app) => {
    router.get('/', homeController.getHomePage)
    router.get('/user/:id', homeController.getInfo)
    router.post("/createuser", homeController.createUser)
    router.post('/delete-user', homeController.deleteUser)
    router.get("/edit-user/:id", homeController.edit)
    router.post("/updeteUser/:id", homeController.updete)
    router.get("/upload-file", homeController.uploadfile)
    router.post("/up-file", upload.single('anh'), homeController.upfile)
    return app.use('/', router)
}
export default initWebRoute;
// route: folder chua cac tien to