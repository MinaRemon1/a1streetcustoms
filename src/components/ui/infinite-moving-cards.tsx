"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = false,
  className,
}: {
  items: {
    quote: string;
    name: string;
    location: string;
    rating: number;           // 1 to 5
    photo: string;            // URL of reviewer photo
    source: string;           // e.g. "Yelp"
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });
      // set animation properties
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
      const duration = speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
      setStart(true);
    }
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-6",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={`${item.name}-${idx}`}
            className="flex flex-col items-center justify-start w-[350px] max-w-full shrink-0 rounded-2xl border border-zinc-200 bg-white px-6 py-8 shadow-lg dark:border-zinc-700 dark:bg-zinc-900 text-center"
          >
            {/* Reviewer Photo */}
            <div className="relative mb-4 h-12 w-12">
              <Image
                src={item.photo}
                alt={`${item.name} photo`}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>

            {/* Name & Location */}
            <span className="font-medium text-neutral-900 dark:text-gray-100 text-lg">
              {item.name}
            </span>
            <span className="text-sm text-neutral-600 dark:text-gray-400 mb-4">
              {item.location}
            </span>

            {/* Review Content */}
            <blockquote className="mb-4 px-2">
              <p className="text-sm leading-relaxed text-neutral-800 dark:text-gray-200">
                “{item.quote}”
              </p>
            </blockquote>

            {/* Rating Stars */}
            <div className="flex space-x-1 mb-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-5 w-5 fill-current",
                    i < item.rating
                      ? "text-yellow-400"
                      : "text-gray-300 dark:text-gray-600"
                  )}
                />
              ))}
            </div>

            {/* Rating Text */}
            <span className="text-sm font-medium text-neutral-700 dark:text-gray-300 mb-2">
              {item.rating} Stars
            </span>

            {/* Source */}
            <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs">
              via {item.source}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
