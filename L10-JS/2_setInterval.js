/*
setInterval(function () {
    console.log("Hi");
}, 2000);

console.log("Hello World");
*/

let id = setInterval(function () {
    console.log("Hello I am learning strings, In the class today. Aaj merko yeh samjh aa hi jaega");
}, 1);

setTimeout(() => {
    clearInterval(id);
}, 5000);