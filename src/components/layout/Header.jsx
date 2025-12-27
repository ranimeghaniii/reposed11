import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';
import Button from '../ui/Button';

const Header = () => {
  const { getTotalItems } = useCart();
  const { isLoggedIn, user, logout } = useAuth();
  const { currentTheme, setTheme, flavorThemes } = useTheme();

  return (
    <header className={`${currentTheme.headerBg} shadow-md py-4 sticky top-0 z-40`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="text-4xl font-handwriting text-accent-brown hover:text-accent-brown/80 transition-colors duration-200">
          Cozy Cookies
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-serif text-text hover:text-accent-brown transition-colors duration-200 ${
                isActive ? 'font-bold text-accent-brown' : ''
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `font-serif text-text hover:text-accent-brown transition-colors duration-200 ${
                isActive ? 'font-bold text-accent-brown' : ''
              }`
            }
          >
            Shop
          </NavLink>
          <NavLink
            to="/stores"
            className={({ isActive }) =>
              `font-serif text-text hover:text-accent-brown transition-colors duration-200 ${
                isActive ? 'font-bold text-accent-brown' : ''
              }`
            }
          >
            Stores
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `font-serif text-text hover:text-accent-brown transition-colors duration-200 ${
                isActive ? 'font-bold text-accent-brown' : ''
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Link to="/cart" className="text-text hover:text-accent-brown transition-colors duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </Link>
            {getTotalItems() > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent-berry text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pop-in">
                {getTotalItems()}
              </span>
            )}
          </div>

          {isLoggedIn ? (
            <div className="relative group">
              <span className="font-serif text-text cursor-pointer hover:text-accent-brown transition-colors duration-200">
                Hi, {user.name.split(' ')[0]}
              </span>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
                <Button onClick={logout} variant="ghost" className="w-full text-left rounded-none px-4 py-2 hover:bg-gray-100">
                  Logout
                </Button>
              </div>
            </div>
          ) : (
            <Link to="/login">
              <Button variant="secondary" className="px-4 py-2 text-sm">Login</Button>
            </Link>
          )}

          <select
            onChange={(e) => setTheme(e.target.value)}
            value={Object.keys(flavorThemes).find(key => flavorThemes[key].name === currentTheme.name) || 'classic'}
            className="px-3 py-2 border border-primary-dark rounded-md bg-white text-sm focus:ring-primary focus:border-primary transition duration-200"
          >
            {Object.entries(flavorThemes).map(([key, theme]) => (
              <option key={key} value={key}>
                {theme.name}
              </option>
            ))}
          </select>

          {/* Mobile menu button */}
          <button className="md:hidden text-text hover:text-accent-brown">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
