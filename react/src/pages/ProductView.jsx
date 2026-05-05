import React, { useContext, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { CartContext } from '../contexts/CartContext';
import './ProductView.css';

/**
 * ProductView component displays detailed information about a single product.
 * It uses the 'id' from the URL to find the correct product in our data.
 */
const ProductView = () => {
  // useParams() is a hook from react-router-dom to get values from the dynamic URL (e.g., :id)
  const { id } = useParams();
  
  // Find the product that matches the ID from the URL
  const product = products.find((p) => p.id === parseInt(id));
  
  // Access the addToCart function from our global CartContext
  const { addToCart } = useContext(CartContext);

  // State to track if the item was just added to show a beginner-friendly feedback message
  const [isAdded, setIsAdded] = useState(false);

  // Handle product not found case
  if (!product) {
    return (
      <div className="error-container">
        <h2>Product not found</h2>
        <Link to="/products" className="btn btn-primary">Back to Products</Link>
      </div>
    );
  }

  // Logic to find products in the same category for the "Related Products" section
  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  /**
   * Wrapper for addToCart to provide feedback to the user
   */
  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    // Hide feedback after 2 seconds
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="product-view-container">
      <div className="product-detail">
        <div className="product-images">
          {/* Using the first image as the main featured image */}
          <img src={product.images[0]} alt={product.title} className="main-image" />
          <div className="thumbnail-images">
            {product.images.map((image, index) => (
              <img key={index} src={image} alt={product.title} />
            ))}
          </div>
        </div>
        
        <div className="product-info">
          <h1>{product.title}</h1>
          <p className="description">{product.description}</p>
          <p className="price">${product.price}</p>
          
          {/* Display stars based on product rating */}
          <div className="rating">
            {[...Array(Math.round(product.rating))].map((_, i) => (
              <i key={i} className="fas fa-star"></i>
            ))}
            <span>({product.rating})</span>
          </div>

          <div className="action-buttons">
            <button 
              className={`btn ${isAdded ? 'btn-success' : 'btn-primary'}`} 
              onClick={handleAddToCart}
            >
              {isAdded ? '✓ Added to Cart!' : 'Add to Cart'}
            </button>
            <Link to="/cart" className="view-cart-link">View Shopping Cart</Link>
          </div>
        </div>
      </div>

      {/* Suggested products section to improve user discovery */}
      <div className="related-products-container">
        <h2>You Might Also Like</h2>
        <div className="products">
          {relatedProducts.slice(0, 4).map((relatedProduct) => (
            <div key={relatedProduct.id} className="product-card">
              <Link to={`/products/${relatedProduct.id}`}>
                <img src={relatedProduct.thumbnail} alt={relatedProduct.title} />
                <h3>{relatedProduct.title}</h3>
                <p className="price">${relatedProduct.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductView;