const path = require('path');
const express = require('express');
const todoRoutes = require('./routes/todos.routes');
const app = express();
const PORT = 4444;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs')

app.use('/v1', todoRoutes);


app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});