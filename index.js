// ----- set env vatiable---- 
require('dotenv').config();

// -----express----
const express = require('express');
const app = express();

// -----Postgres connection-----
const { Pool } = require('pg');
const pool = new Pool();

// -----cors----
const cors = require('cors');
app.use(cors());

// ----Bodyparser-----
app.use(express.json());

// ----- import router-----
const recipeRouter = require('./routes/recipeRouter');

// -----static assest-----
app.use(express.static(__dirname + '/public'));

// -----routes-----
app.use('/api/recipes', recipeRouter);
app.get('/',(req,res)=>{
    res.send('Welcome to recipe Blog backend !')
})

// -----server-----
const PORT = process.env.PORT || 3030;
app.listen(PORT,()=>(`Server is running on Port ${PORT}!`));