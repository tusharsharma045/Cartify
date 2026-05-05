import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
  const { cart } = useContext(CartContext);

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const isFormValid = formData.name && formData.email && formData.address && formData.city && formData.zip;

  return (
    <div className="checkout-container">
      <div className="order-summary">
        <h2>Order Summary</h2>
        {cart.length > 0 ? (
          <>
            {cart.map((item) => (
              <div key={item.id} className="order-item">
                <span>{item.title} (x{item.quantity})</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="order-total">
              <span>Total to Pay</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
          </>
        ) : (
          <p>Your cart is empty. Please <Link to="/products">add items</Link> before checking out.</p>
        )}
      </div>
      <div className="shipping-info">
        <h2>Shipping Information</h2>
        <p className="form-hint">Please fill out all fields to complete your purchase.</p>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name" 
              placeholder="e.g. John Doe" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="e.g. john@example.com" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input 
              type="text" 
              id="address" 
              placeholder="Street Address, Apt #" 
              value={formData.address}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input 
              type="text" 
              id="city" 
              placeholder="City Name" 
              value={formData.city}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="zip">ZIP Code</label>
            <input 
              type="text" 
              id="zip" 
              placeholder="5 or 6 digit ZIP" 
              value={formData.zip}
              onChange={handleChange}
              required 
            />
          </div>
          
          {isFormValid ? (
            <Link to="/order-confirmation" className="btn btn-primary btn-block">
              Place Order (${totalAmount.toFixed(2)})
            </Link>
          ) : (
            <button className="btn btn-disabled btn-block" disabled title="Please fill all fields">
              Complete Form to Place Order
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Checkout;
