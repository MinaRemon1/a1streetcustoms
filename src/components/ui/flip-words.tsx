"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { KeyTextField } from "@prismicio/client";

export const FlipWords = ({
  words = [], // Default to an empty array if words is not provided
  duration = 3000,
  className,
}: {
  words?: (KeyTextField | null)[];
  duration?: number;
  className?: string;
}) => {
  const [currentSentence, setCurrentSentence] = useState<string>(words[0]?.toString() || "");
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  // Function to split sentence into words and spaces
  const splitSentence = (sentence: string) => {
    return sentence
      .split(/(\s+)/) // Split by spaces but retain spaces as elements
      .filter((item) => item !== ""); // Remove empty items
  };

  const startAnimation = useCallback(() => {
    if (words.length === 0) return;
    const currentIndex = words.indexOf(currentSentence);
    const nextIndex = (currentIndex + 1) % words.length;
    const nextSentence = words[nextIndex]?.toString() || "";
    setCurrentSentence(nextSentence);
    setIsAnimating(true);
  }, [currentSentence, words]);

  useEffect(() => {
    if (!isAnimating && words.length > 0) {
      const timer = setTimeout(() => {
        startAnimation();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isAnimating, duration, startAnimation, words]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: "blur(8px)",
          scale: 2,
          position: "absolute",
        }}
        className={cn(
          "z-10 inline-block relative text-left text-neutral-300 dark:text-neutral-300 px-2",
          className
        )}
        key={currentSentence}
      >
        {splitSentence(currentSentence).map((item, index) => (
          <motion.span
            key={currentSentence + index}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: index * 0.3, // Delay each word with a small interval
              duration: 0.4,
            }}
            className={item === " " ? "" : "inline-block"} // Only animate words, not spaces
          >
            {item}
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
