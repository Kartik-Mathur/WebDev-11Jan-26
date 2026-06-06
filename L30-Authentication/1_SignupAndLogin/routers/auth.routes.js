const path = require('path');
const express = require('express');
const UserModel = require('../models/User.model');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Cookies = require('cookies');

// This will show user the login page
router.get('/login', (req, res, next) => {
    res.render('login');
});
// This will show user the signup page
router.get('/signup', (req, res, next) => {
    res.render('signup');
});
// This will let user to login
// router.post('/login',);
// This will let user to Signup
router.post('/signup', async (req, res, next) => {
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

    // JWT Token set kardo so that when this user goes to user/dashboard vo enter kar paaye
    let token = jwt.sign({ username }, 'adkahd regj#$@$#$evgraej,vdjvjvjv ejrvjvejv@#@#$#$#!@$#@');
    let cookies = new Cookies(req, res)

    cookies.set('token', token);

    res.redirect('/user/dashboard');
});


module.exports = router;