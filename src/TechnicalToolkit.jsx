import React from 'react';
import './TechnicalToolkit.css';

const skillGroups = [
  {
    group: 'Expert, daily use',
    skills: ['Python', 'Java', 'TypeScript']
  },
  {
    group: 'Strong',
    skills: ['React', 'Node.js', 'Flask', 'TensorFlow', 'JavaScript', 'C++']
  },
  {
    group: 'Light experience',
    skills: ['Verilog', 'AutoCAD', 'C', 'Rust']
  }
];

export default function TechnicalToolkit() {
  return (
    <section id="technical-toolkit" className="technical-toolkit-section">
      <div className="container">
        <h2 className="section-title">My Technical Toolkit</h2>
        <div className="measurement-row">
          <div className="measurement-card">
            <span className="measurement-amount">3 cups</span>
            <span className="measurement-label">Expert, daily use</span>
          </div>
          <div className="measurement-card">
            <span className="measurement-amount">2 tbsp</span>
            <span className="measurement-label">Strong</span>
          </div>
          <div className="measurement-card">
            <span className="measurement-amount">1 tsp</span>
            <span className="measurement-label">Light experience</span>
          </div>
        </div>
        <div className="ingredients-columns">
          {skillGroups.map((group) => (
            <div className="ingredients-column" key={group.group}>
              <div className="ingredients-group">{group.group}</div>
              <ul className="ingredients-list">
                {group.skills.map(skill => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 