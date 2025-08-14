import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiBook, FiTarget } from 'react-icons/fi';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = {
    degree: "Bachelors in Computer Science and IT",
    institution: "NED University of Engineering and Technology",
    duration: "Nov 2021 - June 2025",
    gpa: "3.975 (Ranked 1st in batch)",
    coursework: [
      "Programming Fundamentals",
      "Data Structures and Algorithm",
      "Object-Oriented Programming",
      "Design and Analysis of Algorithms",
      "Database Management Systems",
      "Data Warehouse and Mining",
      "Network Security"
    ]
  };

  const languages = [
    { name: "Urdu", level: "Native Speaker" },
    { name: "English", level: "Advanced Level" }
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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="card">
              <h3 className="text-2xl font-bold text-secondary-forest mb-4 flex items-center">
                <FiTarget className="w-6 h-6 mr-3 text-primary-green" />
                My Approach
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I believe in designing with purpose and creating solutions that not only solve 
                technical challenges but also enhance user experiences. My approach combines 
                analytical problem-solving with creative thinking, ensuring that every project 
                I work on delivers both functionality and elegance.
              </p>
            </div>

            <div className="card">
              <h3 className="text-2xl font-bold text-secondary-forest mb-4 flex items-center">
                <FiAward className="w-6 h-6 mr-3 text-primary-green" />
                Achievements
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Ranked 1st in batch with CGPA 3.975</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Led cross-functional team in ESCV Research Lab website development</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Completed Meta Front-End Developer Specialization</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Education & Languages */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="card">
              <h3 className="text-2xl font-bold text-secondary-forest mb-4 flex items-center">
                <FiBook className="w-6 h-6 mr-3 text-primary-green" />
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg text-secondary-forest">
                    {education.degree}
                  </h4>
                  <p className="text-primary-green font-medium">
                    {education.institution}
                  </p>
                  <p className="text-gray-500 text-sm">{education.duration}</p>
                  <p className="text-primary-green font-medium mt-2">
                    Final CGPA: {education.gpa}
                  </p>
                </div>
                
                <div>
                  <h5 className="font-semibold text-secondary-forest mb-2">
                    Relevant Coursework:
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {education.coursework.map((course, index) => (
                      <div key={index} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-secondary-brown rounded-full mr-2"></span>
                        <span className="text-sm text-gray-600 dark:text-gray-300">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-2xl font-bold text-secondary-forest mb-4">
                Languages
              </h3>
              <div className="space-y-3">
                {languages.map((language, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="font-medium text-secondary-forest">
                      {language.name}
                    </span>
                    <span className="text-primary-green text-sm font-medium">
                      {language.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section - Personal Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <div className="card bg-gradient-to-r from-primary-beige to-secondary-cream">
              <p className="text-lg text-secondary-forest leading-relaxed">
                "I am passionate about leveraging technology to solve real-world problems. 
                With a strong foundation in both frontend and backend development, I strive 
                to create applications that are not only technically sound but also provide 
                exceptional user experiences. My goal is to continue learning and growing 
                while contributing to meaningful projects that make a positive impact."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 