const url = 'https://jsonplaceholder.typicode.com/todos';
let todoList = document.querySelector('.todoList');

async function fetchTodos() {
    let res = await fetch(url);
    allTodos = await res.json();
    return allTodos;
}

function filterTodos(allTodos, status) {
    let data = allTodos.filter(t => t.completed == status);
    return data;
}

function printTodos(allTodos) {
    /*
        completed: false
        id: 1
        title: "delectus aut autem"
        userId: 1
    */
   todoList.innerHTML = "";

    allTodos.forEach(td => {
        let li = document.createElement('li');
        li.innerHTML = `
        <div class="todo-title">${td.title}</div>
        
        <div class="todo-meta">
            Task ID: ${td.id} | User ID: ${td.userId}
        </div>

        <div class="status ${td.completed ? 'done' : 'pending'}">
            ${td.completed ? "Done ✅" : "Pending ⏳"}
        </div>
    `;

        todoList.appendChild(li);
    });
}


async function main() {
    let allTodos = await fetchTodos();
    // console.log(allTodos)
    printTodos(allTodos);
}

main();

document.querySelector('#all').addEventListener('click', ev => {
    printTodos(allTodos);
})

document.querySelector('#pending').addEventListener('click', ev => {
    console.log("Pending Tasks")
    let data = filterTodos(allTodos, false);
    console.log(data);
    printTodos(data);
})

document.querySelector('#completed').addEventListener('click', ev => {
    let data = filterTodos(allTodos, true);
    printTodos(data);
})