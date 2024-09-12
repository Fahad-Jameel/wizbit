import React from 'react';
import { FaDesktop } from 'react-icons/fa';
import { PiRobotDuotone } from "react-icons/pi";
import { GrGamepad } from "react-icons/gr";
import { TbDeviceMobileCode } from "react-icons/tb";
import '../styles/components/Services.css';

const ServiceCard = ({ icon, title, description }) => {
  const truncateDescription = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  return (
    <div
      className="service-card"
     
    >
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p className="description">{description}</p>
      <p className="description-truncated">{truncateDescription(description, 100)}</p>
      <button
        className="learn-more"
       
      >
        Learn More
      </button>
    </div>
  );
};

const Services = () => {
  return (
    <section className="services-section">
      <div
        className="image-content"
      
      >
        <h2>Our Services</h2>
        <p className="services-subtitle">
          Transform your brand with our innovative digital solutions that captivate and engage your audience.
        </p>
      </div>
      <div className="services-content">
        <div className="services-grid">
          <ServiceCard
            icon={<PiRobotDuotone />}
            title="ChatBot Development"
            description="At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences."
          />
          <ServiceCard
            icon={<FaDesktop />}
            title="Web Application"
            description="At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences."
          />
          <ServiceCard
            icon={<GrGamepad />}
            title="Game Development"
            description="Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs."
          />
          <ServiceCard
            icon={<TbDeviceMobileCode />}
            title="Mobile Application"
            description="Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;