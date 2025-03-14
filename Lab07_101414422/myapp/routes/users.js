var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

// Middleware to parse request body
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// POST route to handle user input
router.post('/', function(req, res) {
    console.log('Received Data:', req.body);
    res.send('POST received!');
});

module.exports = router;
