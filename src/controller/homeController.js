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




    });

}
let getAa = (req, res) => {
    return res.send(`aa`)
}

module.exports = {
    a: getHomePage,
    b: getAa
}
