
import { createContext } from "react";
import type { CartContextType } from "./Cart.types";

export const CartContext = createContext<CartContextType | undefined>(undefined);
