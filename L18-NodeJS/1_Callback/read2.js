const { readFile } = require('fs');

readFile("courses.json", {
    encoding: 'utf-8'
}, (err, data) => {
    if (err) throw new Error(err);
    console.log(data)
})