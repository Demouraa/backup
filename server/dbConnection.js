const mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '140431Mg',
    database: 'recode'
});


module.exports = connection;