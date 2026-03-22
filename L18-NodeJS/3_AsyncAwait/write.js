const fs = require('fs/promises');
let path = require('path');

let content = ["asndasod", "asedaraesr", "asfrq3eq"];

async function writeData(fileName) {
    let filePath = path.join(__dirname, '..', 'database', fileName);

    await fs.writeFile(filePath, JSON.stringify(content));
    console.log("Write success");
}

writeData("courses.json");

console.log("End of prog")