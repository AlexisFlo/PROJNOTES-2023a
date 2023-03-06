// Importing Express library
const express = require('express'); // Change var with let
// Creating a Router Instance
const router = express.Router();

// Creating the route
router.get('/author', (req, res) => { // Change to an arrow function
   res.json ({
    "name":"Alepsis",
    "lastname":"Flowers",
    "twitter":"@alexisflowersf",
    "job":"Student"
    })
});

// Exporting the router
module.exports = router;