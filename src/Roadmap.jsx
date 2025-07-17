import React, { useState } from 'react';
import './Roadmap.css';

const defaultSteps = [
  { title: 'Start', icon: '🚀', details: 'Kickoff meeting and planning.' },
  { title: 'Research', icon: '🔍', details: 'Market and user research phase.' },
  { title: 'Design', icon: '🎨', details: 'UI/UX design and prototyping.' },
  { title: 'Development', icon: '💻', details: 'Coding and implementation.' },
  { title: 'Testing', icon: '🧪', details: 'QA and bug fixing.' },
  { title: 'Launch', icon: '🎉', details: 'Product launch and celebration!' },
];

export default function Roadmap({ steps = defaultSteps }) {
  // SVG path dimensions
  const width = 900;
  const height = 220;
  const path = `M 40 110 Q 200 10, 350 110 T 660 110 T 860 110`;

  // Calculate milestone positions along the path
  const getMilestonePos = (i, total) => {
    const t = i / (total - 1);
    // Approximate positions along the path
    const x = 40 + t * (width - 80);
    // Zig-zag: alternate y above/below the path
    const y = 110 + (i % 2 === 0 ? -50 : 50);
    return { x, y };
  };

  const [hovered, setHovered] = useState(null);

  return (
    <div className="roadmap-container">
      <svg width={width} height={height} className="roadmap-svg">
        <path d={path} fill="none" stroke="#8ecae6" strokeWidth="8" strokeLinecap="round" />
        {steps.map((step, i) => {
          const { x, y } = getMilestonePos(i, steps.length);
          return (
            <g key={i}>
              <circle cx={x} cy={y} r="22" fill="#fff" stroke="#219ebc" strokeWidth="4" filter="url(#shadow)" />
              <text x={x} y={y+7} textAnchor="middle" fontSize="22" style={{ pointerEvents: 'none' }}>{step.icon}</text>
              <foreignObject x={x-60} y={y + (i%2===0 ? -110 : 30)} width="120" height="80">
                <div
                  className={`roadmap-hover-card${hovered===i ? ' show' : ''}`}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <strong>{step.title}</strong>
                  <p>{step.details}</p>
                </div>
              </foreignObject>
              <circle
                cx={x} cy={y} r="30"
                fill="transparent"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{ cursor: 'pointer' }}
              />
            </g>
          );
        })}
        <defs>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#023047" floodOpacity="0.2" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
  