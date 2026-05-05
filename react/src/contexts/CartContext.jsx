import React, { createContext, useState } from 'react';

/**
 * CartContext provides a way to share cart state (items, adding, removing, updating)
 * across the entire application without drilling props through every component.
 */
export const CartContext = createContext();

/**
 * CartProvider is a wrapper component that manages the cart state and provides
 * functions to modify it. Wrap your main App component with this.
 */
export const CartProvider = ({ children }) => {
  // cart is an array of objects: { ...product, quantity: number }
  const [cart, setCart] = useState([]);

  /**
   * Adds a product to the cart or increases quantity if it already exists.
   * @param {Object} product - The product object to add.
   */
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Check if product is already in the cart
      const existingProduct = prevCart.find((item) => item.id === product.id);
      
      if (existingProduct) {
        // If it exists, create a new array with updated quantity for that item
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If it's new, add it to the cart with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  /**
   * Removes a product from the cart by its ID.
   * @param {number} productId - ID of the product to remove.
   */
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  /**
   * Updates the quantity of a specific item in the cart.
   * @param {number} productId - ID of the product.
   * @param {number} quantity - The new quantity.
   */
  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
