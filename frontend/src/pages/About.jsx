import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t ">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[450px]"
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            We are a team of passionate professionals committed to providing
            high-quality products and exceptional customer service. With years
            of experience in the industry, we strive to meet the needs of our
            customers while maintaining a focus on innovation and
            sustainability.
          </p>
          <p>
            Our team is dedicated to creating an inclusive and dynamic work
            environment where everyone can thrive. We believe in fostering
            creativity, collaboration, and continuous learning to stay at the
            forefront of our field.
          </p>

          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to deliver products that not only meet but exceed the
            expectations of our customers. We aim to create lasting
            relationships built on trust, integrity, and mutual respect. Every
            product we offer is designed with the goal of improving the lives of
            our customers and contributing to a better world.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            We are committed to providing the highest quality products. Every
            item undergoes rigorous testing to ensure that it meets our high
            standards. We work with trusted suppliers and maintain strict
            quality control to guarantee that our customers receive only the
            best.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            We understand the importance of convenience, and that’s why we’ve
            made shopping with us as easy as possible. Our website is
            user-friendly, and we offer fast, reliable shipping to ensure that
            your orders arrive quickly and securely.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Our customer service team is always ready to assist you with any
            inquiries or concerns. We pride ourselves on providing exceptional
            service and support, ensuring that every customer has a positive
            experience with us.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
