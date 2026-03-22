// #include <iostream>
const fs = require('fs');

let data = ["Cpp", "Java"];

fs.writeFile("courses.json", JSON.stringify(data), (err) => {
    if (err) throw new Error(err.message);
    console.log("Data write successful");
})

