// src/components/EditUser.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './EditUser.css';

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/users/${id}`);
        setUsername(response.data.username);
        setEmail(response.data.email);
      } catch (error) {
        setMessage('Error al cargar datos del usuario.');
      }
    };
    fetchUser();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/users/${id}`, {
        username,
        email,
      });
      setMessage('Usuario actualizado exitosamente.');
      navigate('/users');
    } catch (error) {
      setMessage('Error al actualizar usuario.');
    }
  };

  return (
    <div className="edit-user-container">
      <h1 className="edit-user-title">Editar Usuario</h1>
      <form onSubmit={handleSubmit} className="edit-user-form">
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="edit-user-input"
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="edit-user-input"
        />
        <button type="submit" className="edit-user-button">Actualizar</button>
        {message && <p className="edit-user-message">{message}</p>}
      </form>
    </div>
  );
};

export default EditUser;
