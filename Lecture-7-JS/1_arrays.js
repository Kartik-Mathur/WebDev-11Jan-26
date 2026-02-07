// 1. Creating the array
let arr = [1,2,3,4,5];
console.log(arr);

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element)
}

// 2. Arrays in JS are heterogenous
arr[10] = "Hello";
console.log(arr)

// loop: for-of loop
for(let data of arr){
    console.log(data);
}

// While loop
let i = 0;
while(i < arr.length){
    console.log(arr[i]);

    i++;
}


// Printing data in single line
let str = ""
for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    str += element + ' '
}
console.log(str)
