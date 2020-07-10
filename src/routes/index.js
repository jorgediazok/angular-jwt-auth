const { Router } = require('express');
const router = Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.post('/signup', async (req, res) => {
  //Guardo el usuario dentro de la base de datos
  const { email, password } = req.body;
  const newUser = new User({ email: email, password: password });
  await newUser.save();
  //Creo un token con el id y una key que podría estar en una variable de entorno
  const token = jwt.sign({ _id: newUser._id }, 'secretkey');
  //Devuelvo el token al cliente
  res.status(200).json({ token });
});

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  //Buscar si el correo existe en la base de datos, si lo encuentra guardalo en una constante user
  const user = await User.findOne({ email: email });
  //Si no encuentra el usuario
  if (!user) return res.status(401).send('The email does not exist');
  if (user.password !== password) return res.status(401).send('Wrong Password');
  //Si paso por estas dos cosas y todo ok, me devuelve otro token
  const token = jwt.sign({ _id: user._id }, 'secretkey');
  res.status(200).json({ token });
});

router.get('/tasks', (req, res) => {
  res.json([
    {
      _id: 1,
      name: 'Task One',
      description: 'lorem ipsum',
      date: '2020-07-09T23:06:05.2112',
    },
    {
      _id: 2,
      name: 'Task Two',
      description: 'lorem ipsum',
      date: '2020-07-09T23:06:06.2112',
    },
    {
      _id: 3,
      name: 'Task Three',
      description: 'lorem ipsum',
      date: '2020-07-09T23:06:07.2112',
    },
  ]);
});

module.exports = router;
