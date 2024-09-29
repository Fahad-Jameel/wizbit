

import React, { useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import styles from '../styles/pages/services.module.css';
import { FaDesktop, FaPhone, FaHeadset, FaComments, FaRobot, FaSpider, FaCode, FaMobile, FaCloud, FaChartLine, FaWordpress, FaShoppingCart, FaShopify, FaPaintBrush } from 'react-icons/fa';
import TypeWriter from '../components/Typewriter';
const services = [
  { icon: <FaRobot />, title: 'Chatbots', description: 'Enhance customer engagement with our AI-driven chatbot solutions. We develop intelligent chatbots that provide instant support, automate responses, and improve customer interactions across various platforms, from websites to messaging apps. Our chatbots are designed to boost efficiency and enhance user satisfaction.', color: '#FF6B6B' },
  { icon: <FaSpider />, title: 'Web Scraping & Automation', description: 'Our web scraping and automation services help businesses extract valuable data from websites efficiently and automate repetitive tasks. Whether you need to gather insights, monitor competitors, or streamline workflows, our tailored solutions offer accurate data extraction and task automation to save time and resources.', color: '#4ECDC4' },
  { icon: <FaCode />, title: 'API Development & Integration', description: 'We specialize in developing and integrating robust APIs that enable seamless communication between different software systems. Our custom API solutions ensure smooth data exchange, enabling your business to scale and connect effortlessly with third-party services or internal systems.', color: '#45B7D1' },
  { icon: <FaMobile />, title: 'Mobile App Development', description: 'Our mobile app development team creates high-performance, feature-rich apps tailored to your business needs. From iOS to Android platforms, we build responsive, engaging apps that deliver optimal user experiences and enhance your brand’s presence in the mobile market.', color: '#FF8C42' },
  { icon: <FaCloud />, title: 'Cloud Solutions', description: 'Harness the power of the cloud with our scalable and secure cloud solutions. Whether it’s cloud migration, infrastructure setup, or cloud application development, we help businesses improve efficiency, scalability, and data security while reducing operational costs.', color: '#98DFEA' },
  { icon: <FaChartLine />, title: 'Digital Marketing Services', description: 'We offer comprehensive digital marketing services designed to increase your online presence and drive business growth. Our team implements data-driven strategies for SEO, PPC, social media marketing, and content marketing to help you reach your target audience and achieve measurable results.', color: '#FCBF49' },
  { icon: <FaDesktop />, title: 'Custom Software Development', description: 'We provide end-to-end custom software development solutions tailored to meet your specific business requirements. From conceptualization to deployment, our experienced developers build software that is secure, scalable, and optimized to streamline your operations and drive growth.', color: '#9C89B8' },
  { icon: <FaWordpress />, title: 'WordPress Websites', description: 'Get a fully customizable, SEO-friendly WordPress website that represents your brand and engages your audience. We offer professional WordPress development services that include theme customization, plugin integration, and responsive design for an outstanding web experience.', color: '#F0A6CA' },
  { icon: <FaShoppingCart />, title: 'Ecommerce Stores', description: 'Build a high-converting ecommerce store with our expert development services. We create fully functional, secure, and user-friendly ecommerce platforms that provide a seamless shopping experience, integrating the latest technologies and payment gateways.', color: '#7FD1B9' },
  { icon: <FaShopify />, title: 'Shopify Stores', description: 'Our Shopify store development services are designed to help businesses establish a strong online presence. From store setup to theme customization and app integration, we provide everything you need to build a successful Shopify store that drives sales and enhances your customer experience.', color: '#36D6E7' },
  { icon: <FaPaintBrush />, title: 'UI/UX Design', description: 'Our UI/UX design services focus on creating visually appealing and user-friendly interfaces that provide an exceptional user experience. We craft intuitive designs that enhance usability, boost engagement, and deliver seamless navigation for websites, apps, and digital platforms.', color: '#FF6B6B' },
];





 
  

 
  
 


 
const FloatingObject = ({ style }) => {
  const animation = useSpring({
    from: { transform: 'translate(0px, 0px)' },
    to: async (next) => {
      while (true) {
        await next({ transform: `translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px)` });
        await next({ transform: 'translate(0px, 0px)' });
      }
    },
    config: { mass: 1, tension: 120, friction: 14 },
  });

  return (
    <animated.div
      style={{
        ...style,
        ...animation,
      }}
      className={styles.floatingObject}
    />
  );
};

const ServiceCard = ({ service, index, activeIndex, setActiveIndex }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const isActive = index === activeIndex;

  const cardAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView 
      ? 'translateX(0)' 
      : `translateX(${index % 2 === 0 ? -100 : 100}px)`,
    config: { ...config.gentle, duration: 1000 },
    delay: index * 100,
  });

  const expandAnimation = useSpring({
    height: isActive ? '250px' : '180px',
    config: config.gentle,
  });

  const handleExpand = () => {
    setActiveIndex(isActive ? null : index);
  };

  return (
    <animated.div 
      ref={ref} 
      style={{ ...cardAnimation, ...expandAnimation }} 
      className={`${styles.serviceCard} ${styles[`card${index + 1}`]}`}
    >
      <div className={styles.iconWrapper} style={{ color: service.color }}>{service.icon}</div>
      <h3>{service.title}</h3>
      <p>{isActive ? service.description : `${service.description.substring(0, 50)}...`}</p>
      <button className={styles.expandButton} onClick={handleExpand}>
        {isActive ? 'Show less' : 'Read more'}
      </button>
    </animated.div>
  );
};

const ServicesPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const titleAnimation = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(-50px)' },
    config: config.slow,
  });

  // Generate floating objects
  const floatingObjects = Array.from({ length: 15 }, (_, index) => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    backgroundColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.2)`,
    clipPath: [
      'polygon(50% 0%, 0% 100%, 100% 100%)',
      'circle(50% at 50% 50%)',
      'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
      'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
    ][index % 4],
  }));

  return (
    <div className={styles.servicesContainer}>
      {floatingObjects.map((obj, index) => (
        <FloatingObject 
          key={index} 
          style={obj} 
        />
      ))}
      <div> 
        <animated.h1 style={titleAnimation} className={styles.title}>
          <TypeWriter words={['Services', 'Cutting-edge Technology', 'Chatbots', 'Application Development']} />
        </animated.h1>
      </div>
      <animated.p style={titleAnimation} className={styles.subtitle}>
        Discover our range of advanced services designed to propel your business into the future. From AI-powered chatbots to custom software solutions, we're here to revolutionize your digital presence.
      </animated.p>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <ServiceCard 
            key={index} 
            service={service} 
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;