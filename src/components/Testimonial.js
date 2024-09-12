import React, { useRef, useEffect } from 'react';

import '../styles/components/Testimonials.css';
import imgAvif from '../assests/img.avif';

const testimonials = [
  {
    name: 'John Riley',
    image: imgAvif,
    rating: 5,
    text: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    name: 'John Riley',
    image: imgAvif,
    rating: 5,
    text: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    name: 'John Riley',
    image: imgAvif,
    rating: 5,
    text: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    name: 'John Riley',
    image: imgAvif,
    rating: 5,
    text: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    name: 'John Riley',
    image: imgAvif,
    rating: 5,
    text: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    name: 'John Riley',
    image: imgAvif,
    rating: 5,
    text: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    name: 'John Riley',
    image: imgAvif,
    rating: 5,
    text: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    name: 'John Riley',
    image: imgAvif,
    rating: 5,
    text: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.'
  },
  // Add more testimonials here...
];

const TestimonialCard = ({ name, image, rating, text }) => (
  <div 
    className="testimonial-card"
    
  >
    <div className="testimonial-header">
      <img src={image} alt={name} className="testimonial-image" />
      <h3>{name}</h3>
    </div>
    <div className="testimonial-rating">
      {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
    </div>
    <p>{text}</p>
  </div>
);

const Testimonials = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      const scrollWidth = scrollElement.scrollWidth;
      const animationDuration = scrollWidth * 0.02; // Adjust speed here

      const animate = () => {
        if (scrollElement.scrollLeft >= scrollWidth / 2) {
          scrollElement.scrollLeft = 0;
        } else {
          scrollElement.scrollLeft += 1;
        }
        requestAnimationFrame(animate);
      };

      const animationId = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationId);
    }
  }, []);

  return (
    <section className="testimonials-section">
      <div className="testimonials-content">
        <h2
         
        >
          What our clients say about us?
        </h2>
        <p 
          className="testimonials-subtitle"
        
        >
          Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.
        </p>
      </div>
      <div className="testimonials-scroll-container" ref={scrollRef}>
        <div className="testimonials-scroll-content">
          {testimonials.concat(testimonials).map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;