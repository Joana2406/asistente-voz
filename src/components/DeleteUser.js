// src/components/DeleteUser.js
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DeleteUser = ({ id }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`);
      navigate('/users');
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
    }
  };

  return (
    <div>
      <button onClick={handleDelete}>Eliminar Usuario</button>
    </div>
  );
};

export default DeleteUser;
