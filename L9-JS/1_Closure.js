function genFun() {

    let x = 10;

    function fun() {
        x++;
        console.log(x);
    }

    return fun;
}

let f = genFun();
f();
f();

let f1 = genFun();
f1();
f1();