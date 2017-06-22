var express = require('express');
var app = express();
var path = require('path');
var mock = require('./mapache-data/data.js');

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/mapache', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(mock);
});

app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
