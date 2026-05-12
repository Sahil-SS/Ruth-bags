"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";

const ScrollingBanner = () => {
  const [bannerIndex, setBannerIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const bannerMessages = [
    "Free Shipping Over ₹20,000",
    "Spring / Summer 2026 Collection",
    "Subscribe For Early Access",
  ];

  const bannerMessagesFull = [
    "Limited Edition Canvas Collection • Free Shipping Over ₹20,000 • Handcrafted Luxury",
    "New Season Arrivals • Explore The Spring / Summer 2026 Collection",
    "Join The Atelier • Subscribe For Exclusive Updates & Early Access",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setBannerIndex((prev) => (prev + 1) % bannerMessages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [bannerMessages.length]);

  const nextBanner = () => {
    setDirection(1);
    setBannerIndex((prev) => (prev + 1) % bannerMessages.length);
  };

  const prevBanner = () => {
    setDirection(-1);
    setBannerIndex(
      (prev) => (prev - 1 + bannerMessages.length) % bannerMessages.length,
    );
  };

  const bannerVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <div className="w-full bg-[#0a0a0a] text-white border-b border-white/10 relative flex justify-center items-center h-9 md:h-11 overflow-hidden">
      {/* Mobile: minimal — no arrows, just the short message */}
      <div className="flex md:hidden w-full justify-center items-center h-full overflow-hidden px-4">
        <AnimatePresence custom={direction} mode="wait">
          <motion.span
            key={bannerIndex}
            custom={direction}
            variants={bannerVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4 }}
            className="text-[9px] uppercase tracking-[0.25em] text-center w-full"
          >
            {bannerMessages[bannerIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Desktop: full message with arrows */}
      <div className="hidden md:flex w-full justify-center items-center h-full overflow-hidden">
        <button
          onClick={prevBanner}
          className="absolute left-8 z-10 p-1 text-gray-400 hover:text-white"
        >
          <ChevronLeft size={14} />
        </button>

        <div className="w-full max-w-xl relative flex justify-center items-center h-full overflow-hidden">
          <AnimatePresence custom={direction} mode="wait">
            <motion.span
              key={bannerIndex}
              custom={direction}
              variants={bannerVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="text-[10px] uppercase tracking-[0.3em] px-6 text-center w-full"
            >
              {bannerMessagesFull[bannerIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        <button
          onClick={nextBanner}
          className="absolute right-8 z-10 p-1 text-gray-400 hover:text-white"
        >
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
};

export default ScrollingBanner;