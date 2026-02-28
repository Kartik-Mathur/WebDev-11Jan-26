function outer() {
    var x = 10;

    return function inner(y) {
        x += y;

        return function deepest(z) {
            console.log(x, y, z);
            x += z;
        };
    };
}

const a = outer();
const b = a(5);
const c = a(2);

b(1);
c(3);
a(4)(2);






