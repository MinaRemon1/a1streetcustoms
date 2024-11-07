import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import classNames from "classnames";
import { Danfo } from "next/font/google";
import { BackgroundBeams } from "@/components/ui/background-beams";

// Instantiate Danfo font with desired settings
const danfo = Danfo({ subsets: ["latin"] });

/**
 * Props for `FrequentlyAskedQuestions`.
 */
export type FrequentlyAskedQuestionsProps =
  SliceComponentProps<Content.FrequentlyAskedQuestionsSlice>;

/**
 * Component for "FrequentlyAskedQuestions" Slices.
 */
const FrequentlyAskedQuestions = ({
  slice,
}: FrequentlyAskedQuestionsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative py-8 bg-transparent mt-16"
      id="faq"
    >
      {/* BackgroundBeams as a background */}
      <BackgroundBeams />

      {/* Content Section */}
      <div className="relative z-10">
        <h2
          className={classNames(
            danfo.className,
            "text-white text-3xl md:text-4xl font-bold text-center mb-8"
          )}
        >
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col items-center justify-center mx-auto w-full px-4 md:w-3/4 lg:w-2/3">
          {slice?.primary?.faq?.length > 0 ? (
            slice.primary.faq.map((item, index) => (
              <Accordion
                key={index} // Add key to avoid warnings
                type="single"
                collapsible
                className="w-full mb-4" // Full width of container and add spacing between items
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-[#EDEDED] font-semibold">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-[#EDEDED]">
                      <PrismicRichText field={item.answer} />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))
          ) : (
            <p className="text-white">No FAQs available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;
