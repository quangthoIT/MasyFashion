import { createContext } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();
// Context Provider
const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery = 5;
  const value = {
    products,
    currency,
    delivery,
  };

  return (
    // Provider
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
