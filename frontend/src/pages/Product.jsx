import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { Star } from "lucide-react";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams(); // Lấy ID sản phẩm từ URL
  const { products, currency, addToCart } = useContext(ShopContext); // Lấy dữ liệu sản phẩm và đơn vị tiền tệ từ context
  const [productData, setProductData] = useState(false); // State lưu thông tin sản phẩm hiện tại
  const [image, setImage] = useState(""); // State lưu hình ảnh đang được hiển thị chính
  const [size, setSize] = useState(""); // State lưu kích thước (size) được chọn

  // Hàm tìm sản phẩm có id trùng với productId trong danh sách products
  const fetchProductData = async () => {
    products.map((item) => {
      if (item.id === productId) {
        setProductData(item); // Lưu thông tin sản phẩm
        setImage(item.image[0]); // Mặc định hiển thị ảnh đầu tiên
        return;
      }
    });
  };

  // Khi component load lần đầu - gọi hàm fetchProductData
  useEffect(() => {
    fetchProductData();
  }, []);

  return productData ? (
    <div className="border-t border-gray-300 py-10">
      {/* Product Data */}
      <div className="flex gap-8 md:gap-16 flex-col md:flex-row">
        {/* Product Image */}
        <div className="flex-1 flex flex-col-reverse gap-3 md:flex-row">
          {/* Side Images */}
          <div className="flex md:flex-col overflow-x-auto overflow-y-scroll justify-between md:justify-normal md:w-[20%] w-full">
            {productData.image.map((item, index) => (
              <img
                src={item}
                key={index}
                // Khi click vào hình ảnh - thay đổi hình ảnh chính
                onClick={() => setImage(item)}
                className="w-[24%] md:w-full md:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>
          {/* Main Image */}
          <div className="w-full md:w-[85%]">
            <img src={image} alt="" className="w-full h-auto" />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1 text-gray-700">
          {/* Product Name */}
          <h1 className="font-medium text-xl md:text-2xl">
            {productData.name}
          </h1>
          {/* Product Rating */}
          <div className="flex items-center gap-1 md:mt-1">
            <Star className="w-4 h-4 text-red-500 fill-red-500" />
            <Star className="w-4 h-4 text-red-500 fill-red-500" />
            <Star className="w-4 h-4 text-red-500 fill-red-500" />
            <Star className="w-4 h-4 text-red-500 fill-red-500" />
            <Star className="w-4 h-4 text-red-200 fill-red-200" />
            <p className="pl-2">(123)</p>
          </div>
          {/* Product Price */}
          <p className="mt-2 md:mt-4 text-xl md:text-2xl font-medium">
            {currency}
            {productData.price}
          </p>
          {/* Product Description */}
          <p className="mt-2 md:mt-4 text-slate-500 text-sm md:text-base">
            {productData.description}
          </p>
          {/* Product Sizes */}
          <div className="flex flex-col gap-4 my-8">
            <p className="text-base md:text-lg capitalize">Select size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)} // Khi click với size - thay đổi state size
                  key={index}
                  className={`border border-gray-300 px-3 py-2 text-sm md:text-base bg-gray-100 hover:bg-gray-200 ${
                    item === size ? "border-red-500" : ""
                  } cursor-pointer`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          {/* Add to Cart */}
          <button
            onClick={() => addToCart(productData.id, size)}
            className="bg-gray-700 text-white text-sm md:text-base py-3 px-8 uppercase active:bg-gray-900 cursor-pointer"
          >
            Add to cart
          </button>

          {/* Product Details */}
          <hr className="mt-8 border-gray-300" />
          <div className="text-sm md:text-base text-gray-500 mt-4">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/* Description & Reviews */}
      <div className="mt-10">
        <div className="flex">
          <b className="border border-b-0 border-gray-300 px-5 py-3 text-sm md:text-base">
            Description
          </b>
          <p className="border border-b-0 border-gray-300 px-5 py-3 text-sm md:text-base">
            Reviews (123)
          </p>
        </div>
        <div className="flex flex-col text-justify border border-gray-300 gap-4 py-6 px-6 text-gray-500 text-sm md:text-base">
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p>
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0">Loading...</div>
  );
};

export default Product;
