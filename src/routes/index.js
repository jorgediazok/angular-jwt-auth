const { Router } = require('express');
const router = Router();
const User = require('../models/User');

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  const newUser = new User({ email: email, password: password });
  await newUser.save();
  res.send('Sign Up');
});

module.exports = router;
