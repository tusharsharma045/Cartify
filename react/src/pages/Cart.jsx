import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <div className="empty-cart-message">
          <p>Your cart is empty. Start exploring our amazing products!</p>
          <Link to="/products" className="btn btn-primary">Browse Products</Link>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.thumbnail} alt={item.title} />
                <div className="item-details">
                  <h3>{item.title}</h3>
                  <p className="item-price">Unit Price: ${item.price}</p>
                  <div className="quantity-control">
                    <button
                      aria-label="Decrease quantity"
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                      disabled={item.quantity === 1}
                    >
                      -
                    </button>
                    <span className="quantity-display" title="Current quantity">{item.quantity}</span>
                    <button
                      aria-label="Increase quantity"
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  <button 
                    className="btn-remove" 
                    onClick={() => removeFromCart(item.id)}
                    title="Remove item from cart"
                  >
                    Remove Item
                  </button>
                </div>
                <div className="item-total">
                  <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Order Total: ${totalAmount.toFixed(2)}</h3>
            <div className="cart-actions">
              <Link to="/products" className="btn btn-secondary">Continue Shopping</Link>
              <Link to="/checkout" className="btn btn-primary">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
