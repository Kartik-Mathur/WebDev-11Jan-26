// BOOK NAME: ELOQUENT JAVASCRIPT
// ANOTHER BOOK: YOU DONT KNOW JS
let arr = [1, 2, 3, 4, 5, 6];

let newArr = arr.map(function (val, indx, a) {
    return val * 2;
})


console.log(arr);
console.log(newArr);

let newArr1 = arr.map((val, indx, arr) => {
    return val % 2 ? "Odd" : "Even";
})
console.log(newArr1);

let newArr2 = [];
for(let i = 0 ; i < arr.length ; i++){
    if(arr[i]%2 == 0) newArr2.push("Even");
    else newArr2.push("Odd");
}

console.log(newArr2)