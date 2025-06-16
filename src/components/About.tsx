import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, BarChart3, Award, Coffee } from 'lucide-react';
import profileimg from '../Images/profile.png'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-gradient-to-r from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src= {profileimg}
                    alt="Yash Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg neon-glow">
                <span className="text-white font-bold text-lg">Y</span>
              </div>
              
              {/* Floating icons */}
              <motion.div
                className="absolute -left-8 top-20 p-3 bg-slate-800 rounded-full shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
              >
                <Code className="text-blue-400" size={24} />
              </motion.div>
              
              <motion.div
                className="absolute -right-8 bottom-20 p-3 bg-slate-800 rounded-full shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <BarChart3 className="text-purple-400" size={24} />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Passionate Developer & Data Analyst
            </h3>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              I’m a dedicated and growth-driven learner who has built strong skills in web development 
              and data analytics. With hands-on experience in the MEAN stack and tools like Power BI, 
              I’m now confident and ready to contribute to real-world projects.
            </p>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm especially focused on growing my expertise in SQL, Python, Power BI, and React, 
              which form the foundation of my data and development toolkit.
            </p>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              Whether it's developing responsive websites or creating impactful dashboards, I’m passionate 
              about building solutions that are both functional and insightful — and I'm excited to apply 
              my skills in a professional setting.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 dark-card rounded-xl"
              >
                <div className="text-4xl font-bold gradient-text mb-2">10+</div>
                <div className="text-slate-400 flex items-center justify-center gap-2">
                  <Award size={16} />
                  Projects Completed
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 dark-card rounded-xl"
              >
                <div className="text-4xl font-bold gradient-text mb-2">3</div>
                <div className="text-slate-400 flex items-center justify-center gap-2">
                  <Coffee size={16} />
                  Certifications
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;