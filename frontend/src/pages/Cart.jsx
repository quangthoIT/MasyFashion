import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { Trash2 } from "lucide-react";

const Cart = () => {
  const { products, currency, cartItems } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="pt-10 border-t border-gray-300">
      {/* Title */}
      <div className="mb-5">
        <Title text1={"Your"} text2={"Cart"} />
      </div>
      {/* Cart */}
      <div>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product.id === item.id
          );
          return (
            <div
              key={index}
              className="py-4 border-b border-t border-gray-300 text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] md:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              {/* Product Image */}
              <div className="flex item-start gap-4 md:gap-6">
                <img
                  src={productData.image[0]}
                  alt=""
                  className="w-16 sm:w-20"
                />
                {/* Product Details */}
                <div>
                  <p className="test-base md:text-lg font-medium">
                    {productData.name}
                  </p>
                  {/* Price - Size */}
                  <div className="flex items-center gap-5 mt-2">
                    <p className="">
                      {currency}
                      {productData.price}
                    </p>
                    <p className="px-2 md:py-1 md:px-3 border border-gray-300 bg-gray-100">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>
              {/* Quantity */}
              <input
                type="number"
                min={1}
                defaultValue={item.quantity}
                className="border border-gray-300 max-w-10 sm:max-w-20 px-1 md:px-2 py-1 outline-none focus:border-gray-500 text-center md:text-start"
              />
              {/* Delete */}
              <Trash2 className="w-6 h-6 text-gray-700 cursor-pointer hover:text-gray-900" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
