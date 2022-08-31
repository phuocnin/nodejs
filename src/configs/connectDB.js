var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "nodejs"
});


export default con;