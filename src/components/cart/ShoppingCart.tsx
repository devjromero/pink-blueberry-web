import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/hooks/useCartHook';

const ShoppingCart: React.FC = () => {
  const { state, dispatch, totalItems, totalPrice } = useCart();

  if (!state.isOpen) return null;

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      dispatch({ type: 'REMOVE_ITEM', productId });
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', productId, quantity: newQuantity });
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-end">
      <div className="w-full max-w-md h-full bg-card shadow-2xl">
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <ShoppingBag className="w-6 h-6 text-primary-pink" />
              <h2 className="text-xl font-semibold">Shopping Cart</h2>
            </div>
            <button
              onClick={() => dispatch({ type: 'TOGGLE_CART' })}
              className="p-2 hover:bg-muted rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          {totalItems > 0 && (
            <p className="text-muted-foreground mt-2">{totalItems} items</p>
          )}
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {state.items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {state.items.map((item) => (
                <div key={item.product.id} className="flex items-center space-x-4 p-4 border border-border rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-light-pink/20 to-light-blue/20 rounded-lg flex items-center justify-center">
                    <ShoppingBag className="w-6 h-6 text-primary-pink/60" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-card-foreground truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      ${item.product.price} each
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="w-8 h-8 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="text-right">
                    <p className="font-semibold text-card-foreground">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => dispatch({ type: 'REMOVE_ITEM', productId: item.product.id })}
                      className="text-xs text-muted-foreground hover:text-red-500 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {state.items.length > 0 && (
          <div className="p-6 border-t border-border">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-2xl font-bold price-display">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <button className="btn-hero w-full justify-center text-lg py-3">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;