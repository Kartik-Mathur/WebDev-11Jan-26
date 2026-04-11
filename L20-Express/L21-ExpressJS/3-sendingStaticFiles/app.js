const express = require('express');
const path = require('path');
const app = express();

// By default this will work on '/' path
// app.use(express.static(path.join(__dirname, 'public')));
app.use('/',express.static(path.join(__dirname, 'public')));
// public folder ke andar jo index.html hai wahi load hogi by default


app.listen(4444, function(){
    console.log("http://localhost:4444/");
})