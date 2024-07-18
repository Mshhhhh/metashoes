import React from 'react';
import shoes1 from './image/shoes1.jpg';
import shoes2 from './image/shoes2.png';
import shoes3 from './image/shoes3.png';
import shoes4 from './image/shoes4.png';
import shoes5 from './image/shoes5.png';
import shoes6 from './image/shoes6.png';

const products = [
  { id: 1, name: '브랜드A', description: '편안하고 착용감이 좋은 신발', price: '335,000원', imgSrc: shoes1 },
  { id: 2, name: '브랜드A', description: '편한 컬러가 매력적인 신발', price: '252,000원', imgSrc: shoes2 },
  { id: 3, name: '브랜드B', description: '편안하고 착용감이 좋은 신발', price: '335,000원', imgSrc: shoes3 },
  { id: 4, name: '브랜드B', description: '편한 컬러가 매력적인 신발', price: '353,000원', imgSrc: shoes4 },
  { id: 5, name: '브랜드C', description: '편안하고 착용감이 좋은 신발', price: '345,000원', imgSrc: shoes5 },
  { id: 6, name: '브랜드C', description: '편한 컬러가 매력적인 신발', price: '325,000원', imgSrc: shoes6 },
];

const ProductList = ({ addToCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.imgSrc} alt={product.name} className="product-image" />
          <div className="product-info">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <div className="product-price">{product.price}</div>
            <button onClick={() => addToCart(product)} className="add-to-cart-button">담기</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
