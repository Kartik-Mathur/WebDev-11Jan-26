const fs = require('fs/promises');

fs.readFile("courses.json", {
    encoding: 'utf-8'
}).then(data => {
    data = JSON.parse(data);
    console.log(data)
})
    .catch(err => {
        console.log(err);
    })