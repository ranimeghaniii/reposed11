import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { cookies } from '../utils/mockData';
import Button from '../components/ui/Button';
import { useCart } from '../contexts/CartContext';
import { FaPlus, FaMinus } from 'react-icons/fa'; // Assuming react-icons is installed

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItemToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const cookie = cookies.find((c) => c.id === id);

  if (!cookie) {
    return (
      <div className="text-center py-20 text-text-light text-xl animate-fade-in">
        <h1 className="text-4xl font-serif font-bold text-accent-brown mb-4">Cookie Not Found</h1>
        <p>The cookie you are looking for does not exist.</p>
        <Button onClick={() => navigate('/shop')} className="mt-8">
          Back to Shop
        </Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItemToCart(cookie, quantity);
    alert(`${quantity}x ${cookie.name} added to cart!`);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12 animate-fade-in">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src={cookie.imageUrl}
            alt={cookie.name}
            className="rounded-lg shadow-md w-full h-auto object-cover max-h-96 transform transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-4xl font-handwriting text-accent-brown mb-4">{cookie.name}</h1>
          <p className="text-text-light text-lg mb-6">{cookie.description}</p>
          <p className="text-5xl font-handwriting text-accent-berry mb-6">
            ${cookie.price.toFixed(2)}
          </p>

          <div className="flex items-center space-x-4 mb-8">
            <span className="font-serif text-lg text-text">Quantity:</span>
            <div className="flex items-center border border-primary-dark rounded-full overflow-hidden">
              <Button
                variant="ghost"
                className="p-2 w-10 h-10 flex items-center justify-center !rounded-none"
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              >
                <FaMinus className="text-accent-brown" />
              </Button>
              <span className="w-12 text-center text-xl font-serif text-text">{quantity}</span>
              <Button
                variant="ghost"
                className="p-2 w-10 h-10 flex items-center justify-center !rounded-none"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                <FaPlus className="text-accent-brown" />
              </Button>
            </div>
          </div>

          <Button onClick={handleAddToCart} className="w-full text-xl py-4 animate-pop-in">
            Add to Cart
          </Button>

          <Button variant="outline" onClick={() => navigate(-1)} className="w-full mt-4 text-lg py-3">
            Back to Shop
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
