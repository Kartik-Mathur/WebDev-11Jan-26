const db = require("./db");

async function getPostsWithAuthors() {
  const result = await db.query(`
    SELECT
      posts.id AS post_id,
      posts.title,
      users.name AS author,
      users.email AS email
    FROM posts
    INNER JOIN users ON posts.user_id = users.id

  `);
  return result.rows;
}

getPostsWithAuthors()
  .then((data) => {
    console.log(data);
  })
  .finally(() => {
    db.pool.end();
  });
