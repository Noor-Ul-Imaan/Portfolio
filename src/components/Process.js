import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiSearch, FiZap, FiCode, FiCheckCircle } from 'react-icons/fi';

const Process = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      description: "Understanding requirements, analyzing problems, and gathering insights to define project scope and objectives.",
      icon: FiSearch,
      details: [
        "Requirements gathering and analysis",
        "Stakeholder consultation",
        "Technical feasibility assessment",
        "Project scope definition"
      ]
    },
    {
      step: "02",
      title: "Ideation",
      description: "Brainstorming solutions, creating wireframes, and designing the architecture that will bring the vision to life.",
      icon: FiZap,
      details: [
        "Solution architecture design",
        "UI/UX wireframing",
        "Technology stack selection",
        "Project planning and timeline"
      ]
    },
    {
      step: "03",
      title: "Execution",
      description: "Building the solution with clean, efficient code while maintaining high standards and best practices.",
      icon: FiCode,
      details: [
        "Agile development methodology",
        "Clean code implementation",
        "Regular testing and quality assurance",
        "Version control and collaboration"
      ]
    },
    {
      step: "04",
      title: "Delivery",
      description: "Deploying the solution, providing documentation, and ensuring smooth handover with ongoing support.",
      icon: FiCheckCircle,
      details: [
        "Production deployment",
        "Comprehensive documentation",
        "User training and support",
        "Post-launch maintenance"
      ]
    }
  ];

  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">My Process</h2>
          <div className="decorative-line"></div>
          <p className="section-subtitle">
            A systematic approach to delivering high-quality software solutions that meet your needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-green text-white rounded-full flex items-center justify-center font-bold text-lg z-10">
                {step.step}
              </div>

              {/* Card */}
              <div className="card h-full pt-8 hover:shadow-2xl transition-all duration-500 group">
                <div className="text-center space-y-4">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary-beige rounded-full flex items-center justify-center mx-auto group-hover:bg-primary-green transition-all duration-300">
                    <step.icon className="w-8 h-8 text-primary-green group-hover:text-white transition-all duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-secondary-forest group-hover:text-primary-green transition-colors duration-300">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center text-xs">
                        <span className="w-1.5 h-1.5 bg-primary-green rounded-full mr-2"></span>
                        <span className="text-gray-500 dark:text-gray-400">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Connecting Line */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary-green transform -translate-y-1/2 z-0"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Continuous Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
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

export default Process; 