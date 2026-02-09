
import React, { useState } from 'react';
import { useStore } from './StoreContext';

export const Navbar: React.FC = () => {
  const { cart, user } = useStore();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <a href="#/" className="text-2xl font-bold tracking-tight text-gray-900">
              LUMINARY
            </a>
            <div className="hidden md:flex items-center gap-6">
              <a href="#/shop" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Shop</a>
              <a href="#/shop?category=tech" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Tech</a>
              <a href="#/shop?category=living" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Living</a>
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-500 hover:text-gray-900 transition-colors"
              aria-label="Search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <a href="#/cart" className="p-2 text-gray-500 hover:text-gray-900 transition-colors relative" aria-label="Cart">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-blue-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
                  {cartCount}
                </span>
              )}
            </a>

            <a href="#/profile" className="p-2 text-gray-500 hover:text-gray-900 transition-colors" aria-label="Profile">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {isSearchOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 p-4 animate-in slide-in-from-top duration-300">
          <div className="max-w-3xl mx-auto flex items-center gap-3">
            <input 
              type="text" 
              placeholder="Search essential goods..." 
              autoFocus
              className="w-full bg-gray-50 border-none rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500"
            />
            <button onClick={() => setIsSearchOpen(false)} className="text-sm font-medium text-gray-500">Close</button>
          </div>
        </div>
      )}
    </nav>
  );
};
