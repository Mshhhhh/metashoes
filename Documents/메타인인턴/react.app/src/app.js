import React, { useState } from 'react';
import Header from './header';
import ProductList from './ProductList';
import Cart from './cart';
import './style.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="app-container">
      <Header cartCount={cartItems.length} />
      <div className="main-content">
        <ProductList addToCart={addToCart} />
        <Cart cartItems={cartItems} />
      </div>
    </div>
  );
};

export default App;
