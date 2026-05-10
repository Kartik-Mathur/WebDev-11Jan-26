const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/auth', authRoutes);

function isLoggedIn(req,res,next){
    console.log("Checking logged in");
    next(); // Abhi login logout nhi kia
}

app.use('/users', isLoggedIn,userRoutes);


app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});