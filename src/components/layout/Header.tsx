import React from 'react';
import { ShoppingBag, Calendar, Sparkles } from 'lucide-react';
import { useCart } from '@/hooks/useCartHook';

interface HeaderProps {
  onBookingClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBookingClick }) => {
  const { state, dispatch, totalItems } = useCart();

  return (
    <header className="bg-card/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-pink to-primary-blue flex items-center justify-center">
              {/* <Sparkles className="w-6 h-6 text-white" /> */}
              <img src="/logo.png" alt="The Pink Blueberry Logo" className="w-full h-full object-cover rounded-full" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary-pink to-primary-blue bg-clip-text text-transparent">
                The Pink Blueberry
              </h1>
              <p className="text-xs text-muted-foreground">Luxury Beauty Salon</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary-pink transition-colors">
              Services
            </a>
            <a href="#products" className="text-foreground hover:text-primary-pink transition-colors">
              Shop
            </a>
            <a href="#stylists" className="text-foreground hover:text-primary-pink transition-colors">
              Stylists
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onBookingClick}
              className="btn-hero flex items-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span className="hidden sm:inline">Book Now</span>
            </button>
            
            <button
              onClick={() => dispatch({ type: 'TOGGLE_CART' })}
              className="relative p-2 text-foreground hover:text-primary-pink transition-colors"
            >
              <ShoppingBag className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-pink text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;