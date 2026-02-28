class Person {
    #marks;
    constructor(name, age, marks) {
        this.name = name;
        this.age = age;
        this.#marks = marks;
    }

    printDetails() {
        console.log("Name : ", this.name)
        console.log("Age  : ", this.age)
        console.log("Marks  : ", this.#marks)
    }

    /* 
    Getter and Setter are functions but they behave like properties.. 
    */
    get marks() {
        return this.#marks;
    }

    // Setter can only take one argument and not multiple
    set marks(m) {
        this.#marks = m
    }
}

// console.log(typeof Person) // function
let p = new Person("Ankit", 19, 80);
// console.log("Name", p.name); // We can access the name outside the class
// console.log("Marks", p.#marks);
// console.log(p)
console.log("Outside function", p.marks);
p.marks = 70;
p.printDetails()

