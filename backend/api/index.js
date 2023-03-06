const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const pool = require("./db");
const cors = require("cors");

app.use(cors({
  origin: 'http://localhost:3000', 
  credentials: true, 
  optionsSuccessStatus: 200 
}))
app.use(express.json());

app.get("/tree", (req, res) => {
  pool.query("select * from tree", (error, results) => {
    if(error) throw error;
    return res.status(200).json(results.rows);
  })
})

app.post("/users", (req, res) => {
  const username = req.body.username;
  pool.query(`insert into users (username, email, avatar, first_login) values `)
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
