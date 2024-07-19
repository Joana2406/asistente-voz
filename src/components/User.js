// src/components/User.js
import React, { useState } from 'react';
import './User.css';
import Calendar from 'react-calendar'; // Asegúrate de haber instalado este paquete

const User = () => {
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const handleVoiceAction = () => {
    // Lógica para la acción de voz aquí
    alert('Botón de acción de voz presionado');
  };

  const handleCalendarClick = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <div className="user-container">
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
      <button onClick={handleVoiceAction} className="voice-button">
        Toca el micrófono o prueba decir 'Hola Jac'
      </button>
      <div className="calendar-button">
        <button onClick={handleCalendarClick} className="calendar-toggle-button">
          📅 Calendario
        </button>
        {showCalendar && (
          <div className="calendar-container">
            <Calendar value={date} onChange={setDate} inline showWeek />
          </div>
        )}
      </div>
      <div className="icon-row">
        <div className="icon">🎵</div>
        <div className="icon">📞</div>
        <div className="icon">⏰</div>
      </div>
      <div className="icon-row">
        <div className="icon">🛒</div>
        <div className="icon">🏋️</div>
        <div className="icon">📅</div>
      </div>
    </div>
  );
};

export default User;
