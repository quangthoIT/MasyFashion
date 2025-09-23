import { createContext, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();
// Context Provider
const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery = 5;
  const [search, setSearch] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);

  const value = {
    products,
    currency,
    delivery,
    search,
    setSearch,
    showSearchBar,
    setShowSearchBar,
  };

  return (
    // Provider
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
