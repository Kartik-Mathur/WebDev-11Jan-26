const fs = require('fs/promises');
const path = require('path');

let filePath = path.join(__dirname, 'todos.json');

class Todos {

    async addTodo(todo) {
        const { name, description } = todo;
        // 1. Read the existing todos
        let todos = await fs.readFile(filePath);
        todos = JSON.parse(todos);
        // 2. Add your new todo
        todos.push({
            name,
            description,
            id: new Date().getTime(),
            completed: false
        })
        // 3. Update all the todos in todos.json
        await fs.writeFile(filePath, JSON.stringify(todos));
    }

    async deleteTodo(id) {
        // 1. Read all the existing todos
        let todos = await fs.readFile(filePath);
        todos = JSON.parse(todos);
        // 2. Remove the todo that is equal to
        // id user want to delete
        let newTodos = todos.filter(t => {
            if (t.id === id) return false;
            return true;
        })
        // 3. Write the updated todos inside file
        await fs.writeFile(filePath, JSON.stringify(newTodos));
    }

    async updateTodo(todo) {
        console.log(todo)
        // 1. Read all the todos
        let todos = await fs.readFile(filePath);
        todos = JSON.parse(todos);
        // 2. Find the index jiske object ka data update hoga
        let i = todos.findIndex(t => t.id == todo.id);
        console.log(i)
        if (i != -1) {
            todos[i].name = todo.name || todos[i].name
            todos[i].description = todo.description || todos[i].description
            if(typeof(todo.completed) !== undefined){
                todos[i].completed = todo.completed
            }
            await fs.writeFile(filePath, JSON.stringify(todos));
        }
    }

    increasePriority(id) { }

    decreasePriority(id) { }
};

let task = new Todos();
// task.addTodo({ name: 'basketball', description: "Play for fun" });
// task.deleteTodo(1775911607717);
task.updateTodo({
    id: 1775912379693,
    completed: false,
    description: 'Basketball is fun-1'
})