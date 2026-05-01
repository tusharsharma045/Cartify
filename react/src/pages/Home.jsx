import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import Slider from '../components/Slider';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Slider />

      
      <div className="section-container">
        <h2 className="section-title">Shop by Category</h2>
        <div className="categories">
          <div className="category">
            <Link to="/category/smartphones">
              <img src="/images/c1.jpg" alt="smartphones" />
              <h3>Smartphones</h3>
            </Link>
          </div>
          <div className="category">
            <Link to="/category/laptops">
              <img src="/images/c2.jpg" alt="laptops" />
              <h3>Laptops</h3>
            </Link>
          </div>
          <div className="category">
            <Link to="/category/fragrances">
              <img src="/images/c3.jpg" alt="fragrances" />
              <h3>Fragrances</h3>
            </Link>
          </div>
          <div className="category">
            <Link to="/category/skincare">
              <img src="/images/c4.webp" alt="skincare" />
              <h3>Skincare</h3>
            </Link>
          </div>
        </div>
      </div>

      
      <div className="section-container">
        <h2 className="section-title">Latest Products</h2>
        <div className="products latest-products">
          {products.slice(0, 8).map((product) => (
            <div key={product.id} className="product-card">
              <Link to={`/products/${product.id}`}>
                <img src={product.thumbnail} alt={product.title} />
                <h3>{product.title}</h3>
                <p>${product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>

      
      <div className="features-container">
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
    </div>
  );
};

export default Home;