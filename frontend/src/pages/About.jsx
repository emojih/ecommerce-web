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
            Poheav Scent was born from a deeply held belief: that Nigerian
            consumers deserve access to the world’s finest designer
            fragrances—authentic, original, and thoughtfully curated. We are a
            fragrance destination committed to connecting our customers to
            exceptional international perfumes through trust, expertise, and
            intention. Over time, we have mastered the balance between global
            standards and local understanding, ensuring every fragrance we offer
            meets the highest expectations of quality and originality.
          </p>
          <p>
            At the heart of Poheav Scent is our customer. We exist because of
            the trust placed in us, and we honour that trust through
            transparency, attentive service, and genuine care. Every
            recommendation and every bottle reflects our respect for the people
            we serve. Poheav Scent is not just where you buy perfume. It is
            where the world’s fragrances meet you.
          </p>

          <b className="text-gray-800">Our Mission</b>
          <p>
            At Poheav Scents, our mission is to become the foremost destination
            for individuals seeking top-quality perfumes, skincare products, and
            beauty care solutions. We are dedicated to maintaining top-of-mind
            awareness by offering luxury and elegant brands while prioritizing
            personalized consultations and recommendations tailored to our
            clients' needs and preferences. Our commitment extends beyond
            profits, as we strive to educate and empower our clients, ensuring
            they make informed choices that enhance their well-being and
            confidence.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b> Excellence:</b>
          <p className="text-gray-600">
            We uphold the highest standards of quality and service in everything
            we do.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Personalization:</b>
          <p className="text-gray-600">
            We believe in tailoring our recommendations and solutions to meet
            the unique needs and preferences of each client.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b> Integrity: </b>
          <p className="text-gray-600">
            We prioritize honesty, transparency, and ethical conduct in all our
            interactions.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b> Education: </b>
          <p className="text-gray-600">
            We are committed to educating and empowering our clients to make
            informed choices about their beauty care regimen.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b> Client-Centricity:</b>
          <p className="text-gray-600">
            We place our clients' needs and satisfaction at the forefront of our
            business, ensuring their well-being and happiness drive our
            decisions and actions.
          </p>
        </div>
      </div>

      {/* <NewsletterBox /> */}
    </div>
  );
};

export default About;
