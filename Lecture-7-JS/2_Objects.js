// Its also a datatype in JS
let obj = {
    "a": 10,
    'name': 'Tarun',
    "age": 20,
    ' ': "I am a space",
    'first name': "Coding"
}
 
console.log(obj);
console.log(obj.a); // 10
// console.log(obj.' '); // This will not work
console.log(obj[' ']); // This will work
// console.log(obj.'first name'); // This will not work
console.log(obj['first name']);

// loop: for-in, it will print all the keys of object
for (let key in obj) {
    console.log(key, " : ", obj[key]);
}