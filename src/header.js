import React from 'react';

const Header = ({ cartCount }) => {
  return (
    <header className="header">
      <h1>상품 목록</h1>
      <div className="relative">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18l-2 13H5L3 3z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 21a2 2 0 11-4 0 2 2 0 014 0zM8 21a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
        {cartCount > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
            {cartCount}
          </span>
        )}
      </div>
    </header>
  );
};

export default Header;
