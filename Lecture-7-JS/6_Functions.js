// Function
function hello() {
    console.log("Hello World");
}

hello();

// Function as an expression
// As function itself is a data type like Number we can do let a = 10;
let x = function sayHello(name) {
    console.log("Hello", name);
}

x("Aadeep"); // sayHello("Aadeep"); // This thing will not work

// Sum function
function sum(a, b) { // a: undefined(when we dont pass anything)
    // undefined + undefined = not a number (NaN)
    return a + b
}

console.log(sum(10, 20));
console.log(sum());

// Default arguments
function add(a = 0, b = 0, c = 0, d = 0) {
    return a + b + c + d
}

console.log(add(1, 2, 3, 4));
console.log(add(1, 2, 3));
console.log(add(1, 2));
console.log(add(1));