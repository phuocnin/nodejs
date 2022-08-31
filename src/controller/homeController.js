import { resolvePreset } from '@babel/core/lib/config/files/plugins';
import con from '../configs/connectDB'

let getHomePage = (req, res) => {

    con.connect(function (x) {
        con.query(
            "SELECT * FROM user Where firstName = 'phuoc'",
            function (err, result, fields) {
                console.log(result)
                return res.render('index.ejs', { datauser: JSON.stringify(result) })
            }
        )




    });

}
let getAa = (req, res) => {
    return res.send(`aa`)
}

module.exports = {
    a: getHomePage,
    b: getAa
}
