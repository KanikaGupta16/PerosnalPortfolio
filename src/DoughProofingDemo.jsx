import React from 'react';
import DoughProofingJourney from './DoughProofingJourney';
import './DoughProofingJourney.css';

export default function DoughProofingDemo() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #2F1B14 0%, #3E2723 50%, #2F1B14 100%)',
      padding: '20px'
    }}>
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '2rem',
        color: '#F5DEB3'
      }}>
        <h1 style={{ color: '#DEB887', marginBottom: '1rem' }}>
          🌾 Dough Proofing Journey Demo 🌾
        </h1>
        <p>Interactive 3D dough proofing experience roadmap</p>
      </div>
      
      <DoughProofingJourney />
    </div>
  );
} 