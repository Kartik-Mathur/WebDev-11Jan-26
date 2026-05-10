// Routers are like mini express servers
// Server -> req ke badle res dega
const express = require('express');
const router = express.Router();

router.get('/login',(req,res)=>{
    res.send("Get on login");
})

router.post('/login',(req,res)=>{
    res.send("Login Post request");
})

router.post('/signup',(req,res)=>{
    res.send("Signup Post request");
})


module.exports = router;
// On routers we cannot do router.listen like express.listen