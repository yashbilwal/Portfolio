import React, {useState} from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const webDevSkills = [
    { name: 'MongoDB', icon: '🍃', color: 'from-green-400 to-green-600' },
    { name: 'Express.js', icon: '⚡', color: 'from-yellow-400 to-yellow-600' },
    { name: 'Angular', icon: '🅰️', color: 'from-red-400 to-red-600' },
    { name: 'React', icon: '⚛️', color: 'from-blue-400 to-blue-600' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-400 to-green-600' },
    { name: 'TypeScript', icon: '📘', color: 'from-blue-400 to-blue-600' },
    { name: 'JavaScript', icon: '📜', color: 'from-yellow-400 to-yellow-600' },
    { name: 'HTML5', icon: '🌐', color: 'from-orange-400 to-orange-600' },
    { name: 'CSS3', icon: '🎨', color: 'from-blue-400 to-blue-600' },
    { name: 'Agile', icon: '🧑‍🤝‍🧑', color: 'from-gray-400 to-gray-600' },
  ];

  const dataSkills = [
    { name: 'Power BI', icon: '📊', color: 'from-yellow-400 to-yellow-600' },
    { name: 'SQL', icon: '🗃️', color: 'from-blue-400 to-blue-600' },
    { name: 'Python', icon: '🐍', color: 'from-green-400 to-green-600' },
    { name: 'Excel', icon: '📈', color: 'from-green-400 to-green-600' },
    { name: 'Selenium', icon: '🧪', color: 'from-blue-400 to-blue-600' },
    { name: 'R', icon: '📊', color: 'from-purple-400 to-purple-600' },
    { name: 'Statistics', icon: '📐', color: 'from-indigo-400 to-indigo-600' },
    { name: 'Data Visualization', icon: '📉', color: 'from-pink-400 to-pink-600' },
    { name: 'Machine Learning', icon: '🤖', color: 'from-purple-400 to-purple-600' },
    { name: 'Data Mining', icon: '⛏️', color: 'from-gray-400 to-gray-600' },
  ];

  const SkillCard = ({ skill, index }: { skill: any; index: number }) => {
    const [isHovered, setIsHovered] = useState(false);
    return(
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? 0 : 20,
        scale: isHovered ? 1.05 : 1,
        translateY: isHovered ? -5 : 0,
      }}
      transition={{
        opacity: { duration: 0.5, delay: index * 0.1 },
        y: { duration: 0.5, delay: index * 0.1 },
        scale: { duration: 0.1 },
        translateY: { duration: 0.1 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`skill-icon p-6 rounded-xl shadow-lg ${skill.color} cursor-pointer`}
    >
      <div className="text-4xl mb-3 text-center filter drop-shadow-lg">{skill.icon}</div>
      <div className="text-center font-semibold text-white text-sm">{skill.name}</div>
    </motion.div>
  );
};


  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A comprehensive skill set spanning modern web development and data analytics
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Web Development Skills */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl font-bold text-white mb-8 text-center"
            >
              Web Development (MEAN Stack)
            </motion.h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {webDevSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Data Analytics Skills */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl font-bold text-white mb-8 text-center"
            >
              Data Analytics & Visualization
            </motion.h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {dataSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index + 10} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;