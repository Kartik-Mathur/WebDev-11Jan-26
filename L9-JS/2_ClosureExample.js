function createCounter() {
    let cnt = 0;

    function counter() {
        cnt++;
        return cnt;
    }

    return counter;
}

let c1 = createCounter();

console.log(c1());
console.log(c1());
console.log(c1());
console.log(c1());

let c2 = createCounter();
console.log(c2())
console.log(c2())
console.log(c2())
console.log(c2())