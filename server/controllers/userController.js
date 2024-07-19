// controllers/usuarioController.js
const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');

const registrarUsuario = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const usuario = await Usuario.createUsuario(username, email, password);
    res.status(201).json({ message: 'Usuario registrado exitosamente', usuario });
  } catch (err) {
    console.error('Error al registrar usuario:', err); // Log de error
    res.status(400).json({ error: 'Error al registrar el usuario', details: err.message });
  }
};

// Nueva función para actualizar configuración del usuario
const actualizarConfiguracion = async (req, res) => {
  const { userId, voiceSettings, displayName } = req.body;

  try {
    // Encuentra el usuario por ID y actualiza sus datos
    const usuario = await Usuario.findByIdAndUpdate(
      userId,
      { voiceSettings, displayName },
      { new: true, runValidators: true }
    );

    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.status(200).json({ message: 'Configuración actualizada exitosamente', usuario });
  } catch (err) {
    console.error('Error al actualizar configuración:', err); // Log de error
    res.status(400).json({ error: 'Error al actualizar configuración', details: err.message });
  }
};

module.exports = { registrarUsuario, actualizarConfiguracion };
