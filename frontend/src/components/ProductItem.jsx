import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    // Product Item
    <Link to={`/product/${id}`} className="text-gray-700 cursor-pointer">
      {/* Product Image */}
      <div className="overflow-hidden">
        <img
          src={image[0]}
          alt=""
          className="hover:scale-110 duration-300 transition ease-in-out"
        />
      </div>
      {/* Product Name */}
      <p className="pt-3 pb-1 text-sm hover:text-gray-900">
        {name}
      </p>
      {/* Product Price */}
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
