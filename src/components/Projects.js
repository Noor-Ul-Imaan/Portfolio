import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "NavigateSolo",
      description: "Assistive technology system for visually impaired individuals using React Native and Arduino",
      keyFeatures: [
        "Cross-platform mobile app with React Native",
        "Arduino-powered smart cane integration",
        "Indoor navigation using Wi-Fi fingerprinting"
      ],
      technologies: ["React Native", "Arduino", "Figma", "Tailwind CSS", "Appwrite"],
      github: "https://github.com/laibashakil/NavigateSolo",
      demo: null,
    },
    {
      title: "Taskify",
      description: "Comprehensive task management system for organizations using MERN stack",
      keyFeatures: [
        "User authentication and task assignment",
        "Real-time task tracking and reporting",
        "Responsive design for all devices"
      ],
      technologies: ["MongoDB", "Express.js", "ReactJS", "Node.js", "Authentication"],
      github: "https://github.com/Noor-Ul-Imaan/Taskify-App",
      demo: null,
    },
    {
      title: "Movie Website",
      description: "Dynamic movie browsing website with external API integration",
      keyFeatures: [
        "External API integration for movie data",
        "Dynamic state management",
        "Responsive web design"
      ],
      technologies: ["ReactJS", "External APIs", "Responsive Design", "State Management"],
      github: "https://github.com/Noor-Ul-Imaan/Movie-Website",
      demo: "https://movie-website-ashy-iota.vercel.app/",
    },
    {
      title: "Hostel Management System",
      description: "Desktop application for hostel operations using C++ and OOP principles",
      keyFeatures: [
        "Student registration and room allocation",
        "Service tracking and management",
        "Advanced OOP implementation"
      ],
      technologies: ["C++", "OOP", "Data Structures", "File I/O"],
      github: "https://github.com/Noor-Ul-Imaan/Hostel-Management-System",
      demo: null,
    }
  ];

  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Projects</h2>
          <div className="decorative-line"></div>
          <p className="section-subtitle">
            A showcase of my technical skills and problem-solving abilities through various projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="card group hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Project Header */}
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-secondary-forest group-hover:text-primary-green transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold text-secondary-forest mb-2 flex items-center">
                    <FiCode className="w-4 h-4 mr-2 text-primary-green" />
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.keyFeatures.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm">
                        <span className="w-1.5 h-1.5 bg-primary-green rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-secondary-forest mb-2">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-secondary-cream text-primary-green text-xs font-medium rounded-full border border-primary-green/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-green text-white rounded-lg hover:bg-secondary-forest transition-all duration-300"
                  >
                    <FiGithub className="w-4 h-4" />
                    <span>Code</span>
                  </motion.a>
                  
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center space-x-2 px-4 py-2 bg-secondary-cream text-primary-green border border-primary-green rounded-lg hover:bg-primary-green hover:text-white transition-all duration-300"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </motion.a>
                  )}
                  
                  {!project.demo && (
                    <motion.button
                      disabled
                      className="inline-flex items-center space-x-2 px-4 py-2 bg-secondary-cream text-primary-green border border-primary-green rounded-lg opacity-50 cursor-not-allowed"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 text-center"
        >
          <div className="card bg-gradient-to-r from-primary-beige to-secondary-cream">
            <h3 className="text-2xl font-bold text-secondary-forest mb-4">
              Want to See More?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Check out my GitHub profile for more projects and contributions. 
              I'm always working on new ideas and open to collaboration!
            </p>
            <motion.a
              href="https://github.com/Noor-Ul-Imaan"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center space-x-2"
            >
              <FiGithub className="w-5 h-5" />
              <span>View GitHub Profile</span>
            </motion.a>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Projects; 