import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="about-background-overlay"></div>
      <div className="about-header">
        <h2>About Me</h2>
        <p>Full-Stack Developer with a passion for AI and creative problem-solving</p>
      </div>
      <div className="about-container">
        <div className="recipe-container">
          <div className="recipe-header">
            <div className="recipe-title">
              <h3>Full-Stack Developer with a passion for AI and creative problem-solving.</h3>
            </div>
            <div className="recipe-meta">
              <div className="recipe-meta-item big-meta">
                <span className="meta-label">Prep Time:</span>
                <span className="meta-value">4 Years @ Penn State (Graduating 2026)</span>
              </div>
              <div className="recipe-meta-item big-meta">
                <span className="meta-label">Difficulty:</span>
                <span className="meta-value">Advanced (GPA: 3.87)</span>
              </div>
            </div>
          </div>
          <div className="recipe-content">
            <div className="ingredients-row">
              <div className="ingredients-section ingredients-bg">
                <div className="ingredients-head-bg">
                  <h4 className="section-header">Technical Ingredients</h4>
                </div>
                <div className="ingredients-grid">
                  <div className="ingredients-column">
                    <ul className="ingredients-list">
                      <li>Computer Science degree + Product Development specialization</li>
                      <li>Python, Java, TypeScript, React, Flask expertise</li>
                      <li>Experience with NLP, OCR, computer vision</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="ingredients-section ingredients-bg">
                <div className="ingredients-head-bg">
                  <h4 className="section-header">Personal Ingredients</h4>
                </div>
                <div className="ingredients-grid">
                  <div className="ingredients-column">
                    <ul className="ingredients-list">
                      <li>Passion for solving complex problems</li>
                      <li>Creativity, patience, and leadership</li>
                      <li>Entrepreneurial drive (startups + hackathons)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="nutrition-facts">
              <h4 className="section-header">📊 Nutrition Facts</h4>
              <div className="nutrition-grid">
                <div className="nutrition-item">
                  <span className="nutrition-label">Students Mentored</span>
                  <span className="nutrition-value">750+</span>
                </div>
                <div className="nutrition-item">
                  <span className="nutrition-label">4+ Club leadership positions</span>
                  <span className="nutrition-value">+70%</span>
                </div>
                <div className="nutrition-item">
                  <span className="nutrition-label">Programming Languages</span>
                  <span className="nutrition-value">8+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe; 