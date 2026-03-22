const fs = require('fs/promises');

let data = ["Cpp", "Java", "Python", "Django"];

fs.writeFile("courses.json", JSON.stringify(data))
    .then(() => {
        console.log("Data write success")
    })
    .catch(err => {
        console.log(err)
    })

console.log("End of program");