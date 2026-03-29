
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.get('/hello', (req, res) => {
    res.send("Hiii! Welcome");
})

// localhost:4444/greetings?name=Kartik&last=mathur
app.get('/greetings', (req, res) => {
    // console.log(req.query);

    const { name } = req.query;
    res.send(`Good Evening! ${name}`);
})

// localhost:4444/greet/Kartik/mathur
app.get('/greet/:name/:lastname', (req, res) => {
    const { name, lastname } = req.params;
    res.send(`Good Day! ${name} ${lastname}`);
})

app.listen(4444, function () {
    console.log("Express Server Started at Port Number ", 4444);
})
