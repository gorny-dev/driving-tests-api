const pool = require('../db')

let questions = {};

/* All questions */
questions.all = () => {

    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM questions', (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        });
    });

}

/* Only one question */
questions.findOne = (id) => {
    return new Promise((resolve, reject) => {
        /* [id] must be given to prevent SQL Injection attacks */
        pool.query('SELECT * FROM questions WHERE id = ?', [id], (err, results) => {
            if (err) return reject(err);
            return resolve(results[0]);
        });
    });
}



module.exports = questions;
