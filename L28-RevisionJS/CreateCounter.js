let cnt = 0; // Global variable

function counter(){
    cnt++;

    return cnt;
}

let x = counter();
console.log(x);

x = counter();
console.log(x);

x = counter();
console.log(x);

x = counter();
console.log(x);

// New counter?
cnt = 0; // Yeh toh global variable ko reset kr dega
let y = counter(); // x wala counter toh kharab ho gaya
console.log(y)