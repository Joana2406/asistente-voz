// server/userRoutes.js
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { registrarUsuario, actualizarConfiguracion } = require('../controllers/usuarioController');
const User = require('../models/User'); // Asegúrate de que la ruta sea correcta

const router = express.Router();

// Ruta para registrar un usuario (añadida al controlador)
router.post('/registrar', registrarUsuario);

// Ruta para iniciar sesión
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Buscar usuario
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'Usuario no encontrado' });
    }

    // Comparar contraseñas
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Contraseña incorrecta' });
    }

    // Crear token
    const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Error al iniciar sesión', error });
  }
});

// Ruta para actualizar configuración del usuario
router.put('/update-settings', async (req, res) => {
  const { userId, voiceSettings, displayName } = req.body;

  try {
    // Encuentra el usuario por ID y actualiza sus datos
    const usuario = await User.findByIdAndUpdate(
      userId,
      { voiceSettings, displayName },
      { new: true, runValidators: true }
    );

    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.status(200).json({ message: 'Configuración actualizada exitosamente', usuario });
  } catch (err) {
    console.error('Error al actualizar configuración:', err);
    res.status(400).json({ error: 'Error al actualizar configuración', details: err.message });
  }
});

module.exports = router;
