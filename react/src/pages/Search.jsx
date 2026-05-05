import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import './Search.css';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term) {
      const results = products.filter((product) =>
        product.title.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="search-container">
      <h2>Search Products</h2>
      <input
        type="text"
        placeholder="Type to search (e.g. 'iPhone', 'Laptop')..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
        autoFocus
      />
      
      <div className="search-status">
        {searchTerm && searchResults.length > 0 && (
          <p>Showing {searchResults.length} results for "{searchTerm}"</p>
        )}
        {searchTerm && searchResults.length === 0 && (
          <div className="no-results">
            <p>No products found matching "{searchTerm}"</p>
            <p className="suggestion">Try a different keyword or check your spelling.</p>
          </div>
        )}
        {!searchTerm && (
          <p className="search-hint">Start typing to see matching products.</p>
        )}
      </div>

      <div className="search-results">
        {searchResults.map((product) => (
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
  );
};

export default Search;
