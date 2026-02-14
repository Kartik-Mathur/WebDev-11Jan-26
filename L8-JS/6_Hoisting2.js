var a = -10;

function fun() {
    console.log(a); // Yeh undefined aaega
    // because of hoisting

    var a = 10;

    console.log(a);
}

fun();

