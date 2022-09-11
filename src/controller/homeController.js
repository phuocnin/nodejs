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


module.exports = {
    getHomePage, getInfo

}
