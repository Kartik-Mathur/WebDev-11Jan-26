const path = require('path');
const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const PORT = 4444;
const cors = require('cors')

// Adds headers: Access-Control-Allow-Origin: *
app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const todoSchema = new mongoose.Schema({
    name: String,
    description: String
});

const todoModel = new mongoose.model('Todo', todoSchema);

app.get('/todos', async (req, res) => {
    const allTodos = await todoModel.find({});
    res.status(200).json({ allTodos });
})

app.post('/todos', async (req, res) => {
    const { name, description } = req.body;
    const todo = await todoModel.create({
        name,
        description
    })
    res.redirect('/todos');
})

app.delete('/todos', async (req, res) => {
    const { id } = req.body;

    const todo = await todoModel.deleteOne({
        _id: id
    })
    const allTodos = await todoModel.find({});
    res.status(200).json({ allTodos });
})

mongoose.connect('mongodb://localhost:27017/todos')
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        });
    })