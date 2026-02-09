
import React, { useState } from 'react';
import { useStore } from '../components/StoreContext';

export const CheckoutPage: React.FC = () => {
  const { cart, clearCart } = useStore();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zip: '',
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVC: ''
  });

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shippingThreshold = 10000;
  const shippingFee = 500;
  const total = subtotal > shippingThreshold ? subtotal : subtotal + shippingFee;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleComplete = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3); // Completed
    setTimeout(() => {
      clearCart();
    }, 2000);
  };

  if (step === 3) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center animate-in zoom-in duration-500">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Confirmed</h1>
        <p className="text-gray-500 mb-8">
          Thank you for your trust, {formData.firstName}. We've sent a confirmation email to <strong>{formData.email}</strong>. 
          Your essentials are being prepared for shipment.
        </p>
        <a href="#/" className="inline-block px-8 py-3 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-colors">
          Back to Home
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900 mb-10">Checkout</h1>
          
          <form onSubmit={handleComplete} className="space-y-12">
            {/* Step 1: Shipping */}
            <section className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-900 text-white text-sm font-bold">1</span>
                <h2 className="text-xl font-bold text-gray-900">Shipping Information</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="email" placeholder="Email Address" 
                  className="sm:col-span-2 px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                  value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                  required
                />
                <input 
                  type="text" placeholder="First Name" 
                  className="px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                  value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})}
                  required
                />
                <input 
                  type="text" placeholder="Last Name" 
                  className="px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                  value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})}
                  required
                />
                <input 
                  type="text" placeholder="Address" 
                  className="sm:col-span-2 px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                  value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})}
                  required
                />
                <input 
                  type="text" placeholder="City" 
                  className="px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                  value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})}
                  required
                />
                <input 
                  type="text" placeholder="ZIP Code" 
                  className="px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                  value={formData.zip} onChange={e => setFormData({...formData, zip: e.target.value})}
                  required
                />
              </div>
            </section>

            {/* Step 2: Payment */}
            <section className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-900 text-white text-sm font-bold">2</span>
                <h2 className="text-xl font-bold text-gray-900">Payment Method</h2>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-gray-700">Credit or Debit Card</span>
                  <div className="flex gap-2">
                     <span className="text-xs font-medium text-gray-400">VISA</span>
                     <span className="text-xs font-medium text-gray-400">MASTERCARD</span>
                     <span className="text-xs font-medium text-gray-400">RUPAY</span>
                  </div>
                </div>
                <input 
                  type="text" placeholder="Name on Card" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                  value={formData.cardName} onChange={e => setFormData({...formData, cardName: e.target.value})}
                  required
                />
                <input 
                  type="text" placeholder="Card Number" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                  value={formData.cardNumber} onChange={e => setFormData({...formData, cardNumber: e.target.value})}
                  required
                />
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" placeholder="MM / YY" 
                    className="px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                    value={formData.cardExpiry} onChange={e => setFormData({...formData, cardExpiry: e.target.value})}
                    required
                  />
                  <input 
                    type="text" placeholder="CVC" 
                    className="px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                    value={formData.cardCVC} onChange={e => setFormData({...formData, cardCVC: e.target.value})}
                    required
                  />
                </div>
              </div>
            </section>

            <button 
              type="submit"
              className="w-full py-5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 text-lg"
            >
              Confirm Order • {formatPrice(total)}
            </button>
          </form>
        </div>

        <div className="lg:w-96">
          <div className="bg-gray-50 rounded-2xl p-8 sticky top-24">
            <h2 className="text-lg font-bold text-gray-900 mb-6">In Your Bag</h2>
            <div className="space-y-4 mb-6 max-h-96 overflow-auto">
              {cart.map(item => (
                <div key={item.id} className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-gray-200">
                    <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-gray-900 truncate">{item.name}</h4>
                    <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <span className="text-sm font-bold text-gray-900">{formatPrice(item.price * item.quantity)}</span>
                </div>
              ))}
            </div>
            <div className="h-px bg-gray-200 my-6" />
            <div className="space-y-3">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Shipping</span>
                <span>{subtotal > shippingThreshold ? 'FREE' : formatPrice(shippingFee)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-gray-900 pt-2">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
