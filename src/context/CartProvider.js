import { createContext, useState } from "react";
import "../Styles/styles.css";

// Create Context
export const CartContext = createContext();

// Create Provider Component
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
