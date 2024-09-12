import React from 'react';

import { FaBrain, FaUsers, FaBolt, FaHandshake } from 'react-icons/fa';
import '../styles/components/WhyChooseUs.css';

const ChooseCard = ({ icon, title, description }) => (
  <div 
    className="choose-card"
   
  >
    <div className="choose-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const WhyChooseUs = () => {
  return (
    <section className="why-choose-section">
      <div className="image-content">
        <h2  >
          Why Choose WizBit?
        </h2>
        <p 
          className="choose-subtitle"
         
        >
          Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.
        </p>
      </div>
      <div className="choose-content">
        <div className="choose-grid">
          <ChooseCard
            icon={<FaBrain />}
            title="Expertise"
            description="Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions."
          />
          <ChooseCard
            icon={<FaUsers />}
            title="Client-Centric Approach"
            description="We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success."
          />
          <ChooseCard
            icon={<FaBolt />}
            title="Results-Driven Solutions"
            description="Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage."
          />
          <ChooseCard
            icon={<FaHandshake />}
            title="Collaborative Partnership"
            description="We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;