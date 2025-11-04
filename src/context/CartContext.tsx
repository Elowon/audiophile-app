import React, { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";


export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartContextType {
  cart: CartItem[];
  subtotal: number;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  clearCart: () => void;
  
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}


const CartContext = createContext<CartContextType | undefined>(undefined);


export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

 const addToCart = (item: CartItem) => {
  setCart((prev) => {
    
    const existingIndex = prev.findIndex((p) => p.id === item.id);

    
    if (existingIndex !== -1) {
      const updatedCart = [...prev];
      updatedCart[existingIndex] = {
        ...updatedCart[existingIndex],
        quantity: updatedCart[existingIndex].quantity + item.quantity,
      };
      return updatedCart;
    }

   
    return [...prev, item];
  });
};

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCart((prev) => prev.map((p) => (p.id === id ? { ...p, quantity } : p)));
  };

  const increaseQuantity = (id: string) => {
    setCart((prev) => prev.map((p) => (p.id === id ? { ...p, quantity: p.quantity + 1 } : p)));
  };

  const decreaseQuantity = (id: string) => {
    setCart((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, quantity: Math.max(1, p.quantity - 1) } : p
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart"); 
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        subtotal,
        addToCart,
        removeFromCart,
        updateQuantity,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        isCartOpen,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
};
