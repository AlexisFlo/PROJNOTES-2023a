// Importing Express library
import express from 'express';
// Creating a Router Instance
const { Router } = express; // Interpolation
const router = Router();

// Creating the route
router.get('/author', (req, res) => {
  res.json({
    name: 'Alepsis',
    lastname: 'Flowers',
    twitter: '@alexisflowersf',
    job: 'Student',
  });
});

// Exporting the router
export default router;
