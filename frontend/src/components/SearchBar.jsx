import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Search, X } from "lucide-react";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearchBar, setShowSearchBar } =
    useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearchBar && visible ? (
    <div className="border-t border-b border-gray-300 bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-300 px-5 py-2 my-6 mx-4 rounded-full w-3/4 sm:w-1/2">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-gray-700 placeholder:text-gray-500"
        />
        <Search className="w-5 h-5 shrink-0 text-gray-500" />
      </div>
      <X
        onClick={() => setShowSearchBar(false)}
        className="inline w-6 h-6 cursor-pointer text-gray-500"
      />
    </div>
  ) : null;
};

export default SearchBar;
