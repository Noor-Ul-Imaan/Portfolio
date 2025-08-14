import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiCode, FiUsers, FiTrendingUp } from 'react-icons/fi';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "NavigateSolo",
      description: "Assistive Technology System using React Native, Arduino, and Indoor Navigation Algorithms",
      longDescription: [
        "Developed a cross-platform assistive technology system for enhancing the mobility and safety of visually impaired individuals",
        "Contributed to the development of a mobile app using React Native (Expo), integrated with Arduino-powered smart cane",
        "Collaborated on indoor navigation using Wi-Fi fingerprinting and on GPS/GSM module integration for real-time location tracking",
        "Designed accessible UI/UX prototypes in Figma and implemented them using Tailwind CSS while used Appwrite for authentication and backend services",
        "Practiced version control and collaboration through GitHub, conducting regular deployments and real-world testing"
      ],
      technologies: ["React Native", "Arduino", "Figma", "Tailwind CSS", "Appwrite", "GitHub"],
      impact: "Enhanced mobility and safety for visually impaired individuals",
      category: "Assistive Technology",
      github: "https://github.com/Noor-Ul-Imaan/NavigateSolo",
      live: null,
      image: "navigatesolo"
    },
    {
      title: "Taskify",
      description: "Management System using MERN Stack",
      longDescription: [
        "Developed a task management system for organizations using the MERN stack (MongoDB, Express.js, ReactJS, Node.js), incorporating necessary security practices to ensure data privacy and user authentication",
        "Designed and implemented features for user sign-up/sign-in, task assignment, task submission, and employee reporting, facilitating efficient task tracking and collaboration within organizations",
        "Created a responsive and user-friendly front-end with ReactJS, improving the overall usability across devices and screen sizes"
      ],
      technologies: ["MongoDB", "Express.js", "ReactJS", "Node.js", "Authentication", "Responsive Design"],
      impact: "Improved task tracking efficiency by 40%",
      category: "Web Application",
      github: "https://github.com/Noor-Ul-Imaan/Taskify",
      live: null,
      image: "taskify"
    },
    {
      title: "Movie Website",
      description: "Website Development using ReactJS",
      longDescription: [
        "Developed a website using ReactJS, with state and event handling to ensure dynamic user interactions and seamless functionality",
        "Integrated external APIs to fetch and display relevant data, enhancing the website's functionality and user experience",
        "Implemented responsive web design techniques for optimal display across various devices and screen sizes"
      ],
      technologies: ["ReactJS", "External APIs", "Responsive Design", "State Management"],
      impact: "Enhanced user experience with dynamic interactions",
      category: "Web Application",
      github: "https://github.com/Noor-Ul-Imaan/MovieWebsite",
      live: null,
      image: "movie"
    },
    {
      title: "Hostel Management System",
      description: "C++ with object-oriented programming (OOP) principles",
      longDescription: [
        "Collaborated with a team of developers to designed and implemented a Hostel Management System using C++",
        "Applied advanced OOP concepts to develop efficient and scalable code and to manage various functionalities of the system",
        "Added features for student registration, room allocation, and service tracking, showcasing application of real-world OOP concepts"
      ],
      technologies: ["C++", "OOP", "Data Structures", "File I/O"],
      impact: "Streamlined hostel operations with automated management",
      category: "Desktop Application",
      github: "https://github.com/Noor-Ul-Imaan/HostelManagement",
      live: null,
      image: "hostel"
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
                    <p className="text-sm text-primary-green font-medium mt-1">
                      {project.category}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-primary-beige rounded-lg text-primary-green hover:bg-primary-green hover:text-white transition-all duration-300"
                      >
                        <FiGithub className="w-5 h-5" />
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-primary-beige rounded-lg text-primary-green hover:bg-primary-green hover:text-white transition-all duration-300"
                      >
                        <FiExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Impact Metric */}
                <div className="flex items-center space-x-2 text-sm">
                  <FiTrendingUp className="w-4 h-4 text-primary-green" />
                  <span className="text-primary-green font-medium">
                    {project.impact}
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-secondary-forest mb-2 flex items-center">
                    <FiCode className="w-4 h-4 mr-2 text-primary-green" />
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.longDescription.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm">
                        <span className="w-1.5 h-1.5 bg-primary-green rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-secondary-forest mb-2 flex items-center">
                    <FiUsers className="w-4 h-4 mr-2 text-primary-green" />
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
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
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
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 