import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Configuracion from './components/configuracion'; // Asegúrate de usar minúsculas si el archivo se llama configuracion.js
import AdminUsers from './components/AdminUsers';
import EditUser from './components/EditUser';
import DeleteUser from './components/DeleteUser';
import User from './components/User'; // Ajusta según la ubicación real de User.js

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/configuracion" element={<Configuracion />} />
        <Route path="/admin-users" element={<AdminUsers />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
        <Route path="/delete-user/:id" element={<DeleteUser />} />
        <Route path="/user" element={<User />} />

      </Routes>
    </Router>
  );
}

export default App;
