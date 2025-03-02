import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import popupSound from '../src/assets/pop-up-sound.mp3';
import cloudMigrationImg from '../src/assets/cloud-migration-project.jpg';
import devopsImg from '../src/assets/devops.jpg';
import kubernetesImg from '../src/assets/kubernet.jpg';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCert, setSelectedCert] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
    // Show notification after page loads
    setTimeout(() => {
      setShowNotification(true);
      const audio = new Audio(popupSound + '?v=' + new Date().getTime());
      audio.volume = 0.5;
      const playSound = async () => {
        try {
          await audio.play();
        } catch (error) {
          console.log("Audio playback failed:", error);
        }
      };
      playSound();
    }, 2000);
  }, []);

  const skills = [
    { name: 'AWS', level: '60%', icon: '☁️' },
    { name: 'Azure', level: '75%', icon: '☁️' },
    { name: 'Docker', level: '60%', icon: '🐳' },
    { name: 'Kubernetes', level: '70%', icon: '⚓' },
    { name: 'Jenkins', level: '80%', icon: '🔧' },
    { name: 'Terraform', level: '80%', icon: '🏗️' },
    { name: 'SQL, MySQL', level: '60%', icon: ' 🗄️' },
    { name: 'Git, GitHub', level: '80%', icon: '🛠️🌐' },
    { name: 'Linux', level: '40%', icon: '🐧' },
    { name: 'CCNA concepts, routing, switching, subnetting', level: '85%', icon: '📡🔀' },
    { name: 'JavaScript, React.js, HTML, CSS', level: '90%', icon: '⚡💻🎨🌐' },
    { name: 'Python', level: '40%', icon: '🐍💻' },
  ];

  // Add these imports at the top with other imports

  
  // Update the projects array
  const projects = [
      {
        title: 'Cloud Migration Project',
        description: 'Successfully migrated enterprise applications to AWS cloud infrastructure',
        image: cloudMigrationImg,
        link: 'https://github.com/sidmuzammil'
      },
      {
        title: 'DevOps Pipeline',
        description: 'Implemented CI/CD pipeline using Jenkins and Docker',
        image: devopsImg,
        link: 'https://github.com/sidmuzammil'
      },
      {
        title: 'Kubernetes Cluster',
        description: 'Set up and managed production-grade Kubernetes clusters',
        image: kubernetesImg,
        link: 'https://github.com/sidmuzammil'
      }
  ];
  
  const certifications = [
    {
      name: 'Azure, Microsoft 365, CCNA',
      issuer: 'Emigo networks pvt ltd',
      year: '2025',
      imageUrl: '../src/assets/MUZAMIL SID_Certificate_page-0001.jpg'
    },
    // ... existing certifications ...
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const Navigation = () => (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/70 backdrop-blur-md' : 'bg-transparent'
      }`}>
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center relative z-50">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-700 to-purple-500 text-transparent bg-clip-text"
          >
            Sidhu.
          </motion.h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            {['About', 'Skills', 'Projects', 'Certifications'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-200 hover:text-violet-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-400 hover:text-blue-700 transition-colors relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 45 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </motion.div>
          </button>
        </div>

        {/* Full Screen Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut"
          }}
          className={`fixed inset-0 z-40 md:hidden ${!isMobileMenuOpen && 'hidden'}`}
        >
          <div
            className="absolute inset-0 backdrop-blur-xl bg-gray-900/70"
            style={{
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
            }}
          >
            <div className="flex items-center justify-center min-h-screen w-full bg-black">
              <motion.div
                className="flex flex-col items-center justify-center gap-8 py-20 px-4 "
              >
                {['About', 'Skills', 'Projects', 'Certifications'].map((item, index) => (
                  <motion.a
                    key={item}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: isMobileMenuOpen ? 0 : 40, opacity: isMobileMenuOpen ? 1 : 0 }}
                    transition={{
                      delay: isMobileMenuOpen ? index * 0.1 : 0,
                      duration: 0.5,
                      ease: "easeOut"
                    }}
                    href={`#${item.toLowerCase()}`}
                    className="text-4xl font-medium text-white/90 hover:text-blue-500 transition-all hover:scale-110"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </nav>
  );

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navigation />
      {/* Thinking bubble notification */}
      {showNotification && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          className="fixed bottom-4 right-4 bg-neutral-800/90 p-6 shadow-xl z-50 max-w-sm hidden md:block backdrop-blur-sm"
          style={{
            borderRadius: '20px 20px 4px 20px',
            background: 'linear-gradient(145deg, rgba(134, 26, 164, 0.9), rgba(183, 23, 92, 0.9))',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <div className="flex justify-between items-start">
            <p className="text-white/90 text-lg leading-relaxed pr-6">
              Hey, I hope you're doing well! Thank you for visiting my portfolio. 😊
            </p>
            <button
              onClick={() => setShowNotification(false)}
              className="text-gray-400 hover:text-white transition-colors p-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
      {isLoading ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="h-screen flex items-center justify-center"
        >
          <div className="text-4xl font-bold text-white">Loading...</div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="overflow-x-hidden"
        >
          {/* Hero Section */}
          <section id="home" className="h-screen flex items-center justify-center px-4 relative overflow-hidden">
            {/* Stars Background */}
            <div className="absolute inset-0">
              {[...Array(50)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  initial={{
                    x: Math.random() * 100 + "%",
                    y: Math.random() * 100 + "%",
                    opacity: Math.random(),
                    scale: Math.random()
                  }}
                  animate={{
                    opacity: [0.2, 1, 0.2],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-violet-700/20 to-purple-600/10 to-transparent"></div>
            <div className="max-w-4xl mx-auto text-center z-10">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 0.5,
                  y: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                className="mb-8"
              >
                <video
                  src="/src/assets/zidhu-video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls={false}
                  disablePictureInPicture
                  controlsList="nodownload noplaybackrate nofullscreen"
                  webkit-playsinline="true"
                  x-webkit-airplay="deny"
                  preload="auto"
                  className="w-48 h-48 mx-auto rounded-full object-cover border-4 border-violet-500/70"
                  style={{ pointerEvents: 'none' }}
                />
              </motion.div>
              <motion.h1
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                className="text-5xl md:text-7xl font-bold mb-6"
              >
                Hi, I'm <span className="bg-gradient-to-r from-blue-700 to-purple-500 text-transparent bg-clip-text">Sidhu</span>
              </motion.h1>
              <motion.p
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                className="text-xl md:text-2xl text-gray-400 mb-8"
              >
                Cloud Engineer & Web developer
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-violet-800 hover:bg-violet-900 text-white px-8 py-3 rounded-full font-medium"
                onClick={() => {
                  document.getElementById('projects').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                View My Work
              </motion.button>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="min-h-screen flex items-center py-16 sm:py-20 px-4 bg-neutral-900 rounded-[2em]">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                initial={{ x: -50 }}
                whileInView={{ x: 0 }}
                className="text-4xl font-bold mb-8 text-white"
              >
                About Me
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-lg text-gray-200 leading-relaxed">
                    I am a dedicated Cloud Engineer, Web Developer, and Researcher with deep expertise in cutting-edge technologies. With a strong foundation in cloud computing, I specialize in designing and implementing scalable solutions on AWS and Azure, ensuring secure and efficient infrastructure for businesses.
                  </p>
                  <p className="text-lg text-gray-200 leading-relaxed mt-4">
                  Beyond cloud engineering, my passion for web development enables me to build seamless, high-performance applications. As a technology and AI researcher, I stay ahead of emerging trends, continuously exploring innovations that drive digital transformation and optimize modern software development practices.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="bg-neutral-800 p-6 rounded-lg"
                >
                  <h3 className="text-xl font-bold mb-4 text-gray-200">Key Expertise</h3>
                  <ul className="space-y-2 text-white">
                    <li>• Cloud Architecture & Deployment</li>
                    <li>• Web Development</li>
                    <li>• Infrastructure as Code</li>
                    <li>• CI/CD Pipeline Implementation</li>
                    <li>• Containerization & Orchestration</li>
                    <li>• Cloud Security & Best Practices</li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="min-h-screen flex items-center py-16 sm:py-20 px-4">
            <div className="max-w-6xl mx-auto w-full">
              <motion.h2
                initial={{ x: -50 }}
                whileInView={{ x: 0 }}
                className="text-4xl font-bold mb-12 text-gray-300"
              >
                Skills
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-neutral-900 p-6 rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="text-violet-300 font-medium">{skill.level}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full transition-all duration-1000"
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="min-h-screen flex items-center py-16 sm:py-20 px-4">
            <div className="max-w-6xl mx-auto w-full">
              <motion.h2
                initial={{ x: -50 }}
                whileInView={{ x: 0 }}
                className="text-4xl font-bold mb-12 text-gray-300"
              >
                Projects
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    whileHover={{ y: -10 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-neutral-900 rounded-lg overflow-hidden"
                  >
                    <div className="h-48 bg-gray-100">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      <a
                        href={project.link}
                        className="text-violet-300 hover:text-violet-500 font-medium"
                      >
                        View Project →
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Certifications Section - Update with image modal */}
          {/* Certifications Section */}
          <section id="certifications" className="min-h-screen flex items-center py-16 sm:py-20 px-4 bg-neutral-900 rounded-t-[2em]">
            <div className="max-w-6xl mx-auto w-full">
              <motion.h2
                initial={{ x: -50 }}
                whileInView={{ x: 0 }}
                className="text-4xl font-bold mb-12 text-violet-300"
              >
                Certifications
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-neutral-800 p-6 rounded-lg border border-violet-400/20 hover:border-violet-800 transition-all cursor-pointer"
                    onClick={() => setSelectedCert(cert)}
                  >
                    <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                    <p className="text-gray-300">{cert.issuer}</p>
                    <p className="text-violet-300">{cert.year}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Certification Modal */}
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                className="bg-neutral-900 p-4 rounded-lg max-w-4xl w-full"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold">{selectedCert.name}</h3>
                  <button 
                    onClick={() => setSelectedCert(null)}
                    className="text-gray-400 hover:text-white"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <img
                  src={selectedCert.imageUrl}
                  alt={selectedCert.name}
                  className="w-full rounded-lg"
                />
              </motion.div>
            </motion.div>
          )}

          {/* Footer - Update with icons */}
          <footer className="bg-black py-8 sm:py-12 px-4 border-t-[.1px] border-neutral-800 ">
            <div className="max-w-6xl mx-auto w-full text-center">
              <div className="flex justify-center gap-8 mb-8">
                <a href="https://www.linkedin.com/in/muzamil-sid-12b694286/" className="text-2xl text-gray-400 hover:text-violet-800 transition-colors">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/sidmuzammil" className="text-2xl text-gray-400 hover:text-violet-800 transition-colors">
                  <FaGithub />
                </a>
                <a href="" className="text-2xl text-gray-400 hover:text-violet-800 transition-colors">
                  <FaEnvelope />
                </a>
              </div>
              <p className="text-gray-200">© 2025 Muzamilsid All rights reserved.</p>
            </div>
          </footer>
        </motion.div>
      )}
    </div>
  );
}
