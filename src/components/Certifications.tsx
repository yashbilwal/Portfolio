import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink, Star } from 'lucide-react';
import meanStackImg from '../Images/mean-stack.png'; // Adjust the path as necessary

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    {
      title: 'Full Stack Web Developer - MEAN Stack',
      issuer: 'Simplilearn',
      date: 'Aug, 2023',
      description: 'Comprehensive full-stack development program covering MongoDB, Express.js, Angular, and Node.js.',
      image: meanStackImg,
      skills: ['MongoDB', 'Express.js', 'Angular', 'Node.js', 'TypeScript'],
      credentialUrl: 'https://success.simplilearn.com/79590966',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Google Data Analytics Professional Certificate',
      issuer: 'Google',
      date: 'expected June, 2025',
      description: 'Comprehensive program covering data analysis, visualization, and statistical analysis using industry-standard tools.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      skills: ['Data Analysis', 'SQL', 'Tableau', 'R Programming', 'Data Visualization'],
      credentialUrl: '#',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Microsoft Certified: Power BI Data Analyst Associate',
      issuer: 'Microsoft',
      date: 'expected July, 2025',
      description: 'Advanced certification in Power BI for creating interactive dashboards and business intelligence solutions.',
      image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      skills: ['Power BI', 'DAX', 'Power Query', 'Data Modeling', 'Business Intelligence'],
      credentialUrl: '#',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Professional certifications that validate my expertise in web development and data analytics
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.15, ease: 'easeOut' }} // applies to both enter and exit
              className="dark-card rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-150"
            >



              <div className="relative">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className={`absolute top-4 right-4 bg-gradient-to-r ${cert.color} text-white p-3 rounded-full shadow-lg`}>
                  <Award size={20} />
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-sm font-medium bg-gradient-to-r ${cert.color} bg-clip-text text-transparent px-3 py-1 rounded-full border border-slate-600/30`}>
                    {cert.issuer}
                  </span>
                  <span className="text-sm text-slate-400">{cert.date}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                  {cert.title}
                </h3>

                <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                  {cert.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Skills:</h4>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs border border-slate-600/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {cert.credentialUrl && cert.credentialUrl !== '#' ? (
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors duration-200"
                  >
                    View Credential
                    <ExternalLink size={14} />
                  </motion.a>
                ) : (
                  <span className="inline-block text-yellow-600 font-semibold text-sm italic">
                    Completing Soon
                  </span>
                )}

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Certifications;
