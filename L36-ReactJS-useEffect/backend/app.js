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


app.get('/increase-priority',async (req,res)=>{
    const {currentId, prevId} = req.query;

    let currentItem = await todoModel.findOne({
        _id: currentId
    })

    let prevItem = await todoModel.findOne({
        _id: prevId
    })
    console.log(currentItem)
    console.log(prevItem);

    let tempItem = {};
    tempItem.name = currentItem.name;
    tempItem.description = currentItem.description;
    console.log(tempItem)
    

    currentItem.name = prevItem.name;
    currentItem.description = prevItem.description;
    await currentItem.save();

    prevItem.name = tempItem.name;
    prevItem.description = tempItem.description;
    await prevItem.save();

    res.redirect('/todos');

})
app.get('/decrease-priority',(req,res)=>{
    // const {id} = req.query;

})

mongoose.connect('mongodb://localhost:27017/todos')
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        });
    })