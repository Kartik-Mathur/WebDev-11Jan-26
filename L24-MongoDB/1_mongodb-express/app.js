const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
let todosCollection;

async function main() {
    try {
        // Use connect method to connect to the server
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db("myDB");
        todosCollection = db.collection('todos');

        // the following code examples can be pasted here...
        console.log("Mongodb connection success");
        return 'done.';
    } catch (error) {
        throw new Error("Cannot connect to mongodb");
    }
}

app.get('/todos', async (req, res) => {
    try {
        let allTodos = await todosCollection.find({}).toArray();
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
        let todo = await todosCollection.insertOne({
            name,
            description
        })

        res.status(200).json({
            message: 'Todo inserted successfully',
            todo
        })
    } catch (error) {
        res.status(500).json({
            message: "Error while inserting todos contact admin"
        });
    }
})

main()
    .then(() => {
        app.listen(4444, () => {
            console.log("http://localhost:4444/")
        })
    })