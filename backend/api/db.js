const Pool = require("pg").Pool;
const connectionString = "postgres://postgres:haijn238jmkval@db.onnpikzsjidabywbmuna.supabase.co:6543/treedb"

const pool = new Pool({
    connectionString,
    // user: "postgres",
    // host: "localhost",
    // database: "treedb",
    // password: "Torajirolove1!",
    // port: 5432,
})

module.exports = pool;