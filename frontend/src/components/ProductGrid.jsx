import { useState } from "react";
import Title from "./Title";
import ProductItem from "./ProductItem";

const ProductGrid = ({ filterProducts, setSortType }) => {
  // --- Pagination ---
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12; // Số sản phẩm mỗi trang

  // Tính toán sản phẩm hiện tại
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filterProducts.slice(indexOfFirst, indexOfLast);

  // Tổng số trang
  const totalPages = Math.ceil(filterProducts.length / productsPerPage);

  // Hàm đổi trang
  const paginate = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Tạo danh sách trang hiển thị
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 3; // Số trang hiển thị ở giữa

    if (totalPages <= 5) {
      // Nếu ít trang thì hiển thị hết
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage > 2) pages.push(1);
      if (currentPage > 3) pages.push("...");

      let start = Math.max(1, currentPage - 1);
      let end = Math.min(totalPages, currentPage + 1);

      for (let i = start; i <= end; i++) pages.push(i);

      if (currentPage < totalPages - 2) pages.push("...");
      if (currentPage < totalPages - 1) pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="flex-1">
      <div className="flex justify-between sm:text-2xl my-1">
        <Title text1={"All"} text2={"Collections"} />
        <select
          onChange={(e) => {
            setSortType(e.target.value);
            setCurrentPage(1); // Reset về trang 1 khi sort
          }}
          className="border border-gray-300 text-sm px-2 cursor-pointer"
        >
          <option value="default">Default Sorting</option>
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="priceHighToLow">Price: High to Low</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 mt-4">
        {currentProducts.map((item, index) => (
          <ProductItem key={index} {...item} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-10 gap-2">
          {/* Previous */}
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-2 py-1 border rounded ${
              currentPage === 1
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer"
            }`}
          >
            Prev
          </button>

          {/* Page Numbers */}
          {getPageNumbers().map((p, idex) =>
            p === "..." ? (
              <span key={idex} className="px-2">
                ...
              </span>
            ) : (
              <button
                key={idex}
                onClick={() => paginate(p)}
                className={`px-2 py-1 border rounded cursor-pointer ${
                  currentPage === p
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                {p}
              </button>
            )
          )}

          {/* Next */}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-2 py-1 border rounded ${
              currentPage === totalPages
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
