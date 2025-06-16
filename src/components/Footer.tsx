import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp, Code, BarChart3 } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Yashkumar Bilwal</h3>
            <p className="text-slate-400 leading-relaxed">
              Full Stack Developer & Data Analytics Professional passionate about creating 
              innovative solutions and transforming data into actionable insights.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-blue-400">
                <Code size={16} />
                <span className="text-sm">Web Development</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <BarChart3 size={16} />
                <span className="text-sm">Data Analytics</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {['About', 'Skills', 'Projects', 'Services', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.querySelector(`#${link.toLowerCase()}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-left hover:translate-x-1 transform transition-transform"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <div className="space-y-2">
              {[
                'Web Development',
                'Data Analytics',
                'Power BI Dashboards',
                'Business Intelligence'
              ].map((service) => (
                <div key={service} className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-slate-400 mb-4 md:mb-0">
              <span>© {currentYear} Yashkumar Bilwal. Made with</span>
              <Heart size={16} className="text-red-500 fill-current animate-pulse" />
              <span>and lots of coffee</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-slate-400 text-sm">
                Designed & Developed by Yashkumar Bilwal
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="absolute bottom-8 right-8 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
};

export default Footer;
