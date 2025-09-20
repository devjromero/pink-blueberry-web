import React, { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';
import { CartItem, Product } from '@/types/salon';

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

type CartAction = 
  | { type: 'ADD_ITEM'; product: Product }
  | { type: 'REMOVE_ITEM'; productId: number }
  | { type: 'UPDATE_QUANTITY'; productId: number; quantity: number }
  | { type: 'TOGGLE_CART' }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; items: CartItem[] };

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
  totalItems: number;
  totalPrice: number;
} | null>(null);

export { CartContext };

// LocalStorage utilities
const CART_STORAGE_KEY = 'pink-blueberry-cart';

const loadCartFromStorage = (): CartItem[] => {
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.warn('Failed to load cart from localStorage:', error);
    return [];
  }
};

const saveCartToStorage = (items: CartItem[]): void => {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  } catch (error) {
    console.warn('Failed to save cart to localStorage:', error);
  }
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  let newState: CartState;
  
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.product.id === action.product.id);
      if (existingItem) {
        newState = {
          ...state,
          items: state.items.map(item =>
            item.product.id === action.product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      } else {
        newState = {
          ...state,
          items: [...state.items, { product: action.product, quantity: 1 }]
        };
      }
      break;
    }
    case 'REMOVE_ITEM':
      newState = {
        ...state,
        items: state.items.filter(item => item.product.id !== action.productId)
      };
      break;
    case 'UPDATE_QUANTITY':
      newState = {
        ...state,
        items: state.items.map(item =>
          item.product.id === action.productId
            ? { ...item, quantity: Math.max(0, action.quantity) }
            : item
        ).filter(item => item.quantity > 0)
      };
      break;
    case 'TOGGLE_CART':
      newState = {
        ...state,
        isOpen: !state.isOpen
      };
      break;
    case 'CLEAR_CART':
      newState = {
        ...state,
        items: []
      };
      break;
    case 'LOAD_CART':
      newState = {
        ...state,
        items: action.items || []
      };
      break;
    default:
      return state;
  }

  // Save to localStorage for actions that modify cart items (not for TOGGLE_CART)
  if (action.type !== 'TOGGLE_CART' && action.type !== 'LOAD_CART') {
    saveCartToStorage(newState.items);
  }

  return newState;
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [], isOpen: false });

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedItems = loadCartFromStorage();
    if (savedItems.length > 0) {
      dispatch({ type: 'LOAD_CART', items: savedItems });
    }
  }, []);

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = state.items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{ state, dispatch, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};