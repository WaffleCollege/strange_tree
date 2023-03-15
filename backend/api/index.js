const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const pool = require("./db");
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
app.use(express.json());

app.get("/tree", (req, res) => {
  pool.query("select * from trees", (error, results) => {
    if (error) throw error;
    return res.status(200).json(results.rows);
  });
});

app.get("/users", (req, res) => {
  pool.query("select * from users", (error, results) => {
    if (error) throw error;
    return res.status(200).json(results.rows);
  });
});

app.get("/users/:name", (req, res) => {
  pool.query(
    "select * from users where username = $1",
    [req.params.name],
    (error, results) => {
      if (error) throw error;
      return res.status(200).json(results.rows[0]);
    }
  );
});

app.get("/users/:name/items", (req, res) => {
  pool.query(
    "select id from users where username=$1",
    [req.params.name],
    (error, results) => {
      if (error) throw error;
      if (results.rows.length) {
        const id = results.rows[0].id;
        pool.query(
          `select item_id, quantity from item_acquisition_history where user_id=${id}`,
          (error, results) => {
            console.log(results.rows);
            if (error) throw error;
            return res.status(200).json(results.rows);
          }
        );
      }
    }
  );
});

app.post("/users", (req, res) => {
  const { username, email, avatar, created_at, token } = req.body;
  pool.query(
    "select * from users where username = $1 and email = $2",
    [username, email],
    (error, results) => {
      if (!results.rows.length) {
        pool.query(
          `insert into users (username, email, avatar, created_at) values ($1, $2, $3, $4)`,
          [username, email, avatar, created_at],
          (error, results) => {
            if (error) throw error;
            return res.status(201).send("registered!");
          }
        );
      }
      pool.query(
        `update users set token = $1 where username = $2 and email = $3`,
        [token, username, email],
        (error, results) => {
          if (error) throw error;
          return res.status(201).send("registered!");
        }
      );
    }
  );
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
