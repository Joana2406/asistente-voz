// controllers/usuarioController.js
const Usuario = require('../models/usuario');

// Función para registrar un nuevo usuario
const registrarUsuario = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const usuario = await Usuario.createUsuario(username, email, password);
    res.status(201).json({ message: 'Usuario registrado exitosamente', usuario });
  } catch (err) {
    res.status(400).json({ error: 'Error al registrar el usuario', details: err.message });
  }
};

module.exports = { registrarUsuario };
