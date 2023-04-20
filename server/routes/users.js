import express from 'express';

const { Router } = express; // interpolation
const router = Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.send('respond with a resource');
});

export default router; // change export
