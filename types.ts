
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  images: string[];
  stock: number;
  rating: number;
  reviewsCount: number;
  features: string[];
  estimatedDelivery: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  orders: Order[];
  wishlist: string[];
}

export interface Order {
  id: string;
  date: string;
  status: 'Processing' | 'Shipped' | 'Delivered' | 'Returned';
  items: CartItem[];
  total: number;
  trackingNumber?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}
