let inp = document.querySelector('#inp');
let btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    console.log(inp.value)
    console.log(typeof inp.value)
    let x = Number(inp.value);
    // let x = +inp.value;
    let url = `https://jsonplaceholder.typicode.com/todos/${x}`
    axios.get(url)
        .then(({ data }) => {
            console.log(data)
        })
})