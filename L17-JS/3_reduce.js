let arr = [1, 2, 3, 4, 5, 6];


/*
let sum = arr.reduce((acc, val, indx, a)=>{
    return acc + val;
})
    console.log(sum);
*/

let product = arr.reduce((acc, val, indx, a) => {
    return acc * val;
}, 0)

console.log(product);
