import React from 'react';
import './OrderConfirmation.css';

const OrderConfirmation = () => {
  const orderNumber = Math.floor(Math.random() * 1000000);

  return (
    <div className="order-confirmation-container">
      <h2>Order Confirmed!</h2>
      <p>Thank you for your purchase.</p>
      <p>Your order number is: <strong>{orderNumber}</strong></p>
      <p>Your order status is: <strong>Processing</strong></p>
    </div>
  );
};

export default OrderConfirmation;
