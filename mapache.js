var express = require('express');
var router = express.Router();
var mock = require('./mapache-data/data');

// define the home page route
router.get('/', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(mock);
});

module.exports = router;
