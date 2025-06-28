import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import classNames from "classnames";
import { Danfo } from "next/font/google";
import Link from "next/link";

// Instantiate Danfo font with desired settings
const danfo = Danfo({ subsets: ["latin"] });

/**
 * Props for `Services`.
 */
export type ServicesProps = SliceComponentProps<Content.ServicesSlice>;

/**
 * Component for "Services" Slices.
 */
const Services = ({ slice }: ServicesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mt-20"
    >
      <div className="max-w-5xl mx-auto px-8 text-center flex items-center justify-center flex-col" id="services">
        <h2 className={classNames(danfo.className ,"text-[#EDEDED] text-3xl md:text-4xl font-bold text-center")}>
          Our Services
        </h2>
        <br/><br/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20 lg:gap-60 max-w-screen-4xl w-full">
        {slice?.primary?.services?.length > 0 ? (
          slice.primary.services.map((item, index) => (
            <div key={index} className="flex justify-center">
              {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-2xl w-full"> */}
                <div>
                  {item.image?.url ? (
                    <DirectionAwareHover imageUrl={item.image.url} className="w-full max-w-sm min-h-96">
                      <p className="font-bold text-3xl">{item.title}</p>
                    </DirectionAwareHover>
                  ) : (
                    <p></p>
                  )}
                </div>
              </div>
            // </div>
          ))
        ) : (
          <p></p> // Fallback in case services array is empty or undefined
        )}
        </div>
        <Link href="#">
          <button className="px-10 py-4 mt-14 rounded-lg bg-[#c0a562] text-white text-md hover:-translate-y-1 transform transition duration-200 hover:shadow-md hover:bg-[#9e8851]">
            Get A Quote
          </button>
        </Link>
        <br/>
      </div>
    </section>
  );
};

export default Services;
