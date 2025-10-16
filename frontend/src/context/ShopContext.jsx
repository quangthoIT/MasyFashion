import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

// Context chia sẻ dữ liệu giữa các Component
export const ShopContext = createContext();
// Context Provider - nơi quản lý và cung cấp dữ liệu cho toàn ứng dụng
const ShopContextProvider = (props) => {
  const currency = "$"; // Đơn vị tiền tệ
  const delivery = 5; // Phí giao hàng mặc định

  const [search, setSearch] = useState(""); // Từ khóa tìm kiếm
  const [showSearchBar, setShowSearchBar] = useState(false); // Ẩn/hiện thanh tìm kiếm
  const [cartItems, setCartItems] = useState({}); // Giỏ hàng

  // Hàm thêm sản phẩm vào giỏ hàng
  const addToCart = (itemsId, size) => {
  if (!size) {
    toast.error("Please select size!");
    return; // Dừng ngay nếu chưa chọn size
  }

  setCartItems((prev) => {
    // Clone từ state mới nhất
    const cartData = structuredClone(prev);

    // Thêm hoặc tăng số lượng sản phẩm
    if (cartData[itemsId]) {
      if (cartData[itemsId][size]) {
        cartData[itemsId][size] += 1;
      } else {
        cartData[itemsId][size] = 1;
      }
    } else {
      cartData[itemsId] = { [size]: 1 };
    }

    toast.success("Added to cart!");
    return cartData; // Trả về state mới
  });
};

  // Hàm tính tổng số lượng sản phẩm trong giỏ
  const getCartCount = () => {
    let totalCartCount = 0;
    // Lặp qua từng sản phẩm trong giỏ
    for (const items in cartItems) {
      // Lặp qua từng size của sản phẩm đó
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCartCount += cartItems[items][item]; // Nếu số lượng > 0 - cộng dồn vào tổng
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalCartCount;
  };

  // Gói toàn bộ dữ liệu và hàm vào object để chia sẻ
  const value = {
    products, // Danh sách sản phẩm
    currency, // Đơn vị tiền tệ
    delivery, // Phí giao hàng
    search, // Từ khóa tìm kiếm
    setSearch, // Hàm cập nhật từ khóa
    showSearchBar, // Trạng thái ẩn/hiện thanh tìm kiếm
    setShowSearchBar, // Hàm thay đổi trạng thái thanh tìm kiếm
    cartItems, // Dữ liệu giỏ hàng
    addToCart, // Hàm thêm vào giỏ
    getCartCount, // Hàm đếm tổng số sản phẩm trong giỏ
  };

  return (
    // Trả về Provider để bao bọc toàn ứng dụng
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
