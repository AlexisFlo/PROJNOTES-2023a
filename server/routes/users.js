const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => { // change to an arrow function
  res.send('respond with a resource');
});

module.exports = router;
