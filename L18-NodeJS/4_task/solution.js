const fs = require('fs');
const path = require('path');

let data1 = fs.readFileSync(path.join(__dirname, 'a.txt'), { encoding: 'utf-8' });
let data2 = fs.readFileSync(path.join(__dirname, 'b.txt'), { encoding: 'utf-8' });

// console.log(data1)
// console.log(data2)
data1 = data1.split("\n");
data2 = data2.split("\n");

let data = [...data1, ...data2];
data.sort((a, b) => a - b);

fs.writeFileSync(path.join(__dirname, 'c.txt'), data.join('\n'));
console.log(data)

console.log("End of program")