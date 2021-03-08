const client = require('../../db/client');

const getRecipes = (req, res) => {
    client.query('SELECT * FROM recipes')
    .then(data => res.json(data.rows))
    .catch( e => res.sendStatus(404));
}

const getCategory = (req, res) => {
    const { name } = req.params;
    const getCategory = {
        text: `
        SELECT *
        FROM recipes
        WHERE category=$1
        `,
        values : [name]
    };
    client.query(getCategory)
    .then(data => res.json(data.rows))
    .catch(e => res.sendStatus(404));
}

module.exports = {
    getRecipes,
    getCategory
}


