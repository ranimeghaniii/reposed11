import React from 'react';
import HomeHero from '../components/HomeHero';
import FeaturedCookies from '../components/FeaturedCookies';
import Testimonials from '../components/Testimonials';

const HomePage = () => {
  return (
    <div className="animate-fade-in">
      <HomeHero />
      <FeaturedCookies />
      <Testimonials />
      {/* Could add more sections like 'Why Choose Us', 'Latest Blog Posts', etc. */}
    </div>
  );
};

export default HomePage;
