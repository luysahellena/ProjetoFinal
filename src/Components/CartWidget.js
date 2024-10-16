// src/components/CartWidget.js
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  return (
    <div className="cart-icon" style={{ color: 'white', fontSize: '1.5rem' }}>
      <FaShoppingCart />
      <span>0</span>
    </div>
  );
};

export default CartWidget;