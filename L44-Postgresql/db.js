const { Pool } = require("pg");

const pool = new Pool({
  user: "kartik",
  host: "localhost", // where the DB is running
  database: "mydb",
  password: "kartik",
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
  pool,
};
