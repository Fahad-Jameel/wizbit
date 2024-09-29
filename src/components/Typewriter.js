import React, { useState, useEffect } from 'react';
import styles from '../styles/pages/services.module.css'; // Add your styles here
const TypeWriter = ({ words }) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);
  
    useEffect(() => {
      // Blinking cursor effect
      const blinkInterval = setInterval(() => {
        setBlink((prev) => !prev);
      }, 500); // Cursor blinks every 500ms
  
      return () => clearInterval(blinkInterval);
    }, []);
  
    useEffect(() => {
      // Handle the typing and erasing logic
      if (subIndex === words[index].length + 1 && !reverse) {
        setReverse(true); // Start erasing after typing is complete
        return;
      }
  
      if (subIndex === 0 && reverse) {
        setReverse(false);
        setIndex((prev) => (prev + 1) % words.length); // Move to the next word
        return;
      }
  
      const timeout = setTimeout(() => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      }, reverse ? 75 : subIndex === words[index].length ? 1000 : 150);
  
      return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, words]);
  
    return (
      <span>
        {words[index].substring(0, subIndex)}
        <span className={styles.fixedCursor}>_</span> {/* Fixed blinking cursor */}
      </span>
    );
  };
  
  export default TypeWriter;