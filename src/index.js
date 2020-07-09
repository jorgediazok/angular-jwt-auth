//Para arrancar el servidor

const express = require('express');
const app = express();
require('./database');

app.listen(3000);
console.log('Server on Port', 3000);
