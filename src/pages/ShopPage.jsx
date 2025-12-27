import React from 'react';
import CookieGrid from '../components/CookieGrid';

const ShopPage = () => {
  return (
    <div className="animate-fade-in">
      <h1 className="text-5xl font-handwriting text-accent-brown text-center mb-10">
        Our Delicious Cookie Collection
      </h1>
      <CookieGrid />
    </div>
  );
};

export default ShopPage;
