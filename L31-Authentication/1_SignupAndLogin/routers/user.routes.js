const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/dashboard',(req,res,next)=>{
    const {username} = req.user;
    res.render('dashboard',{
        username
    });
});


module.exports=router;
