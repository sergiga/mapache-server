var express = require('express');
var app = express();
var path = require('path');
var mapache = require('./controllers/mapache');


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use('/mapache', mapache);

app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
