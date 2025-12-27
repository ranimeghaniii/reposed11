import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

const flavorThemes = {
  classic: {
    name: 'Classic Cream',
    bgClass: 'bg-primary-light text-text',
    buttonClass: 'bg-primary-dark hover:bg-accent-brown text-white',
    accentClass: 'text-accent-brown',
    headerBg: 'bg-primary',
  },
  berryBliss: {
    name: 'Berry Bliss',
    bgClass: 'bg-pink-100 text-pink-900',
    buttonClass: 'bg-accent-berry hover:bg-pink-700 text-white',
    accentClass: 'text-accent-berry',
    headerBg: 'bg-pink-200',
  },
  mintChocolate: {
    name: 'Mint Chocolate',
    bgClass: 'bg-secondary-light text-text',
    buttonClass: 'bg-secondary-dark hover:bg-accent-brown text-white',
    accentClass: 'text-secondary-dark',
    headerBg: 'bg-secondary',
  },
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const storedTheme = localStorage.getItem('cozyCookiesTheme');
    return storedTheme || 'classic';
  });

  useEffect(() => {
    localStorage.setItem('cozyCookiesTheme', currentTheme);
  }, [currentTheme]);

  const theme = flavorThemes[currentTheme] || flavorThemes.classic;

  const setTheme = (themeName) => {
    if (flavorThemes[themeName]) {
      setCurrentTheme(themeName);
    }
  };

  return (
    <ThemeContext.Provider value={{ currentTheme: theme, setTheme, flavorThemes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
