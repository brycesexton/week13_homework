const express = require("express");
const app = express();
const PORT = 3001;

let numberOfBeers = 99;

app.get('/:numberOfBottles', (req, res) => {
    const bottlesLeft = parseInt(req.params.numberOfBottles) || 0;

    if (bottlesLeft === 0) {
        return res.send(`No more bottles, <a href="/${bottlesLeft + 99}">Try Again</a>`);
    }

    res.send(`Number of beers: ${bottlesLeft}, <a href="/${bottlesLeft - 1}">Take one down, pass it around</a>`);
});

app.listen(PORT, () => console.log("Server is running on port", PORT));