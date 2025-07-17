import React, { useState, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, Sparkles, Text } from '@react-three/drei';
import './DoughProofingJourney.css';

// 3D Dough Proofing Elements - Enhanced and Bigger
function FlourBag({ position, scale = 1, onClick, isHovered }) {
  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.2}>
      <group position={position} scale={scale * 1.5} onClick={onClick}>
        {/* Flour bag body - bigger and more detailed */}
        <mesh>
          <boxGeometry args={[0.6, 0.9, 0.3]} />
          <meshStandardMaterial color="#F5F5DC" roughness={0.8} />
        </mesh>
        {/* Bag opening - more realistic */}
        <mesh position={[0, 0.5, 0]}>
          <cylinderGeometry args={[0.25, 0.25, 0.15, 8]} />
          <meshStandardMaterial color="#DEB887" roughness={0.6} />
        </mesh>
        {/* Bag folds */}
        <mesh position={[0.2, 0.2, 0]}>
          <boxGeometry args={[0.1, 0.3, 0.05]} />
          <meshStandardMaterial color="#E6D7C3" roughness={0.9} />
        </mesh>
        <mesh position={[-0.2, 0.2, 0]}>
          <boxGeometry args={[0.1, 0.3, 0.05]} />
          <meshStandardMaterial color="#E6D7C3" roughness={0.9} />
        </mesh>
        {/* Flour particles - more dramatic */}
        {isHovered && <Sparkles count={50} scale={1.2} size={2} speed={0.5} color="#F5F5DC" />}
      </group>
    </Float>
  );
}

function YeastJar({ position, scale = 1, onClick, isHovered }) {
  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.3}>
      <group position={position} scale={scale * 1.5} onClick={onClick}>
        {/* Jar body - bigger and more realistic */}
        <mesh>
          <cylinderGeometry args={[0.3, 0.3, 0.6, 12]} />
          <meshStandardMaterial color="#E6E6FA" transparent opacity={0.8} roughness={0.1} />
        </mesh>
        {/* Jar lid - more detailed */}
        <mesh position={[0, 0.35, 0]}>
          <cylinderGeometry args={[0.32, 0.32, 0.08, 12]} />
          <meshStandardMaterial color="#C0C0C0" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Jar label */}
        <mesh position={[0, 0, 0.16]}>
          <boxGeometry args={[0.25, 0.4, 0.01]} />
          <meshStandardMaterial color="#FFE4B5" />
        </mesh>
        {/* Bubbles - more dramatic */}
        {isHovered && <Sparkles count={35} scale={0.8} size={1.5} speed={0.4} color="#87CEEB" />}
      </group>
    </Float>
  );
}

function MixingBowl({ position, scale = 1, onClick, isHovered }) {
  return (
    <Float speed={1.1} rotationIntensity={0.2} floatIntensity={0.2}>
      <group position={position} scale={scale * 1.5} onClick={onClick}>
        {/* Bowl - bigger and more detailed */}
        <mesh>
          <cylinderGeometry args={[0.45, 0.4, 0.2, 12]} />
          <meshStandardMaterial color="#F0E68C" roughness={0.3} />
        </mesh>
        {/* Bowl rim */}
        <mesh position={[0, 0.1, 0]}>
          <torusGeometry args={[0.45, 0.05, 8, 12]} />
          <meshStandardMaterial color="#DAA520" metalness={0.3} />
        </mesh>
        {/* Dough inside - more realistic */}
        <mesh position={[0, -0.05, 0]}>
          <sphereGeometry args={[0.3, 12, 8]} />
          <meshStandardMaterial color="#DEB887" roughness={0.8} />
        </mesh>
        {/* Dough texture */}
        <mesh position={[0.1, -0.05, 0.1]}>
          <sphereGeometry args={[0.05, 8, 6]} />
          <meshStandardMaterial color="#CD853F" roughness={0.9} />
        </mesh>
        {/* Flour dust - more dramatic */}
        {isHovered && <Sparkles count={40} scale={0.8} size={1.8} speed={0.3} color="#F5F5DC" />}
      </group>
    </Float>
  );
}

function RisingDough({ position, scale = 1, onClick, isHovered }) {
  return (
    <Float speed={1.8} rotationIntensity={0.5} floatIntensity={0.4}>
      <group position={position} scale={scale * 1.5} onClick={onClick}>
        {/* Dough base - bigger and more detailed */}
        <mesh>
          <cylinderGeometry args={[0.4, 0.4, 0.15, 12]} />
          <meshStandardMaterial color="#DEB887" roughness={0.7} />
        </mesh>
        {/* Rising dough bubbles - more dramatic */}
        <mesh position={[0, 0.15, 0]}>
          <sphereGeometry args={[0.25, 12, 8]} />
          <meshStandardMaterial color="#F4A460" roughness={0.6} />
        </mesh>
        {/* Additional rising bubbles */}
        <mesh position={[0.15, 0.2, 0.1]}>
          <sphereGeometry args={[0.1, 8, 6]} />
          <meshStandardMaterial color="#D2691E" roughness={0.5} />
        </mesh>
        <mesh position={[-0.15, 0.18, -0.1]}>
          <sphereGeometry args={[0.08, 8, 6]} />
          <meshStandardMaterial color="#CD853F" roughness={0.5} />
        </mesh>
        {/* Steam/rising effect - more dramatic */}
        {isHovered && <Sparkles count={60} scale={1.2} size={2.5} speed={0.6} color="#E6E6FA" />}
      </group>
    </Float>
  );
}

function Oven({ position, scale = 1, onClick, isHovered }) {
  return (
    <Float speed={1.0} rotationIntensity={0.2} floatIntensity={0.1}>
      <group position={position} scale={scale * 1.5} onClick={onClick}>
        {/* Oven body - bigger and more detailed */}
        <mesh>
          <boxGeometry args={[0.75, 0.6, 0.45]} />
          <meshStandardMaterial color="#696969" roughness={0.8} />
        </mesh>
        {/* Oven door - more realistic */}
        <mesh position={[0, 0, 0.24]}>
          <boxGeometry args={[0.7, 0.55, 0.03]} />
          <meshStandardMaterial color="#A9A9A9" metalness={0.5} roughness={0.3} />
        </mesh>
        {/* Oven handle */}
        <mesh position={[0, 0, 0.27]}>
          <cylinderGeometry args={[0.02, 0.02, 0.15, 8]} />
          <meshStandardMaterial color="#C0C0C0" metalness={0.8} />
        </mesh>
        {/* Oven window */}
        <mesh position={[0, 0, 0.25]}>
          <boxGeometry args={[0.3, 0.2, 0.01]} />
          <meshStandardMaterial color="#87CEEB" transparent opacity={0.7} />
        </mesh>
        {/* Heat waves - more dramatic */}
        {isHovered && <Sparkles count={70} scale={1.5} size={3} speed={0.7} color="#FF4500" />}
      </group>
    </Float>
  );
}

function FreshBread({ position, scale = 1, onClick, isHovered }) {
  return (
    <Float speed={1.3} rotationIntensity={0.3} floatIntensity={0.3}>
      <group position={position} scale={scale * 1.5} onClick={onClick}>
        {/* Bread loaf - bigger and more detailed */}
        <mesh>
          <cylinderGeometry args={[0.3, 0.3, 0.6, 12]} />
          <meshStandardMaterial color="#D2691E" roughness={0.7} />
        </mesh>
        {/* Bread top - more realistic */}
        <mesh position={[0, 0.35, 0]}>
          <sphereGeometry args={[0.3, 12, 8]} />
          <meshStandardMaterial color="#CD853F" roughness={0.6} />
        </mesh>
        {/* Bread scoring */}
        <mesh position={[0, 0.35, 0.15]}>
          <boxGeometry args={[0.2, 0.01, 0.01]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
        <mesh position={[0, 0.35, -0.15]}>
          <boxGeometry args={[0.2, 0.01, 0.01]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
        {/* Bread texture details */}
        <mesh position={[0.1, 0.3, 0.1]}>
          <sphereGeometry args={[0.02, 6, 4]} />
          <meshStandardMaterial color="#A0522D" roughness={0.9} />
        </mesh>
        {/* Steam from fresh bread - more dramatic */}
        {isHovered && <Sparkles count={50} scale={1.0} size={2} speed={0.5} color="#F0F8FF" />}
      </group>
    </Float>
  );
}

// Recipe Card Component
function ProofingCard({ experience, isVisible, position, onClose }) {
  if (!isVisible) return null;

  return (
    <div className="proofing-card" style={{ left: position.x, top: position.y }}>
      <button className="proofing-close-btn" onClick={onClose}>×</button>
      <div className="proofing-header">
        <h3>{experience.title}</h3>
        <div className="proofing-icon">{experience.icon}</div>
      </div>
      
      <div className="proofing-section">
        <h4>🌾 Ingredients (Skills & Knowledge)</h4>
        <ul>
          {experience.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      
      <div className="proofing-section">
        <h4>📈 Rising Process (Growth & Development)</h4>
        <ol>
          {experience.growth.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
      
      <div className="proofing-footer">
        <span className="proofing-time">⏰ {experience.duration}</span>
        <span className="temperature">🌡️ {experience.temperature}</span>
      </div>
    </div>
  );
}

// 3D Scene Component
function ProofingScene({ experiences, onElementHover, hoveredIndex }) {
  const elementComponents = [
    FlourBag,
    YeastJar,
    MixingBowl,
    RisingDough,
    Oven,
    FreshBread
  ];

  // Calculate positions along a proofing journey path - more spread out
  const getElementPosition = (index, total) => {
    const t = index / (total - 1);
    const x = (t - 0.5) * 16; // Spread across -8 to 8 (doubled the spread)
    const y = Math.sin(t * Math.PI * 1.5) * 1.2; // Increased curve amplitude
    const z = 0;
    return [x, y, z];
  };

  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1.0} />
      <pointLight position={[-5, 5, 5]} intensity={0.6} color="#FFE4B5" />
      <pointLight position={[5, -5, 5]} intensity={0.4} color="#F0E68C" />
      
      {/* Proofing journey path - bigger and more visible */}
      <mesh position={[0, -1.5, -1]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 16, 8]} />
        <meshStandardMaterial color="#DEB887" />
      </mesh>
      
      {experiences.map((experience, index) => {
        const ElementComponent = elementComponents[index % elementComponents.length];
        const position = getElementPosition(index, experiences.length);
        const isHovered = hoveredIndex === index;
        
        return (
          <ElementComponent
            key={index}
            position={position}
            scale={isHovered ? 1.4 : 1}
            onClick={() => onElementHover(index)}
            isHovered={isHovered}
          />
        );
      })}
    </Canvas>
  );
}

// Main Component
export default function DoughProofingJourney() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  // Sample proofing journey data - customize this with your experiences
  const experiences = [
    {
      title: "Foundation Stage",
      icon: "🌾",
      ingredients: [
        "Basic programming fundamentals",
        "Computer science principles",
        "Problem-solving mindset",
        "Mathematical foundations"
      ],
      growth: [
        "Learned core programming languages",
        "Developed logical thinking skills",
        "Built first simple applications",
        "Gained understanding of algorithms"
      ],
      duration: "1-2 years",
      temperature: "Room Temperature"
    },
    {
      title: "Activation Phase",
      icon: "🧪",
      ingredients: [
        "Advanced programming concepts",
        "Framework knowledge",
        "Version control systems",
        "Collaboration tools"
      ],
      growth: [
        "Mastered multiple programming languages",
        "Built complex applications",
        "Learned modern development practices",
        "Started contributing to open source"
      ],
      duration: "2-3 years",
      temperature: "Warm Environment"
    },
    {
      title: "Kneading & Development",
      icon: "🥣",
      ingredients: [
        "Full-stack development skills",
        "Database design",
        "API development",
        "Testing methodologies"
      ],
      growth: [
        "Created end-to-end applications",
        "Optimized performance and scalability",
        "Implemented best practices",
        "Mentored junior developers"
      ],
      duration: "3-4 years",
      temperature: "Active Development"
    },
    {
      title: "First Rise",
      icon: "🫧",
      ingredients: [
        "Leadership skills",
        "Project management",
        "Architecture design",
        "Team collaboration"
      ],
      growth: [
        "Led development teams",
        "Designed system architectures",
        "Delivered major projects",
        "Established coding standards"
      ],
      duration: "4-5 years",
      temperature: "Optimal Conditions"
    },
    {
      title: "Baking & Transformation",
      icon: "🔥",
      ingredients: [
        "Strategic thinking",
        "Business acumen",
        "Innovation mindset",
        "Industry expertise"
      ],
      growth: [
        "Drove technical strategy",
        "Innovated new solutions",
        "Expanded business impact",
        "Built high-performing teams"
      ],
      duration: "5+ years",
      temperature: "High Heat"
    },
    {
      title: "Fresh Results",
      icon: "🍞",
      ingredients: [
        "Executive leadership",
        "Vision and strategy",
        "Industry recognition",
        "Mentorship excellence"
      ],
      growth: [
        "Led organizational transformation",
        "Achieved industry recognition",
        "Mentored future leaders",
        "Created lasting impact"
      ],
      duration: "Ongoing",
      temperature: "Perfectly Baked"
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

  const handleElementHover = (index) => {
    setHoveredIndex(index);
    
    // Calculate card position based on element position
    if (containerRef.current) {
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const t = index / (experiences.length - 1);
      
      if (isMobile) {
        // On mobile, position card at bottom center
        setCardPosition({ x: rect.width / 2, y: rect.height * 0.8 });
      } else {
        // On desktop, position card near the element
        const x = rect.width * (0.1 + t * 0.8); // 10% to 90% of container width
        const y = rect.height * 0.2; // 20% from top
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
        handleElementHover(hoveredIndex);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [hoveredIndex, isMobile]);

  return (
    <div className="dough-proofing-journey" ref={containerRef}>
      <div className="proofing-header">
        <h2>🌾 My Dough Proofing Journey</h2>
        <p>{isMobile ? 'Tap the proofing elements to see my growth process!' : 'Hover over the proofing elements to see my growth process!'}</p>
      </div>
      
      <div className="proofing-scene-container">
        <ProofingScene 
          experiences={experiences}
          onElementHover={handleElementHover}
          hoveredIndex={hoveredIndex}
        />
      </div>
      
      <ProofingCard
        experience={hoveredIndex !== null ? experiences[hoveredIndex] : null}
        isVisible={hoveredIndex !== null}
        position={cardPosition}
        onClose={handleCloseCard}
      />
      
      <div className="proofing-footer">
        <p>✨ Each element represents a stage in my professional development journey</p>
      </div>
    </div>
  );
} 