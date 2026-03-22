const fs = require('fs');

// fs.readFile("courses.json", (err, data) => {
//     if (err) throw new Error(err);
//     data = data.toString();
//     console.log(data.toString());
//     console.log(JSON.parse(data));
//     data = JSON.parse(data);
//     data.forEach(d => {
//         console.log(d)
//     })
// })

fs.readFile("courses.json", {
    encoding: 'utf-8'
}, (err, data) => {
    if (err) throw new Error(err);
    console.log(data)
})