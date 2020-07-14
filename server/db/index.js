const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    password: '',
    user: 'root',
    database: 'driving-test-api',
    host: 'localhost',
    port: '3306'
});



module.exports = pool;
