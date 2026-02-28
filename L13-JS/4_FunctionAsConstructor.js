function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.printDetails = function () {
    console.log("Name : ", this.name)
    console.log("Age  : ", this.age)
}

let p = new Person("Ankit", 19);
// console.log(p)
p.printDetails()

console.log(p.__proto__ == Person.prototype)