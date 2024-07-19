const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Configuración
app.use(express.json()); // Para manejar JSON en las solicitudes

// Conectar a la base de datos (asegúrate de reemplazar el URI con el correcto)
mongoose.connect('mongodb://localhost:27017/tu-base-de-datos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Usar las rutas
app.use('/api', userRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
