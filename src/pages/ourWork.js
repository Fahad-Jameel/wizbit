// worksPage.js
import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/pages/services.module.css';
import { FaRobot, FaSpider, FaCode, FaMobile, FaCloud, FaChartLine, FaDesktop, FaWordpress, FaShoppingCart, FaShopify, FaPaintBrush } from 'react-icons/fa';

const works = [
  { icon: <FaRobot />, title: 'Chatbots', description: 'Enhance user engagement with intelligent chatbot solutions.', longDescription: 'Our chatbot solutions leverage cutting-edge AI technology to provide seamless, 24/7 customer support, increase engagement, and streamline business processes. We design and implement custom chatbots that can handle complex queries, learn from interactions, and integrate with your existing systems.' },
  { icon: <FaSpider />, title: 'Web Scraping & Automation', description: 'Unlock valuable insights with custom data collection tools.', longDescription: 'Our web scraping and automation works help you gather and analyze large amounts of data from various online sources. We develop custom tools that can extract, process, and organize information, enabling you to make data-driven decisions and gain a competitive edge in your industry.' },
  { icon: <FaCode />, title: 'API Development & Integration', description: 'Connect and integrate systems efficiently.' },
  { icon: <FaMobile />, title: 'Mobile App Development', description: 'Create engaging iOS and Android applications.' },
  { icon: <FaCloud />, title: 'Cloud Solutions', description: 'Leverage the power of cloud for scalable infrastructure.' },
  { icon: <FaChartLine />, title: 'Digital Marketing works', description: 'Boost your online presence and drive growth.' },
  { icon: <FaDesktop />, title: 'Custom Software Development', description: 'Get bespoke solutions for your unique business needs.' },
  { icon: <FaWordpress />, title: 'WordPress Websites', description: 'Create stunning and functional WordPress sites.' },
  { icon: <FaShoppingCart />, title: 'Ecommerce Stores', description: 'Launch and manage successful online stores.' },
  { icon: <FaShopify />, title: 'Shopify Stores', description: 'Build customized Shopify stores for your business.' },
  { icon: <FaPaintBrush />, title: 'UI/UX Design', description: 'Deliver exceptional user experiences with intuitive designs.' },
  // ... Add long descriptions for other works
];

const WorksPage = () => {
  const backgroundRef = useRef(null);
  const [expandedwork, setExpandedwork] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const moveX = (clientX - centerX) / 50;
      const moveY = (clientY - centerY) / 50;

      backgroundRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const toggleExpand = (index) => {
    setExpandedwork(expandedwork === index ? null : index);
  };

  return (
    <div className={styles.worksContainer}>
      <div ref={backgroundRef} className={styles.backgroundAnimation}></div>
      <h1 className={styles.title}>Our works</h1>
      <p className={styles.subtitle}>Comprehensive digital solutions for your business needs</p>
      <div className={styles.worksGrid}>
        {works.map((work, index) => (
          <div
            key={index}
            className={`${styles.workCard} ${expandedwork === index ? styles.expanded : ''}`}
            onClick={() => toggleExpand(index)}
          >
            <div className={styles.iconWrapper}>{work.icon}</div>
            <h3>{work.title}</h3>
            <p>{expandedwork === index ? work.longDescription : work.description}</p>
            <button className={styles.readMoreBtn}>
              {expandedwork === index ? 'Read Less' : 'Read More'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorksPage;