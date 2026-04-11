const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Hello World");
})

// /greetings?name=kartik
app.get('/greetings',(req,res)=>{
    const {name} = req.query;
    res.send(`Hello ${name}`);
})

// /greet/kartik
app.get('/greet/:name',(req,res)=>{
    const {name} = req.params;
    res.send(`Hello ${name}`);
})

app.listen(4444, function(){
    console.log("http://localhost:4444/");
})