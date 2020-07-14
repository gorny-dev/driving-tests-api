const pool = require('../db')

let questions = {};

questions.all = () => {

    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM questions', (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        });
    });

}

questions.findOne = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM questions WHERE id = ?', [id], (err, results) => {
            if (err) return reject(err);
            return resolve(results[0]);
        });
    });
}



module.exports = questions;
