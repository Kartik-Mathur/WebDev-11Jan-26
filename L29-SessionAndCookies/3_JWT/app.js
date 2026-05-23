const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const jwt = require('jsonwebtoken');
const Cookies = require('cookies');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const JWT_SECRET = 'dnadn kkbdksbdfbsb fjbs - 122334 _#@#%$#@ fajvev vhe';

app.get('/login', (req, res) => {
    let token = jwt.sign({ name: "Kartik", visit: 1 }, JWT_SECRET);
    let cookies = new Cookies(req, res)
    cookies.set('token', token);

    res.send("Login Success");
})

app.get('/profile', (req, res) => {
    let cookies = new Cookies(req, res)
    let token = cookies.get('token');
    try {
        let decoded = jwt.verify(token, JWT_SECRET);
        res.send(`Welcome to profile ${decoded.name} - ${decoded.visit}`)

    } catch (error) {
        res.send("Visit login first");
    }
})

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});