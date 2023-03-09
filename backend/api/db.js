const Pool = require("pg").Pool;
require('dotenv').config();
const connectionString = process.env.DATABASE_URL;

const pool = new Pool({
    connectionString,
    // user: "postgres",
    // host: "localhost",
    // database: "treedb",
    // password: "Torajirolove1!",
    // port: 5432,
})

module.exports = pool;