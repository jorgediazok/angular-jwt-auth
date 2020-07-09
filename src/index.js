//Para arrancar el servidor

const express = require('express');
const app = express();
require('./database');

//Para que entienda el req.body lo que estoy enviando desde post
app.use(express.json());

//Importando las rutas para usar
app.use('/api', require('./routes/index'));

app.listen(3000);
console.log('Server on Port', 3000);
