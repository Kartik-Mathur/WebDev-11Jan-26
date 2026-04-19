const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

app.use(express.urlencoded({ extended: true }));
let todos = [
    "Cricket", "Basketball"
]

app.get('/todos', (req, res) => {
    res.send(todos);
})

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});