import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Dr. Sarah Ahmed",
      position: "Research Lead, Neurocomputation Lab - NED",
      content: "Noor demonstrated exceptional leadership skills while leading our ESCV Research Lab website project. His technical expertise in ReactJS and UI/UX design resulted in a professional, user-friendly interface that exceeded our expectations. His ability to manage a cross-functional team while maintaining high code quality was impressive.",
      rating: 5,
      avatar: "SA"
    },
    {
      name: "Muhammad Hassan",
      position: "Senior Software Engineer, Arbisoft",
      content: "During his internship, Noor showed remarkable growth and adaptability. He quickly grasped complex concepts like Django and PostgreSQL, and his implementation of the Celery scheduled task was clean and efficient. His commitment to learning and following best practices like PEP8 made him a valuable team member.",
      rating: 5,
      avatar: "MH"
    },
    {
      name: "Aisha Khan",
      position: "Project Manager, Interns Pakistan",
      content: "Noor's dedication to learning and implementing new technologies was outstanding. He successfully developed both a Screener App and a portfolio website, demonstrating strong skills in Bootstrap, JavaScript, and WordPress. His attention to detail and responsive design implementation was commendable.",
      rating: 5,
      avatar: "AK"
    },
    {
      name: "Ahmed Raza",
      position: "Team Lead, NavigateSolo Project",
      content: "Working with Noor on the NavigateSolo assistive technology project was a great experience. His expertise in React Native and Arduino integration, combined with his passion for creating accessible solutions, made a significant impact on the project's success. His collaborative approach and technical skills are exceptional.",
      rating: 5,
      avatar: "AR"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="section-padding bg-primary-beige dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">What People Say</h2>
          <div className="decorative-line"></div>
          <p className="section-subtitle">
            Testimonials from colleagues, mentors, and project collaborators.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="card text-center p-8 md:p-12"
          >
            {/* Rating */}
            <div className="flex justify-center space-x-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, index) => (
                <FiStar key={index} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 italic">
              "{testimonials[currentIndex].content}"
            </blockquote>

            {/* Author */}
            <div className="space-y-2">
              <div className="w-16 h-16 bg-primary-green text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                {testimonials[currentIndex].avatar}
              </div>
              <h4 className="text-xl font-bold text-secondary-forest">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-primary-green font-medium">
                {testimonials[currentIndex].position}
              </p>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="p-3 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-primary-green hover:text-secondary-forest"
            >
              <FiChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary-green' 
                      : 'bg-gray-300 hover:bg-primary-green/50'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="p-3 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-primary-green hover:text-secondary-forest"
            >
              <FiChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="card bg-gradient-to-r from-primary-green to-secondary-forest text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and collaborate with amazing teams. 
              Let's discuss how we can work together to bring your ideas to life!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 