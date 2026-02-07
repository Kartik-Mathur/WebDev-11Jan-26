// Shallow Copy
let obj = {
    a: 10,
    b: 20
}

let x = obj

x.a = 100;
console.log("x", x, "obj", obj);

// Deep Copy
obj = {
    a: 10,
    b: 20
}

x = { ...obj };
x.a = 100;
console.log("x", x, "obj", obj);

// Deep copy using for-in loop
obj = {
    a: 10,
    b: 20
}

x = {} // New Empty Object
for (let k in obj) {
    x[k] = obj[k] // Feed the key value pairs in the x from obj
}
console.log(x);