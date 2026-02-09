
import React from 'react';
import { Product, Category } from './types';

export const COLORS = {
  primary: '#1A1A1A', // Charcoal
  secondary: '#3B82F6', // Trustworthy Blue
  bg: '#FAFAFA', // Off-white
  surface: '#FFFFFF',
  textSubtle: '#6B7280',
};

export const CATEGORIES: Category[] = [
  { id: 'tech', name: 'Technology', icon: '💻' },
  { id: 'living', name: 'Home Living', icon: '🏠' },
  { id: 'apparel', name: 'Apparel', icon: '👕' },
  { id: 'lifestyle', name: 'Lifestyle', icon: '🚲' },
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Luminary Headphones Pro',
    description: 'Noise-cancelling headphones with studio-quality sound and 40-hour battery life. Designed for comfort during long listening sessions.',
    price: 24999,
    originalPrice: 29999,
    category: 'tech',
    images: ['https://images.pexels.com/photos/14935011/pexels-photo-14935011.jpeg?auto=compress&cs=tinysrgb&h=800&w=800', 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&h=800&q=80'],
    stock: 12,
    rating: 4.8,
    reviewsCount: 124,
    features: ['Active Noise Cancellation', 'Hi-Res Audio', 'USB-C Charging'],
    estimatedDelivery: 'Feb 24 - Feb 26'
  },
  {
    id: '2',
    name: 'Minimalist Desk Lamp',
    description: 'Dimmable LED lamp with adjustable arm and warm color temperature. Perfect for late-night focus.',
    price: 6999,
    category: 'living',
    images: ['https://images.pexels.com/photos/374857/pexels-photo-374857.jpeg?auto=compress&cs=tinysrgb&h=800&w=800'],
    stock: 45,
    rating: 4.6,
    reviewsCount: 56,
    features: ['Touch Controls', 'Adjustable Brightness', 'Energy Efficient'],
    estimatedDelivery: 'Feb 23 - Feb 25'
  },
  {
    id: '3',
    name: 'Recycled Wool Cardigan',
    description: 'Ethically sourced wool cardigan that keeps you warm without the bulk. A timeless piece for any wardrobe.',
    price: 9999,
    category: 'apparel',
    images: ['https://images.pexels.com/photos/10174127/pexels-photo-10174127.jpeg?auto=compress&cs=tinysrgb&h=800&w=800'],
    stock: 20,
    rating: 4.9,
    reviewsCount: 89,
    features: ['100% Recycled Wool', 'Oversized Fit', 'Natural Dye'],
    estimatedDelivery: 'Feb 25 - Feb 27'
  },
  {
    id: '4',
    name: 'E-Cruiser Series 5',
    description: 'The ultimate urban commuting machine. 50-mile range and integrated safety lights.',
    price: 119999,
    originalPrice: 135000,
    category: 'lifestyle',
    images: ['https://images.pexels.com/photos/13552074/pexels-photo-13552074.jpeg?auto=compress&cs=tinysrgb&h=800&w=800'],
    stock: 5,
    rating: 4.7,
    reviewsCount: 32,
    features: ['Hydraulic Brakes', 'LCD Display', 'Smart App Connection'],
    estimatedDelivery: 'Mar 1 - Mar 5'
  },
  {
    id: '5',
    name: 'Organic Cotton Tee',
    description: 'Breathable, soft, and durable. The perfect daily essential that lasts.',
    price: 2499,
    category: 'apparel',
    images: ['https://images.pexels.com/photos/18856593/pexels-photo-18856593.jpeg?auto=compress&cs=tinysrgb&h=800&w=800'],
    stock: 100,
    rating: 4.5,
    reviewsCount: 210,
    features: ['GOTS Certified', 'Pre-shrunk', 'Soft Touch'],
    estimatedDelivery: 'Feb 23 - Feb 24'
  },
  {
    id: '6',
    name: 'Ceramic Pour-Over Set',
    description: 'Handcrafted ceramic set for the perfect morning ritual. Includes dripper and server.',
    price: 5499,
    category: 'living',
    images: ['https://images.pexels.com/photos/11281128/pexels-photo-11281128.jpeg?auto=compress&cs=tinysrgb&h=800&w=800'],
    stock: 28,
    rating: 4.8,
    reviewsCount: 45,
    features: ['Hand-glazed', 'Dishwasher safe', 'Heat Retention'],
    estimatedDelivery: 'Feb 24 - Feb 26'
  }
];
