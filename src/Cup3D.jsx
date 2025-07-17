import React from 'react';
import './Cup3D.css';

const Cup3D = () => {
  return (
    <div className="cup-3d-container">
      <div className="cup">
        <div className="cup-body">
          <div className="cup-rim"></div>
          <div className="cup-handle"></div>
          <div className="steam steam-1"></div>
          <div className="steam steam-2"></div>
          <div className="steam steam-3"></div>
        </div>
      </div>
      <div className="saucer">
        <div className="saucer-rim"></div>
        <div className="saucer-center"></div>
      </div>
      <div className="reflection"></div>
    </div>
  );
};

export default Cup3D; 