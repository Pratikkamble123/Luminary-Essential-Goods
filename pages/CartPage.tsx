
import React from 'react';
import { useStore } from '../components/StoreContext';

export const CartPage: React.FC = () => {
  const { cart, updateCartQuantity, removeFromCart } = useStore();
  
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shippingThreshold = 10000;
  const shippingFee = 500;
  const shipping = subtotal > shippingThreshold ? 0 : shippingFee;
  const total = subtotal + shipping;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
        <p className="text-gray-500 mb-8 max-w-sm mx-auto">Looks like you haven't added anything yet. Start exploring our essentials.</p>
        <a href="#/shop" className="inline-block px-8 py-3 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200">
          Start Shopping
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-10">Review Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {cart.map(item => (
            <div key={item.id} className="flex gap-6 p-6 bg-white border border-gray-100 rounded-2xl">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden flex-shrink-0 bg-gray-50">
                <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.category}</p>
                  </div>
                  <span className="font-bold text-gray-900">{formatPrice(item.price * item.quantity)}</span>
                </div>
                
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center border border-gray-200 rounded-lg">
                    <button 
                      onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-1 hover:bg-gray-50"
                    >-</button>
                    <span className="px-3 font-bold text-sm">{item.quantity}</span>
                    <button 
                      onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1 hover:bg-gray-50"
                    >+</button>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-xs font-bold text-gray-400 hover:text-red-500 transition-colors uppercase tracking-wider"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          <div className="p-6 bg-blue-50 rounded-2xl flex items-center gap-4">
            <span className="text-2xl">📦</span>
            <div>
              <h4 className="font-bold text-blue-900">Luminary Promise</h4>
              <p className="text-sm text-blue-800">Carbon-neutral delivery and plastic-free packaging on every order across India.</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-100 rounded-2xl p-8 sticky top-24">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>{shipping === 0 ? <span className="text-green-600 font-bold">FREE</span> : formatPrice(shipping)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Estimated Tax</span>
                <span>Included</span>
              </div>
              <div className="h-px bg-gray-100 my-4" />
              <div className="flex justify-between text-xl font-bold text-gray-900">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>
            
            <a 
              href="#/checkout" 
              className="block w-full text-center py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-blue-600 transition-all shadow-xl shadow-gray-200 mb-4"
            >
              Checkout Now
            </a>
            <p className="text-center text-xs text-gray-400">
              By proceeding, you agree to our Terms of Service and Refund Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
