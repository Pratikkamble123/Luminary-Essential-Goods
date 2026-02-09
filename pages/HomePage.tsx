
import React from 'react';
import { MOCK_PRODUCTS, CATEGORIES } from '../constants';
import { ProductCard } from '../components/ProductCard';

export const HomePage: React.FC = () => {
  const featuredProducts = MOCK_PRODUCTS.slice(0, 4);

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative bg-[#F3F4F6] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="relative z-10 lg:max-w-xl">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full mb-6">NEW COLLECTION</span>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
              Designed simply. <br />
              <span className="text-blue-600">Made to last.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-md">
              Carefully crafted essentials designed for everyday comfort and long-term use.
            </p>
            <div className="flex gap-4">
              <a href="#/shop" className="px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200">
                Shop Now
              </a>
              <a href="#/about" className="px-8 py-3 bg-white text-gray-900 font-medium rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                Our Mission
              </a>
            </div>
          </div>
        </div>
        
        {/* Subtle decorative background element */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full hidden lg:block opacity-20 pointer-events-none">
           <img src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&h=1600&w=1800" alt="Hero Background" className="w-full h-full object-cover mix-blend-multiply" />
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-wrap justify-between gap-8">
          {[
            { label: 'Free shipping over ₹10,000', icon: '🚚' },
            { label: '30-day honest returns', icon: '🔄' },
            { label: 'Lifetime support', icon: '💬' },
            { label: 'Eco-conscious packaging', icon: '🌿' }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm font-medium text-gray-600">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-bold text-gray-900">Shop by Category</h2>
          <a href="#/shop" className="text-sm font-semibold text-blue-600 hover:text-blue-700">View All</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {CATEGORIES.map(category => (
            <a 
              key={category.id}
              href={`#/shop?category=${category.id}`}
              className="group p-8 bg-white border border-gray-100 rounded-2xl text-center hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/30 transition-all duration-300"
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">{category.icon}</div>
              <span className="text-sm font-bold text-gray-900">{category.name}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Curated for You</h2>
            <p className="text-gray-500 max-w-xl">
              Hand-picked essentials that combine form and function effortlessly.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="bg-blue-600 rounded-3xl p-10 sm:p-20 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Join the Luminary Circle</h2>
            <p className="text-blue-100 mb-10 text-lg">
              Receive updates on new launches, design stories, and exclusive previews. No spam, only substance.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-6 py-4 rounded-xl border-none text-gray-900 focus:ring-4 focus:ring-blue-400 outline-none"
                required
              />
              <button className="px-8 py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition-all shadow-xl shadow-black/20">
                Join Now
              </button>
            </form>
          </div>
          {/* Subtle pattern background */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <svg width="100%" height="100%"><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/></pattern><rect width="100%" height="100%" fill="url(#grid)" /></svg>
          </div>
        </div>
      </section>
    </div>
  );
};
