import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  const skills = [
    { name: 'AWS', level: '90%', icon: '☁️' },
    { name: 'Azure', level: '85%', icon: '☁️' },
    { name: 'Docker', level: '88%', icon: '🐳' },
    { name: 'Kubernetes', level: '85%', icon: '⚓' },
    { name: 'Jenkins', level: '82%', icon: '🔧' },
    { name: 'Terraform', level: '87%', icon: '🏗️' },
  ];

  const projects = [
    {
      title: 'Cloud Migration Project',
      description: 'Successfully migrated enterprise applications to AWS cloud infrastructure',
      image: '/project1.jpg',
      link: '#'
    },
    {
      title: 'DevOps Pipeline',
      description: 'Implemented CI/CD pipeline using Jenkins and Docker',
      image: '/project2.jpg',
      link: '#'
    },
    {
      title: 'Kubernetes Cluster',
      description: 'Set up and managed production-grade Kubernetes clusters',
      image: '/project3.jpg',
      link: '#'
    }
  ];

  const certifications = [
    { 
      name: 'AWS Solutions Architect', 
      issuer: 'Amazon', 
      year: '2023',
      image: '/aws-cert.jpg'
    },
    // ... existing certifications ...
  ];

  const Navigation = () => (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
          >
            Sidhu
          </motion.h1>
          <div className="flex gap-6">
            {['About', 'Skills', 'Projects', 'Certifications'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );

  return (
    <div className="bg-gray-900 text-white">
      <Navigation />
      {isLoading ? (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="h-screen flex items-center justify-center"
        >
          <div className="text-4xl font-bold text-blue-500">Loading...</div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Hero Section */}
          <section id="home" className="h-screen flex items-center justify-center px-4 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent"></div>
            <div className="max-w-4xl mx-auto text-center z-10">
              <motion.h1 
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                className="text-5xl md:text-7xl font-bold mb-6"
              >
                Hi, I'm <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Sidhu</span>
              </motion.h1>
              <motion.p 
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                className="text-xl md:text-2xl text-gray-400 mb-8"
              >
                Cloud Engineer & DevOps Specialist
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium"
              >
                View My Work
              </motion.button>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="min-h-screen flex items-center py-20 px-4 bg-gray-800">
            <div className="max-w-6xl mx-auto">
              <motion.h2 
                initial={{ x: -50 }}
                whileInView={{ x: 0 }}
                className="text-4xl font-bold mb-8 text-blue-500"
              >
                About Me
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-lg text-gray-300 leading-relaxed">
                    I am a passionate Cloud Engineer with extensive experience in designing and implementing cloud solutions. 
                    With a strong focus on AWS and Azure platforms, I help organizations build scalable, secure, and efficient 
                    infrastructure.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed mt-4">
                    My expertise in DevOps practices allows me to bridge the gap between development and operations, 
                    ensuring smooth deployment pipelines and robust infrastructure as code implementations.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="bg-gray-900 p-6 rounded-lg"
                >
                  <h3 className="text-xl font-bold mb-4 text-blue-500">Key Expertise</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Cloud Architecture & Migration</li>
                    <li>• Infrastructure as Code</li>
                    <li>• CI/CD Implementation</li>
                    <li>• Container Orchestration</li>
                    <li>• DevOps Best Practices</li>
                    <li>• Cloud Security & Compliance</li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="min-h-screen flex items-center py-20 px-4">
            <div className="max-w-6xl mx-auto w-full">
              <motion.h2 
                initial={{ x: -50 }}
                whileInView={{ x: 0 }}
                className="text-4xl font-bold mb-12 text-blue-500"
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
                    className="bg-gray-800 p-6 rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="text-blue-500 font-medium">{skill.level}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div 
                        className="bg-blue-500 h-2.5 rounded-full transition-all duration-1000"
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="min-h-screen flex items-center py-20 px-4">
            <div className="max-w-6xl mx-auto w-full">
              <motion.h2 
                initial={{ x: -50 }}
                whileInView={{ x: 0 }}
                className="text-4xl font-bold mb-12 text-blue-500"
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
                    className="bg-gray-800 rounded-lg overflow-hidden"
                  >
                    <div className="h-48 bg-gray-700"></div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-400 mb-4">{project.description}</p>
                      <a 
                        href={project.link}
                        className="text-blue-500 hover:text-blue-400 font-medium"
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
                <section id="certifications" className="min-h-screen flex items-center py-20 px-4 bg-gray-800">
                  <div className="max-w-6xl mx-auto w-full">
                    <motion.h2 
                      initial={{ x: -50 }}
                      whileInView={{ x: 0 }}
                      className="text-4xl font-bold mb-12 text-blue-500"
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
                          className="bg-gray-900 p-6 rounded-lg border border-blue-500/20 hover:border-blue-500 transition-all cursor-pointer"
                          onClick={() => setSelectedCert(cert)}
                        >
                          <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                          <p className="text-gray-400">{cert.issuer}</p>
                          <p className="text-blue-500">{cert.year}</p>
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
                className="bg-gray-800 p-4 rounded-lg max-w-2xl w-full"
                onClick={e => e.stopPropagation()}
              >
                <img 
                  src={selectedCert.image} 
                  alt={selectedCert.name}
                  className="w-full h-auto rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold mb-2">{selectedCert.name}</h3>
                <p className="text-gray-400">{selectedCert.issuer} - {selectedCert.year}</p>
              </motion.div>
            </motion.div>
          )}

          {/* Footer - Update with icons */}
          <footer className="bg-gray-900 py-12 px-4 border-t border-gray-800">
            <div className="max-w-6xl mx-auto text-center">
              <div className="flex justify-center gap-8 mb-8">
                <a href="#" className="text-2xl text-gray-400 hover:text-blue-500 transition-colors">
                  <FaLinkedin />
                </a>
                <a href="#" className="text-2xl text-gray-400 hover:text-blue-500 transition-colors">
                  <FaGithub />
                </a>
                <a href="#" className="text-2xl text-gray-400 hover:text-blue-500 transition-colors">
                  <FaEnvelope />
                </a>
              </div>
              <p className="text-gray-400">© 2024 Sidhu. All rights reserved.</p>
            </div>
          </footer>
        </motion.div>
      )}
    </div>
  );
}
