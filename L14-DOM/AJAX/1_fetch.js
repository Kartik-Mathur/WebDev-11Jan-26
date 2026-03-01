let url = 'https://jsonplaceholder.typicode.com/todos/';
// Ab is url se data laane ke liye we can use
/*
1. fetch API -> Inbuilt hai browser ka
2. Axios -> Third party hai(You need to download the code of this to use it)
3. XMLHttpRequest -> This is used inside all
4. jQuery
*/

// Fetch ek promise hai
fetch(url)
    .then((res) => { // res likhte hai because we assume that it returns response
        // we store this inside a variable that we have names as 'res'
        return res.json();
    })
    .then(function (data) {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })
