import React from 'react';

const products = [
  { id: 1, name: '브랜드A', description: '편안하고 착용감이 좋은 신발', price: '35,000원', imgSrc: 'path/to/image1.png' },
  { id: 2, name: '브랜드A', description: '편한 컬러가 매력적인 신발', price: '25,000원', imgSrc: 'path/to/image2.png' },
  { id: 3, name: '브랜드B', description: '편안하고 착용감이 좋은 신발', price: '35,000원', imgSrc: 'path/to/image3.png' },
  { id: 4, name: '브랜드B', description: '편한 컬러가 매력적인 신발', price: '35,000원', imgSrc: 'path/to/image4.png' },
  { id: 5, name: '브랜드C', description: '편안하고 착용감이 좋은 신발', price: '35,000원', imgSrc: 'path/to/image5.png' },
  { id: 6, name: '브랜드C', description: '편한 컬러가 매력적인 신발', price: '35,000원', imgSrc: 'path/to/image6.png' },
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
