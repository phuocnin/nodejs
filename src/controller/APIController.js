import con from '../configs/connectDB'
let getAllUser = (req, res) => {
    con.connect(function (x) {
        con.query(
            "SELECT * FROM user ",
            function (err, result, fields) {
                console.log(result)
                return res.status(200).json({
                    message: 'o',
                    data: result
                }
                )
            })

    })
}

let createUser = (req, res) => {
    con.connect(function (x) {
        let { firstName, lastName, email, address } = req.body;
        con.query(
            "INSERT INTO user (firstName, lastName, email, address) VALUES(?,?,?,?) ", [firstName, lastName, email, address],
            function (err, result, fields) {
                return res.status(200).json({
                    message: 'ok',
                    data: result
                })
            }
        )
    })
}
let deleteUser = (req, res) => {
    con.connect(function (x) {
        var id = req.params.id;
        con.query(
            "delete from user where id=?", [req.params.id]

        )
        return res.status(200).json({
            message: "dalete user: " + id,
        })
    })
}
let updeleUser = (req, res) => {
    con.connect(function (x) {
        let { firstName, lastName, email, address } = req.body;

        con.query(
            "UPDATE  user SET firstName=?, lastName=?, email=?, address=? WHERE id=?", [firstName, lastName, email, address, req.params.id],

        )
        return res.status(200).json({
            message: 'ok',
        })
    })
}
module.exports = {
    getAllUser, createUser, deleteUser, updeleUser,
}