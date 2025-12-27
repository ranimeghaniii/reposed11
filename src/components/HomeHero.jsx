import React from 'react';
import Button from './ui/Button';
import { Link } from 'react-router-dom';

const HomeHero = () => {
  return (
    <section
      className="relative bg-hero-pattern bg-cover bg-center h-[500px] flex items-center justify-center text-white rounded-xl shadow-lg overflow-hidden mb-12 animate-fade-in"
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 text-center p-8 max-w-2xl animate-bounce-in">
        <h1 className="text-6xl font-handwriting text-primary-light mb-4 leading-tight">
          Indulge in Pure Bliss
        </h1>
        <p className="text-xl font-serif mb-8 text-primary-light">
          Handcrafted cookies, baked with love and the finest ingredients, delivered right to your door.
        </p>
        <Link to="/shop">
          <Button variant="primary" className="text-lg px-8 py-4">
            Shop Our Cookies
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HomeHero;
