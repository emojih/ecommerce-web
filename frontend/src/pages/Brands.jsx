import React, { useContext, useMemo } from "react";
import { ShopContext } from "../context/ShopContext";

const nicheBrands = [
  "Amouage",
  "Byredo",
  "Mancera",
  "Moresque",
  "Miguel Mara",
  "Monte Cameron",
  "Mancer 2",
  "Memo Cuirs",
  "Nishane",
  "Olfazeta",
  "Vertus",
  "Xerjoff",
];

const designerBrands = [
  "Afnan",
  "Armaf",
  "Antonio Banderas",
  "Azzaro",
  "Armani",
  "Bvlgari",
  "Calvin Klein",
  "Chanel",
  "Carolina Herrera",
  "Dior",
  "Dolce & Gabbana",
  "Elizabeth Arden",
  "Emporio Armani",
  "Estee Lauder",
  "Franck Olivier",
  "Givenchy",
  "Gucci",
  "Giorgio Armani",
  "Guerlain",
  "Hermes",
  "Hugo Boss",
  "Issey Miyake",
  "Joop",
  "Jean Paul Gaultier",
  "Kay Ali",
  "Lattafa",
  "Lancome",
  "Lalique",
  "Miquel Mara",
  "Maison Alhambra",
  "Monte Cameron",
  "Narciso Rodriguez",
  "Prada",
  "Ralph Lauren",
  "Rave",
  "Rue Broca",
  "Tom Ford",
  "Versace",
  "YSL",
  "Zimaya",
];

// Alphabet grouping helper
const groupByLetter = (brands) =>
  brands.reduce((acc, brand) => {
    const letter = brand[0].toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(brand);
    return acc;
  }, {});

// Brand section component
const BrandSection = ({ title, brands, search, showSearch }) => {
  const filteredBrands = useMemo(() => {
    if (!showSearch || !search) return brands;
    return brands.filter((b) => b.toLowerCase().includes(search.toLowerCase()));
  }, [brands, search, showSearch]);

  if (filteredBrands.length === 0) return null;

  const grouped = groupByLetter(filteredBrands);

  return (
    <div className="mt-14">
      <h2 className="text-2xl font-semibold mb-6 tracking-wide">{title}</h2>

      <div className="space-y-8">
        {Object.keys(grouped)
          .sort()
          .map((letter) => (
            <div key={letter} className="border border-black rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4 border-b pb-2">{letter}</h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm text-gray-700">
                {grouped[letter].map((brand) => (
                  <p key={brand} className="hover:text-black cursor-pointer">
                    {brand}
                  </p>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

const Brands = () => {
  const { search, showSearch } = useContext(ShopContext);

  const allBrands = [...nicheBrands, ...designerBrands];

  const anyMatch =
    !showSearch ||
    !search ||
    allBrands.some((b) => b.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="px-6 sm:px-12 lg:px-20 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-center tracking-widest mb-4">
        BRANDS WE STOCK
      </h1>

      <p className="text-center text-gray-500 mb-12 text-sm">
        Discover our collection of niche and designer fragrance houses
      </p>

      {!anyMatch && (
        <p className="text-center text-gray-500 text-sm">
          No brands found for "{search}"
        </p>
      )}

      <BrandSection
        title="NICHE BRANDS"
        brands={nicheBrands}
        search={search}
        showSearch={showSearch}
      />

      <BrandSection
        title="DESIGNER BRANDS"
        brands={designerBrands}
        search={search}
        showSearch={showSearch}
      />
    </div>
  );
};

export default Brands;
