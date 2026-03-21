// var a = 10;

// function hello() {
//     console.log("Hello World");
// }

// hello();

// let b = 10;
// console.log(b);

// console.log("End");


var a;

function hello() {
    console.log("Hello World");
}
// SCRIPT SCOPE
let b; // TDZ- Temporal Dead Zone

// ----------------
a = 10;
hello();

b = 10;
console.log(b);
console.log("End");