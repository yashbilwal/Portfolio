import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, BarChart3, Sparkles } from 'lucide-react';
import webscrapimg from '../Images/sentiment.png';
import blinkitimg from '../Images/blinkit.png';
import custsegimg from '../Images/customer_segment.png';
import flowerclassimg from '../Images/flowerclass.png';
import precesionimg from '../Images/Precision.png';
import angquizimg from '../Images/angquiz.png';
import ecommerceimg from '../Images/ecommerce_home.png';
import stocksensorimg from '../Images/stocksensor_home.png';
import bellabeatimg from '../Images/bellabeat_case_study_report.png';
import custmarketingimg from '../Images/customer_marketing_campaign_analysis.png';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('all');

  const webProjects = [
    {
      title: 'Stock Sensor – Smart Stock Prediction & Analysis Tool ',
      description: 'Stock Sensor(Final Year Project) is a smart stock market tool that predicts short-term gainers using rule-based VCP and IPO Base patterns. It offers insights like support/resistance zones, financials, and price-volume charts. Built with React, Flask, and MySQL, it features a real-time dashboard with predictions, stock reports, and live news & sentiments.',
      image: stocksensorimg,
      tech: ['React', 'TypeScript', 'Flask', 'MySQL', 'Selenium'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'web',
      status: 'In Progress'
    },
    {
      title: 'Ecommerce Web Application',
      description: 'A full-featured ecommerce platform built with the MERN stack (MongoDB, Express, React, Node.js). It includes user authentication, product listings, shopping cart, order processing, admin dashboard, and payment integration. Designed with a responsive UI and real-time data handling for seamless user experience.',
      image: ecommerceimg,
      tech: ['React', 'Express', 'Node', 'MongoDb', 'Stripe', 'Cloudinary'],
      liveUrl: 'https://github.com/yashbilwal/ecommerce/tree/main/Desktop/ecom/frontend/public',
      githubUrl: 'https://github.com/yashbilwal/ecommerce/tree/main/Desktop/ecom/frontend/public',
      category: 'web'
    },
    {
      title: 'Industrial Buiness Showcase Website',
      description: 'A modern, responsive, and professional website built for industrial businesses. This website is designed to showcase products, certifications, client testimonials, and a strong company presence with integrated maps, reviews, and social media.',
      image: precesionimg,
      tech: ['React', 'Type Script', 'JSX/TSX', 'Vite', 'Node.js'],
      liveUrl: 'https://precisiontech.vercel.app/',
      githubUrl: 'https://github.com/yashbilwal/Industrial-Business-Showcase-Website?tab=readme-ov-file',
      category: 'web'
    },
    {
      title: 'Angular Quiz App',
      description: 'AngularQuizApp is a dynamic web application built with Angular that allows users to take interactive quizzes. It features a clean user interface, real-time score tracking, and seamless navigation, making it ideal for testing knowledge in a fun and engaging way.',
      image: angquizimg,
      tech: ['Angular', 'TypeScript', 'HTML & CSS', 'npm'],
      liveUrl: 'https://github.com/yashbilwal/online-test-application',
      githubUrl: 'https://github.com/yashbilwal/online-test-application',
      category: 'web'
    }

  ];

  const dataProjects = [
    {
      title: 'Customer Marketing Campaign Analysis',
      description: 'This project explores customer behavior and marketing effectiveness using a real retail dataset. I performed data cleaning, feature engineering, customer segmentation (using clustering), and developed insights around product preference, engagement scores, and channel usage. The goal was to help marketing teams design personalized campaigns to improve ROI. The project follows a structured analytics workflow from Ask to Act, mimicking industry standards.',
      image: custmarketingimg,
      tech: ['R', 'ggplot2', 'Marketing Analytics & Campaign Insights', 'Data Cleaning', 'Feature Engineering & EDA'],
      viewUrl: '/Customer-Marketing-Campaign-Analysis-Report.pdf',
      category: 'data'
    },
    {
      title: 'Bellabeat Case Study – Google Data Analytics Capstone',
      description: 'Analyzed Fitbit device data using R to uncover trends in user activity, sleep, and heart rate. Built a report with insights and marketing recommendations for Bellabeat.',
      image: bellabeatimg,
      tech: ['R', 'ggplot2', 'tidyverse', 'Data Cleaning', 'EDA'],
      viewUrl: '/Bellabeat-Case-Study-Report.pdf',
      category: 'data'
    },
    {
      title: 'Blinkit Sales & Operations Dashboard (Power BI)',
      description: 'Built an interactive Power BI dashboard for Blinkit to visualize key business metrics. Used SQL for data transformation involving filtering, joins, and aggregation of sales and regional data. Delivered real-time insights into sales trends, customer behavior, and product demand to support data-driven decisions.',
      image: blinkitimg,
      tech: ['Power BI', 'Power Query', 'SQL', 'DAX', 'Excel'],
      viewUrl: 'https://github.com/yashbilwal/blinkit-powerbi-dashboard',
      category: 'data'
    },
    {
      title: 'Web Scraping & Sentiment Analysis Dashboard',
      description: 'This project collects live news headlines using web scraping (from NDTV), performs sentiment analysis using TextBlob, and visualizes the results in a React-based dashboard. It uses Flask as the backend, Selenium for scraping, and provides real-time insights into positive, neutral, and negative sentiments in financial news.',
      image: webscrapimg,
      tech: ['Python', 'Selenium', 'TextBlob', 'Flask', 'React'],
      viewUrl: 'https://github.com/yashbilwal/web-scraping-sentiment-dashboard',
      category: 'data'
    },
    {
      title: 'Customer Segmentation using R (K-Means Clustering)',
      description: 'This project performs customer segmentation using K-Means Clustering in R. The goal is to identify different customer groups based on spending behavior or features and visualize the clusters. The solution is deployed as a Shiny web app.',
      image: custsegimg,
      tech: ['R', 'K-Means Clustering', 'Data Cleaning & Preprocessing', 'Shiny App'],
      viewUrl: 'https://yashbilwal.shinyapps.io/customer_segmentation_using_r_k-means_clustering/',
      category: 'data'
    },
    {
      title: 'Flower Class Prediction using Machine Learning',
      description: 'Performed data analysis and preprocessing on a flower dataset to explore patterns and feature relationships. Applied K-Means clustering and classification techniques to build a predictive model for flower species. Visualized insights using plots and charts to support model development. Final model in a simple web app to demonstrate real-time prediction capability.',
      image: flowerclassimg,
      tech: ['Python', 'ML', 'Scikit-learn', 'Pandas & Numpy', 'Flask', 'React'],
      viewUrl: 'https://github.com/yashbilwal/blinkit-powerbi-dashboard',
      category: 'data'
    },
  ];

  const allProjects = [...webProjects, ...dataProjects];

  const filterButtons = [
    { id: 'all', label: 'All Projects', count: allProjects.length, icon: <Sparkles size={16} /> },
    { id: 'web', label: 'Web Development', count: webProjects.length, icon: '💻' },
    { id: 'data', label: 'Data Analytics', count: dataProjects.length, icon: '📊' }
  ];

  const getFilteredProjects = () => {
    if (activeFilter === 'all') return allProjects;
    if (activeFilter === 'web') return webProjects;
    if (activeFilter === 'data') return dataProjects;
    return allProjects;
  };

  const ProjectCard = ({ project, index }: { project: any; index: number }) => (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="project-card rounded-xl shadow-lg overflow-hidden animated-border"
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex space-x-4">
            {project.category === 'web' ? (
              <>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={project.liveUrl}
                  className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors duration-300 shadow-lg"
                >
                  <ExternalLink size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={project.githubUrl}
                  className="bg-purple-500 text-white p-3 rounded-full hover:bg-purple-600 transition-colors duration-300 shadow-lg"
                >
                  <Github size={20} />
                </motion.a>
              </>
            ) : (
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={project.viewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors duration-300 shadow-lg"
              >
                <BarChart3 size={20} />
              </motion.a>

            )}
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <div className="flex gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.category === 'web'
              ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
              : 'bg-green-500/20 text-green-400 border border-green-500/30'
              }`}>
              {project.category === 'web' ? 'Web Dev' : 'Analytics'}
            </span>

            {project.status && (
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                {project.status}
              </span>
            )}
          </div>
        </div>

        <p className="text-slate-300 mb-4 text-sm leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-xs font-medium border border-slate-600/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projects & <span className="gradient-text">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A showcase of my professional projects spanning web development and data analytics
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filterButtons.map((button) => (
            <motion.button
              key={button.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(button.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${activeFilter === button.id
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg neon-glow'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-600/30'
                }`}
            >
              {typeof button.icon === 'string' ? (
                <span className="text-lg">{button.icon}</span>
              ) : (
                button.icon
              )}
              {button.label}
              <span className={`ml-2 px-2 py-1 rounded-full text-xs ${activeFilter === button.id
                ? 'bg-white/20 text-white'
                : 'bg-slate-700 text-slate-400'
                }`}>
                {button.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {getFilteredProjects().map((project, index) => (
            <ProjectCard key={`${project.title}-${activeFilter}`} project={project} index={index} />
          ))}
        </motion.div>

        {/* Empty State */}
        {getFilteredProjects().length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-slate-400 text-lg">No projects found for the selected category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;