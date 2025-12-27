import React from 'react';
import CookieCard from './ui/CookieCard';
import { cookies } from '../utils/mockData';
import { Link } from 'react-router-dom';
import Button from './ui/Button';

const FeaturedCookies = () => {
  const featured = cookies.slice(0, 4); // Display first 4 as featured

  return (
    <section className="py-12 animate-slide-in-up">
      <h2 className="text-5xl font-handwriting text-accent-brown text-center mb-10">
        Our Crowd Favorites
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {featured.map((cookie) => (
          <CookieCard key={cookie.id} cookie={cookie} />
        ))}
      </div>
      <div className="text-center mt-12">
        <Link to="/shop">
          <Button variant="secondary" className="px-8 py-4 text-lg">
            View All Cookies
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedCookies;
