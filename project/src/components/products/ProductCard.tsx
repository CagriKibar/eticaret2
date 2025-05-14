import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist();
  
  const {
    id,
    name,
    price,
    discountPrice,
    images,
    brand,
  } = product;
  
  const discount = discountPrice ? Math.round(((price - discountPrice) / price) * 100) : 0;
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };
  
  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isInWishlist(id)) {
      removeFromWishlist(id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div 
      className="product-card bg-white rounded-lg overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/urun/${id}`} className="block relative">
        {/* Product Image */}
        <div className="relative h-64 overflow-hidden bg-gray-100">
          <img 
            src={images[0]} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-500 ease-out"
            style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
          />
          
          {/* Discount Badge */}
          {discount > 0 && (
            <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
              -%{discount}
            </div>
          )}
          
          {/* Quick Actions */}
          <div className={`absolute right-3 flex flex-col space-y-2 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            {/* Wishlist Button */}
            <button 
              onClick={handleToggleWishlist}
              className="w-9 h-9 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-blue-50 transition-colors"
            >
              <Heart 
                size={18} 
                className={isInWishlist(id) ? 'text-red-500 fill-red-500' : 'text-gray-600'}
              />
            </button>
            
            {/* Quick View Button */}
            <Link 
              to={`/urun/${id}`}
              className="w-9 h-9 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-blue-50 transition-colors"
            >
              <Eye size={18} className="text-gray-600" />
            </Link>
            
            {/* Add to Cart Button */}
            <button 
              onClick={handleAddToCart}
              className="w-9 h-9 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-blue-50 transition-colors"
            >
              <ShoppingCart size={18} className="text-gray-600" />
            </button>
          </div>
        </div>
        
        {/* Product Info */}
        <div className="p-4">
          <div className="text-gray-500 text-sm mb-1">{brand}</div>
          <h3 className="font-medium text-gray-800 mb-2 line-clamp-2">{name}</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {discountPrice ? (
                <>
                  <span className="text-lg font-semibold text-blue-600">{discountPrice.toLocaleString('tr-TR')} ₺</span>
                  <span className="ml-2 text-sm text-gray-500 line-through">{price.toLocaleString('tr-TR')} ₺</span>
                </>
              ) : (
                <span className="text-lg font-semibold text-blue-600">{price.toLocaleString('tr-TR')} ₺</span>
              )}
            </div>
            
            {/* Add to cart button (visible on mobile only) */}
            <button 
              onClick={handleAddToCart}
              className="md:hidden w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full text-blue-600 hover:bg-blue-200 transition-colors"
            >
              <ShoppingCart size={16} />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;