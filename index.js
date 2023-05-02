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

app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const selectedDetails = chef.find(d => d.id === id);
    res.send(selectedDetails)
})

app.get('/details/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id === 0) {
        res.send(details)
    }
    else {
        const allDetails = details.filter(d => parseInt(d.chef_id) === id);
        res.send(allDetails)
    }

})

app.listen(port, () => {
    console.log(`Dragon API is running on port: ${port}`)
})