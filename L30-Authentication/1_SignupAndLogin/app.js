const path = require('path');
const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const PORT = 4444;

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/',(req,res)=>{
//     res.render('login');
// })

app.use('/auth', require('./routers/auth.routes'));
// app.use('/user',);

mongoose.connect('mongodb://localhost:27017/mydb')
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        });
    })
    .catch(err=>{
        console.log(err);
    })
