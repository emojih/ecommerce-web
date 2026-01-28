import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);

  const [category, setCategory] = useState([]);
  const [priceRanges, setPriceRanges] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  // Toggle Category
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  // Toggle Price Range
  const togglePriceRange = (e) => {
    if (priceRanges.includes(e.target.value)) {
      setPriceRanges((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setPriceRanges((prev) => [...prev, e.target.value]);
    }
  };

  // Apply Filters
  const applyFilter = () => {
    let productsCopy = products.slice();

    // Search filter
    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    // Category filter
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category),
      );
    }

    // Price filter
    if (priceRanges.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        priceRanges.some((range) => {
          switch (range) {
            case "50-100":
              return item.price >= 50000 && item.price <= 100000;
            case "100-300":
              return item.price > 100000 && item.price <= 300000;
            case "300-500":
              return item.price > 300000 && item.price <= 500000;
            case "500+":
              return item.price > 500000;
            default:
              return false;
          }
        }),
      );
    }

    setFilterProducts(productsCopy);
  };

  // Sorting
  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, priceRanges, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filters */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            alt=""
          />
        </p>

        {/* Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value="Men"
                onChange={toggleCategory}
              />{" "}
              Men
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value="Women"
                onChange={toggleCategory}
              />{" "}
              Women
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value="Unisex"
                onChange={toggleCategory}
              />{" "}
              Unisex
            </p>
          </div>
        </div>

        {/* Price Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">PRICE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value="50-100"
                onChange={togglePriceRange}
              />
              ₦50,000 – ₦100,000
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value="100-300"
                onChange={togglePriceRange}
              />
              ₦100,000 – ₦300,000
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value="300-500"
                onChange={togglePriceRange}
              />
              ₦300,000 – ₦500,000
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value="500+"
                onChange={togglePriceRange}
              />
              ₦500,000 and above
            </p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300 text-sm px-2"
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
