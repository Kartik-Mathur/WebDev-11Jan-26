const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs')

let todos = ['Learn HTML', 'LEARN CSS', "Learn CPP"]

// Aise code likhna matlab jindgi narak
app.get('/login', (req, res) => {
    // templating engine ke saath views folder ke andar direct file ka path dedo
    res.render('index', {
        title: 'Meri Todo App',
        "todos": todos
    });
})

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});