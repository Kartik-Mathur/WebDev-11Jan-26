var x = 10;

function fun() {
    console.log(x);// undefined

    var x = 200;
    console.log(x); // 200
}
fun();
var y = 20;

if (y > 0) {
    console.log(y); // 20
    var y = 30;
    console.log(y); // 30
}

console.log(x); // 10
console.log(y); // 30

