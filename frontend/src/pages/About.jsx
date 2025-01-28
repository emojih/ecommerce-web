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
            Forever, ipsum dolor sit amet consectetur adipisicing elit. Eum,
            ratione? Non quasi, velit eligendi reprehenderit fugiat et
            distinctio, itaque nostrum labore atque qui natus in repudiandae,
            iusto blanditiis magni nisi?
          </p>
          <p>
            Forever ipsum dolor sit amet consectetur, adipisicing elit. Soluta
            perspiciatis, doloremque non, quae quis at tenetur iusto modi
            delectus nemo earum accusamus blanditiis quisquam optio vel hic
            vitae explicabo praesentium?
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Forever ipsum dolor sit amet consectetur, adipisicing elit. Soluta
            perspiciatis, doloremque non, quae quis at tenetur iusto modi
            delectus nemo earum accusamus blanditiis quisquam optio vel hic
            vitae explicabo praesentium?
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            ea dolores consectetur totam deserunt nihil ad rem eligendi sunt
            aperiam aspernatur illo culpa, non, error iusto unde nam perferendis
            autem.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Convenience ipsum dolor sit amet consectetur adipisicing elit.
            Blanditiis ea dolores consectetur totam deserunt nihil ad rem
            eligendi sunt aperiam aspernatur illo culpa, non, error iusto unde
            nam perferendis autem.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Exceptional Customer Service ipsum dolor sit amet consectetur
            adipisicing elit. Blanditiis ea dolores consectetur totam deserunt
            nihil ad rem eligendi sunt aperiam aspernatur illo culpa, non, error
            iusto unde nam perferendis autem.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
