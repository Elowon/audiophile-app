import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { CartProvider } from "./context/CartContext.tsx";


import { ConvexProvider, ConvexReactClient } from "convex/react";
const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConvexProvider client={convex}>
    <BrowserRouter>
    <CartProvider>
      <App />
    </CartProvider>
    </BrowserRouter>
    </ConvexProvider>
  </React.StrictMode>
);
