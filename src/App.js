// App.js
import React , { useRef }from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import './styles/Global.css';
import './App.css'
import ServicesPage from './pages/services';
// import Companies from './pages/companies';
// import Services from './components/ServiceCard';
// import WhyChooseUs from './components/whychooseus';
// import Testimonials from './components/Testimonial';
 import ContactPage from './components/contact';
import AboutUs from './pages/Aboutus';

function App() {
   
  
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route  path="/contactus" element={<ContactPage />} /> 
        <Route  path="/About-us" element={<AboutUs />} /> 
      </Routes>
      {/* <Companies/>
      <Services/>
      <WhyChooseUs/>
      <Testimonials/>
       */}
       <Footer /> 
    </Router>
  );
}

export default App;