export interface Service {
  id: number;
  name: string;
  price: number;
  duration: string;
  description: string;
}

export interface Product {
  id: number;
  name: string;
  category: "Hair Care" | "Organic Soap";
  price: number;
  description: string;
  image?: string;
}

export interface Stylist {
  id: number;
  name: string;
  title: string;
  specialties: string[];
  rating: number;
  bio: string;
  image?: string;
  url: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface BookingState {
  service?: Service;
  stylist?: Stylist;
  date?: string;
  time?: string;
  customerInfo?: {
    name: string;
    email: string;
    phone: string;
    notes?: string;
  };
}