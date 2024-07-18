import React from 'react';

const Cart = ({ cartItems }) => {
  return (
    <div className="cart">
      <h2 className="cart-title">장바구니</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.imgSrc} alt={item.name} className="cart-item-image" />
            <div className="cart-item-info">
              <h3 className="cart-item-name">{item.name}</h3>
              <div className="cart-item-price">{item.price}</div>
            </div>
          </div>
        ))
      ) : (
        <p className="empty-cart">장바구니가 비어 있습니다.</p>
      )}
    </div>
  );
};

export default Cart;
