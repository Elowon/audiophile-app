
import { useContext } from "react";
import { CartContext } from "./Cart.core";
import type { CartContextType } from "./Cart.types";

export const useCart = (): CartContextType => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
};
