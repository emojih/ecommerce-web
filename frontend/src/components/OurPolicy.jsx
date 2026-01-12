import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img src={assets.exchange_icon} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">Quality Perfumes</p>
        <p className="text-gray-400">Premium fragrances curated for you</p>
      </div>

      <div>
        <img src={assets.quality_icon} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">Fast Delivery</p>
        <p className="text-gray-400">Get your favorite scents quickly</p>
      </div>

      <div>
        <img src={assets.support_img} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">24/7 Customer Service</p>
        <p className="text-gray-400">We’re here to help anytime</p>
      </div>
    </div>
  );
};

export default OurPolicy;
