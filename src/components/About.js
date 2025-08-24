import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward } from 'react-icons/fi';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const techStack = [
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "Language" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "Frontend" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "Backend" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "Language" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "Database" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "Tools" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", category: "Design" },
    { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", category: "Framework" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", category: "Frontend" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", category: "Frontend" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", category: "Backend" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", category: "Database" },
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <div className="decorative-line"></div>
          <p className="section-subtitle">
            A passionate software developer with a strong foundation in computer science 
            and a drive to create innovative solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Personal Intro & Achievements */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="card">
              <h3 className="text-2xl font-bold text-secondary-forest mb-6">
                Who I Am
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                <p>
                  I'm a dedicated software engineer with a passion for creating impactful solutions that solve real-world problems. 
                  Currently pursuing my Bachelor's in Computer Science at NED University, I've developed a strong foundation in 
                  both frontend and backend development, with expertise in modern web technologies and mobile app development.
                </p>
                <p>
                  My approach combines analytical problem-solving with creative thinking, ensuring that every project I work on 
                  delivers both functionality and elegance. I believe in writing clean, maintainable code and creating user experiences 
                  that are intuitive and engaging.
                </p>
                <p>
                  Throughout my academic journey, I've achieved several milestones including ranking 1st in my batch with a CGPA of 3.975, 
                  leading cross-functional teams in research projects, and completing the Meta Front-End Developer Specialization. 
                  I've also developed assistive technology for visually impaired individuals, demonstrating my commitment to using 
                  technology for social impact.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="card h-full">
              <h3 className="text-2xl font-bold text-secondary-forest mb-6 text-center">
                Tech Stack
              </h3>
              
              <div className="grid grid-cols-3 gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.6 + (index * 0.05),
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ scale: 1.1 }}
                    className="text-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                  >
                    <img 
                      src={tech.icon} 
                      alt={tech.name}
                      className="w-12 h-12 mx-auto mb-2"
                    />
                    <p className="text-sm font-medium text-secondary-forest">{tech.name}</p>
                    <p className="text-xs text-primary-green">{tech.category}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 