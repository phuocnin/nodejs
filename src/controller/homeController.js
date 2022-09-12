import { resolvePreset } from '@babel/core/lib/config/files/plugins';
import con from '../configs/connectDB'

let getHomePage = (req, res) => {

    con.connect(function (x) {
        con.query(
            "SELECT * FROM user ",
            function (err, result, fields) {
                console.log(result)
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
                console.log(result)
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
module.exports = {
    getHomePage, getInfo, createUser, deleteUser

}
