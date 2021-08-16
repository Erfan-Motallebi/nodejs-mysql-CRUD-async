const mysql2 = require("mysql2/promise");
require("dotenv").config();

const poolDb = mysql2.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
});

module.exports = poolDb;
