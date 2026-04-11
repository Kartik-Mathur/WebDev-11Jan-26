const express = require('express');
const path = require('path');
const app = express();

app.get('/',(req,res)=>{
    res.send("Hello World");
})

// IMPORTANT:
// linking css,js or any other file in HTML is a separate request to the
// server
// To send HTML page we use sendFile function
app.get('/page',(req,res)=>{
    // console.log(__dirname);
    res.sendFile(path.join(__dirname,'index.html'));
})

app.get('/style.css',(req,res)=>{
    res.sendFile(path.join(__dirname,'style.css'));
})

app.get('/script.js',(req,res)=>{
    res.sendFile(path.join(__dirname,'script.js'));
})

app.listen(4444, function(){
    console.log("http://localhost:4444/");
})