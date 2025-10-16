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
  const addToCart = async (itemsId, size) => {
    let cartData = structuredClone(cartItems); // Tạo bản sao của cartItems để không sửa trực tiếp state gốc

    // Nếu sản phẩm đã tồn tại trong giỏ
    if (cartData[itemsId]) {
      if (!size) {
        toast.error("Please Select Size!"); // Nếu chưa chọn size thì báo lỗi
      }

      if (cartData[itemsId][size]) {
        cartData[itemsId][size] += 1; // Nếu size này đã có - tăng số lượng
      } else {
        cartData[itemsId][size] = 1; // Nếu chưa có size này - thêm mới size
      }
    } else {
      cartData[itemsId] = {}; // Nếu sản phẩm chưa có trong giỏ - khởi tạo đối tượng mới
      cartData[itemsId][size] = 1;
    }
    setCartItems(cartData); // Cập nhật lại giỏ hàng
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
