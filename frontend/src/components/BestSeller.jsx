import { useContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, []);

  return (
    <div className="my-8 md:my-10">
      <div className="text-center py-10">
        <Title text1={"Best"} text2={"Sellers"} />
        <p className="text-sm md:text-base text-gray-500">
          Discover the most-loved products chosen by our customers. Guaranteed
          quality, stylish designs, and always on trend.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {bestSeller.map((item, index) => (
          <ProductItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
