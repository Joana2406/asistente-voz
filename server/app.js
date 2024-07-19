const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importa el módulo cors
const usuarioRoutes = require('./routes/usuarioRoutes');

const app = express();

// Configurar CORS
app.use(cors()); // Permite solicitudes de cualquier origen por defecto

// Middleware para parsear JSON
app.use(express.json());

// Usar las rutas
app.use('/api/usuarios', usuarioRoutes);

// Configurar el puerto
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/tu_base_de_datos', { // Asegúrate de incluir el nombre de tu base de datos
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error de conexión a MongoDB:', err));
