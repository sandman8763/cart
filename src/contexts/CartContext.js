import React, { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const changeItemQuantity = (itemId, newQuantity) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = prevCartItems.map((cartItem) => {
        if (cartItem.id === itemId) {
          return { ...cartItem, quantity: newQuantity };
        }
        return cartItem;
      });
      return updatedCartItems;
    });
  };
  

  const removeItemFromCart = (item) => {
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setCartItems(updatedCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addItemToCart, removeItemFromCart, clearCart, changeItemQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
