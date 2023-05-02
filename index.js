const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

const chef = require('./data/chef.json');
const details = require('./data/details.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Chef is running')
});

app.get('/chef', (req, res) => {
    res.send(chef);
})

app.get('/details', (req, res) => {
    res.send(details);
})



})

app.listen(port, () => {
    console.log(`Dragon API is running on port: ${port}`)
})