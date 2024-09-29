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
// import ContactPage from './components/contact';

function App() {
    // Create a ref for the last component
    const lastComponentRef = useRef(null);

    // Scroll function
    const scrollToLastComponent = () => {
      lastComponentRef.current.scrollIntoView({ behavior: 'smooth' });
    };
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
      {/* <Companies/>
      <Services/>
      <WhyChooseUs/>
      <Testimonials/>
      <ContactPage  ref={lastComponentRef} /> */}
       <Footer /> 
    </Router>
  );
}

export default App;