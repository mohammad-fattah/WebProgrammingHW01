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


app.get('/nodejs/write/:id', (req, res) => {
    const response = {
        result :  String(fileText[req.params.id - 1]).replace('\r','')
    };

    res.send(hash.createHash('sha256').update(String(response)).digest('base64'));
})

const port = 3000;
app.listen(port, () => console.log(`listenin on port ${port}...`))