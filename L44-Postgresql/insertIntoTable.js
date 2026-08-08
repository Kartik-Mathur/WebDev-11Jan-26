// create.js
const db = require("./db");

async function createUser(name, email, age) {
  const result = await db.query(
    `INSERT INTO users (name, email, age)
     VALUES ($1, $2, $3)
     RETURNING *`, // RETURNING gives back the inserted row
    [name, email, age],
  );
  return result.rows[0];
}

async function main() {
  const user = await createUser("kartik", "kartik@cb.com", 25);
  console.log("Created user:", user);
  db.pool.end();
}

main().catch(console.error);
