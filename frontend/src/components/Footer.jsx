import React from "react";
import { assets } from "../assets/assets";
import { FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between gap-14 my-10 mt-40 text-sm">
        {/* Logo & Description */}
        <div className="sm:w-2/3">
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            At Poheav Scents, we offer high-quality designer perfumes that help
            you express your unique style. Our curated collection is crafted to
            make every moment memorable and perfect for any occasion.
          </p>
        </div>

        {/* Get in Touch */}
        <div className="sm:w-1/3">
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+234-812-397-1007; +234-816-287-6854</li>
            <li>poheavscents@gmail.com</li>
            <li className="gap-2 flex">
              {" "}
              <a
                href="https://www.instagram.com/poheavscent?igsh=NTl6bWZ5NGJjd2tl"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition text-2xl"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.tiktok.com/@poheavscents?_r=1&_t=ZS-93RoYycxYzh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition text-2xl"
              >
                <FaTiktok />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2026@ Poheav Scents - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
