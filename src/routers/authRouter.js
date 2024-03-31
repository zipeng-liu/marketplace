import express from 'express';
const router = express.Router();

router.get('/login', (req, res) => {
  res.render('login.ejs');
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  res.send(`Login successful! Welcome, ${username}!`);
});

export default router;
   