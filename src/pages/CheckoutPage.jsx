import React, { useState } from 'react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { useCart } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/ui/Modal';
import { useAuth } from '../contexts/AuthContext';

const CheckoutPage = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const { isLoggedIn, user } = useAuth();
  const navigate = useNavigate();

  const [shippingInfo, setShippingInfo] = useState({
    name: user?.name || '',
    address: '',
    city: '',
    zip: '',
    email: user?.email || '',
    phone: '',
  });
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiry: '',
    cvc: '',
  });
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  const handleShippingChange = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.id]: e.target.value });
  };

  const handlePaymentChange = (e) => {
    setPaymentInfo({ ...paymentInfo, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert("Your cart is empty. Please add items before checking out.");
      navigate('/shop');
      return;
    }
    // Mock checkout process
    console.log('Shipping Info:', shippingInfo);
    console.log('Payment Info:', paymentInfo);
    setIsOrderConfirmed(true);
    clearCart();
  };

  const closeConfirmationModal = () => {
    setIsOrderConfirmed(false);
    navigate('/');
  };

  if (!isLoggedIn && !isOrderConfirmed) {
    return (
      <div className="text-center py-20 bg-white rounded-xl shadow-lg p-8 animate-fade-in">
        <h1 className="text-5xl font-handwriting text-accent-brown mb-6">Login Required</h1>
        <p className="text-text-light text-lg mb-8">Please login to proceed with your order.</p>
        <Button onClick={() => navigate('/login', { state: { from: '/checkout' } })}>
          Go to Login
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 animate-fade-in">
      <h1 className="text-5xl font-handwriting text-accent-brown text-center mb-10">Checkout</h1>

      <form onSubmit={handleSubmit}>
        <h2 className="text-3xl font-serif text-accent-brown mb-6 border-b pb-2">Shipping Information</h2>
        <Input label="Full Name" id="name" value={shippingInfo.name} onChange={handleShippingChange} required />
        <Input label="Address" id="address" value={shippingInfo.address} onChange={handleShippingChange} required />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input label="City" id="city" value={shippingInfo.city} onChange={handleShippingChange} required />
          <Input label="Zip Code" id="zip" value={shippingInfo.zip} onChange={handleShippingChange} required />
        </div>
        <Input label="Email" id="email" type="email" value={shippingInfo.email} onChange={handleShippingChange} required />
        <Input label="Phone" id="phone" type="tel" value={shippingInfo.phone} onChange={handleShippingChange} />

        <h2 className="text-3xl font-serif text-accent-brown mt-10 mb-6 border-b pb-2">Payment Details</h2>
        <Input label="Card Number" id="cardNumber" type="text" placeholder="XXXX XXXX XXXX XXXX" value={paymentInfo.cardNumber} onChange={handlePaymentChange} required />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input label="Expiry Date (MM/YY)" id="expiry" type="text" placeholder="MM/YY" value={paymentInfo.expiry} onChange={handlePaymentChange} required />
          <Input label="CVC" id="cvc" type="text" placeholder="123" value={paymentInfo.cvc} onChange={handlePaymentChange} required />
        </div>

        <div className="border-t border-primary-light pt-6 mt-8">
          <div className="flex justify-between items-center font-serif text-xl font-bold text-text-light mb-4">
            <span>Cart Total:</span>
            <span className="text-accent-berry">${getCartTotal().toFixed(2)}</span>
          </div>
          <Button type="submit" className="w-full text-xl py-4 animate-pop-in">
            Place Order
          </Button>
        </div>
      </form>

      <Modal
        isOpen={isOrderConfirmed}
        onClose={closeConfirmationModal}
        title="Order Confirmed!"
      >
        <p className="text-center text-lg text-text mb-4">Thank you for your purchase from Cozy Cookies!</p>
        <p className="text-center text-text-light mb-6">Your order has been placed successfully and will be delivered soon.</p>
        <div className="flex justify-center">
          <Button onClick={closeConfirmationModal}>
            Continue Shopping
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default CheckoutPage;
