import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { useCart } from '../../contexts/CartContext';

const CookieCard = ({ cookie }) => {
  const { addItemToCart } = useCart();

  const handleAddToCart = () => {
    addItemToCart(cookie);
    alert(`${cookie.name} added to cart!`); // Simple feedback
  };

  return (
    <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out overflow-hidden transform hover:-translate-y-2 animate-slide-in-up">
      <Link to={`/shop/${cookie.id}`} className="block">
        <div className="relative w-full h-48 sm:h-64 overflow-hidden rounded-t-xl">
          <img
            src={cookie.imageUrl}
            alt={cookie.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-0 transition-opacity duration-300"></div>
        </div>
      </Link>

      <div className="p-4 sm:p-6 text-center">
        <Link to={`/shop/${cookie.id}`}>
          <h3 className="text-xl font-serif font-bold text-text mb-2 group-hover:text-accent-brown transition-colors duration-200">
            {cookie.name}
          </h3>
        </Link>
        <p className="text-text-light text-sm mb-4 line-clamp-2">{cookie.description}</p>
        <p className="text-2xl font-handwriting text-accent-berry mb-4">
          ${cookie.price.toFixed(2)}
        </p>
        <Button onClick={handleAddToCart} className="w-full">
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default CookieCard;
