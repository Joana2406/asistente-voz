// models/usuario.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const usuarioSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Método para agregar un usuario
usuarioSchema.statics.createUsuario = async function(username, email, password) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  
  const nuevoUsuario = new this({
    username,
    email,
    passwordHash: hashedPassword,
  });

  return nuevoUsuario.save();
};

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
