// Importing Express library
var express = require('express');
// Creating a Router Instance
var router = express.Router();

// Creating the route
router.get('/author',function(req, res){
   res.json ({
    "name":"Alepsis",
    "lastname":"Flowers",
    "twitter":"@alexisflowersf",
    "job":"Student"
    })
});

// Exporting the router
module.exports = router;