import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { products as allProducts } from '../data/products';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState(allProducts);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState(5000);

  useEffect(() => {
    const allCategories = ['all', ...new Set(allProducts.map((p) => p.category))];
    setCategories(allCategories);
  }, []);

  useEffect(() => {
    let filteredProducts = allProducts;

    if (selectedCategory !== 'all') {
      filteredProducts = filteredProducts.filter(
        (p) => p.category === selectedCategory
      );
    }

    filteredProducts = filteredProducts.filter((p) => p.price <= priceRange);

    setProducts(filteredProducts);
  }, [selectedCategory, priceRange]);

  return (
    <div className="products-container">
      <div className="filters-container">
        <div className="filter-category">
          <h3>Category</h3>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="filter-price">
          <h3>Price Range</h3>
          <input
            type="range"
            min="0"
            max="5000"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          />
          <span>Up to ${priceRange}</span>
        </div>
      </div>
      <div className="products-list-container">
        <div className="products">
          {products.map((product) => (
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
    </div>
  );
};

export default Products;
