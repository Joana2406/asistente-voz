// app.js o server.js
const express = require('express');
const usuarioRoutes = require('./routes/usuarioRoutes');

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Usar las rutas
app.use('/api/usuarios', usuarioRoutes);

// Configurar el puerto
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error de conexión a MongoDB:', err));