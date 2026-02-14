function genFun() {

    let x = 10;

    function fun() {
        x++;

        function innerFun() {
            x++;
            console.log(x)
        }

        return innerFun;
    }

    return fun;
}

let newFun = genFun();
let fun1 = newFun();
fun1();
fun1();
fun1();


let fun2 = newFun();
fun2();
fun2();
fun2();

fun1();
fun1();
