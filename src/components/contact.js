import React, { useState ,  forwardRef   } from 'react';
import '../styles/components/ContactPage.css';
import backgroundImage from '../assests/bg4.jpg';
import logo from '../assests/logo.svg';

const ContactForm = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactReason: [],
    budget: 3000,
    message: ''
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      contactReason: checked
        ? [...prevState.contactReason, value]
        : prevState.contactReason.filter(reason => reason !== value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section ref={ref} className="contact-form-section">
      <div 
        className="contact-form-header"
       
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="logo">
        <img src={logo} className="logo" alt="WIZBIT" />
        </div>
        <h2>Thank you for your Interest in WizBit.</h2>
        <p>We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us.</p>
        <button className="start-project-btn">Start Project</button>
      </div>
      <form 
        className="contact-form"
       
        onSubmit={handleSubmit}
      >
        <div className="form-row">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Type here"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Type here"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="form-group contact-reason">
          <label>Why are you contacting us?</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                name="contactReason"
                value="Web Design"
                onChange={handleCheckboxChange}
              />
              Web Design
            </label>
            <label>
              <input
                type="checkbox"
                name="contactReason"
                value="Mobile App Design"
                onChange={handleCheckboxChange}
              />
              Mobile App Design
            </label>
            <label>
              <input
                type="checkbox"
                name="contactReason"
                value="Collaboration"
                onChange={handleCheckboxChange}
              />
              Collaboration
            </label>
            <label>
              <input
                type="checkbox"
                name="contactReason"
                value="Others"
                onChange={handleCheckboxChange}
              />
              Others
            </label>
          </div>
        </div>
        <div className="form-group">
  <label>Your Budget</label>
  <p>Slide to indicate your budget range</p>
  <div className="slider-container">
    <input
      type="range"
      name="budget"
      min="0"
      max="5000"
      value={formData.budget}
      onChange={handleInputChange}
    />
    <div 
      className="slider-value" 
      style={{ left: `calc(${(formData.budget / 5000) * 100}% - 20px)` }}
    >
      ${formData.budget}
    </div>
  </div>
  <div className="budget-range">
    <span>$50</span>
    <span>$5000</span>
  </div>
</div>
        <div className="form-group">
          <label>Your Message</label>
          <textarea
            name="message"
            placeholder="Type here"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </section>
  );
});

export default ContactForm;