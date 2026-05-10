const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// All the routes are mentioned in the app therefore tedious to maintain
app.get('/auth/login',(req,res)=>{
    res.send("Here is your profile");
})

app.post('/auth/login',(req,res)=>{
    res.send("Login Post request");
})

app.post('/auth/signup',(req,res)=>{
    res.send("Signup Post request");
})

app.post('/upload/profile',(req,res)=>{
    res.send("Upload Profile Image Post request");
})

app.post('/user/dashboard',(req,res)=>{
    res.send("Upload Profile Image Post request");
})

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});