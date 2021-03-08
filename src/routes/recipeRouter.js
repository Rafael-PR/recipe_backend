const express = require('express');
const {getRecipes, getCategory } = require('../controllers/recipeController');
const recipesRouter = express.Router();

recipesRouter.get('/', getRecipes)
recipesRouter.get('/category/:name',getCategory)

module.exports = recipesRouter;