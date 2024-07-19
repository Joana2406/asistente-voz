// src/components/Home.js
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/login');
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome</h1>
      <p className="home-description">IAC voice!</p>
      <div className="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <button onClick={handleContinue} className="continue-button">
        Continuar
      </button>
      <div className="links">
        <Link to="/user" className="dashboard-link">Ir al Dashboard de Usuario</Link>
      </div>
    </div>
  );
};

export default Home;
