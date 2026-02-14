var x;
var y;
function fun() {
    var x;
    console.log(x);// undefined

    x = 200;
    console.log(x); // 200
}

// ------------------------
x = 10;
fun();
y = 20;

if (y > 0) {
    console.log(y); // 20
    y = 30;
    console.log(y); // 30
}

console.log(x); // 10
console.log(y); // 30

