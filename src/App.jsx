import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';
import StoreLocatorPage from './pages/StoreLocatorPage';
import ContactPage from './pages/ContactPage';
import { useTheme } from './contexts/ThemeContext';
import { FaIcons } from 'react-icons/fa'; // Import to ensure react-icons is part of dependencies

// Ensure react-icons are included in package.json devDependencies or dependencies for a successful build:
// npm install react-icons --save

function App() {
  const { currentTheme } = useTheme();

  return (
    <div className={`App ${currentTheme.bgClass}`}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/stores" element={<StoreLocatorPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Fallback for unknown routes */}
          <Route path="*" element={<h1 className="text-center text-4xl font-serif text-accent-brown pt-20">404: Page Not Found</h1>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
