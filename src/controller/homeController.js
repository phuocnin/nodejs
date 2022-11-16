import { resolvePreset } from '@babel/core/lib/config/files/plugins';
import con from '../configs/connectDB'
import multer from 'multer'


let getHomePage = (req, res) => {

    con.connect(function (x) {
        con.query(
            //wsd
            "SELECT * FROM user ",
            function (err, result, fields) {
                console.log("b")
                return res.render('index.ejs', { datauser: result })
            }
        )
    })

}

let getInfo = (req, res) => {

    con.connect(function (x) {
        con.query(

            "SELECT * FROM user where id = ?", [req.params.id],
            function (err, result, fields) {
                console.log("c")
                return res.render('index.ejs', { datauser: result })
            }
        )
    })

}

let createUser = (req, res) => {

    con.connect(function (x) {
        let { firstName, lastName, email, address } = req.body;
        con.query(

            "INSERT INTO user (firstName, lastName, email, address) VALUES (?, ?, ?, ?)", [firstName, lastName, email, address],
            function (err, result, fields) {
                return res.redirect("/")
            }
        )

    })

}
let deleteUser = (req, res) => {

    con.connect(function (x) {
        con.query(
            "delete from user where id = ?", [req.body.userId],
            function (err, result, fields) {
                return res.redirect("/")
            }
        )

    })

}

let edit = (req, res) => {
    con.connect(function (x) {
        console.log(req.params.id)
        con.query(
            "SELECT * FROM user where id = ?", [req.params.id],
            function (err, result, fields) {
                return res.render('updete.ejs', { datauser: result })
            }
        )
    })
}

let updete = (req, res) => {

    con.connect(function (x) {
        let { firstName, lastName, email, address } = req.body;

        con.query(

            "UPDATE  user SET firstName=?, lastName=?, email=?, address=? WHERE id=?", [firstName, lastName, email, address, req.params.id],

            function (err, result, fields) {

                return res.redirect("/")
            }
        )

    })

}


let uploadfile = (req, res) => {

    con.connect(function (x) {

        return res.render('upfile.ejs')


    })

}

const upload = multer().single('anh');

let upfile = (req, res) => {

    con.connect(function (x) {


        upload(req, res, function (err) {
            // req.file contains information of uploaded file
            // req.body contains information of text fields, if there were any

            if (req.fileValidationError) {
                return res.send(req.fileValidationError);
            }
            else if (!req.file) {
                return res.send('Please select an image to upload');
            }
            else if (err instanceof multer.MulterError) {
                return res.send(err);
            }
            else if (err) {
                return res.send(err);
            }

            // Display uploaded image for user validation
            res.send(`You have uploaded this image: <hr/><img src="/image/${req.file.fieldname}" width="500"><hr /><a href="./">Upload another image</a>`);
        });


    })

}

module.exports = {
    getHomePage, getInfo, createUser, deleteUser, edit, updete, upfile, uploadfile

}
