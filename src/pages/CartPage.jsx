import React from 'react';
import { useCart } from '../contexts/CartContext';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { FaTrashAlt, FaPlus, FaMinus } from 'react-icons/fa'; // Assuming react-icons

const CartPage = () => {
  const { cartItems, removeItemFromCart, updateItemQuantity, getCartTotal, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-20 animate-fade-in">
        <h1 className="text-5xl font-handwriting text-accent-brown mb-6">Your Cart is Empty</h1>
        <p className="text-text-light text-lg mb-8">Looks like you haven't added any cozy cookies yet!</p>
        <Link to="/shop">
          <Button>Start Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <h1 className="text-5xl font-handwriting text-accent-brown text-center mb-10">Your Cozy Cart</h1>

      <div className="bg-white rounded-xl shadow-lg p-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center gap-4 py-4 border-b last:border-b-0 border-primary-light">
            <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded-md shadow-sm" />
            <div className="flex-grow">
              <h2 className="font-serif font-bold text-lg text-text">{item.name}</h2>
              <p className="text-accent-berry text-xl font-handwriting">${item.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                className="p-2 w-8 h-8 flex items-center justify-center !rounded-full"
                disabled={item.quantity <= 1}
              >
                <FaMinus className="text-accent-brown text-sm" />
              </Button>
              <span className="text-lg font-serif">{item.quantity}</span>
              <Button
                variant="ghost"
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                className="p-2 w-8 h-8 flex items-center justify-center !rounded-full"
              >
                <FaPlus className="text-accent-brown text-sm" />
              </Button>
            </div>
            <Button
              variant="ghost"
              onClick={() => removeItemFromCart(item.id)}
              className="text-red-500 hover:text-red-700 p-2 !rounded-full"
              aria-label={`Remove ${item.name} from cart`}
            >
              <FaTrashAlt />
            </Button>
          </div>
        ))}

        <div className="flex justify-between items-center pt-6 font-serif text-2xl font-bold text-text-light">
          <span>Total:</span>
          <span className="text-accent-berry">${getCartTotal().toFixed(2)}</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button variant="outline" onClick={clearCart} className="w-full sm:w-1/2">
            Clear Cart
          </Button>
          <Link to="/checkout" className="w-full sm:w-1/2">
            <Button className="w-full">Proceed to Checkout</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
