const pool = require("../db");

async function createUserDB(name, surname, email, pwd) {
  console.log(name, surname, email, pwd);
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    console.log("+");
    const sql = `INSERT INTO users (name,surname, email, pwd) VALUES ($1, $2, $3, $4) RETURNING *`;
    const result = (await client.query(sql, [name, surname, email, pwd])).rows;
    console.log(result);
    await client.query("COMMIT");
    return result;
  } catch (error) {
    await client.query("ROLLBACK");
    return [];
  }
}

async function getUserByEmailDB(email) {
  const client = await pool.connect();

  const sql = `SELECT * FROM USERS WHERE email = $1`;
  const result = (await client.query(sql, [email])).rows;
  return result;
}

module.exports = { createUserDB, getUserByEmailDB };
