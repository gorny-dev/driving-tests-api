const express = require('express');

const questions = require('../controllers/questions')
const pool = require('../db')
const router = express.Router();

router.get('/', async (req, res) => {

    try {
        let results = await questions.all();
        res.json(results);
    } catch (e) {
        res.sendStatus(500);
        console.log(e);
    }

});

router.get('/:id', async (req, res) => {

    try {
        let id = undefined;
        if (req.params.id === 'rand') id = Math.floor(Math.random() * (3000)) + 1;
        else id = req.params.id;
        let results = await questions.findOne(id);
        res.json(results);
    } catch (e) {
        res.sendStatus(500);
        console.log(e);
    }

});


module.exports = router;
