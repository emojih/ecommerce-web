import React from "react";
import Title from "../components/Title";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { assets } from "../assets/assets";
const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img src={assets.contact_img} className="w-full max-w-120" alt="" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            Shop 7 Faith Akpede Plaza, <br /> Opposite Master Care School,
            Macdons Road off Okpanam Road <br /> Asaba, Delta State.
          </p>

          <p className="text-gray-500">
            Tel: (234) 812-397-1007; (234) 816-287-6854 <br /> Email:
            poheavscents@gmail.com
          </p>
          <p className="text-gray-500 flex gap-2">
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
          </p>
        </div>
        {/* SOCIAL MEDIA */}
        <div className="flex items-center gap-6 pt-2 text-gray-700"></div>
      </div>
    </div>
  );
};

export default Contact;
