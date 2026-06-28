const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const session = require('express-session')
app.use(session({
  secret: 'akdsbb bdbasbaajhvejbfvhesjvfshjva mvesvvsecerjvsdsdvfkhsjfv',
  resave: false,
  saveUninitialized: false
}))

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/random',(req,res)=>{
    res.send("Hey Random");
})

app.get('/profile', (req, res) => {
    if(!req.session.details){
        return res.send("You need to login first");
    }

    req.session.details.visit++;

    res.send(`Welcome back ${req.session.details.name} - ${req.session.details.visit}`);
})

app.get('/login', (req, res) => {
    req.session.details = {
        name: 'Kartik',
        visit: 1
    }

    res.send("You are logged in");
})

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});