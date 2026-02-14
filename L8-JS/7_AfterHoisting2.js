var a;
function fun() {
    var a;
    // ------ HOISTING INSIDE FUNCTION
    console.log(a);

    a = 10;

    console.log(a);
}
//  -------------------
a = -10;

fun();


