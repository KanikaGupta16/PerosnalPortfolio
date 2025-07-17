import React from 'react';
import BakingRoadmap from './BakingRoadmap';
import './BakingRoadmap.css';

export default function BakingDemo() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)',
      padding: '20px'
    }}>
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '2rem',
        color: '#E0E0E0'
      }}>
        <h1 style={{ color: '#FFB6C1', marginBottom: '1rem' }}>
          🍪 Baking Journey Demo 🍪
        </h1>
        <p>Interactive 3D baking-themed experience roadmap</p>
      </div>
      
      <BakingRoadmap />
    </div>
  );
} 