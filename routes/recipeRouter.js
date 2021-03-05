const express = require('express');

const { Pool } = require('pg');
const pool = new Pool();

const recipesRouter = express.Router();

recipesRouter.get('/', (req, res) =>{
    pool.query('SELECT * FROM recipes')
    .then(data => res.json(data.rows))
    .catch( e => res.sendStatus(404));
})

recipesRouter.get('/category/:name', (req, res) =>{
    const { name } = req.params;
    const getCategory = {
        text: `
        SELECT *
        FROM recipes
        WHERE category=$1
        `,
        values : [name]
    };
    pool.query(getCategory)
    .then(data => res.json(data.rows))
    .catch(e => res.sendStatus(404));
})

module.exports = recipesRouter;