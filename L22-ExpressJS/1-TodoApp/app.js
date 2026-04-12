const path = require('path');
const express = require('express');
const Todos = require('./lib/Todos');
const app = express();
const PORT = 4444;

// To use POST via POSTMAN/Browser(FORM TAG)
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // To use axios

app.use(express.static(path.join(__dirname, 'public')));

// To return all the todos
app.get('/todos', async (req, res) => {
    let allTodos = await Todos.getTodos();
    res.send(allTodos);
})

// To add a new todo
app.post('/todos', async (req, res) => {
    const { name, description } = req.body;
    // let todoItem = new Todos();
    // todoItem.addTodo()
    let newTodo = { name, description };
    await Todos.addTodo(newTodo);
    // Send the GET request to '/todos'
    res.redirect('/todos');
})

// To delete a todo
app.delete('/todos', async (req, res) => {
    const { id } = req.body;

    await Todos.deleteTodo(id);
    res.redirect('/todos');
})

// To update a todo
app.patch('/todos', async (req, res) => {
    const { name, description, id, completed } = req.body;

    await Todos.updateTodo({
        name,
        description,
        id
    })

    res.redirect('/todos');
})

// To increase priority of a todo
app.get('/increase-priority', async (req, res) => {
    const { id } = req.query;
    await Todos.increasePriority(id);
    res.redirect('/todos');
})

// To decrease priority of a todo
app.get('/decrease-priority', async (req, res) => {
    const { id } = req.query;
    await Todos.decreasePriority(id);
    res.redirect('/todos');
})


app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});