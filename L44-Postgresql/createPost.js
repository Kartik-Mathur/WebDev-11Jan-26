const db = require("./db");

async function createPost(userId, title, body) {
  const result = await db.query(
    `INSERT INTO posts (user_id, title, body, published)
     VALUES ($1, $2, $3, $4)
     RETURNING *`,
    [userId, title, body, true],
  );
  return result.rows[0];
}

createPost(2, "My First Post", "Hello world!").then((data) => {
  console.log(data);
});
