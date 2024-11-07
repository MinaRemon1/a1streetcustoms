"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const DirectionAwareHover = ({
  imageUrl,
  children,
  childrenClassName,
  imageClassName,
  className,
}: {
  imageUrl: string;
  children: React.ReactNode | string;
  childrenClassName?: string;
  imageClassName?: string;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [direction, setDirection] = useState<
   "left" | string
  >("left");

  const handleMouseEnter = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!ref.current) return;

    const direction = getDirection(event, ref.current);
    console.log("direction", direction);
    switch (direction) {
      case 0:
        setDirection("left");
        break;
      case 1:
        setDirection("left");
        break;
      case 2:
        setDirection("left");
        break;
      case 3:
        setDirection("left");
        break;
      default:
        setDirection("left");
        break;
    }
  };

  const getDirection = (
    ev: React.MouseEvent<HTMLDivElement, MouseEvent>,
    obj: HTMLElement
  ) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return d;
  };

  return (
    <motion.div
  onMouseEnter={handleMouseEnter}
  ref={ref}
  className={cn(
    "md:h-60 w-96 h-60 md:w-96 bg-transparent rounded-lg overflow-hidden group/card relative",
    className
  )}
>
  <AnimatePresence mode="wait">
    <motion.div
      className="relative h-full w-full"
      initial="initial"
      whileHover={direction}
      exit="exit"
    >
      {/* Background overlay with a lower opacity by default and higher on hover */}
      <motion.div className="absolute inset-0 w-full h-full bg-black/30 group-hover/card:bg-black/60 z-10 transition duration-500" />
      
      <motion.div
        variants={variants}
        className="h-full w-full relative bg-gray-50 dark:bg-black"
        transition={{
          duration: 0.2,
          ease: "easeOut",
        }}
      >
        <Image
          alt="image"
          className={cn(
            "h-full w-full object-cover scale-[1.15]",
            imageClassName
          )}
          width="1000"
          height="1000"
          src={imageUrl}
        />
      </motion.div>

      <motion.div
        variants={textVariants}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className={cn(
          "text-white absolute bottom-4 left-4 z-40",
          childrenClassName
        )}
      >
        {children}
      </motion.div>
    </motion.div>
  </AnimatePresence>
</motion.div>

  );
};

const variants = {
  initial: {
    x: 0,
  },

  exit: {
    x: 0,
    y: 0,
  },
  top: {
    y: 20,
  },
  bottom: {
    y: -20,
  },
  left: {
    x: 20,
  },
  right: {
    x: -20,
  },
};

const textVariants = {
  initial: {
    y: 0,
    x: 0,
    opacity: 1,
  },
  exit: {
    y: 0,
    x: 0,
    opacity: 1,
  },
  top: {
    y: -20,
  },
  bottom: {
    y: 2,
  },
  left: {
    x: -2,
  },
  right: {
    x: 20,
  },
};