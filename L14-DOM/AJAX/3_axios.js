let todosList = document.querySelector('.todosList');
let url = 'https://jsonplaceholder.typicode.com/todos/';

/*
1. createElement
2. classList.add() -> Optional
3. add innerText/innerHTML 
4. parent.appendChild(element);
 */

function updateTodos(data) {
    // Always empty the content of todosList
    todosList.innerText = '';

    for (let i = 0; i < data.length; i++) {
        // console.log(data[i]);
        const { id, userId, title, completed } = data[i];
        // console.log(id, userId, completed, title);
        // 1. Create element
        let li = document.createElement('li');
        li.innerText = `Title: ${title}, 
            userId: ${userId},
            completed: ${completed},
            title: ${title}`

        todosList.appendChild(li);
    }
}

// console.log(axios)
/*
axios.get(url)
    .then((res)=>{
        console.log(res.data);
    })
 */

axios.get(url)
    .then(({ data }) => {
        // console.log(data)
        updateTodos(data);
    })
    .catch(err => {
        console.log(err)
    })

