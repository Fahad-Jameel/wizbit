

// pages/companies.js
import React from 'react';
import { useSpring, animated } from 'react-spring';
import '../styles/pages/companies.css';

// Import company logos
import { SiZapier, SiSpotify, SiZoom, SiSlack, SiAmazon, SiAdobe } from 'react-icons/si';


const Companies = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <div className="companies-container">
      <animated.div style={fadeIn} className="content">
       
        <p className="trusted-by">Trusted By 250+ Companies</p>
        <div className="company-logos">
          <SiZapier size={30} />
          <SiSpotify size={30} />
          <SiZoom size={30} />
          <SiSlack size={30} />
          <SiAmazon size={30} />
          <SiAdobe size={30} />
        </div>
      </animated.div>
    </div>
  );
}

export default Companies;