// src/components/VoiceAssistant.js
import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const VoiceAssistant = () => {
  const { transcript, resetTranscript, listening } = useSpeechRecognition();

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <span>El navegador no soporta reconocimiento de voz.</span>;
  }

  return (
    <div>
      <button onClick={SpeechRecognition.startListening}>Iniciar</button>
      <button onClick={SpeechRecognition.stopListening}>Detener</button>
      <button onClick={resetTranscript}>Reiniciar</button>
      <p>{listening ? 'Escuchando...' : 'No escuchando'}</p>
      <p>{transcript}</p>
    </div>
  );
};

export default VoiceAssistant;
