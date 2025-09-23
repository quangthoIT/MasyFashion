import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import FilterSidebar from "../components/FilterSidebar";
import ProductGrid from "../components/ProductGrid";

const Collection = () => {
  const { products, search, showSearchBar } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [type, setType] = useState([]);
  const [sortType, setSortType] = useState("default");

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleType = (e) => {
    if (type.includes(e.target.value)) {
      setType((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setType((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilters = () => {
    let productsCopy = products.slice();

    if (showSearchBar && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    if (type.length > 0) {
      productsCopy = productsCopy.filter((item) => type.includes(item.type));
    }
    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let sortProductsCopy = filterProducts.slice();
    switch (sortType) {
      case "priceLowToHigh":
        setFilterProducts(sortProductsCopy.sort((a, b) => a.price - b.price));
        break;
      case "priceHighToLow":
        setFilterProducts(sortProductsCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilters();
        break;
    }
  };

  useEffect(() => {
    applyFilters();
  }, [subCategory, type, search, showSearchBar]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-10 pt-10 border-t border-gray-300">
      <FilterSidebar
        showFilter={showFilter}
        setShowFilter={setShowFilter}
        toggleCategory={toggleSubCategory}
        toggleType={toggleType}
      />
      <ProductGrid filterProducts={filterProducts} setSortType={setSortType} />
    </div>
  );
};

export default Collection;
