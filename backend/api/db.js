const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "treedb",
    password: "Torajirolove1!",
    port: 5432,
})

module.exports = pool;