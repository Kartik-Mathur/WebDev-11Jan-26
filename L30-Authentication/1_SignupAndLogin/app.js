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

// app.get('/',(req,res)=>{
//     res.render('login');
// })

async function isLoggedIn(req, res, next) {
    var cookies = new Cookies(req, res);
    let token = cookies.get('token');
    if(!token) return res.redirect('/');

    var decoded = jwt.verify(token, 'adkahd regj#$@$#$evgraej,vdjvjvjv ejrvjvejv@#@#$#$#!@$#@');
    const {username} = decoded;

    let user = await UserModel.findOne({
        username
    })
    if(!user) return res.redirect('/');
    req.user = user;
    next();
}

app.use('/auth', require('./routers/auth.routes'));
app.use('/user', isLoggedIn, require('./routers/user.routes'));

mongoose.connect('mongodb://localhost:27017/mydb')
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        });
    })
    .catch(err => {
        console.log(err);
    })
