const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const Cookies = require('cookies')

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/profile', (req, res) => {
    let cookies = new Cookies(req, res);
    if (!cookies.get("details")) {
        return res.send("You need to login first");
    }
    let details = JSON.parse(cookies.get("details"));

    details.visit++;
    cookies.set("details", JSON.stringify(details), { httpOnly: false });

    res.send(`Welcome back ${details.name} - ${details.visit}`);
})

app.get('/login', (req, res) => {
    let cookies = new Cookies(req, res);
    let details = {
        name: "Kartik",
        visit: 1
    }

    cookies.set("details", JSON.stringify(details), { httpOnly: true, maxAge: 5000 });

    res.send("You are logged in");
})

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});