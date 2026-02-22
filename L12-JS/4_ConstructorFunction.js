function Person() {
    console.log("I am a person");
}


console.log(Person.prototype.__proto__ == Object.prototype);
console.log(Person.prototype.constructor == Person);