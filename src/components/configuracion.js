// src/components/Configuracion.js
import React, { useState } from 'react';
import axios from 'axios';
import './configuracion.css';

const Configuracion = () => {
  const [name, setName] = useState('');
  const [language, setLanguage] = useState('es'); // Valor predeterminado 'es' para Español
  const [isLoading, setIsLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const userId = localStorage.getItem('userId');
      await axios.put('http://localhost:3003/update-settings', {
        userId,
        voiceSettings: 'Recorded Voice Data',
        displayName: name,
        language,
      });
      alert('Configuración actualizada');
    } catch (error) {
      console.error('Error al actualizar configuración:', error);
      alert('Error al actualizar configuración');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVoiceConfigClick = () => {
    setIsRecording(true);
    // Simulate recording process
    setTimeout(() => {
      setIsRecording(false);
      alert('Voz configurada exitosamente');
    }, 5000);
  };

  return (
    <div className="configuracion-container">
      <h1>Condiciones de uso</h1>
      <p>
        ¡IAC voice, El robot asistente virtual es más que una simple voz
        dulce. También puede aprender por sí solo cómo terminar los trabajos
        mediante una orden. Interactivo por diseño, el robot escucha los
        comandos de voz y responde. Está impulsado por Inteligencia
        artificial (IA).
      </p>
      <h2>Inicio</h2>
      <p>Accede a IAC voice en el camino, consulta tus pendientes y tus actividades.</p>
      <h2>Comunicate</h2>
      <p>Mantente virtualmente conectado desde cualquier lugar</p>
      <h2>¿Cómo te llamas?</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Introduce tu nombre"
          className="configuracion-input"
        />
        <button type="submit" className="configuracion-button">Enviar</button>
      </form>
      <h2>Idioma</h2>
      <select value={language} onChange={handleLanguageChange} className="configuracion-select">
        <option value="es">Español</option>
        <option value="en">Inglés</option>
        <option value="fr">Francés</option>
        <option value="de">Alemán</option>
        <option value="zh">Chino</option>
        <option value="ja">Japonés</option>
      </select>
      <h2>Configura tu ID de voz</h2>
      <button onClick={handleVoiceConfigClick} className="configuracion-button">
        {isRecording ? (
          <div className="spinner-container">
            <div className="spinner1"></div>
            <div className="spinner"></div>
          </div>
        ) : (
          <img src="/assets/microfono.png" alt="Microphone" />
        )}
      </button>
      {isLoading && (
        <div className="loader-box">
          <div className="loading-wrapper">
            <div className="loader">
              <div className="loader-inner"></div>
            </div>
          </div>
        </div>
      )}
      <button className="configuracion-button">EMPEZAR</button>
    </div>
  );
};

export default Configuracion;
