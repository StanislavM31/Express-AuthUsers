
const {Pool} = require('pg');
const pool = new Pool({
    password: process.env.DB_PASSWORD,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST
})

module.exports = pool