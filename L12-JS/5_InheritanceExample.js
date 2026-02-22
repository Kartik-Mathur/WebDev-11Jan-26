function Person() {
    console.log("I am a person")
}

function Student() {
    console.log("I am a student");
}

function Teacher() {
    console.log("I am a teacher");
}

Teacher.prototype = Object.create(Person.prototype);
Student.prototype = Object.create(Person.prototype);

console.log(Teacher.prototype.__proto__ == Person.prototype)
console.log(Student.prototype.__proto__ == Person.prototype)
console.log(Student.prototype.__proto__.__proto__ == Object.prototype)
console.log(Student.prototype.__proto__.__proto__.__proto__ == null)