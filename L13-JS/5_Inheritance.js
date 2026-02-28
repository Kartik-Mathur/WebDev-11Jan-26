class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    constructor(name, age, marks) {
        super(name, age);
        this.marks = marks;
    }
}

let s = new Student("Ankit", 19, 80);
console.log(s)
console.log(s.__proto__ == Student.prototype)
console.log(s.__proto__.__proto__ == Person.prototype)