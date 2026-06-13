require('dotenv').config(); // To enable read from .env file

const path = require('path');
const express = require('express');
const { default: mongoose } = require('mongoose');
const UserModel = require('./models/User.model');
const app = express();
const PORT = 4444;
var Cookies = require('cookies')
const jwt = require('jsonwebtoken');
app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
const session = require('express-session');

const MongoDBStore = require('connect-mongodb-session')(session);
var store = new MongoDBStore({
    uri: 'mongodb://localhost:27017/connect_mongodb_session_test',
    collection: 'mySessions'
});

store.on('error', function (error) {
    console.log(error);
});


app.use(session({
    secret: 'asbdsab avjsav fjvejr wjvejsf sgfksjejfgkwfgwghfkwkgfkw',
    resave: true,
    saveUninitialized: true,
    store: store,
}));

const passport = require('./passport/passport');

app.use(passport.initialize());
app.use(passport.session());


app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/dashboard');
    });

app.post('/login',
    passport.authenticate('local', { failureRedirect: '/' }),
    function (req, res) {
        res.redirect('/dashboard');
    });

function isLoggedIn(req, res, next) {
    if (!req.user) return res.redirect('/');
    next();
}

app.get('/dashboard', isLoggedIn, (req, res) => {
    res.render('dashboard', {
        username: req.user.username,
        profileImage: req.user.profileImage
    });
})

app.post('/signup', async (req, res, next) => {
    const { username, password } = req.body;

    if (!username || !password)
        return res.send('Enter username and password both');

    let existingUser = await UserModel.findOne({
        username
    })
    if (existingUser) {
        return res.status(400).send("User already present, try another username");
    }

    await UserModel.create({
        username,
        password
    })

    res.redirect('/');
});

app.get('/login', (req, res) => {
    res.render('login');
})

app.get('/signup', (req, res) => {
    res.render('signup');
})

app.post('/logout', function (req, res, next) {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
});

mongoose.connect('mongodb://localhost:27017/mydb')
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        });
    })
    .catch(err => {
        console.log(err);
    })
