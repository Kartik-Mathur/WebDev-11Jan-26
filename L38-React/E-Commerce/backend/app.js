const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const userRoutes = require('./routes/users.routes');
const { default: mongoose } = require('mongoose');

app.use(express.urlencoded({ extended: true }));

app.use('/users', userRoutes);

mongoose.connect('mongodb://localhost:27017/ecommerce')
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        });
    }).catch(err => {
        console.log(err);
    })