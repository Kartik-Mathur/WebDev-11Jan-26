const db = require("./db");

async function deleteUser(userId) {
  const result = await db.query(
    `DELETE FROM users
    WHERE id = $1`,
    [userId],
  );
  return result;
}

deleteUser(1).then((data) => {
  console.log(data);
});
