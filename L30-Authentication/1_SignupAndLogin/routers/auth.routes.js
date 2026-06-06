const path = require('path');
const express = require('express');
const router = express.Router();

// This will show user the login page
router.get('/login',(req,res,next)=>{
    res.render('login');
});
// This will show user the signup page
router.get('/signup',(req,res,next)=>{
    res.render('signup');
});
// This will let user to login
// router.post('/login',);
// This will let user to Signup
router.post('/signup',(req,res,next)=>{
    const {username, password} = req.body;

    if(!username || !password) 
        return res.send('Enter username and password both');

    
});


module.exports=router;