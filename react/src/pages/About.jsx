import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-section">
        <div className="about-image">
          <img src="/images/about.jpg" alt="About Us" />
        </div>
        <div className="about-text">
          <h2>About Cartify</h2>
          <p>
            Welcome to Cartify, your number one source for all things products.
            We're dedicated to giving you the very best of products, with a focus
            on dependability, customer service and uniqueness.
          </p>
          <p>
            Founded in 2025, Cartify has come a long way from its beginnings.
            When we first started out, our passion for providing the best
            equipment for our fellow merchants drove us to do intense research,
            and gave us the impetus to turn hard work and inspiration into to a
            booming online store. We now serve customers all over the world,
            and are thrilled to be a part of the quirky, eco-friendly, fair
            trade wing of the industry.
          </p>
        </div>
      </div>

      <div className="features-section">
        <h2>Our Features</h2>
        <div className="features">
          <div className="feature">
            <i className="fas fa-shipping-fast"></i>
            <h3>Free Shipping</h3>
            <p>On all orders over $50</p>
          </div>
          <div className="feature">
            <i className="fas fa-credit-card"></i>
            <h3>Secure Payments</h3>
            <p>100% secure payments</p>
          </div>
          <div className="feature">
            <i className="fas fa-undo"></i>
            <h3>Easy Returns</h3>
            <p>30-day return policy</p>
          </div>
        </div>
      </div>

      <div className="testimonials-section">
        <h2>Testimonials</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>"This is the best e-commerce site ever!"</p>
            <h4>- John Doe</h4>
          </div>
          <div className="testimonial">
            <p>"I love the products and the fast shipping."</p>
            <h4>- Jane Doe</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;