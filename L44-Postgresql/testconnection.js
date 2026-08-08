// test-connection.js
const db = require("./db");

async function testConnection() {
  try {
    const result = await db.query("SELECT NOW()");
    console.log("Connected! Server time:", result);
  } catch (err) {
    console.error("Connection failed:", err.message);
  } finally {
    db.pool.end(); // close all connections
  }
}

testConnection();
