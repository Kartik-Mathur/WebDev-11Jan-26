const fs = require('fs/promises');

async function readData(fileName) {
    let data = await fs.readFile(fileName, { encoding: 'utf-8' });
    data = JSON.parse(data);
    console.log(data);
}

readData("courses.json");