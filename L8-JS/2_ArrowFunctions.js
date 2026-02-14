function hello() {
    console.log("Hello World");
}

let x = function () {
    console.log("Hello World");
}

x();
hello();

// Arrow functions -> They are lambda functions
let sayHi = () => {
    console.log("Hii!!");
}
sayHi();

let add = (a, b) => {
    return a + b;
}

console.log(add(10, 20));

// Arrow function ke andar single line means that by default it will be returned
let sum = (a, b) => a + b;

console.log(sum(10, 20));