const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Welcome to recipe Blog backend !')
})

const PORT = process.env.PORT || 3030;

app.listen(PORT,()=>(`Server is running on Port ${PORT}!`));