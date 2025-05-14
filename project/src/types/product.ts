export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  images: string[];
  category: string;
  brand: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockCount?: number;
  variants?: {
    type: string;
    options: string[];
  }[];
  sizes?: string[];
  colors?: {
    name: string;
    code: string;
  }[];
  features?: string[];
  createdAt: string;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  comment: string;
  images?: string[];
  createdAt: string;
  helpful: number;
  verifiedPurchase: boolean;
}