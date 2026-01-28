import React from "react";
import Title from "../components/Title";

const Faq = () => {
  return (
    <div className="px-6 sm:px-12 lg:px-20 pb-20">
      <div className="text-center text-2xl pt-10 border-t mb-12">
        <Title text1={"FREQUENTLY ASKED"} text2={"QUESTIONS"} />
      </div>

      <div className="max-w-4xl mx-auto space-y-12 text-gray-700">
        {/* QUALITY */}
        <div>
          <h2 className="text-xl font-semibold text-black mb-4">QUALITY</h2>

          <div className="space-y-4">
            <div>
              <p className="font-semibold">
                Q: Are your perfumes original and high quality?
              </p>
              <p>
                Yes. Every perfume at Poheav Scent is carefully sourced from
                trusted international and verified suppliers. We prioritize
                authenticity, long-lasting performance, and premium presentation
                — because quality is non-negotiable for us.
              </p>
            </div>

            <div>
              <p className="font-semibold">
                Q: How do I know I’m getting value for my money?
              </p>
              <p>
                We test, review, and select each scent before it reaches you.
                Our focus is not just selling perfumes, but delivering scents
                that truly perform and elevate your presence.
              </p>
            </div>
          </div>
        </div>

        {/* FINANCE */}
        <div>
          <h2 className="text-xl font-semibold text-black mb-4">FINANCE</h2>

          <div className="space-y-4">
            <div>
              <p className="font-semibold">
                Q: What payment methods do you accept?
              </p>
              <p>
                We accept secure online payments via bank transfer, debit cards,
                and other trusted payment platforms available on our website.
              </p>
            </div>

            <div>
              <p className="font-semibold">Q: Are your prices fixed?</p>
              <p>
                Yes, our prices are transparent and fairly set to reflect
                quality, sourcing, and service. Any discounts or promotions will
                always be clearly communicated.
              </p>
            </div>
          </div>
        </div>

        {/* DELIVERY */}
        <div>
          <h2 className="text-xl font-semibold text-black mb-4">DELIVERY</h2>

          <div className="space-y-4">
            <div>
              <p className="font-semibold">Q: Do you deliver nationwide?</p>
              <p>
                Yes, we deliver across Nigeria using reliable logistics partners
                to ensure your order gets to you safely and on time.
              </p>
            </div>

            <div>
              <p className="font-semibold">Q: How long does delivery take?</p>
              <p>
                Delivery typically takes <strong>1–3 working days</strong>{" "}
                within major cities and <strong>3–5 working days</strong> for
                other locations, depending on your area.
              </p>
            </div>
          </div>
        </div>

        {/* POLICY */}
        <div>
          <h2 className="text-xl font-semibold text-black mb-4">POLICY</h2>

          <div className="space-y-4">
            <div>
              <p className="font-semibold">
                Q: Can I return or exchange a product?
              </p>
              <p>
                Due to the nature of perfumes, we do not accept returns once a
                product has been opened or used. However, if you receive a
                damaged or incorrect item, contact us immediately and we will
                resolve it promptly.
              </p>
            </div>

            <div>
              <p className="font-semibold">
                Q: What if my order arrives damaged?
              </p>
              <p>
                Kindly notify us within <strong>24 hours</strong> of delivery,
                with clear photos, and we’ll take swift action to correct the
                issue.
              </p>
            </div>
          </div>
        </div>

        {/* CUSTOMER SUPPORT */}
        <div>
          <h2 className="text-xl font-semibold text-black mb-4">
            CUSTOMER SUPPORT
          </h2>

          <div className="space-y-4">
            <div>
              <p className="font-semibold">Q: How can I reach Poheav Scent?</p>
              <p>
                Our customer care team is always happy to help. You can reach us
                via WhatsApp, Instagram DM, or email, and we respond as quickly
                as possible.
              </p>
            </div>

            <div>
              <p className="font-semibold">
                Q: What are your customer support hours?
              </p>
              <p>
                Our support team is available Monday–Saturday, and we aim to
                respond to all inquiries within 24 hours.
              </p>
            </div>
          </div>
        </div>

        {/* RECOMMENDATIONS */}
        <div>
          <h2 className="text-xl font-semibold text-black mb-4">
            RECOMMENDATIONS
          </h2>

          <div className="space-y-4">
            <div>
              <p className="font-semibold">
                Q: I’m not sure what scent to choose — can you help?
              </p>
              <p>
                Absolutely. We love helping our customers find their perfect
                scent. Tell us your preferences — fresh, woody, sweet, spicy, or
                bold — and we’ll recommend options that suit you.
              </p>
            </div>

            <div>
              <p className="font-semibold">
                Q: Do you recommend perfumes based on occasions?
              </p>
              <p>
                Yes. Whether it’s daily wear, office, events, or gifting, we
                curate recommendations that fit your lifestyle and personality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
