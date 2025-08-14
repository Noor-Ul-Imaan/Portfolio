import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCalendar, FiMapPin, FiExternalLink } from 'react-icons/fi';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Full Stack Development Intern",
      company: "Arbisoft",
      duration: "Aug 2024 - Sept 2024",
      location: "Remote",
      description: [
        "Mentored by experienced software engineers on industry best practices",
        "Learned and applied PEP8, the Python coding standard, through structured exercises",
        "Collaborated on a real-world project using Git for version control",
        "Developed a CMS project using Django (backend) and PostgreSQL (database)",
        "Implemented a scheduled task using Celery to auto-populate the database every 2 hours"
      ],
      technologies: ["Python", "Django", "PostgreSQL", "Celery", "Git"]
    },
    {
      title: "Web Design and Development Intern",
      company: "Neurocomputation Lab - NED",
      duration: "Sep 2023 - Nov 2023",
      location: "Karachi, Pakistan",
      description: [
        "Led a cross-functional team in the design and development of the official website of the ESCV Research Lab under NCL-NED",
        "Applied UI/UX principles using Figma to craft an intuitive and user-friendly interface",
        "Developed the website using ReactJS, ensuring responsiveness and semantic HTML",
        "Integrated a Content Management System (CMS) using Contentful for streamlined content updates"
      ],
      technologies: ["ReactJS", "Figma", "Contentful", "HTML", "CSS"]
    },
    {
      title: "Frontend Development Intern",
      company: "Interns Pakistan",
      duration: "Jun 2023 - Jul 2023",
      location: "Remote",
      description: [
        "Learned and practiced HTML5, CSS3, Responsive Web Design, Bootstrap, JavaScript ES6, jQuery, PHP and WordPress",
        "Developed a Screener App with Bootstrap and a portfolio website using WordPress"
      ],
      technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery", "PHP", "WordPress"]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-primary-beige dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Experience</h2>
          <div className="decorative-line"></div>
          <p className="section-subtitle">
            My professional journey in software development, from internships to real-world projects.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="card hover:shadow-2xl transition-all duration-500"
            >
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Left Column - Company Info */}
                <div className="lg:col-span-1">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-secondary-forest">
                      {experience.title}
                    </h3>
                    <p className="text-lg font-semibold text-primary-green">
                      {experience.company}
                    </p>
                    <div className="flex items-center text-gray-500 text-sm">
                      <FiCalendar className="w-4 h-4 mr-2" />
                      {experience.duration}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <FiMapPin className="w-4 h-4 mr-2" />
                      {experience.location}
                    </div>
                  </div>
                </div>

                {/* Right Column - Description & Technologies */}
                <div className="lg:col-span-2 space-y-4">
                  <div>
                    <h4 className="font-semibold text-secondary-forest mb-3">
                      Key Responsibilities & Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {experience.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-primary-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-secondary-forest mb-2">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
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
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="card bg-gradient-to-r from-primary-green to-secondary-forest text-white">
            <h3 className="text-2xl font-bold mb-4">Ready for New Challenges</h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              I'm actively seeking opportunities to apply my skills and continue growing 
              as a software developer. Let's work together to build something amazing!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 