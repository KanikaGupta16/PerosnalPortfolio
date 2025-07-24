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
    'Software Engineer | Problem Solver',
    'Product-minded SWE.'
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
        <meta property="og:description" content="Full-stack developer with full-stack development expertise. EY intern, Penn State CS student, founder of The Equal Edge." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kanika.fyi" />
        <meta property="og:image" content="https://kanika.fyi/kanika-photo.jpg" />
        <meta property="og:site_name" content="Kanika Gupta Portfolio" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kanika Gupta - Portfolio" />
        <meta name="twitter:description" content="Full-stack developer with full-stack development expertise. EY intern, Penn State CS student, founder of The Equal Edge." />
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
            <li><a href="#leadership" className="nav-link">Leadership</a></li>
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
            {isClient ? currentTagline : 'Building impactful products, one feature at a time.'}
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

      {/* Leadership & Club Positions Section */}
      <section id="leadership" className="leadership-section">
        <div className="container">
          <h2 className="section-title">Leadership Journey</h2>
          <div className="leadership-timeline">
            {/* President - Google Developer Student Club */}
            <div className="leadership-item" data-achievement="Led cross-functional initiatives and community growth as club president">
              <div className="leadership-logo">
                <img src="/images/gdsc.png" alt="Google Developer Student Club Logo" className="club-logo" />
              </div>
              <div className="leadership-content">
                <h3 className="leadership-title">Vice President</h3>
                <p className="leadership-org">Penn State Google Developer Student Club</p>
                <p className="leadership-date">January 2024 – January 2025</p>
                <div className="leadership-description">
                  <p>Led Penn State's premier tech club as President, overseeing all operations and strategic initiatives</p>
                  <ul className="leadership-achievements hidden">
                    <li>Led cross-functional team leadership initiatives</li>
                    <li>Developed strategic partnerships with external organizations</li>
                    <li>Coordinated outreach programs to expand club membership</li>
                    <li>Managed community engagement and networking events</li>
                    <li>Previously served as Outreach Head and Marketing Lead (Jun 2023 - Jan 2025)</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Vice President - Girls Who Code College Loop PSU */}
            <div className="leadership-item" data-achievement="Empowered women in tech and fostered an inclusive coding community">
              <div className="leadership-logo">
                <img src="/images/gwc.jpeg" alt="Girls Who Code College Loop PSU Logo" className="club-logo" />
              </div>
              <div className="leadership-content">
                <h3 className="leadership-title">Vice President</h3>
                <p className="leadership-org">Girls Who Code College Loop PSU</p>
                <p className="leadership-date">Aug 2023 – Jun 2024</p>
                <div className="leadership-description">
                  <p>Led initiatives to empower women in tech and foster an inclusive coding community at Penn State.</p>
                  <ul className="leadership-achievements hidden">
                    <li>Led club events and workshops</li>
                    <li>Mentored new members</li>
                    <li>Promoted diversity in tech</li>
                    <li>Organized outreach programs</li>
                    <li>Collaborated with national Girls Who Code network</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Head of Growth and Strategy - Nittany AI Student Society */}
            <div className="leadership-item" data-achievement="Led growth strategy and entrepreneurship initiatives for AI community">
              <div className="leadership-logo">
                <img src="/images/naiss.jpeg" alt="Nittany AI Student Society Logo" className="club-logo" />
              </div>
              <div className="leadership-content">
                <h3 className="leadership-title">Head of Growth and Strategy Committee</h3>
                <p className="leadership-org">Nittany AI Student Society</p>
                <p className="leadership-date">August 2024 – January 2025</p>
                <div className="leadership-description">
                  <p>Spearheaded strategic growth initiatives and entrepreneurship leadership for AI student community</p>
                  <ul className="leadership-achievements hidden">
                    <li>Led committee focused on organizational growth and strategic planning</li>
                    <li>Previously served as Entrepreneurship Lead (Jan 2024 - Jan 2025)</li>
                    <li>Developed presentation skills and cross-functional team leadership</li>
                    <li>Started as Event Planner Apprentice (Jun 2023 - Jan 2025)</li>
                    <li>Worked with diverse groups to foster AI education and innovation</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Tech Team Member - Nittany Entrepreneurship Society */}
            <div className="leadership-item" data-achievement="Contributed to club's digital infrastructure and tech operations">
              <div className="leadership-logo">
                <img src="/images/nes.jpeg" alt="Nittany Entrepreneurship Society Logo" className="club-logo" />
              </div>
              <div className="leadership-content">
                <h3 className="leadership-title">Tech Team Member</h3>
                <p className="leadership-org">Nittany Entrepreneurship Society</p>
                <p className="leadership-date">August 2023 – Present</p>
                <div className="leadership-description">
                  <p>Contributed to technology operations and digital presence for entrepreneurship community</p>
                  <ul className="leadership-achievements hidden">
                    <li>Responsible for website building and maintenance</li>
                    <li>Supported overall tech operations of the club</li>
                    <li>Implemented web solutions for member engagement and events</li>
                    <li>Collaborated with tech team on digital infrastructure</li>
                    <li>Enhanced club's online presence and functionality</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Founding Member - Penn State Intercollegiate Hackathon Team */}
            <div className="leadership-item" data-achievement="Pioneered competitive hackathon representation for Penn State">
              <div className="leadership-logo">
                <img src="/images/psu.png" alt="Penn State Hackathon Team Logo" className="club-logo" />
              </div>
              <div className="leadership-content">
                <h3 className="leadership-title">Founding Member</h3>
                <p className="leadership-org">Penn State Intercollegiate Hackathon Team</p>
                <p className="leadership-date">September 2023 – Present</p>
                <div className="leadership-description">
                  <p>Co-founded and established Penn State's first organized competitive hackathon team</p>
                  <ul className="leadership-achievements hidden">
                    <li>Pioneered competitive hackathon culture at Penn State</li>
                    <li>Established team structure and participation protocols</li>
                    <li>Represented Penn State at multiple national hackathons</li>
                    <li>Mentored new members in hackathon strategies and teamwork</li>
                    <li>Built network with other university hackathon teams</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Café Menu Style */}
      <section id="projects" className="projects-section">
        <div className="projects-bg-image"></div>
        <div className="container">
          <h2 className="section-title">Today's Specials</h2>
          <div className="mosaic-grid">
            {/* Dynamic Pattern Based on Content */}
            
            {/* Top Row: Snapchat (compact) + Passion (small photo) */}
            <div className="mosaic-item snapchat-compact">
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
            <div className="mosaic-item passion-small">
              <div className="photo-card">
                <div className="photo-image">
                  <img src="/images/gal5.jpg" alt="Passion" />
                </div>
                <div className="photo-overlay">
                  <h3 className="photo-title">Passion</h3>
                </div>
              </div>
            </div>

            {/* Middle Left: CropNSoil (large, content-heavy) */}
            <div className="mosaic-item cropnsoil-large">
              <div className="menu-item featured">
                <div className="menu-item-header">
                  <h3 className="dish-name">CropNSoil - AI Multi-cropping Generator</h3>
                  <span className="trophy-badge">🏆</span>
                </div>
                <p className="menu-blurb">Supporting underrepresented farmers in India and developing nations with AI-powered regenerative agriculture and multicropping recommendations. CropNSoil produces multicropping patterns, market info, and unique features to help farms maximize growth and soil health.</p>
                <div className="ingredients">
                  <span className="ingredient">React</span>
                  <span className="ingredient">Python</span>
                  <span className="ingredient">ML</span>
                </div>
                <div className="award-info">
                  <span className="award-text">
                    🏆 1st Place - $7,500 Prize, Ag Springboard
                    <a href="https://www.psu.edu/news/agricultural-sciences/story/project-improve-cropping-named-2024-ag-springboard-pitch-contest-winner" target="_blank" rel="noopener noreferrer" style={{marginLeft: '0.5rem', color: '#b86bff', textDecoration: 'underline'}}>Ag Springboard News</a>
                  </span>
                </div>
              </div>
            </div>

            {/* Middle Right: Innovation (small photo) + SignEase (medium) */}
            <div className="mosaic-item innovation-small">
              <div className="photo-card">
                <div className="photo-image">
                  <img src="/images/gal3.jpg" alt="Innovation" />
                </div>
                <div className="photo-overlay">
                  <h3 className="photo-title">Innovation</h3>
                </div>
              </div>
            </div>
            <div className="mosaic-item signease-medium">
              <div className="menu-item signease">
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

            {/* Bottom Row: Tech & Art (medium photo) + SNOM (large, content-heavy) + Creativity (small photo) */}
            <div className="mosaic-item techart-medium">
              <div className="photo-card">
                <div className="photo-image">
                  <img src="/images/gal2.png" alt="Tech & Art" />
                </div>
                <div className="photo-overlay">
                  <h3 className="photo-title">Tech & Art</h3>
                </div>
              </div>
            </div>
            <div className="mosaic-item snom-large">
              <div className="menu-item snom">
                <div className="menu-item-header">
                  <h3 className="dish-name">SNOM - AI Companion for Neurodiverse Children</h3>
                  <span className="trophy-badge">🤖</span>
                </div>
                <p className="menu-blurb">SNOM is an emotionally intelligent AI buddy, empowering neurodiverse children to navigate emotions, build social skills, and feel truly understood. SNOM follows children, analyzes moods, and engages in emotionally adaptive conversations to build confidence and social skills.</p>
                <div className="ingredients">
                  <span className="ingredient">Gemini AI</span>
                  <span className="ingredient">TerpAI</span>
                  <span className="ingredient">Microsoft Azure</span>
                  <span className="ingredient">Cloudforce</span>
                  <span className="ingredient">OpenCV</span>
                  <span className="ingredient">Raspberry Pi</span>
                  <span className="ingredient">Python</span>
                </div>
                <div className="award-info">
                  <span className="award-text">🤖 Bitcamp 2025 - Social Impact Project</span>
                </div>
                <div style={{marginTop: '0.5rem'}}>
                  <a href="https://devpost.com/software/your-friend-steve?_gl=1*bdkebl*_gcl_au*MTg2OTMyMzMxMi4xNzUzMTE5OTAw*_ga*ODg1NTczMDcwLjE3NTMxMTk5MDA.*_ga_0YHJK3Y10M*czE3NTMxMTk5MDAkbzEkZzEkdDE3NTMxMTk5MjQkajM2JGwwJGgw" target="_blank" rel="noopener noreferrer" style={{marginRight: '1rem', color: '#b86bff', textDecoration: 'underline'}}>Devpost</a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{marginRight: '1rem', color: '#b86bff', textDecoration: 'underline'}}>GitHub</a>
                  <a href="https://youtu.be/ojnhT5Wa7qQ" target="_blank" rel="noopener noreferrer" style={{color: '#ffd54f', textDecoration: 'underline'}}>Video Demo</a>
                </div>
              </div>
            </div>
            <div className="mosaic-item creativity-small">
              <div className="photo-card">
                <div className="photo-image">
                  <img src="/images/gal4.jpeg" alt="Creativity" />
                </div>
                <div className="photo-overlay">
                  <h3 className="photo-title">Creativity</h3>
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
                <img src="/images/cake1.jpg" alt="Christmas Plum Cake" style={{width: '100%', height: '180px', objectFit: 'cover', borderRadius: '12px'}} />
              </div>
              <h3>Christmas Plum Cake</h3>
              <p>Rich, spiced cake loaded with dried fruits and nuts, perfect for the holidays.</p>
              <div className="baking-tags">
                <span>Cake</span>
                <span>Christmas</span>
                <span>Plum</span>
                <span>Fruits & Nuts</span>
              </div>
            </div>
            <div className="baking-card">
              <div className="baking-image">
                <img src="/images/bagel.jpg" alt="Jalapeno Cheddar Bagels" style={{width: '100%', height: '180px', objectFit: 'cover', borderRadius: '12px'}} />
              </div>
              <h3>Jalapeno Cheddar Bagels</h3>
              <p>Chewy bagels with a spicy kick of jalapeno and gooey cheddar cheese.</p>
              <div className="baking-tags">
                <span>Bagel</span>
                <span>Jalapeno</span>
                <span>Cheddar</span>
                <span>Spicy</span>
              </div>
            </div>
            <div className="baking-card">
              <div className="baking-image">
                <img src="/images/cookie.jpg" alt="Double Chocolate Chip Cookie" style={{width: '100%', height: '180px', objectFit: 'cover', borderRadius: '12px'}} />
              </div>
              <h3>Double Chocolate Chip Cookie</h3>
              <p>Decadent cookies with a molten lava chocolate center in every bite.</p>
              <div className="baking-tags">
                <span>Cookie</span>
                <span>Chocolate</span>
                <span>Molten Lava</span>
                <span>Decadent</span>
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


