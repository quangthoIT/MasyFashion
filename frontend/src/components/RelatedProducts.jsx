import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

// Component hiển thị sản phẩm liên quan
const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext); // Lấy danh sách sản phẩm từ context
  const [related, setRelated] = useState([]); // State lưu danh sách sản phẩm liên quan

  useEffect(() => {
    // Chỉ chạy khi products đã được load (có dữ liệu)
    if (products.length > 0) {
      // Tạo bản sao của mảng products để không làm thay đổi dữ liệu gốc
      let productsCopy = products.slice();
      // Lọc các sản phẩm có cùng category
      productsCopy = productsCopy.filter((item) => category === item.category);
      // Lọc tiếp các sản phẩm có cùng subCategory
      productsCopy = productsCopy.filter(
        (item) => subCategory === item.subCategory
      );
      setRelated(productsCopy.slice(0, 5));
    }
  }, [products]);

  return (
    <div className="my-6 md:my-10">
      {/* Title */}
      <div className="text-center py-10">
        <Title text1={"Related"} text2={"Products"} />
      </div>
      {/* Lưới hiển thị danh sách sản phẩm liên quan */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {/* Duyệt qua từng sản phẩm và hiển thị bằng component ProductItem */}
        {related.map((item, index) => (
          <ProductItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
