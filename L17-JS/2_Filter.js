let arr = [1, 2, 3, 4, 5, 6];


// Agar element aage jaane dena hai return true
// else return false
/*
let newArr = arr.filter((val, indx, a)=>{
    if(val%2 == 1) return true;
    return false;
})
*/

/*
let newArr = arr.filter((val, indx, a) => {
    return val % 2 == 1;
})
*/

let newArr = arr.filter((val, indx, a) => val % 2);
console.log(newArr)