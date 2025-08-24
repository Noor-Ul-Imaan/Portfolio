import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight, FiArrowDown, FiDownload } from 'react-icons/fi';

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Noor-Ul-Imaan',
      icon: FiGithub,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/noor-ul-imaan-waheed-879154243/',
      icon: FiLinkedin,
    },
    {
      name: 'Email',
      url: 'mailto:noorulimaan47@gmail.com',
      icon: FiMail,
    },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary-cream to-primary-beige dark:from-secondary-forest dark:to-primary-green relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary-green rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-primary-green rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-primary-green rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 border border-primary-green rounded-full"></div>
      </div>

      <div className="container-custom text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-primary-green dark:text-primary-beige font-medium"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-secondary-forest dark:text-primary-beige"
          >
            Noor Ul Imaan
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-3xl text-primary-green dark:text-primary-beige font-medium"
          >
            Software Developer
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-lg md:text-xl text-gray-600 dark:text-primary-beige max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about creating innovative solutions and building user-centric applications 
            that make a difference in people's lives.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white dark:bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-primary-green hover:text-secondary-forest"
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="https://drive.google.com/file/d/1hgyvJyJdvfXDPIjOTLlAL85AEQT7prwY/view"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-green text-white px-6 py-3 rounded-lg font-medium hover:bg-secondary-forest transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <span>Download CV</span>
              <FiDownload className="w-5 h-5" />
            </motion.a>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#contact')}
              className="bg-transparent border-2 border-primary-green dark:border-primary-beige text-primary-green dark:text-primary-beige px-6 py-3 rounded-lg font-medium hover:bg-primary-green hover:text-white dark:hover:bg-primary-beige dark:hover:text-secondary-forest transition-all duration-300 flex items-center space-x-2"
            >
              <span>Contact Me</span>
              <FiMail className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
{/* Scroll Indicator */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.5 }}
  className="flex justify-center mt-8"
>
  <motion.button
    onClick={() => scrollToSection('#about')}
    animate={{ y: [0, 10, 0] }}
    transition={{ duration: 2, repeat: Infinity }}
    className="p-2 text-primary-green dark:text-primary-beige hover:text-secondary-forest dark:hover:text-white transition-colors duration-300"
  >
    <FiArrowDown className="w-6 h-6" />
  </motion.button>
</motion.div>

      </div>
    </section>
  );
};

export default Hero; 