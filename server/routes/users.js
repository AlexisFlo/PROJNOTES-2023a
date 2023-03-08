import express from "express"; // const express = require('express');
const {Router} = express; // interpolation
const router = Router();

/* GET users listing. */
router.get('/', (req, res, next) => { // change to an arrow function
  res.send('respond with a resource');
});

export default router; // change export
