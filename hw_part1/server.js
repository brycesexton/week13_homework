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

//magic 8 ball
app.get('/magic/:question', (req, res) => {
  const Q = req.params.Q.replace(/%20/g, ' ')
  const responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely",
      "You may rely on it", "As I see it yes", "Most likely", "Outlook good",
      "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later",
      "Better not tell you now", "Cannot predict now", "Concentrate and ask again",
      "Don't count on it", "My reply is no", "My sources say no",
      "Outlook not so good", "Very doubtful"]

  const magicResponse = responses[Math.floor(Math.random() * responses.length)];
  res.send(`<h1>Question: ${Q}</h1><h1>Answer: ${magicResponse}</h1>`);
});











app.listen(port, () => {
  console.log(`Server is live on ${port}`);
});