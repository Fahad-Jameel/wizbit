



import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/Home.css';
import Companies from '../pages/companies';
import Services from '../components/ServiceCard';
import WhyChooseUs from '../components/whychooseus';
import Testimonials from '../components/Testimonial';
import ContactPage from '../components/contact';
import DynamicBackground from '../components/DynamicBg';

const Home = () => {
 

  return (
    <section className="home-section">
      <DynamicBackground />
      <div className="home-container">
        <div className="content">
          <h1 className="title">
            Turning Your <br />
            <span className="hero-highlight">IDEAS</span> into{' '}
            <span className="hero-highlight">CODE</span>
          </h1>
          <p className="subtitle">
            For <span>Startups</span>, <span>Enterprise leaders</span>, <span>Media & Publishers</span> and <span>Social Good</span>
          </p>
          <div className="cta-buttons">
            <Link to="/services" className="cta-button our-works">Our Works</Link>
            <Link to="/contactus" className="cta-button contact-us" >Contact Us</Link>
          </div>
        </div>
      </div>
      <Companies />
      <Services />
      <WhyChooseUs />
      {/* <Testimonials /> */}
      
    </section>
  );
}

export default Home;