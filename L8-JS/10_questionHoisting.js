console.log(fun)

var fun = 10;

function fun(){
    console.log("hello")
}

console.log(fun)

// --------------------after hoisting
fun(){
    console.log("hello")
}

var fun;

console.log(fun) // => fun(){console.log("hello")}
fun = 10

console.log(fun)  // 10