import React, { useEffect, useRef } from 'react';

const DynamicBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    
    const colors = ['#8A2BE2', '#4169E1', '#1E90FF', '#00CED1', '#9370DB'];
    const shapes = ['circle', 'square', 'triangle', 'diamond'];

    const createObject = () => {
      const obj = document.createElement('div');
      obj.classList.add('floating-object');
      
      const size = Math.random() * 15 + 5; // Sizes from 5px to 20px
      obj.style.width = `${size}px`;
      obj.style.height = `${size}px`;
      
      const color = colors[Math.floor(Math.random() * colors.length)];
      obj.style.backgroundColor = color;
      
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      obj.classList.add(shape);

      // Apply blur effect to the object
      obj.style.filter = `blur(${Math.random() * 3 + 1}px)`; // Blur effect from 1px to 4px
      
      const startPositionX = Math.random() * container.offsetWidth;
      const startPositionY = Math.random() * container.offsetHeight;
      obj.style.left = `${startPositionX}px`;
      obj.style.top = `${startPositionY}px`;
      
      container.appendChild(obj);

      return obj;
    };

    const animateObject = (obj) => {
      const duration = Math.random() * 7000 + 5000; // 5-12 seconds
      const xMovement = (Math.random() - 0.5) * 50;
      const yMovement = (Math.random() - 0.5) * 50;

      obj.animate([
        { transform: 'translate(0, 0)' },
        { transform: `translate(${xMovement}px, ${yMovement}px)` }
      ], {
        duration,
        iterations: Infinity,
        direction: 'alternate',
        easing: 'ease-in-out'
      });
    };

    const numberOfObjects = 300;
    const objects = Array.from({ length: numberOfObjects }, createObject);
    objects.forEach(animateObject);

    return () => {
      objects.forEach(obj => obj.remove());
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="dynamic-background"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: -1,
        backgroundColor: '#000000',
      }}
    />
  );
};

export default DynamicBackground;
