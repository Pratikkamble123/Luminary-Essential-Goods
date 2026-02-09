
import React from 'react';
import { Product } from '../types';
import { useStore } from './StoreContext';

interface Props {
  product: Product;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { addToCart, toggleWishlist, wishlist } = useStore();
  const isWishlisted = wishlist.includes(product.id);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="group relative flex flex-col bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-gray-200/40 transition-all duration-300">
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <a href={`#/product/${product.id}`}>
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </a>
        <button 
          onClick={() => toggleWishlist(product.id)}
          className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur rounded-full shadow-sm hover:bg-white transition-colors"
        >
          <svg 
            className={`w-4 h-4 ${isWishlisted ? 'fill-red-500 stroke-red-500' : 'stroke-gray-400'}`} 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center gap-1 mb-1">
          <span className="text-yellow-400 text-sm">★</span>
          <span className="text-xs text-gray-500 font-medium">{product.rating}</span>
          <span className="text-xs text-gray-400">({product.reviewsCount})</span>
        </div>
        
        <a href={`#/product/${product.id}`} className="block mb-2">
          <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
            {product.name}
          </h3>
          <p className="text-xs text-gray-500 line-clamp-2 min-h-[32px]">
            {product.description}
          </p>
        </a>

        <div className="mt-auto flex items-center justify-between pt-4">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-gray-900">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
            )}
          </div>
          <button 
            onClick={() => addToCart(product)}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-900 text-white hover:bg-blue-600 transition-all active:scale-95"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
