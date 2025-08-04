import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import classNames from "classnames";
import { Danfo } from "next/font/google";
import Link from "next/link";

const danfo = Danfo({ subsets: ["latin"] });

const testimonials = [
  {
    quote:
      "Best decision I've made was giving this man a try! I absolutely love his work. He wrapped my car despite the horrible paint job it had before, and even worked with my budget. You can really see the passion he has for what he does. Highly recommended--you won't regret it!",
    name: "Yetszil S.",
    location: "Central LA, Los Angeles, CA",
    rating: 5,
    photo: "https://s3-media0.fl.yelpcdn.com/photo/CpcYVRcaLHJynTxpfEMELg/120s.jpg",
    source: "yelp"
  },
  {
    quote:
      "Flexible time, offers mobile service, price is good, and I love the final product. Im not a fan of the chrome on the front of bumper but this vinyl chrome delete really give me a look a perfer.",
    name: "Jae H.",
    location: "Placentia, CA",
    rating: 5,
    photo: "https://s3-media0.fl.yelpcdn.com/photo/rdWUF0vO7d_dnpn-STtQHQ/120s.jpg",
    source: "yelp"
  },
  {
    quote: "Service was amazing and I loved how the chrome delete came out. He's very professional and talented in his work and I would definitely recommend him to anyone !",
    name: "Yostena S.",
    location: "San Francisco, CA",
    rating: 5,
    photo: "https://s3-media0.fl.yelpcdn.com/photo/M2PpjSsptyNDXsQ74aqnkw/120s.jpg",
    source: "yelp"
  },
  {
    quote:
      "Service was great. He didn't waste no time he did my car same day for chrome delete. Price is reasonable and work is great! Im satisfied and would recommend!",
    name: "Van R.",
    location: "Artesia, CA",
    rating: 5,
    photo: "https://s3-media0.fl.yelpcdn.com/assets/public/default_user_avatar_64x64_v2@2x.yji-cfb49ee371b5b7711e94.png",
    source: "yelp"
  },
  {
    quote:
      "Great experience! Very cordial, came to my house for a spoiler wrapping, great price, and I'm very happy with the final product. I highly recommend.",
    name: "Dante V.",
    location: "Claremont, CA",
    rating: 5,
    photo: "https://s3-media0.fl.yelpcdn.com/assets/public/default_user_avatar_64x64_v2@2x.yji-cfb49ee371b5b7711e94.png",
    source: "yelp"
  },
];

/**
 * Props for `WhyChooseUs`.
 */
export type WhyChooseUsProps = SliceComponentProps<Content.WhyChooseUsSlice>;

/**
 * Component for "WhyChooseUs" Slices.
 */
const WhyChooseUs = ({ slice }: WhyChooseUsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-transparent mt-10 mb-36"
    >
      <section className="pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* <h2 className={classNames(danfo.className, "text-3xl font-bold text-center mb-8 text-white")}>Why Choose Us?</h2> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="text-center p-6">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="mx-auto mb-4 text-blue-500"
            >
              <path d="M12 2L2 7h3v9h2V9h4v7h2V7h3L12 2z" />
            </svg> */}
            <h3 className={("text-2xl font-semibold mb-2 text-[#EDEDED]")}>{slice.primary.title_1}</h3>
            <p className="text-[#EDEDED] font-extralight">
            {slice.primary.text_1}
            </p>
          </div>

          {/* Column 2 */}
          <div className="text-center p-6">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="mx-auto mb-4 text-green-500"
            >
              <path d="M9 12h6M12 5l7 7-7 7" />
            </svg> */}
            <h3 className={("text-2xl font-semibold mb-2 text-[#EDEDED]")}>{slice.primary.title_2}</h3>
            <p className="text-[#EDEDED] font-extralight">
            {slice.primary.text_2}
            </p>
          </div>

          {/* Column 3 */}
          <div className="text-center p-6">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="mx-auto mb-4 text-red-500"
            >
              <path d="M19 19L5 5M5 19L19 5" />
            </svg> */}
            <h3 className={("text-2xl font-semibold mb-2 text-[#EDEDED]")}>{slice.primary.title_3}</h3>
            <p className="text-[#EDEDED] font-extralight">
              {slice.primary.text_3}
            </p>
          </div>
        </div>
      </div>
    </section>
    <h1 className={("text-[#EDEDED] text-3xl md:text-4xl font-bold text-center")}></h1>
      <div className="h-[37rem] rounded-md flex flex-col antialiased bg-[#171717] dark:bg-black dark:bg-grid-blue/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
      <Link href="https://www.yelp.com/biz/a1streetcustoms-long-beach?utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)">
        <button className="px-10 py-4 mt-14 justify-center content-center mx-auto rounded-lg bg-[#c0a562] text-white text-md hover:-translate-y-1 transform transition duration-200 hover:shadow-md hover:bg-[#9e8851]">
          Give us a review!
        </button>
      </Link>
    </div>
    </section>
  );
};

export default WhyChooseUs;
