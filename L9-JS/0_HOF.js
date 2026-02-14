function fun(x) {
    x();
}

function hello() {
    console.log("Hello World");
}

fun(hello); // hello function is passed as argument to fun


// ---------------------------------------------------------------------------


function genFun() {

    function World() {
        console.log("Hi From World");
    }

    return World();
}

let x = genFun();
x();