
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { StoreProvider } from './components/StoreContext';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';

const Footer: React.FC = () => (
  <footer className="bg-white border-t border-gray-100 mt-20">
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-xl font-bold mb-6">LUMINARY</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Building products for a focused, intentional life. We believe in quality over quantity and design as a fix for human problems.
          </p>
          <div className="flex gap-4">
             {/* Simple social icons placeholders */}
             <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">𝕏</div>
             <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">IG</div>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider mb-6">Shop</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a href="#/shop" className="hover:text-gray-900 transition-colors">All Products</a></li>
            <li><a href="#/shop?category=tech" className="hover:text-gray-900 transition-colors">Technology</a></li>
            <li><a href="#/shop?category=living" className="hover:text-gray-900 transition-colors">Home Living</a></li>
            <li><a href="#/shop?category=apparel" className="hover:text-gray-900 transition-colors">Apparel</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a href="#/about" className="hover:text-gray-900 transition-colors">Our Story</a></li>
            <li><a href="#/careers" className="hover:text-gray-900 transition-colors">Careers</a></li>
            <li><a href="#/sustainability" className="hover:text-gray-900 transition-colors">Sustainability</a></li>
            <li><a href="#/contact" className="hover:text-gray-900 transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider mb-6">Support</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a href="#/faq" className="hover:text-gray-900 transition-colors">FAQs</a></li>
            <li><a href="#/shipping" className="hover:text-gray-900 transition-colors">Shipping & Returns</a></li>
            <li><a href="#/warranty" className="hover:text-gray-900 transition-colors">Warranty</a></li>
            <li><a href="#/privacy" className="hover:text-gray-900 transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-gray-50 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-medium">
        <p>© 2026 Luminary Essential Goods Inc. All rights reserved.</p>
        <div className="flex gap-6">
          <span className="hover:text-gray-600 cursor-pointer">Terms</span>
          <span className="hover:text-gray-600 cursor-pointer">Privacy</span>
          <span className="hover:text-gray-600 cursor-pointer">Accessibility</span>
        </div>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <StoreProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </StoreProvider>
  );
};

export default App;
