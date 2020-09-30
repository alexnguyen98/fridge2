import { createContext } from "react";

const CartContext = createContext({
  cart: {},
  setCart: (item: any) => {},
});

export default CartContext;
