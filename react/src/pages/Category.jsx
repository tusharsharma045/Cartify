import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import './Category.css';

const Category = () => {
  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <div className="category-container">
      <h2>Categories</h2>
      <div className="category-list">
        {categories.map((category) => {
          const categoryProduct = products.find((p) => p.category === category);
          return (
            <div key={category} className="category-card">
              <Link to={`/products?category=${category}`}>
                <img src={categoryProduct.thumbnail} alt={category} />
                <div className="category-info">
                  <h3>{category}</h3>
                  <p>{categoryProduct.description}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
