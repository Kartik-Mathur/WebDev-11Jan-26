// Routers are like mini express servers
// Server -> req ke badle res dega
const express = require('express');
const router = express.Router();

router.post('/profile',(req,res)=>{
    res.send("Upload Profile Image Post request");
})

router.post('/dashboard',(req,res)=>{
    res.send("Upload Profile Image Post request");
})

module.exports = router;
// On routers we cannot do router.listen like express.listen