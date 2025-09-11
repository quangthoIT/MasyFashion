import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  // Context
  const { products } = useContext(ShopContext);
  // States
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    // Latest Collection
    <div className="my-6 md:my-10">
      {/* Title */}
      <div className="text-center py-6">
        <Title text1={"Latest"} text2={"Collection"} />
        <p className="text-gray-500 text-sm md:text-base">
          Discover the latest designs, carefully curated to bring you a modern
          and elegant style.
        </p>
      </div>

      {/* Rendering Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {/* Product Item */}
        {latestProducts.map((item, index) => (
          <ProductItem key={index} {...item} />
          // <ProductItem
          //   key={index}
          //   id={item.id}
          //   image={item.image}
          //   name={item.name}
          //   price={item.price}
          // />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
