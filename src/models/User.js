const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  email: String,
  password: String,
});

modules.exports = model('User', userSchema);
