function printStudent(country, language) {
    console.log("Name ", this.name)
    console.log("Age ", this.age)
    console.log("City ", this.city)
    console.log("Country ", country)
    console.log("Language ", language)
}

let newStudent = {
    name: 'Ankit',
    age: 19,
    city: 'Delhi',
}

let newStudent1 = {
    name: 'Shaurya',
    age: 18,
    city: 'Mumbai',
}

/*
Three functions are there for explicit binding
1. call
2. apply
3. bind
*/

// printStudent ke andar this keyword will point to newStudent
// printStudent.call(newStudent, "India", "CPP")
// printStudent.apply(newStudent, ["India", "CPP"])

// printStudent ke andar this keyword will point to newStudent1
// printStudent.call(newStudent1, "USA")
// printStudent.apply(newStudent1, ["USA", "Java"])

// call and apply immediately function ko call krte hai
// let fun = printStudent.bind(newStudent);
// fun("India","Python")

// let fun = printStudent.bind(newStudent,"India");
// fun("Python")

let fun = printStudent.bind(newStudent, "India", "Python");
fun()