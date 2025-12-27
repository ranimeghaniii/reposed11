import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';

const Footer = () => {
  const { currentTheme } = useTheme();

  return (
    <footer className={`${currentTheme.headerBg} shadow-inner mt-auto py-8`}>
      <div className="container mx-auto px-4 text-center">
        <Link to="/" className="text-3xl font-handwriting text-accent-brown hover:text-accent-brown/80 transition-colors duration-200 mb-4 inline-block">
          Cozy Cookies
        </Link>
        <p className="text-text-light text-sm mb-4">
          Indulge in the finest homemade cookies, baked with love and premium ingredients.
        </p>
        <nav className="flex justify-center space-x-6 mb-4">
          <Link to="/shop" className="text-text hover:text-accent-brown transition-colors duration-200 font-serif text-sm">Shop</Link>
          <Link to="/stores" className="text-text hover:text-accent-brown transition-colors duration-200 font-serif text-sm">Stores</Link>
          <Link to="/contact" className="text-text hover:text-accent-brown transition-colors duration-200 font-serif text-sm">Contact</Link>
          <Link to="/login" className="text-text hover:text-accent-brown transition-colors duration-200 font-serif text-sm">Account</Link>
        </nav>
        <div className="text-text-light text-xs">
          &copy; {new Date().getFullYear()} Cozy Cookies. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
