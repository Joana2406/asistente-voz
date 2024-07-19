// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import EditUser from './components/EditUser';
import DeleteUser from './components/DeleteUser'; // Asegúrate de definir cómo usar este componente

// Elimina o comenta la importación y la ruta de Dashboard si no lo has creado aún.
// import Dashboard from './components/Dashboard'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Elimina o comenta la ruta de Dashboard si no lo has creado aún. */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
