let todoForm = document.querySelector('#todoform');
let todoName = document.querySelector('#todoname');
let description = document.querySelector('#tododescription');
let taskList = document.querySelector('.taskList');

todoForm.addEventListener('submit', async (ev) => {
    // Form ko default refresh nhi hone dega
    ev.preventDefault();

    let nameValue = todoName.value;
    let descriptionValue = description.value;

    console.log(nameValue, descriptionValue)

    // To send request via axios
    let response = await axios.post('/todos', {
        name: nameValue,
        description: descriptionValue
    })

    let allTodos = response.data;
    console.log(allTodos);
    refreshTodos(allTodos);
})

function refreshTodos(todos) {
    taskList.innerHTML = '';

    todos.forEach(item => {
        let li = document.createElement('li');
        li.innerHTML = `
        <div>
            Name: ${item.name}
            Description: ${item.description}
            id: ${item.id}
            completed: ${item.completed ? "Completed" : "Pending"}
        </div>
        `
        taskList.appendChild(li);
    })
}


async function loadInitialTodos(){
    let response = await axios.get('/todos');
    let allTodos = response.data;
    refreshTodos(allTodos);
}

loadInitialTodos();