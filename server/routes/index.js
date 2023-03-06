const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => { // Change to an arrow function
  let iconSet = ["⭐","🖖","🐱‍👤","🔨","😎","🎶"];
  let icon = iconSet[Math.floor(Math.random() * iconSet.length)];
  res.render('index', { title: 'DWPCII-2023A', icon });
});

router.get('/author',(req, res)=>{
  // Creating a View-model
  let author = {
    "name": "Alepsis",
    "lastname": "Flowers",
    "twitter": "@alexisflowersf",
    "job": "Student"
  };
  // Sending the view-model to be rendered by a View 
  res.render('author', author);
});

module.exports = router;
