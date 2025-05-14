import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Heart, User, Search, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white nav-shadow py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            KTR<span className="text-blue-400">Store</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-gray-700 hover:text-blue-500 transition-colors">
              Anasayfa
            </Link>
            <Link to="/kategori/erkek" className="font-medium text-gray-700 hover:text-blue-500 transition-colors">
              Erkek
            </Link>
            <Link to="/kategori/kadin" className="font-medium text-gray-700 hover:text-blue-500 transition-colors">
              Kadın
            </Link>
            <Link to="/kategori/elektronik" className="font-medium text-gray-700 hover:text-blue-500 transition-colors">
              Elektronik
            </Link>
            <Link to="/kategori/ayakkabi" className="font-medium text-gray-700 hover:text-blue-500 transition-colors">
              Ayakkabı
            </Link>
          </nav>
          
          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-gray-700 hover:text-blue-500 transition-colors">
              <Search size={22} />
            </button>
            <Link to="/hesabim/favoriler" className="text-gray-700 hover:text-blue-500 transition-colors">
              <Heart size={22} />
            </Link>
            <Link to="/sepet" className="text-gray-700 hover:text-blue-500 transition-colors relative">
              <ShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
            <Link to="/hesabim" className="text-gray-700 hover:text-blue-500 transition-colors">
              <User size={22} />
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white py-4 px-6 nav-shadow fade-in">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="font-medium text-gray-700 hover:text-blue-500 transition-colors py-2">
                Anasayfa
              </Link>
              <Link to="/kategori/erkek" className="font-medium text-gray-700 hover:text-blue-500 transition-colors py-2">
                Erkek
              </Link>
              <Link to="/kategori/kadin" className="font-medium text-gray-700 hover:text-blue-500 transition-colors py-2">
                Kadın
              </Link>
              <Link to="/kategori/elektronik" className="font-medium text-gray-700 hover:text-blue-500 transition-colors py-2">
                Elektronik
              </Link>
              <Link to="/kategori/ayakkabi" className="font-medium text-gray-700 hover:text-blue-500 transition-colors py-2">
                Ayakkabı
              </Link>
              <div className="flex justify-between pt-4 border-t border-gray-100">
                <Link to="/hesabim/favoriler" className="text-gray-700 hover:text-blue-500 transition-colors">
                  <Heart size={22} />
                </Link>
                <Link to="/sepet" className="text-gray-700 hover:text-blue-500 transition-colors relative">
                  <ShoppingCart size={22} />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                      {totalItems}
                    </span>
                  )}
                </Link>
                <Link to="/hesabim" className="text-gray-700 hover:text-blue-500 transition-colors">
                  <User size={22} />
                </Link>
                <button className="text-gray-700 hover:text-blue-500 transition-colors">
                  <Search size={22} />
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;