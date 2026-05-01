import React, { useState, useEffect } from 'react';
import './Slider.css';

const images = [
  '/images/ban1.png',
  '/images/ban2.webp',
  '/images/ban3.avif',
  '/images/ban4.webp',
];

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      {images.map((image, index) => (
        <div
          key={index}
          className="slide"
          style={{
            transform: `translateX(${(index - currentImageIndex) * 100}%)`,
          }}
        >
          <img src={image} alt={`banner-${index}`} />
        </div>
      ))}
    </div>
  );
};

export default Slider;
