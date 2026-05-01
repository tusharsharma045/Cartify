import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { CartContext } from '../contexts/CartContext';
import './ProductView.css';

const ProductView = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext);

  if (!product) {
    return <div>Product not found</div>;
  }

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  return (
    <div className="product-view-container">
      <div className="product-detail">
        <div className="product-images">
          <img src={product.images[0]} alt={product.title} className="main-image" />
          <div className="thumbnail-images">
            {product.images.map((image, index) => (
              <img key={index} src={image} alt={product.title} />
            ))}
          </div>
        </div>
        <div className="product-info">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p className="price">${product.price}</p>
          <div className="rating">
            {[...Array(Math.round(product.rating))].map((_, i) => (
              <i key={i} className="fas fa-star"></i>
            ))}
            <span>({product.rating})</span>
          </div>
          <button className="btn btn-primary" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>

      <div className="related-products-container">
        <h2>Related Products</h2>
        <div className="products">
          {relatedProducts.slice(0, 4).map((relatedProduct) => (
            <div key={relatedProduct.id} className="product-card">
              <Link to={`/products/${relatedProduct.id}`}>
                <img src={relatedProduct.thumbnail} alt={relatedProduct.title} />
                <h3>{relatedProduct.title}</h3>
                <p>${relatedProduct.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductView;