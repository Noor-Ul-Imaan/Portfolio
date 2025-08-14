import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiHeart, FiTrendingUp, FiUsers, FiTarget, FiZap } from 'react-icons/fi';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technicalSkills = [
    {
      category: "Frontend Development",
      skills: ["HTML", "CSS", "JavaScript", "ReactJS", "React Native", "Bootstrap", "Tailwind CSS", "jQuery"]
    },
    {
      category: "Backend Development",
      skills: ["Python", "Django", "NodeJS", "Express.js", "PHP"]
    },
    {
      category: "Programming Languages",
      skills: ["C++", "JavaScript", "Python", "PHP"]
    },
    {
      category: "Databases",
      skills: ["MongoDB", "Oracle", "PostgreSQL"]
    },
    {
      category: "Tools & Technologies",
      skills: ["Git/GitHub", "Figma", "WordPress", "Contentful", "Appwrite", "Celery"]
    },
    {
      category: "Concepts & Methodologies",
      skills: ["OOP", "UI/UX", "Responsive Design", "REST APIs", "Authentication", "Version Control"]
    }
  ];

  const softSkills = [
    {
      skill: "Leadership",
      description: "Led cross-functional teams and mentored junior developers",
      icon: FiUsers
    },
    {
      skill: "Collaboration",
      description: "Worked effectively in team environments across multiple projects",
      icon: FiHeart
    },
    {
      skill: "Problem Solving",
      description: "Analytical approach to complex technical challenges",
      icon: FiTarget
    },
    {
      skill: "Project Management",
      description: "Managed project timelines and deliverables effectively",
      icon: FiTrendingUp
    },
    {
      skill: "Communication",
      description: "Clear communication with stakeholders and team members",
      icon: FiUsers
    },
    {
      skill: "Time Management",
      description: "Efficiently balanced multiple projects and deadlines",
      icon: FiZap
    }
  ];

  const certifications = [
    {
      name: "Meta Front-End Developer Specialization",
      year: "2024",
      description: "Advanced HTML, CSS, JavaScript, Git/GitHub, and ReactJS skills. Explored UI/UX with Figma software. Designed and developed a restaurant website's booking feature as the capstone project."
    }
  ];

  return (
    <section id="skills" className="section-padding bg-primary-beige dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="decorative-line"></div>
          <p className="section-subtitle">
            A comprehensive overview of my technical capabilities and professional competencies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="card">
              <h3 className="text-2xl font-bold text-secondary-forest mb-6 flex items-center">
                <FiCode className="w-6 h-6 mr-3 text-primary-green" />
                Technical Skills
              </h3>
              
              <div className="space-y-6">
                {technicalSkills.map((category, index) => (
                  <div key={index} className="space-y-3">
                    <h4 className="font-semibold text-primary-green text-lg">
                      {category.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-2 bg-white dark:bg-gray-700 text-secondary-forest text-sm font-medium rounded-lg border border-primary-green/20 hover:border-primary-green/40 transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="card">
              <h3 className="text-2xl font-bold text-secondary-forest mb-6 flex items-center">
                <FiHeart className="w-6 h-6 mr-3 text-primary-green" />
                Core Values & Soft Skills
              </h3>
              
              <div className="grid gap-4">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 bg-secondary-cream rounded-lg border-l-4 border-primary-green"
                  >
                    <div className="flex items-start space-x-3">
                      <skill.icon className="w-5 h-5 text-primary-green mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-secondary-forest">
                          {skill.skill}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="card">
            <h3 className="text-2xl font-bold text-secondary-forest mb-6 text-center">
              Certifications
            </h3>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="p-6 bg-gradient-to-r from-primary-beige to-secondary-cream rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-xl font-bold text-secondary-forest">
                      {cert.name}
                    </h4>
                    <span className="text-primary-green font-semibold">
                      {cert.year}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="card bg-gradient-to-r from-primary-green to-secondary-forest text-white">
            <h3 className="text-2xl font-bold mb-4">
              Continuous Learning & Growth
            </h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              I believe in staying current with the latest technologies and best practices. 
              My commitment to continuous learning ensures I can deliver cutting-edge solutions 
              that meet modern development standards and user expectations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 