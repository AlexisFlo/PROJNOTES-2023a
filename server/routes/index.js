import express from 'express';

const { Router } = express; // interpolation
const router = Router();

/* GET home page. */
router.get('/', (req, res) => {
  const iconSet = ['⭐', '🖖', '🐈', '🔨', '😎', '🎶'];
  const icon = iconSet[Math.floor(Math.random() * iconSet.length)];
  res.render('index', { title: 'DWPCII-2023A', icon });
});

router.get('/author', (req, res) => {
  // Creating a View-model
  const author = {
    name: 'Alepsis',
    lastname: 'Flowers',
    twitter: '@alexisflowersf',
    job: 'Student',
  };
  // Sending the view-model to be rendered by a View
  res.render('author', author);
});

export default router; // change export
