import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.render('login.ejs');
});

router.post('/', (req, res) => {
  const { username, password } = req.body;
  // Perform login logic here
  res.send(`Login successful! Welcome, ${username}!`);
});

export default router;
