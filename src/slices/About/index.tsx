import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Danfo } from "next/font/google";
import classNames from "classnames";
import Link from "next/link";

// Instantiate Danfo font with desired settings
const danfo = Danfo({ subsets: ["latin"] });

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About = ({ slice }: AboutProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} className="bg-transparent mt-20" id="about">
      <section className="px-8 bg-transparent">
        <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="relative w-full h-64 md:h-5/6 overflow-hidden rounded-lg shadow-lg">
            <PrismicNextImage
              className="transition-transform duration-500 ease-in-out hover:scale-105 object-cover object-bottom"
              field={slice.primary.image}
              fallbackAlt=""
            />
          </div>

          {/* Text Section */}
          <div className="text-center md:text-left">
            <h2 className={classNames(danfo.className, "text-[#EDEDED] text-3xl md:text-4xl font-bold mb-6")}>{slice.primary.title}</h2>
            <div className="text-lg text-[#EDEDED] dark:text-gray-300 leading-relaxed font-thin">
              <PrismicRichText field={slice.primary.text} />
            </div>
            <Link href="#">
              <button className="px-6 py-3 mt-14 rounded-lg bg-red-800 text-[#EDEDED] text-md hover:-translate-y-1 transform transition duration-200 hover:shadow-md hover:bg-red-900">
                Get A Quote
              </button>
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
