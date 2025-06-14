import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Sparkles } from 'lucide-react';
import herobackimg from '../Images/herobackground.jpg';

const Hero = () => {
  const scrollToProjects = () => {
    const projectSection = document.querySelector('#projects');
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${'https://img.freepik.com/premium-photo/overhead-shot-dark-modern-workplace-with-wireless-keyboard-copy-space-camera-coffee-cup-black-table_67155-6155.jpg?uid=R154931094&ga=GA1.1.1138092860.1747804690&semt=ais_hybrid&w=740'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/80"></div>

      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex items-center justify-center mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Sparkles className="text-blue-400 mr-2" size={24} />
            <span className="text-blue-400 font-medium">Welcome to my digital world</span>
            <Sparkles className="text-blue-400 ml-2" size={24} />
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm <span className="gradient-text">Yash</span>
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl mb-8 text-slate-300 font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Web Development & Data Analytics Enthusiast
          </motion.p>

          <motion.p
            className="text-lg mb-12 text-slate-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Transforming ideas into powerful web applications and turning data into actionable insights with cutting-edge technology and creative solutions
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(96, 165, 250, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToProjects()}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl neon-glow"
            >
              View My Work
            </motion.button>

            <motion.a
              href="/Yashkumar_Bilwal_CV.pdf"
              download
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-slate-300 text-slate-300 hover:border-blue-400 hover:text-blue-400 px-10 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-3 backdrop-blur-sm"
            >
              <Download size={20} />
              Download CV
            </motion.a>

          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <button
          onClick={scrollToAbout}
          className="text-slate-300 hover:text-blue-400 transition-colors duration-300 p-2 rounded-full hover:bg-white/10"
        >
          <ChevronDown size={32} />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;