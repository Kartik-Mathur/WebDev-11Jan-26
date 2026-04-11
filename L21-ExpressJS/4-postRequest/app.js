const express = require('express');
const path = require('path');
const app = express();

app.use('/',express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));

app.get('/greet/:name',(req,res)=>{
    const {name} = req.params;
    res.send(`Hello ${name}`)
})

// req.body
app.post('/profile',(req,res)=>{
    console.log(req.body);
    const {name, dsaquestions, age } = req.body;

    res.send(`SUCCESS: ${name} ${dsaquestions} ${age}`);
});


app.listen(4444, function(){
    console.log("http://localhost:4444/");
})