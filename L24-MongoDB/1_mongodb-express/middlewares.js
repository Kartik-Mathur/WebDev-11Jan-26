const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// This middleware runs for every request: To check loggedin or not
app.use(function(req,res,next){
    if(!req.query.loggedin){
        res.send("Login First");
    }
    console.log("Middleware-1");
    next();
})

// ✅/image/upload
// ✅/image/upload/folder
// ✅/image/upload/audio/...../file.mp4
// ❌/image/uploadfile
// ❌/image/uploader
app.use('/image/upload',(req,res,next)=>{
    console.log("Middleware to compress image");
    next();
})

app.get('/hi', (req, res, next) => {
    res.send("Hi");
})


app.listen(4444, () => {
    console.log("http://localhost:4444/")
})