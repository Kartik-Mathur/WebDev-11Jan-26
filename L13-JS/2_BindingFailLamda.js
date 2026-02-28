/*
Person is inside the Window, thus whenever we'll print name and age it'll only print
What is mentioned inside the Window object...
*/
let person = () => {
    console.log(this.name)
    console.log(this.age)
}

let s = {
    name: 'Ankit',
    age: 19
}

let s1 = {
    name: 'Pooja',
    age: 19
}

person.call(s);
person.call(s1);