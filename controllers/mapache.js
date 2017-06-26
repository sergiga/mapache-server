var express = require('express');
var router = express.Router();
var mock = require('../mapache-data/data');

// define the home page route
router.get('/', function(req, res) {
    let map = 'world_map_0';
    if(req.query.map) {
        map = req.query.map.replace(':', '_');
    }
    
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(mock[map]));
});

module.exports = router;
