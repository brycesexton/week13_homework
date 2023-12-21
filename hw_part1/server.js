const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello there!");
  });

app.get('/greeting/:name', (req, res) => {
    const username = req.params.name
    res.send(`Hello, ${username}!`);
});

app.listen(port, () => {
  console.log(`Server is live on ${port}`);
});