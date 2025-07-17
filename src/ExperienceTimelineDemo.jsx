import React from 'react';
import ExperienceTimeline from './ExperienceTimeline';
import './ExperienceTimeline.css';

export default function ExperienceTimelineDemo() {
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
          🍪 Experience Timeline Demo 🍪
        </h1>
        <p>Single-line timeline with flip cards and hover animations</p>
      </div>
      
      <ExperienceTimeline />
    </div>
  );
} 