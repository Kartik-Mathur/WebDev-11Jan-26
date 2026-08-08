const db = require("./db");


async function createManyUsers() {
  const result = await db.query(
    `INSERT INTO users (name, email, age)
     VALUES ($1, $2, $3), ($4, $5, $6), ($7, $8, $9)
     RETURNING *`,
    [
      "monu",
      "monu@example.com",
      35,
      "mosina",
      "mosina@example.com",
      42,
      "abhishek",
      "abhishek@example.com",
      23,
    ],
  );
  console.log(`Inserted ${result.rowCount} users`);
  return result.rows;
}


createManyUsers();