BACKEND

- lib
    - Todos.js 
        - static addTodo({name, description})
        - static deleteTodo(id)
        - static getTodos()
        - static updateTodo({name, description, id})
        - static increasePriority(id)
        - static decreasePriority(id)
    - todos.json #stores all the data of todos here

- app.js

    - app.get('/todos')
        - will return all todos from todos.json
    - app.post('/todos') 
        - name, description
    - app.delete('/todos')
        - @id
        - delete the todo with id
    - app.patch('/todos')
        -  id, ?name, ?description
    - app.get('/increase-priority')
        - id
    - app.get('/decrease-priority')
        - id
