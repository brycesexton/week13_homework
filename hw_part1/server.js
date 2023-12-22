const express = require("express");
const app = express();
const port = 3000;

//greeting
app.get("/", (req, res) => {
    res.send("Hello there!");
  });

app.get('/greeting/:name', (req, res) => {
    const username = req.params.name
    res.send(`Hello, ${username}!`);
});

//tip calculator
app.get('/tip/:total/:tipPercentage', (req, res) => {
    res.send(`<h1>${req.params.total * (req.params.tipPercentage * .01)}</h1>`)
});











app.listen(port, () => {
  console.log(`Server is live on ${port}`);
});