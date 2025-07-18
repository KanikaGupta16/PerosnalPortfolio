import React, { useState } from 'react';
import './ExperienceTimeline.css';

// Company Logo Component
function CompanyLogo({ company, size = 50 }) {
  const getLogoStyle = (company) => {
    const baseStyle = {
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: '8px', // Changed from 50% to 8px for square with rounded corners
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: `${size * 0.4}px`,
      fontWeight: 'bold',
      color: 'white',
      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
      border: '2px solid #FFB6C1',
      backgroundSize: '80% 80%', // Increased from 70% to 80% for better fit
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      overflow: 'hidden',
      backgroundColor: 'white'
    };

    // Company-specific logos and styles
    const companyStyles = {
      'Snapchat': {
        backgroundImage: 'url("./images/snapchat.jpg")'
      },
      'Ernst & Young': {
        backgroundImage: 'url("./images/ey.jpg")'
      },
      'Penn State': {
        backgroundImage: 'url("./images/psu.png")',
        backgroundColor: '#041E42',
        
      },
      'Google': {
        backgroundImage: 'url("./images/gdsc.png")'
      },
      'The Equal Edge': {
        background: 'linear-gradient(135deg, #FF6B9D, #C44569)',
        color: '#fff',
        backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'%23fff\'%3E%3Cpath d=\'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z\'/%3E%3C/svg%3E")'
      },
      'Unitru': {
        backgroundImage: 'url("./images/unitru.png")'
      }
    };

    return { ...baseStyle, ...(companyStyles[company] || { background: 'linear-gradient(135deg, #6C5CE7, #A29BFE)' }) };
  };

  const getCompanyInitials = (company) => {
    if (company === 'Snapchat') return '';
    if (company === 'Ernst & Young') return '';
    if (company === 'Penn State') return 'PS';
    if (company === 'Google') return '';
    if (company === 'The Equal Edge') return 'EE';
    if (company === 'Unitru') return '';
    return company.split(' ').map(word => word[0]).join('').slice(0, 2);
  };

  return (
    <div style={getLogoStyle(company)}>
      {getCompanyInitials(company)}
    </div>
  );
}

// Experience Card Component
function ExperienceCard({ experience, index, isHovered, onHover, onLeave }) {
  return (
    <div 
      className={`experience-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={onLeave}
    >
      {/* Card Front */}
      <div className="card-front">
        <div className="card-header">
          <CompanyLogo company={experience.organization} size={50} />
          <h3>{experience.role}</h3>
        </div>
        <div className="organization">{experience.organization}</div>
        <div className="time-period">{experience.period}</div>
      </div>
      
      {/* Card Back (Achievements) */}
      <div className="card-back">
        <ul>
          {experience.achievements.map((achievement, achievementIndex) => (
            <li key={achievementIndex}>{achievement}</li>
          ))}
        </ul>
      </div>
      
      {/* Sprinkle effect on hover */}
      {isHovered && (
        <div className="sprinkles">
          <span>🍰</span>
          <span>🧁</span>
          <span>🎂</span>
          <span>🍪</span>
        </div>
      )}
    </div>
  );
}

// Main Component
export default function ExperienceTimeline() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const experiences = [
    {
      role: "AR Game Developer",
      organization: "Snapchat",
      period: "Jan 2025 – Present",
      achievements: [
        "Won $35,000 funding to develop AR fighting game using Snap AR tech, Unity, TypeScript",
        "Built multiplayer, gesture-based combat with Lens Studio"
      ]
    },
    {
      role: "Software Development Intern",
      organization: "Ernst & Young",
      period: "Jun 2024 – Aug 2024",
      achievements: [
        "Built AI web apps with Flask, transformers, OCR, NLP; used SQLite",
        "Created email summarizer improving internal communication"
      ]
    },
    {
      role: "Lead Teaching Assistant",
      organization: "Penn State",
      period: "Jan 2023 – Present",
      achievements: [
        "Managed 15 TAs, taught 750+ students in Python, Java, Oracle",
        "Taught courses like Data Structures, Algorithms, and Computational Fundamentals"
      ]
    },
    {
      role: "Vice President",
      organization: "Google",
      period: "Aug 2023 – May 2024",
      achievements: [
        "Increased club participation by 70% via cross-club initiatives",
        "Organized AI/React workshops for 200+, ran 48-hour hackathon yielding 15+ projects"
      ]
    },
    {
      role: "Founder & CEO",
      organization: "The Equal Edge",
      period: "Sep 2023 – Present",
      achievements: [
        "Founded edtech startup focused on bridging educational gaps",
        "Secured initial funding and built MVP with 100+ beta users"
      ]
    },
    {
      role: "SWE Intern",
      organization: "Unitru",
      period: "May 2023 – Aug 2023",
      achievements: [
        "Developed full-stack web applications using React, Node.js, and MongoDB",
        "Implemented RESTful APIs and database optimization techniques"
      ]
    }
  ];

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const handleLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="experience-timeline">
      <div className="timeline-header">
        <h2>My Professional Journey</h2>
        <p>Hover over each experience to see my achievements!</p>
      </div>
      
      <div className="timeline-container">
        {/* Timeline line */}
        <div className="timeline-line"></div>
        
        {/* Experience cards in flexible grid */}
        <div className="cards-grid">
          {experiences.map((experience, index) => (
            <div key={index} className="card-wrapper">
              <ExperienceCard
                experience={experience}
                index={index}
                isHovered={hoveredIndex === index}
                onHover={handleHover}
                onLeave={handleLeave}
              />
            </div>
          ))}
        </div>
      </div>
      
      <div className="timeline-footer">
        <p>✨ Each experience has shaped my journey from classroom to boardroom</p>
      </div>
    </div>
  );
} 