import React from 'react';
import { Plus, ShoppingBag } from 'lucide-react';
import { Product } from '@/types/salon';
import { useCart } from '@/hooks/useCartHook';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_ITEM', product });
  };

  return (
    <div className="salon-card group">
      <div className="aspect-square bg-gradient-to-br from-light-pink/20 to-light-blue/20 rounded-xl mb-4 flex items-center justify-center">
        <ShoppingBag className="w-12 h-12 text-primary-pink/60" />
      </div>
      
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary-pink transition-colors">
            {product.name}
          </h3>
          <span className="text-xs px-2 py-1 bg-light-pink/20 text-primary-pink rounded-full">
            {product.category}
          </span>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {product.description}
        </p>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="price-display text-lg">
          ${product.price}
        </div>
        <button
          onClick={handleAddToCart}
          className="btn-secondary px-4 py-2 flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;