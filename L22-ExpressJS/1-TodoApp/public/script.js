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

async function increasePriority(id) {
    console.log("Increase", id)
    let response = await axios.get(`/increase-priority?id=${id}`);
    let allTodos = response.data;
    refreshTodos(allTodos)
}

async function decreasePriority(id) {
    console.log("Decrease", id)
    let response = await axios.get(`/decrease-priority?id=${id}`);
    let allTodos = response.data;
    refreshTodos(allTodos)
}

async function deleteTodo(id) {
    let response = await axios.delete(`/todos`, {
        data: {
            id
        }
    });
    console.log(response)
    // let allTodos = response.data;
    // refreshTodos(allTodos)
}

function refreshTodos(todos) {
    taskList.innerHTML = '';

    todos.forEach(item => {
        let li = document.createElement('li');
        li.innerHTML = `
        <div>
            <input type="checkbox" ${item.completed ? "checked" : ""}>
            Name: ${item.name}
            Description: ${item.description}
            <button onclick=increasePriority(${item.id}) >⬆️</button>
            <button onclick=decreasePriority(${item.id}) >⬇️</button>
            <button onclick=deleteTodo(${item.id}) >❌</button>
        </div>
        `
        taskList.appendChild(li);
    })
}


async function loadInitialTodos() {
    let response = await axios.get('/todos');
    let allTodos = response.data;
    refreshTodos(allTodos);
}

loadInitialTodos();