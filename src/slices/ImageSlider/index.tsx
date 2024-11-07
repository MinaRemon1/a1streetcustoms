import ImageSlider from "@/components/ui/ImageSlider";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { motion } from "framer-motion";
import Link from "next/link";

/**
 * Props for `ImageSliderSlice`.
 */
export type ImageSliderSliceProps = SliceComponentProps<Content.ImageSliderSlice>;

/**
 * Component for "ImageSlider" Slices.
 */
const ImageSliderSlice = ({ slice }: ImageSliderSliceProps): JSX.Element => {
  const images = slice?.primary?.images?.map(item => item.image?.url || '') || [];

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="mt-20">
        <ImageSlider images={images} interval={3000} />
      </div>
    </section>
  );
};

export default ImageSliderSlice;
