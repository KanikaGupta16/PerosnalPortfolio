import React from 'react';
import './ClassroomToBoardroom.css';

// Recipe Card Component for each experience stage
function ExperienceCard({ experience, index }) {
  return (
    <div className="experience-card">
      <div className="card-header">
        <div className="stage-icon">{experience.icon}</div>
        <h3>{experience.title}</h3>
        <div className="stage-number">{index + 1}</div>
      </div>
      
      <div className="card-content">
        <div className="ingredients-section">
          <h4>📚 Skills & Knowledge</h4>
          <ul>
            {experience.skills.map((skill, skillIndex) => (
              <li key={skillIndex}>{skill}</li>
            ))}
          </ul>
        </div>
        
        <div className="process-section">
          <h4>🚀 Growth & Achievements</h4>
          <ol>
            {experience.achievements.map((achievement, achievementIndex) => (
              <li key={achievementIndex}>{achievement}</li>
            ))}
          </ol>
        </div>
      </div>
      
      <div className="card-footer">
        <span className="duration">⏰ {experience.duration}</span>
        <span className="environment">🏢 {experience.environment}</span>
      </div>
    </div>
  );
}

// Main Component
export default function ClassroomToBoardroom() {
  // Experience data representing the journey from classroom to boardroom
  const experiences = [
    {
      title: "Student Foundation",
      icon: "📖",
      skills: [
        "Computer Science fundamentals",
        "Programming languages (Python, Java)",
        "Data structures & algorithms",
        "Mathematics & logic"
      ],
      achievements: [
        "Maintained 3.87/4.0 GPA",
        "Completed core CS curriculum",
        "Built first programming projects",
        "Developed problem-solving mindset"
      ],
      duration: "2022-2024",
      environment: "University"
    },
    {
      title: "Skill Development",
      icon: "🧪",
      skills: [
        "Web development frameworks",
        "Database design & SQL",
        "Version control (Git)",
        "Collaboration tools"
      ],
      achievements: [
        "Mastered React & Node.js",
        "Created full-stack applications",
        "Learned agile methodologies",
        "Started open source contributions"
      ],
      duration: "2023-2024",
      environment: "Learning Labs"
    },
    {
      title: "Project Leadership",
      icon: "🥣",
      skills: [
        "Team coordination",
        "Project management",
        "Technical architecture",
        "Code review & mentoring"
      ],
      achievements: [
        "Led development teams of 5+ members",
        "Delivered 3 major applications",
        "Mentored junior developers",
        "Established coding standards"
      ],
      duration: "2024-2025",
      environment: "Project Teams"
    },
    {
      title: "Professional Growth",
      icon: "🫧",
      skills: [
        "Business acumen",
        "Strategic thinking",
        "Client communication",
        "Industry best practices"
      ],
      achievements: [
        "Increased team productivity by 40%",
        "Reduced system downtime by 60%",
        "Improved user satisfaction scores",
        "Led cross-functional initiatives"
      ],
      duration: "2025-2026",
      environment: "Corporate"
    },
    {
      title: "Innovation & Strategy",
      icon: "🔥",
      skills: [
        "Product strategy",
        "Innovation management",
        "Market analysis",
        "Executive communication"
      ],
      achievements: [
        "Launched innovative product features",
        "Drove technical strategy decisions",
        "Expanded business partnerships",
        "Mentored future leaders"
      ],
      duration: "2026-2027",
      environment: "Leadership"
    },
    {
      title: "Boardroom Impact",
      icon: "🍞",
      skills: [
        "Executive leadership",
        "Strategic vision",
        "Organizational transformation",
        "Industry influence"
      ],
      achievements: [
        "Led digital transformation initiatives",
        "Achieved industry recognition",
        "Scaled teams to 50+ developers",
        "Created lasting organizational impact"
      ],
      duration: "2027+",
      environment: "Executive"
    }
  ];

  return (
    <div className="classroom-to-boardroom">
      <div className="journey-header">
        <h2>📚 From Classroom to Boardroom</h2>
        <p>My professional journey through different stages of growth and development</p>
      </div>
      
      <div className="journey-timeline">
        {experiences.map((experience, index) => (
          <div key={index} className="timeline-item">
            <ExperienceCard experience={experience} index={index} />
            
            {/* Connection line between cards (except for last one) */}
            {index < experiences.length - 1 && (
              <div className="timeline-connector">
                <div className="connector-line"></div>
                <div className="connector-icon">➡️</div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="journey-footer">
        <p>✨ Each stage represents a milestone in my professional development journey</p>
      </div>
    </div>
  );
} 