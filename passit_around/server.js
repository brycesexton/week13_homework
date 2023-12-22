const express = require ('express')
const app = express ()
app.use(express.urlencoded({extended: true}))

let BEERS = 99;

app.get('/', (req, res) => {
    res.render('index', { BEERS });
});

app.get('/:number_of_bottles', (req, res) => {
    const bottlesLeft = parseInt(req.params.number_of_bottles);

    if (bottlesLeft === 0) {
        res.render('noMoreBottles');
    } else {
        res.render('bottles', {
            BEERS: bottlesLeft,
            nextNumber: bottlesLeft - 1,
        });
    }
});

app.get('/startOver', (req, res) => {
    BEERS = 99;
    res.redirect('/');
});



app.listen(3001, () => {
    console.log("pass it around exercise.")
})