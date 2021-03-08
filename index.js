require('dotenv').config();
const express = require('express');
const cors = require('cors');
const recipeRouter = require('./src/routes/recipeRouter');

const app = express();

// -----Aplication level middlewares----
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + '/public'));


// ---- routers----
app.use('/api/recipes', recipeRouter);
app.get('/',(req,res)=>{
    res.send('Welcome to recipe Blog backend !')
})

// -----server-----
const PORT = process.env.PORT || 3030;
app.listen(PORT,()=>(`Server is running on Port ${PORT}!`));