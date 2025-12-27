import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useTheme } from '../../contexts/ThemeContext';

const Layout = ({ children }) => {
  const { currentTheme } = useTheme();
  return (
    <div className={`min-h-screen flex flex-col ${currentTheme.bgClass}`}>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
