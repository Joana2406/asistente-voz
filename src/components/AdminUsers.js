import React, { useState, useEffect } from 'react';
import { getUsers, saveUser, deleteUser } from '../utils/userActions';
import UserForm from './UserForm';
import './AdminUsers.css'; // Asegúrate de importar el archivo CSS

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const usersData = getUsers();
    setUsers(usersData);
  }, []);

  const handleDelete = (id) => {
    deleteUser(id);
    setUsers(getUsers()); // Update the list after deletion
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleFormSubmit = (user) => {
    saveUser(user);
    setEditingUser(null);
    setUsers(getUsers()); // Update the list after form submission
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="admin-container">
      <h1>Admin - User Management</h1>
      
      <div>
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      
      <UserForm user={editingUser} onSubmit={handleFormSubmit} />

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleEdit(user)}>Edit</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUsers;
