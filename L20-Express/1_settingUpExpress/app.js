
const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send("Hello World");
})

app.get('/hello',(req,res)=>{
    res.send("Hiii! Welcome");
})

app.get('/greetings',(req,res)=>{
    res.send("Good Evening!");
})

app.listen(4444, function () {
    console.log("Express Server Started at Port Number ", 4444);
})
