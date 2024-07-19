// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { username, password });
      localStorage.setItem('token', response.data.token); // Guardar token en localStorage
      navigate('/dashboard'); // Redirigir a otra página
    } catch (error) {
      alert('Error al iniciar sesión');
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Inicio de sesión</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <div className="checkbox-container">
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
            className="checkbox"
          />
          <label htmlFor="rememberMe" className="checkbox-label">Recuérdame</label>
        </div>
        <button type="submit" className="login-button">Iniciar sesión</button>
        <a href="#" className="forgot-password">¿Olvidaste tu contraseña?</a>
        <div className="signup-container">
          <span className="signup-text">¿No tienes una cuenta? </span>
          <a href="#" className="signup-link">Regístrate</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
