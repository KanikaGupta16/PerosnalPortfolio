import React from 'react';
import './TechnicalToolkit.css';

const skillGroups = [
  {
    group: 'Expert',
    skills: ['Python', 'Java', 'React', 'Flask', 'TensorFlow']
  },
  {
    group: 'Proficient',
    skills: ['TypeScript', 'Node.js', 'JavaScript', 'SQL']
  },
  {
    group: 'Familiar',
    skills: ['C++', 'Verilog', 'AutoCAD', 'etc.']
  }
];

export default function TechnicalToolkit() {
  return (
    <section id="technical-toolkit" className="technical-toolkit-section">
      <div className="container">
        <h2 className="section-title">My Technical Toolkit</h2>
        <div className="measurement-row">
          <div className="measurement-card">
            <span className="measurement-amount">Expert</span>
            <span className="measurement-label">Mastery Level</span>
          </div>
          <div className="measurement-card">
            <span className="measurement-amount">Proficient</span>
            <span className="measurement-label">Strong Skills</span>
          </div>
          <div className="measurement-card">
            <span className="measurement-amount">Familiar</span>
            <span className="measurement-label">Basic Knowledge</span>
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