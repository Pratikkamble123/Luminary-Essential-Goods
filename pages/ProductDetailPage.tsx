
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../constants';
import { useStore } from '../components/StoreContext';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = MOCK_PRODUCTS.find(p => p.id === id);
  const { addToCart } = useStore();
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Product not found.</h1>
        <a href="#/shop" className="text-blue-600 underline">Back to Shop</a>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <nav className="flex mb-8 text-sm text-gray-400">
        <a href="#/" className="hover:text-gray-900">Home</a>
        <span className="mx-2">/</span>
        <a href="#/shop" className="hover:text-gray-900 uppercase">{product.category}</a>
        <span className="mx-2">/</span>
        <span className="text-gray-900 font-medium">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Gallery */}
        <div className="space-y-4">
          <div className="aspect-square bg-white rounded-2xl overflow-hidden border border-gray-100 relative group cursor-crosshair">
            <img 
              src={product.images[activeImage]} 
              alt={product.name} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-125"
            />
            {product.stock < 10 && (
              <div className="absolute top-4 left-4 bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                Only {product.stock} left
              </div>
            )}
          </div>
          <div className="flex gap-4">
            {product.images.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${activeImage === idx ? 'border-blue-600' : 'border-transparent opacity-60 hover:opacity-100'}`}
              >
                <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex text-yellow-400">
              {'★'.repeat(Math.floor(product.rating))}
              {'☆'.repeat(5 - Math.floor(product.rating))}
            </div>
            <span className="text-sm font-medium text-gray-500">
              {product.rating} ({product.reviewsCount} reviews)
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-3xl font-bold text-gray-900">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-xl text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
            )}
            <span className="ml-2 text-green-600 text-sm font-semibold">Taxes included</span>
          </div>

          <p className="text-gray-600 leading-relaxed mb-8">
            {product.description}
          </p>

          <div className="space-y-6 pb-8 border-b border-gray-100 mb-8">
            <div>
              <h3 className="text-sm font-bold text-gray-900 uppercase mb-4">Key Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <span className="text-xl">🚚</span>
              <div>
                <p className="text-sm font-bold text-gray-900">Estimated Delivery</p>
                <p className="text-xs text-gray-500">{product.estimatedDelivery}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-auto">
            <div className="flex items-center border border-gray-200 rounded-lg h-14">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 h-full hover:bg-gray-50 transition-colors"
              >-</button>
              <span className="px-4 font-bold w-12 text-center">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 h-full hover:bg-gray-50 transition-colors"
              >+</button>
            </div>
            <button 
              onClick={() => {
                for(let i=0; i<quantity; i++) addToCart(product);
              }}
              className="flex-1 h-14 bg-gray-900 text-white font-bold rounded-lg hover:bg-blue-600 transition-all active:scale-[0.98] shadow-lg shadow-gray-200"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
