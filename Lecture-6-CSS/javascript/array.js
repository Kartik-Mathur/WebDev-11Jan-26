let arr = [1, 2, 3, "Hello", true, 'Coding'];

// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

arr.push(2000); // To insert element at the end
console.log(arr);

arr.pop(); // To remove element from the end
console.log(arr);

arr.unshift(2000); // To insert element at front
console.log(arr);

console.log(arr.shift()); // To remove element from front
console.log(arr);