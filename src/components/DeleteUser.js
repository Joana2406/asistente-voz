// DeleteUser.js
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { deleteUser } from '../utils/userActions';

const DeleteUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    deleteUser(parseInt(id));
    navigate('/admin-users');
  }, [id, navigate]);

  return (
    <div>
      <h1>Deleting User...</h1>
    </div>
  );
};

export default DeleteUser;
