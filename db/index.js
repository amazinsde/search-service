const mysql = require('mysql');


const con = mysql.createConnection({
    user: 'root',
})


module.exports = con;