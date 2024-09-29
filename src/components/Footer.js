import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import '../styles/components/Footer.css';
import logo from '../assests/logo.svg';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                <img src={logo}  alt="WIZBIT" className="logo-image" />
                    <span>WizBit</span>
                </div>
                <nav className="footer-nav">
                    <a href="/">Home</a>
                    <a href="/services">Services</a>
                    {/* <a href="/">Work</a> */}
                    
                    <a href="/About-us">About</a>
                    {/* <a href="/">Careers</a> */}
                    <a href="/contactus">Contact</a>
                </nav>
                
                <div className="footer-social">
                    <span>Stay Connected</span>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/WizBitOfficial" className="social-icon"><FaFacebookF /></a>
                        
                        <a href="https://www.linkedin.com/company/wizbit-official/" className="social-icon"><FaLinkedinIn /></a>
                        <a href="https://www.instagram.com/wizbit_official/" className="social-icon"><FaInstagram /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
            <div className="footer-contact">
                    <div className="contact-item">
                        <FaEnvelope className="icon" />
                        <a href="mailto:hellowizbit@gmail.com">hellowizbit@gmail.com</a>
                    </div>
                    <div className="contact-item">
                        <FaPhone className="icon" />
                        <a href="tel:+923221752123">+92 322 1752123</a>
                    </div>
                    <div className="contact-item">
                        <FaMapMarkerAlt className="icon" />
                        <span>Somewhere in the World</span>
                    </div>
                </div>
                <span><p>© 2024 WizBit. All rights reserved.</p></span>
            </div>
        </footer>
    );
}

export default Footer;
