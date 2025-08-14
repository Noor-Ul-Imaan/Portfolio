import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Noor-Ul-Imaan',
      icon: FiGithub,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/noor-ul-imaan',
      icon: FiLinkedin,
    },
    {
      name: 'Email',
      url: 'mailto:noorulimaan47@gmail.com',
      icon: FiMail,
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary-forest text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-primary-beige mb-4">
              Noor Ul Imaan
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Software Developer passionate about creating innovative solutions 
              and building user-centric applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-primary-beige mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.querySelector(`#${link.toLowerCase()}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-gray-300 hover:text-primary-beige transition-colors duration-300"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-primary-beige mb-4">
              Connect With Me
            </h4>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-primary-green text-white rounded-full flex items-center justify-center hover:bg-primary-beige hover:text-secondary-forest transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-gray-300 text-sm">
              © {currentYear} Noor Ul Imaan. All rights reserved.
            </p>

            {/* Made with Love */}
            <div className="flex items-center space-x-2 text-gray-300 text-sm">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <FiHeart className="w-4 h-4 text-red-400 fill-current" />
              </motion.div>
              <span>using React & Tailwind CSS</span>
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-primary-beige hover:text-white transition-colors duration-300 text-sm"
            >
              Back to Top ↑
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 