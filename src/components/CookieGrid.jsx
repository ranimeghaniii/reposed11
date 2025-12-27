import React, { useState } from 'react';
import CookieCard from './ui/CookieCard';
import { cookies } from '../utils/mockData';
import Input from './ui/Input';

const CookieGrid = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(cookies.map(cookie => cookie.category))];

  const filteredCookies = cookies.filter(cookie => {
    const matchesSearch = cookie.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          cookie.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || cookie.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row gap-4 mb-8 items-center justify-between">
        <div className="w-full sm:w-1/2">
          <Input
            id="search"
            type="text"
            placeholder="Search cookies by name or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="w-full sm:w-auto">
          <label htmlFor="category-select" className="sr-only">Filter by Category</label>
          <select
            id="category-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-2 border border-primary-dark rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary transition duration-200 ease-in-out font-sans"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      {filteredCookies.length === 0 ? (
        <p className="text-center text-text-light text-xl py-10">No cookies found matching your criteria.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredCookies.map((cookie) => (
            <CookieCard key={cookie.id} cookie={cookie} />
          ))}
        </div>
      )}
    </section>
  );
};

export default CookieGrid;
