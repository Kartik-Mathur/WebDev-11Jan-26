let newStudent = {
    name: 'Ankit',
    age: 19,
    city: 'Delhi',
    printDetails: function () {
        console.log("Name ", this.name)
        console.log("Age ", this.age)
        console.log("City ", this.city)
        this.country = 'India'
    }
}

newStudent.printDetails();
console.log(newStudent)
