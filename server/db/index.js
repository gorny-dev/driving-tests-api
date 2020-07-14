const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    password: '',
    user: 'root',
    database: 'driving-test-api',
    host: 'localhost',
    port: '3306'
});

let questions = {};

questions.all = () => {

    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM questions', (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        });
    });

}

module.exports = questions;
