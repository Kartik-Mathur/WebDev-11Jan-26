const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const userRoutes = require('./routes/users.routes');
const adminRoutes = require('./routes/admin.routes');

const { default: mongoose } = require('mongoose');
const isLoggedInAsAdmin = require('./middlewares/isLoggedInAsAdmin');

app.use(express.urlencoded({ extended: true }));

app.use('/users', userRoutes);
app.use('/admin', isLoggedInAsAdmin, adminRoutes);

mongoose.connect('mongodb://localhost:27017/ecommerce')
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        });
    }).catch(err => {
        console.log(err);
    })