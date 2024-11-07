"use client"

import { useEffect, useRef } from "react";
import Header from "@/components/global/Header";
import { FlipWords } from "@/components/ui/flip-words";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import classNames from "classnames";
import { Danfo } from "next/font/google";
import Link from "next/link";

// Instantiate Danfo font with desired settings
const danfo = Danfo({ subsets: ["latin"] });

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  // Specify the type for the videoRef
  const videoRef = useRef<HTMLVideoElement>(null);
  const flipWords = slice.primary.flip_words;
  const words = flipWords.map(item => item.word);

  useEffect(() => {
    // Check if videoRef.current exists before calling load()
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, []);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center bg-[#171717]"
      id="home"
    >
      <Header />

      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <video
          ref={videoRef}
          className="object-cover w-full h-full"
          src="/video.mp4" // Replace with your video file path
          autoPlay
          loop
          muted
          playsInline
          // poster="/fallback-image.jpg" // Fallback image to show before video loads
        ></video>
      </div>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Text Overlay */}
      <div className="relative z-10 flex flex-col items-center text-center p-4">
        <h1 className={classNames(danfo.className, "text-[#EDEDED] text-5xl md:text-6xl lg:text-8xl font-bold")}>
          {slice.primary.usp}
        </h1>
        <div className="text-[#EDEDED] font-extralight text-lg md:text-xl lg:text-2xl mt-4">
          {slice.primary.tagline} <FlipWords words={words} />
        </div>
        <Link href="#">
          <button className="px-10 py-4 mt-14 rounded-lg bg-red-800 text-white text-md hover:-translate-y-1 transform transition duration-200 hover:shadow-md hover:bg-red-900">
            {slice.primary.button_text}
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
