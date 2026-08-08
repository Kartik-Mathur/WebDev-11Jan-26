const db = require("./db");

async function createTables() {
  await db.query(`
    CREATE TABLE IF NOT EXISTS users (
      id          SERIAL PRIMARY KEY,
      name        VARCHAR(100) NOT NULL,
      email       VARCHAR(255) UNIQUE NOT NULL,
      age         INTEGER CHECK (age >= 0),
      created_at  TIMESTAMPTZ DEFAULT NOW()
    );
  `);

  // Create the posts table with a foreign key to users
  await db.query(`
    CREATE TABLE IF NOT EXISTS posts (
      id          SERIAL PRIMARY KEY,
      user_id     INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      title       VARCHAR(200) NOT NULL,
      body        TEXT,
      published   BOOLEAN DEFAULT false,
      created_at  TIMESTAMPTZ DEFAULT NOW()
    );
  `);

  console.log("Tables created successfully!");
  db.pool.end();
}

createTables().catch(console.error);
