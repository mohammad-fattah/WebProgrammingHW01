const fs = require('fs');
let fileText;
fs.readFile('./sample.txt', 'utf8', (err,data) => fileText = data.split('\n'));

const hash = require('crypto')
const express = require('express');
const app = express();

app.use(express.json())

app.post('/nodejs/sha', (req, res) => {
    const response = {
        result : req.body.first + req.body.second
    };
    res.send(response);
})

const port = 3000;
app.listen(port, () => console.log(`listenin on port ${port}...`))