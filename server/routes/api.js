// Importing Express library
import express  from "express";// const express = require('express'); 
// Creating a Router Instance
const { Router } = express; // Interpolation
const router = Router();

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
export default router; // change export