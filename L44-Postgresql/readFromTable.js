// create.js
const db = require("./db");

async function readAll() {
  const result = await db.query(`SELECT * FROM USERS WHERE age > 25`);
  return result.rows;
}

async function main() {
  const user = await readAll();
  console.log("Fetched data:", user);
  db.pool.end();
}

main().catch(console.error);
