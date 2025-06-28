"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import classNames from "classnames";
import { Danfo } from "next/font/google";
import Link from "next/link";

// Instantiate Danfo font with desired settings
const danfo = Danfo({ subsets: ["latin"] });

interface ImageSliderProps {
  images: string[]; // Array of image URLs
  interval?: number; // Interval between slides in ms (default: 3000ms)
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(slideInterval); // Clear interval on component unmount
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-[500px] overflow-hidden"> {/* Set height to 500px */}
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      ))}

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-40">
        <h2 className={classNames(danfo.className, "text-4xl font-bold mb-4")}>Get Your Car Done Today!</h2>
        <Link href="#">
          <button className="px-10 py-4 rounded-lg bg-[#c0a562] text-white text-md hover:-translate-y-1 transform transition duration-200 hover:shadow-md hover:bg-[#9e8851]">
            Get A Quote
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ImageSlider;
