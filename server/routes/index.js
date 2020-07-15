const express = require('express');

const questions = require('../controllers/questions')
const pool = require('../db')
const router = express.Router();

/* To return all questions in the database */
router.get('/', async (req, res) => {

    try {
        let results = await questions.all();
        res.json(results);
    } catch (e) {
        res.sendStatus(500);
        console.log(e);
    }

});

/* To return only one question in the database */
router.get('/:id', async (req, res) => {

    try {
        /* Param to specify the question */
        let id = undefined;

        /* If id is 'rand' it means the returned question is going to be random */
        if (req.params.id === 'rand') {
            id = Math.floor(Math.random() * (3268)) + 1;
        }
        else id = req.params.id;

        let results = await questions.findOne(id);
        res.json(results);
    } catch (e) {
        res.sendStatus(500);
        console.log(e);
    }

});


module.exports = router;
