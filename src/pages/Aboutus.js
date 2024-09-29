import React, { useRef } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { motion, useInView } from 'framer-motion';
import { FaChartPie, FaUserTie, FaCheckCircle, FaShieldAlt, FaUsers, FaLightbulb } from 'react-icons/fa';
import styles from '../styles/pages/Aboutus.module.css';
import TypeWriter from '../components/Typewriter';
import DynamicBackground from '../components/DynamicBg';

const AboutUs = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const titleAnimation = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(-50px)' },
    config: config.slow,
  });

  const leftToRightRef = useRef(null);
  const leftToRightInView = useInView(leftToRightRef, { once: true });

  const rightToLeftRef = useRef(null);
  const rightToLeftInView = useInView(rightToLeftRef, { once: true });
 

  return (
    <div className={styles.container}>
      {/* Background shapes */}
      <DynamicBackground />
      <div className={styles.backgroundShapes}>
  {[styles.shapeGreen, styles.shapeBlue, styles.shapePink].map((shapeClass, index) => (
    <motion.div 
      key={index}
      className={`${styles.shape} ${shapeClass}`}
      animate={{ 
        x: [0, Math.random() * 100 - 50, 0], 
        y: [0, Math.random() * 100 - 50, 0],
        rotate: [0, Math.random() * 360, 0]
      }}
      transition={{ repeat: Infinity, duration: Math.random() * 10 + 5 }}
    />
  ))}
</div>

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
        className={styles.content}
      >

        
        {/* Who We Are Section */}
        <motion.section 
  className={styles.section}
  variants={fadeIn}
  transition={{ delay: 0.2 }}
  style={{ 
    height: '100vh', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center' 
  }}
>
  <div className={styles.transparentContainer}>
    <animated.h2 style={titleAnimation} className={styles.sectionTitle}>
      <TypeWriter words={['Who We Are?']} />
    </animated.h2>
    <p className={styles.text}>
      At Wizbit, we're committed to transforming the digital landscape through the creation of advanced software solutions tailored to meet the unique needs of each business. Our expertise spans a wide array of services, including bespoke software development, cutting-edge web development, and the integration of AI-driven chatbots that enhance customer engagement and streamline operations.
      
      We understand that in today’s fast-paced digital age, businesses require more than just standard solutions; they need innovative products that drive growth, improve efficiency, and provide a competitive edge. That's why our team of dedicated professionals works tirelessly to design and develop digital products that not only meet current market demands but also anticipate future trends.
     
      From startups seeking to establish their online presence to established enterprises looking to enhance their operational capabilities, we empower businesses to thrive by leveraging technology. Our commitment to quality, innovation, and customer satisfaction ensures that our clients are equipped to navigate the complexities of the digital world and emerge as leaders in their respective industries. At Wizbit, we’re not just creating software; we’re crafting the future of business.
    </p>
  </div>
</motion.section>


      

       
        <motion.section
          className={styles.section}
          variants={fadeIn}
          transition={{ delay: 0.8 }}
        >
          <h2 className={styles.sectionTitle}>Why Choose Wizbit?</h2>
          <p className={styles.text}>
          Unlock Your Digital Potential with Wizbit

          </p>
          <div className={styles.grid}>
            {[
              { icon: FaChartPie, title: "Communication", description: "We prioritize transparent communication, ensuring that our clients are informed and involved at every step of the development process. Your input guides our work, and your satisfaction drives our success." },
              { icon: FaUserTie, title: "Expertise", description: "our expertise is rooted in a deep understanding of the latest technologies and industry best practices. Our team of skilled developers, designers, and project managers brings a wealth of experience across various domains, allowing us to deliver tailored solutions that meet the specific needs of our clients. We specialize in bespoke software solutions, web development, and AI-driven chatbots, ensuring that we provide innovative products that drive business success.." },
              { icon: FaCheckCircle, title: "Quality Assurance", description: "At Wizbit, we employ a rigorous quality assurance process that spans the entire development lifecycle. Our dedicated QA team conducts thorough testing at every stage, from initial design to final deployment. By utilizing automated testing tools and best practices, we ensure that our software products are not only functional but also user-friendly and reliable. This commitment to quality guarantees that our clients receive solutions that meet the highest standards of performance and usability." },
              { icon: FaShieldAlt, title: "Data Security", description: "In an era where data breaches and cyber threats are prevalent, data security is paramount. Wizbit prioritizes the protection of our clients’ sensitive information by implementing robust security measures throughout our development processes. We adhere to industry regulations and standards, employing encryption, secure coding practices, and regular security audits to safeguard data. Our proactive approach to data security ensures that our clients can trust us with their information, allowing them to focus on their core business operations without fear of compromise." },
              { icon: FaUsers, title: "Consistency", description: "Consistency is key to excellence. That’s why our software solutions undergo rigorous testing and quality assurance measures. By consistently delivering top-quality results, we ensure that your brand is equipped to thrive in a competitive landscape." },
              { icon: FaLightbulb, title: "Innovation", description: "Innovation is the driving force behind our work at Wizbit. We stay ahead of industry trends and continuously explore emerging technologies to integrate into our solutions. Our commitment to innovation allows us to offer cutting-edge products that not only meet current demands but also position our clients for future success. Whether it's utilizing artificial intelligence to enhance customer interactions or leveraging cloud technologies for improved scalability, our focus on innovation empowers businesses to adapt and thrive in an ever-evolving digital landscape." }
            ].map((item, index) => (
                <motion.div
                key={index}
                className={styles.card}
                whileHover={{ scale: 1.05 }}
                variants={fadeIn}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <item.icon className={styles.cardIcon} />
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <motion.p 
                  className={styles.cardDescription}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  {item.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Vision Section */}
        <motion.section
          className={`${styles.section} ${styles.visionSection}`}
          variants={fadeIn}
          transition={{ delay: 1.6 }}
        >
          <h2 className={styles.sectionTitle}>Our Vision</h2>
          <div className={styles.visionContent}>
            <p className={styles.text}>
            At Wizbit, simplicity and transparency are at the core of our approach. We start by diving deep into your project goals, making sure we’re perfectly aligned with your vision. From there, we craft a clear, step-by-step plan that keeps you informed and involved every step of the way. With regular updates and open channels for your input, we don’t just work for you—we work with you. Think of us as your creative partners, eager to tackle challenges and turn your ideas into reality.
            </p>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default AboutUs;