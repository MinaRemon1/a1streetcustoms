import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import classNames from "classnames";
import { Danfo } from "next/font/google";

const danfo = Danfo({ subsets: ["latin"] });

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
      className="bg-transparent mt-20"
    >
      <section className="py-16">
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
            <h3 className={classNames(danfo.className, "text-2xl font-semibold mb-2 text-[#EDEDED]")}>{slice.primary.title_1}</h3>
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
            <h3 className={classNames(danfo.className, "text-2xl font-semibold mb-2 text-[#EDEDED]")}>{slice.primary.title_2}</h3>
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
            <h3 className={classNames(danfo.className, "text-2xl font-semibold mb-2 text-[#EDEDED]")}>{slice.primary.title_3}</h3>
            <p className="text-[#EDEDED] font-extralight">
              {slice.primary.text_3}
            </p>
          </div>
        </div>
      </div>
    </section>
    </section>
  );
};

export default WhyChooseUs;
