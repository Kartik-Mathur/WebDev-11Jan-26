const express = require('express');
const path = require('path');
const app = express();

app.get('/',(req,res)=>{
    res.send("Hello World");
})

// To send HTML page we use sendFile function
app.get('/page',(req,res)=>{
    // console.log(__dirname);
    res.sendFile(path.join(__dirname,'index.html'));
})

app.listen(4444, function(){
    console.log("http://localhost:4444/");
})