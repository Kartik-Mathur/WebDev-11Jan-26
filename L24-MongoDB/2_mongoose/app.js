const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const mongoose = require('mongoose');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 1. Create a schema
const todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    updated: { type: Date, default: Date.now }
})

const todo = mongoose.model('todos', todoSchema);


app.get('/todos', async (req, res) => {
    try {
        let allTodos = await todo.find({});
        res.status(200).json({
            todos: allTodos,
            message: "Todos fetched successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error fetching all todos"
        });
    }
})
app.post('/todos', async (req, res) => {

    try {
        const { name, description } = req.body;

        if (!name || !description) {
            return res.status(400).json({
                message: "Please provide both name and description"
            });
        }
        let newTodo = await todo.create({
            name,
            description
        })

        res.status(200).json({
            message: 'Todo inserted successfully',
            newTodo
        })
    } catch (error) {
        res.status(500).json({
            message: "Error while inserting todos contact admin",
            error
        });
    }
})

mongoose.connect('mongodb://localhost:27017/myDB')
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        });
    })
