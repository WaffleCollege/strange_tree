const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const expressSession = require('express-session');

app.use(express.static(path.join(__dirname, "..", "my_app", "build")));
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "my_app", "build", "index.html"))
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
