// delete key "age"
let obj = {
    "a": 10,
    'name': 'Tarun',
    "age": 20,
    ' ': "I am a space",
    'first name': "Coding"
}

// 2 ways
// delete
// delete obj.age;
console.log(obj.name);
// Destructuring syntax

var { name, hero } = obj; // Ab name ko bahar nikal rhey hai so that we can use it without obj.name
console.log(obj);
console.log(name)

// console.log(hero) //will print undefine
const { age, ...ans } = obj;
console.log(age)
