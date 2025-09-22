import { ChevronRight } from "lucide-react";

const FilterSidebar = ({
  showFilter,
  setShowFilter,
  toggleCategory,
  toggleType,
}) => {
  return (
    <div className="min-w-50">
      <p
        onClick={() => setShowFilter(!showFilter)}
        className="text-xl sm:text-2xl my-2 flex items-center cursor-pointer uppercase"
      >
        Filters
        <ChevronRight
          className={`w-6 h-6 sm:hidden ${showFilter ? "rotate-90" : ""}`}
        />
      </p>

      {/* Categories Filter */}
      <div
        className={`border border-gray-300 pl-5 py-3 mt-6 sm:block ${
          showFilter ? "" : "hidden"
        }`}
      >
        <p className="text-gray-900 font-medium uppercase pb-2">Categories</p>
        <div className="flex flex-col gap-2 mt-2 text-sm font-light text-gray-700">
          {[
            "Leather Jacket",
            "Office Coat",
            "Sweater",
            "Polo Shirt",
            "Vest",
            "Winter Jacket",
            "Trousers",
            "Jeans",
            "Shorts",
            "Long Sleeve Shirt",
            "Short Sleeve Shirt",
          ].map((category) => (
            <p key={category} className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={category}
                onChange={toggleCategory}
              />
              {category}
            </p>
          ))}
        </div>
      </div>

      {/* Types Filter */}
      <div
        className={`border border-gray-300 pl-5 py-3 my-5 sm:block ${
          showFilter ? "" : "hidden"
        }`}
      >
        <p className="text-gray-900 font-medium uppercase pb-2">Type</p>
        <div className="flex flex-col gap-2 mt-2 text-sm font-light text-gray-700">
          {["Topwear", "Bottomwear", "Outerwear"].map((t) => (
            <p key={t} className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={t}
                onChange={toggleType}
              />
              {t}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
