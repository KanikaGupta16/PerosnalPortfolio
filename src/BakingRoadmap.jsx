import React, { useState, useRef, useEffect } from 'react';
import './BakingRoadmap.css';

// 3D Baking Icons Components
function CupcakeIcon({ position, scale = 1, onClick, isHovered }) {
  return (
    <group position={position} scale={scale} onClick={onClick}>
      {/* Cupcake base */}
      <mesh>
        <cylinderGeometry args={[0.3, 0.4, 0.2, 8]} />
        <meshStandardMaterial color="#FFB6C1" />
      </mesh>
      {/* Cupcake top */}
      <mesh position={[0, 0.25, 0]}>
        <sphereGeometry args={[0.25, 8, 6]} />
        <meshStandardMaterial color="#FFC0CB" />
      </mesh>
      {/* Sprinkles */}
      {isHovered && <Sparkles count={20} scale={0.5} size={2} speed={0.3} />}
    </group>
  );
}

function RollingPinIcon({ position, scale = 1, onClick, isHovered }) {
  return (
    <group position={position} scale={scale} onClick={onClick}>
      <mesh>
        <cylinderGeometry args={[0.1, 0.1, 0.8, 8]} />
        <meshStandardMaterial color="#DEB887" />
      </mesh>
      {/* Handles */}
      <mesh position={[0, 0.4, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.2, 8]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      <mesh position={[0, -0.4, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.2, 8]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      {isHovered && <Sparkles count={15} scale={0.4} size={1.5} speed={0.2} />}
    </group>
  );
}

function WhiskIcon({ position, scale = 1, onClick, isHovered }) {
  return (
    <group position={position} scale={scale} onClick={onClick}>
      {/* Handle */}
      <mesh position={[0, 0.3, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.6, 8]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      {/* Whisk wires */}
      <mesh position={[0, -0.1, 0]}>
        <sphereGeometry args={[0.15, 8, 6]} />
        <meshStandardMaterial color="#C0C0C0" wireframe />
      </mesh>
      {isHovered && <Sparkles count={12} scale={0.3} size={1} speed={0.25} />}
    </group>
  );
}

function PipingBagIcon({ position, scale = 1, onClick, isHovered }) {
  return (
    <group position={position} scale={scale} onClick={onClick}>
      {/* Bag body */}
      <mesh>
        <coneGeometry args={[0.2, 0.6, 8]} />
        <meshStandardMaterial color="#98FB98" />
      </mesh>
      {/* Tip */}
      <mesh position={[0, -0.35, 0]}>
        <cylinderGeometry args={[0.05, 0.02, 0.1, 8]} />
        <meshStandardMaterial color="#C0C0C0" />
      </mesh>
      {isHovered && <Sparkles count={18} scale={0.4} size={1.8} speed={0.3} />}
    </group>
  );
}

function MixerIcon({ position, scale = 1, onClick, isHovered }) {
  return (
    <group position={position} scale={scale} onClick={onClick}>
      {/* Mixer body */}
      <mesh>
        <cylinderGeometry args={[0.15, 0.15, 0.4, 8]} />
        <meshStandardMaterial color="#FFA07A" />
      </mesh>
      {/* Beaters */}
      <mesh position={[0, -0.3, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.4, 8]} />
        <meshStandardMaterial color="#C0C0C0" />
      </mesh>
      <mesh position={[0.05, -0.3, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.4, 8]} />
        <meshStandardMaterial color="#C0C0C0" />
      </mesh>
      {isHovered && <Sparkles count={25} scale={0.5} size={2} speed={0.4} />}
    </group>
  );
}

// Recipe Card Component
function RecipeCard({ experience, isVisible, position, onClose }) {
  if (!isVisible) return null;

  return (
    <div className="recipe-card" style={{ left: position.x, top: position.y }}>
      <button className="recipe-close-btn" onClick={onClose}>×</button>
      <div className="recipe-header">
        <h3>{experience.title}</h3>
        <div className="recipe-icon">{experience.icon}</div>
      </div>
      
      <div className="recipe-section">
        <h4>🍳 Ingredients (Responsibilities)</h4>
        <ul>
          {experience.responsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
      </div>
      
      <div className="recipe-section">
        <h4>📝 Instructions (Achievements)</h4>
        <ol>
          {experience.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ol>
      </div>
      
      <div className="recipe-footer">
        <span className="baking-time">⏰ {experience.duration}</span>
        <span className="difficulty">⭐ {experience.difficulty}</span>
      </div>
    </div>
  );
}

// 3D Scene Component
function BakingScene({ experiences, onIconHover, hoveredIndex }) {
  const iconComponents = [
    CupcakeIcon,
    RollingPinIcon,
    WhiskIcon,
    PipingBagIcon,
    MixerIcon
  ];

  // Calculate positions along a curved path
  const getIconPosition = (index, total) => {
    const t = index / (total - 1);
    const x = (t - 0.5) * 8; // Spread across -4 to 4
    const y = Math.sin(t * Math.PI) * 0.5; // Subtle curve
    const z = 0;
    return [x, y, z];
  };

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <pointLight position={[-5, 5, 5]} intensity={0.4} color="#FFB6C1" />
      
      {experiences.map((experience, index) => {
        const IconComponent = iconComponents[index % iconComponents.length];
        const position = getIconPosition(index, experiences.length);
        const isHovered = hoveredIndex === index;
        
        return (
          <IconComponent
            key={index}
            position={position}
            scale={isHovered ? 1.2 : 1}
            onClick={() => onIconHover(index)}
            isHovered={isHovered}
          />
        );
      })}
    </Canvas>
  );
}

// Main Component
export default function BakingRoadmap() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  // Sample experience data - you can customize this
  const experiences = [
    {
      title: "Frontend Developer",
      icon: "🧁",
      responsibilities: [
        "Developed responsive web applications",
        "Collaborated with design and backend teams",
        "Optimized performance and user experience"
      ],
      achievements: [
        "Reduced page load time by 40%",
        "Implemented new component library",
        "Mentored junior developers"
      ],
      duration: "2 years",
      difficulty: "Intermediate"
    },
    {
      title: "UI/UX Designer",
      icon: "🥖",
      responsibilities: [
        "Created user interface designs",
        "Conducted user research and testing",
        "Developed design systems"
      ],
      achievements: [
        "Increased user engagement by 60%",
        "Designed award-winning mobile app",
        "Established design guidelines"
      ],
      duration: "1.5 years",
      difficulty: "Advanced"
    },
    {
      title: "Full Stack Engineer",
      icon: "🥨",
      responsibilities: [
        "Built end-to-end web applications",
        "Managed database architecture",
        "Deployed and maintained applications"
      ],
      achievements: [
        "Launched 3 major products",
        "Improved system reliability to 99.9%",
        "Led technical architecture decisions"
      ],
      duration: "3 years",
      difficulty: "Expert"
    },
    {
      title: "Product Manager",
      icon: "🍰",
      responsibilities: [
        "Defined product strategy and roadmap",
        "Coordinated cross-functional teams",
        "Analyzed market trends and user feedback"
      ],
      achievements: [
        "Increased revenue by 200%",
        "Launched successful MVP in 6 months",
        "Built high-performing product team"
      ],
      duration: "2.5 years",
      difficulty: "Advanced"
    },
    {
      title: "Tech Lead",
      icon: "🎂",
      responsibilities: [
        "Led technical architecture decisions",
        "Mentored development team",
        "Ensured code quality and best practices"
      ],
      achievements: [
        "Scaled team from 5 to 25 developers",
        "Implemented CI/CD pipeline",
        "Reduced technical debt by 70%"
      ],
      duration: "4 years",
      difficulty: "Expert"
    }
  ];

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleIconHover = (index) => {
    setHoveredIndex(index);
    
    // Calculate card position based on icon position
    if (containerRef.current) {
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const t = index / (experiences.length - 1);
      
      if (isMobile) {
        // On mobile, position card at bottom center
        setCardPosition({ x: rect.width / 2, y: rect.height * 0.8 });
      } else {
        // On desktop, position card near the icon
        const x = rect.width * (0.2 + t * 0.6); // 20% to 80% of container width
        const y = rect.height * 0.3; // 30% from top
        setCardPosition({ x, y });
      }
    }
  };

  const handleCloseCard = () => {
    setHoveredIndex(null);
  };

  useEffect(() => {
    const handleResize = () => {
      if (hoveredIndex !== null) {
        handleIconHover(hoveredIndex);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [hoveredIndex, isMobile]);

  return (
    <div className="baking-roadmap" ref={containerRef}>
      <div className="baking-header">
        <h2>🍪 My Baking Journey</h2>
        <p>{isMobile ? 'Tap the baking tools to see my recipe for success!' : 'Hover over the baking tools to see my recipe for success!'}</p>
      </div>
      
      <div className="baking-scene-container">
        <BakingScene 
          experiences={experiences}
          onIconHover={handleIconHover}
          hoveredIndex={hoveredIndex}
        />
      </div>
      
      <RecipeCard
        experience={hoveredIndex !== null ? experiences[hoveredIndex] : null}
        isVisible={hoveredIndex !== null}
        position={cardPosition}
        onClose={handleCloseCard}
      />
      
      <div className="baking-footer">
        <p>✨ Each tool represents a different chapter in my professional journey</p>
      </div>
    </div>
  );
} 