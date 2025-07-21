import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './App.css';
// import Hero3DObjects from './Hero3DObjects'; // Removed three.js landing
import Roadmap from './Roadmap';
import ExperienceTimeline from './ExperienceTimeline';
import TechnicalToolkit from './TechnicalToolkit';
import AboutMe from './AboutMe';
import './Roadmap.css';

function App() {
  const [typedText, setTypedText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [currentTagline, setCurrentTagline] = useState('');
  const [isTaglineTyping, setIsTaglineTyping] = useState(true);
  const [isClient, setIsClient] = useState(false);
  
  const roles = ['AI Developer', 'Creative Problem Solver', 'Mentor', 'Tech Innovator'];
  const taglines = [
    'Full-stack developer by day, baker by night.',
    'Building solutions that matter.',
    'From code to creation.',
    'Precision, creativity, and patience.'
  ];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  // Progressive enhancement - only start animations after content is rendered
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Typing animation effect for roles
  useEffect(() => {
    if (!isClient) return;
    
    let timeout;
    
    if (isTyping) {
      if (typedText.length < roles[currentRoleIndex].length) {
        timeout = setTimeout(() => {
          setTypedText(roles[currentRoleIndex].slice(0, typedText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseTime);
      }
    } else {
      if (typedText.length > 0) {
        timeout = setTimeout(() => {
          setTypedText(typedText.slice(0, -1));
        }, deletingSpeed);
      } else {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [typedText, isTyping, currentRoleIndex, roles, isClient]);

  // Typing animation effect for taglines
  useEffect(() => {
    if (!isClient) return;
    
    let timeout;
    const currentTaglineIndex = Math.floor(currentRoleIndex / 2) % taglines.length;
    
    if (isTaglineTyping) {
      if (currentTagline.length < taglines[currentTaglineIndex].length) {
        timeout = setTimeout(() => {
          setCurrentTagline(taglines[currentTaglineIndex].slice(0, currentTagline.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTaglineTyping(false);
        }, pauseTime);
      }
    } else {
      if (currentTagline.length > 0) {
        timeout = setTimeout(() => {
          setCurrentTagline(currentTagline.slice(0, -1));
        }, deletingSpeed);
      } else {
        setIsTaglineTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentTagline, isTaglineTyping, currentRoleIndex, taglines, isClient]);

  // Smooth scrolling effect
  useEffect(() => {
    if (!isClient) return;
    
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPos = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        // const sectionId = section.getAttribute('id'); // Unused

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          // Section in view
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isClient]);

  return (
    <div className="portfolio-root">
      {/* SEO Meta Tags and Structured Data */}
      <Helmet>
        <title>Kanika Gupta - Computer Science Student, Software Developer, AI/ML Engineer</title>
        <meta name="description" content="Kanika Gupta - Computer Science Student, Software Developer, AI/ML Engineer at Penn State. EY Software Development Intern, founder of The Equal Edge, and AI/ML enthusiast." />
        <meta name="keywords" content="Kanika Gupta, Software Developer, AI/ML Engineer, Penn State, EY Intern, React, Python, Machine Learning, Full-stack Developer" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Kanika Gupta - Portfolio" />
        <meta property="og:description" content="Full-stack developer with AI/ML expertise. EY intern, Penn State CS student, founder of The Equal Edge." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kanika.fyi" />
        <meta property="og:image" content="https://kanika.fyi/kanika-photo.jpg" />
        <meta property="og:site_name" content="Kanika Gupta Portfolio" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kanika Gupta - Portfolio" />
        <meta name="twitter:description" content="Full-stack developer with AI/ML expertise. EY intern, Penn State CS student, founder of The Equal Edge." />
        <meta name="twitter:image" content="https://kanika.fyi/kanika-photo.jpg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Kanika Gupta" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://kanika.fyi" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Kanika Gupta",
            "jobTitle": "Software Developer",
            "url": "https://kanika.fyi",
            "description": "Computer Science Student, Software Developer, AI/ML Engineer at Penn State University",
            "alumniOf": {
              "@type": "Organization",
              "name": "Penn State University"
            },
            "worksFor": {
              "@type": "Organization",
              "name": "Ernst & Young"
            },
            "sameAs": [
              "https://linkedin.com/in/kanikagupta16",
              "https://github.com/kanikagupta16"
            ],
            "knowsAbout": [
              "Machine Learning",
              "React",
              "Python",
              "JavaScript",
              "Full-stack Development",
              "AI/ML Engineering"
            ]
          })}
        </script>
      </Helmet>

      {/* Progress Bar */}
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%` }}></div>
      </div>

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-text">KG</span>
          </div>
          <ul className="nav-menu">
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#experience" className="nav-link">Experience</a></li>
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#skills" className="nav-link">Skills</a></li>
            <li><a href="#achievements" className="nav-link">Achievements</a></li>
            <li><a href="#baking-corner" className="nav-link">Baking Corner</a></li>
          </ul>
          <div className="nav-spacer"></div>
        </div>
        </nav>

      {/* Hero Section - Enhanced with SEO-friendly content */}
      <section className="hero hero-pastel-green" style={{position: 'relative', overflow: 'hidden'}}>
        {/* <Hero3DObjects /> */}
        <div className="hero-text-container">
          <div className="hero-icon">
            <div className="icon-shape">●○▲</div>
          </div>
          <h1 className="hero-title fade-slide-up">
            Hi There, I'm Kanika.
          </h1>
          <p className="hero-subtitle fade-delay">
            {isClient ? currentTagline : 'Full-stack developer by day, baker by night.'}
          </p>
          <p className="hero-role fade-delay">
            {isClient ? typedText : 'AI Developer'}
          </p>
          <div className="hero-buttons fade-late">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Let's Connect</a>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="about-section">
        <AboutMe />
      </section>

      {/* Experience Timeline Section */}
      <section id="experience" className="experience-timeline-section">
        <ExperienceTimeline />
      </section>

      {/* Projects Section - Café Menu Style */}
      <section id="projects" className="projects-section">
        <div className="projects-bg-image"></div>
        <div className="container">
          <h2 className="section-title">Today's Specials</h2>
          <div className="mosaic-grid">
            <div className="mosaic-item large">
              <div className="menu-item featured">
                <div className="menu-item-header">
                  <h3 className="dish-name">CropNsoil - AI Multi-cropping Generator</h3>
                  <span className="trophy-badge">🏆</span>
                </div>
                <p className="menu-blurb">Supporting farmers in developing nations with AI-powered crop recommendations</p>
                <div className="ingredients">
                  <span className="ingredient">React</span>
                  <span className="ingredient">Python</span>
                  <span className="ingredient">ML</span>
                </div>
                <div className="award-info">
                  <span className="award-text">1st Place - $7,500 Prize</span>
                </div>
              </div>
            </div>

            <div className="mosaic-item medium">
              <div className="menu-item">
                <div className="menu-item-header">
                  <h3 className="dish-name">Snapchat Spectacles AR Fighting Game</h3>
                  <span className="trophy-badge">💰</span>
                </div>
                <p className="menu-blurb">Immersive 4-element AR combat experience for Snapchat Spectacles</p>
                <div className="ingredients">
                  <span className="ingredient">TypeScript</span>
                  <span className="ingredient">Unity</span>
                  <span className="ingredient">Lens Studio</span>
                </div>
                <div className="award-info">
                  <span className="award-text">Snapchat Accelerator Funding</span>
                </div>
              </div>
            </div>

            {/* Wide horizontal Creative Process image */}
            <div className="mosaic-item wide">
              <div className="photo-card">
                <div className="photo-image">
                  <img src="/images/gal1.jpg" alt="Gallery Image 1" />
                </div>
                <div className="photo-overlay">
                  <h3 className="photo-title">Creative Process</h3>
                  <p className="photo-description">Behind the scenes of innovation</p>
                </div>
              </div>
            </div>

            {/* Large Creativity image */}
            <div className="mosaic-item large">
              <div className="photo-card">
                <div className="photo-image">
                  <img src="/images/gal4.jpeg" alt="Gallery Image 4" />
                </div>
                <div className="photo-overlay">
                  <h3 className="photo-title">Creativity</h3>
                </div>
              </div>
            </div>

            <div className="mosaic-item small">
              <div className="menu-item">
                <div className="menu-item-header">
                  <h3 className="dish-name">SignEase - Sign Language Converter</h3>
                  <span className="trophy-badge">🥉</span>
                </div>
                <p className="menu-blurb">Real-time accessibility for Deaf community through computer vision</p>
                <div className="ingredients">
                  <span className="ingredient">TensorFlow</span>
                  <span className="ingredient">Computer Vision</span>
                  <span className="ingredient">Python</span>
                </div>
                <div className="award-info">
                  <span className="award-text">3rd Place - HackPSU 2023</span>
                </div>
              </div>
            </div>

            <div className="mosaic-item medium">
              <div className="photo-card">
                <div className="photo-image">
                  <img src="/images/gal2.png" alt="Gallery Image 2" />
                </div>
                <div className="photo-overlay">
                  <h3 className="photo-title">Tech & Art</h3>
                </div>
              </div>
            </div>

            <div className="mosaic-item small">
              <div className="menu-item">
                <div className="menu-item-header">
                  <h3 className="dish-name">Smart Recipe Assistant</h3>
                  <span className="trophy-badge">🥇</span>
                </div>
                <p className="menu-blurb">AI-powered cooking companion with ingredient recognition</p>
                <div className="ingredients">
                  <span className="ingredient">Python</span>
                  <span className="ingredient">OpenCV</span>
                  <span className="ingredient">Flask</span>
                </div>
                <div className="award-info">
                  <span className="award-text">Best Innovation Award</span>
                </div>
              </div>
            </div>

            <div className="mosaic-item large">
              <div className="menu-item">
                <div className="menu-item-header">
                  <h3 className="dish-name">Virtual Reality Learning Platform</h3>
                  <span className="trophy-badge">🎓</span>
                </div>
                <p className="menu-blurb">Immersive educational experiences for remote learning and skill development</p>
                <div className="ingredients">
                  <span className="ingredient">Unity</span>
                  <span className="ingredient">C#</span>
                  <span className="ingredient">Oculus SDK</span>
                  <span className="ingredient">WebRTC</span>
                </div>
                <div className="award-info">
                  <span className="award-text">EdTech Innovation Grant</span>
                </div>
              </div>
            </div>

            <div className="mosaic-item medium">
              <div className="menu-item">
                <div className="menu-item-header">
                  <h3 className="dish-name">EcoTracker - Carbon Footprint Monitor</h3>
                  <span className="trophy-badge">🌱</span>
                </div>
                <p className="menu-blurb">Mobile app for tracking and reducing personal carbon footprint</p>
                <div className="ingredients">
                  <span className="ingredient">React Native</span>
                  <span className="ingredient">Node.js</span>
                  <span className="ingredient">MongoDB</span>
                </div>
                <div className="award-info">
                  <span className="award-text">Sustainability Hack Winner</span>
                </div>
              </div>
            </div>

            <div className="mosaic-item small">
              <div className="photo-card">
                <div className="photo-image">
                  <img src="/images/gal3.jpg" alt="Gallery Image 3" />
                </div>
                <div className="photo-overlay">
                  <h3 className="photo-title">Innovation</h3>
                </div>
              </div>
            </div>

            <div className="mosaic-item small">
              <div className="photo-card">
                <div className="photo-image">
                  <img src="/images/gal5.jpg" alt="Gallery Image 5" />
                </div>
                <div className="photo-overlay">
                  <h3 className="photo-title">Passion</h3>
                </div>
              </div>
            </div>

            <div className="mosaic-item small">
              <div className="menu-item empty-card">
                <div className="empty-card-content">
                  <div className="empty-card-icon">📸</div>
                  <h3>More Coming Soon</h3>
                  <p>New projects in development</p>
                </div>
              </div>
            </div>

            <div className="mosaic-item small">
              <div className="photo-card">
                <div className="photo-image">
                  <img src="/images/gal5.jpg" alt="Gallery Image 5" />
                </div>
                <div className="photo-overlay">
                  <h3 className="photo-title">Passion</h3>
                </div>
              </div>
            </div>

            <div className="mosaic-item small">
              <div className="menu-item empty-card">
                <div className="empty-card-content">
                  <div className="empty-card-icon">🚀</div>
                  <h3>Future Projects</h3>
                  <p>Innovation never stops</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Toolkit Section */}
      <TechnicalToolkit />

      {/* Achievements Section */}
      <section id="achievements" className="achievements-section" style={{background: "url('/images/bg5.png') center center/cover no-repeat, #18181a"}}>
        <div className="container">
          <h2 className="section-title">Sweet Success Stories</h2>
          <div className="trophy-cabinet">
            <div className="trophy-row-heading">Top Awards</div>
            <div className="trophy-shelf-row trophy-shelf-row-top">
              {/* Top awards: 1st place, best startup initiative */}
              <div className="trophy-card trophy-card-featured">
                <div className="trophy-icon">🏆</div>
                <div className="trophy-title trophy-title-large">First Place</div>
                <div className="trophy-desc">Penn State Small Business Pitch Challenge</div>
                <div className="achievement-date">2024</div>
              </div>
              <div className="trophy-card trophy-card-featured">
                <div className="trophy-icon">🏆</div>
                <div className="trophy-title trophy-title-large">First Place</div>
                <div className="trophy-desc">Ag Springboard Challenge ($7,500)</div>
                <div className="achievement-date">2024</div>
              </div>
              <div className="trophy-card trophy-card-featured trophy-card-initiative">
                <div className="trophy-icon">🏆</div>
                <div className="trophy-title">Best Startup Initiative</div>
                <div className="trophy-desc">Nittany Entrepreneurship Society 2024</div>
                <div className="achievement-date">2024</div>
              </div>
            </div>
            <div className="trophy-shelf-ledge trophy-shelf-ledge-top"></div>
            <div className="trophy-shelf-row trophy-shelf-row-bottom metrics-circles-row">
              <div className="metric-circle-card">
                <div className="metric-circle-number">70%</div>
                <div className="metric-circle-label">Increase in Club Participation</div>
              </div>
              <div className="metric-circle-card">
                <div className="metric-circle-number">750+</div>
                <div className="metric-circle-label">Students Mentored</div>
              </div>
              <div className="metric-circle-card">
                <div className="metric-circle-number">$7,500+</div>
                <div className="metric-circle-label">Total Prize Money</div>
              </div>
            </div>
            <div className="trophy-shelf-ledge trophy-shelf-ledge-bottom"></div>
          </div>
        </div>
      </section>

      {/* Baking Corner Section */}
      <section id="baking-corner" className="baking-corner-section" style={{background: "url('/images/bg4.png') center center/cover no-repeat, #18181a"}}>
        <div className="container">
          <h2 className="section-title">Life Beyond Code</h2>
          <div className="baking-intro">
            <p>Both coding and baking require following instructions, but creativity makes the difference.</p>
          </div>
          <div className="baking-grid">
            <div className="baking-card">
              <div className="baking-image">
                <div className="image-placeholder">🍰</div>
              </div>
              <h3>Latest Creation</h3>
              <p>Chocolate layer cake with raspberry filling</p>
              <div className="baking-tags">
                <span>Chocolate</span>
                <span>Raspberry</span>
                <span>Layer Cake</span>
              </div>
            </div>
            <div className="baking-card">
              <div className="baking-image">
                <div className="image-placeholder">🥖</div>
              </div>
              <h3>Coding Fuel</h3>
              <p>Sourdough bread - perfect for late-night debugging sessions</p>
              <div className="baking-tags">
                <span>Sourdough</span>
                <span>Artisan</span>
                <span>Bread</span>
              </div>
            </div>
            <div className="baking-card">
              <div className="baking-image">
                <div className="image-placeholder">🍪</div>
              </div>
              <h3>Recipe for Success</h3>
              <p>Debugging code is like fixing a recipe - patience and precision!</p>
              <div className="baking-tags">
                <span>Debugging</span>
                <span>Patience</span>
                <span>Precision</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Ready to Collaborate?</h2>
          <div className="contact-intro">
            <p>Whether you need a developer or want to share recipes, I'm always up for a chat!</p>
          </div>
          <div className="contact-options">
            {/* Email Card */}
            <div className="contact-card">
              <div className="contact-icon" aria-label="Email">
                {/* Envelope icon, outlined pastel */}
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="8" width="32" height="24" rx="6" stroke="#b86bff" strokeWidth="2.5" fill="none"/>
                  <polyline points="8,12 20,24 32,12" stroke="#b86bff" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="34" cy="10" r="1.5" fill="#ffd54f" />
                  <circle cx="6" cy="30" r="1.2" fill="#ffb3c6" />
                  <circle cx="20" cy="36" r="1.2" fill="#b6fcd5" />
                </svg>
              </div>
              <h4>Email</h4>
              <p className="contact-email">kanikagupta16.official@gmail.com</p>
              <a href="mailto:kanikagupta16.official@gmail.com" className="contact-btn">Send Email</a>
            </div>
            {/* LinkedIn Card */}
            <div className="contact-card">
              <div className="contact-icon" aria-label="LinkedIn">
                {/* Briefcase/LinkedIn icon, outlined pastel */}
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="14" width="24" height="16" rx="5" stroke="#ffb3c6" strokeWidth="2.5" fill="none"/>
                  <rect x="14" y="10" width="12" height="6" rx="2" stroke="#ffb3c6" strokeWidth="2.5" fill="none"/>
                  <circle cx="12" cy="32" r="1.2" fill="#b6fcd5" />
                  <circle cx="28" cy="32" r="1.2" fill="#ffd54f" />
                  <circle cx="20" cy="36" r="1.2" fill="#ffb3c6" />
                </svg>
              </div>
              <h4>LinkedIn</h4>
              <p className="contact-email">https://www.linkedin.com/in/kanikagupta16/</p>
              <a href="https://www.linkedin.com/in/kanikagupta16/" className="contact-btn" target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a>
            </div>
            {/* GitHub Card */}
            <div className="contact-card">
              <div className="contact-icon" aria-label="GitHub">
                {/* GitHub Octocat, outlined pastel */}
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="16" stroke="#ffe066" strokeWidth="2.5" fill="none"/>
                  <ellipse cx="20" cy="24" rx="7" ry="4" stroke="#ffe066" strokeWidth="2.5" fill="none"/>
                  <circle cx="16" cy="18" r="1.5" fill="#b6fcd5" />
                  <circle cx="24" cy="18" r="1.5" fill="#b6fcd5" />
                  <path d="M16 28c1.5 1 6.5 1 8 0" stroke="#ffe066" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="28" cy="32" r="1.2" fill="#ffb3c6" />
                  <circle cx="12" cy="32" r="1.2" fill="#b6fcd5" />
                </svg>
              </div>
              <h4>GitHub</h4>
              <p className="contact-email">https://github.com/KanikaGupta16</p>
              <a href="https://github.com/KanikaGupta16" className="contact-btn" target="_blank" rel="noopener noreferrer">View GitHub</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
