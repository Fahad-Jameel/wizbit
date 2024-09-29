// components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.css';
import logo from '../assests/logo.svg';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} className="logo" alt="WIZBIT" />
        <nav className={`nav ${isNavOpen ? 'nav-open' : ''}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/work" className="nav-link">Our Work</Link>
          <Link to="/About-us" className="nav-link">About US</Link>
          <Link to="/careers" className="nav-link">Careers</Link>
        </nav>
        <Link to="/contactus" className="contact-us-button">Contact Us</Link>
        <button className="hamburger-button" onClick={() => setIsNavOpen(!isNavOpen)}>
          ☰
        </button>
      </div>
    </header>
  );
}

export default Header;