"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const heroContent = [
    {
      season: "Spring / Summer 2026",
      title: "The Art of",
      titleAccent: "Movement.",
      description:
        "Designed for the modern nomad. Each piece is handcrafted with sustainable leather and a commitment to timeless silhouette.",
      image: "/ruth1.png",
      color: "from-amber-50/50",
    },
    {
      season: "Limited Edition",
      title: "Timeless",
      titleAccent: "Elegance.",
      description:
        "Discover our exclusive collection where traditional craftsmanship meets contemporary design. Each piece tells a unique story.",
      image: "/ruth1.png",
      color: "from-stone-50/50",
    },
    {
      season: "Sustainable Luxury",
      title: "Conscious",
      titleAccent: "Craftsmanship.",
      description:
        "Ethically sourced materials and artisanal techniques combine to create pieces that respect both heritage and environment.",
      image: "/ruth1.png",
      color: "from-emerald-50/50",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroContent.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroContent.length]);

  const currentContent = heroContent[currentIndex];

  return (
    <section className="relative pt-32 md:pt-40 pb-16 px-6 overflow-hidden min-h-screen flex flex-col justify-center bg-white">
      {/* Increased max-width for ultra-wide screens to stretch out more */}
      <div className="max-w-[90rem] mx-auto w-full relative xl:px-12">
        {/* Changed grid layout: Text gets 7 cols, Image gets 5 cols to fix imbalance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-16 items-center">
          {/* Text Content - Now takes up more horizontal space */}
          <div className="lg:col-span-7 z-20 order-2 lg:order-1 lg:pr-10 xl:pr-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Season Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-6 mb-8"
                >
                  <motion.span
                    animate={{ width: [0, 60] }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="h-px bg-gray-400"
                  />
                  <span className="text-xs uppercase tracking-[0.35em] text-gray-500 font-sans font-medium">
                    {currentContent.season}
                  </span>
                </motion.div>

                {/* Main Title - Increased Font Sizes significantly */}
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-serif font-light leading-[1.05] mb-8 text-gray-900">
                  {currentContent.title}
                  <br />
                  <motion.span
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="block italic text-gray-800 pl-4 md:pl-16 mt-2"
                  >
                    {currentContent.titleAccent}
                  </motion.span>
                </h1>

                {/* Description - Increased base font size and max-width */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="font-sans text-sm md:text-base xl:text-lg text-gray-500 max-w-lg xl:max-w-xl leading-relaxed mb-12 tracking-wide"
                >
                  {currentContent.description}
                </motion.p>

                {/* CTA Buttons - Scaled up padding and text slightly */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-6"
                >
                  <button className="group relative px-10 py-5 bg-black text-white overflow-hidden w-full sm:w-auto">
                    <span className="relative z-10 uppercase tracking-[0.25em] text-[11px] font-sans font-medium">
                      Shop Collection
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gray-800 origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </button>

                  <button className="group relative px-10 py-5 overflow-hidden w-full sm:w-auto">
                    <span className="relative z-10 uppercase tracking-[0.25em] text-[11px] font-sans font-medium text-gray-600 group-hover:text-black transition-colors duration-300">
                      View Film
                    </span>
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-px bg-gray-200 group-hover:bg-black"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Image Content - Constrained width & height so it doesn't overpower text */}
          <div className="lg:col-span-5 relative order-1 lg:order-2 flex justify-center w-full lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ scale: 1.05, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-full rounded-sm overflow-hidden"
                >
                  {/* Added max-h-[75vh] so portrait images don't stretch the screen vertically */}
                  <motion.img
                    src={currentContent.image}
                    alt={currentContent.title}
                    className="w-full max-h-[70vh] xl:max-h-[80vh] object-contain object-right"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />

                  {/* Subtle Gradient Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ delay: 0.5 }}
                    className={`absolute inset-0 bg-linear-to-t ${currentContent.color} via-transparent to-transparent pointer-events-none`}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Ambient Background Blur behind the image */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-[#F4F1EA] rounded-full blur-[80px] opacity-40 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      {/* <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-black"
        initial={{ width: "0%" }}
        animate={{
          width: `${((currentIndex + 1) / heroContent.length) * 100}%`,
        }}
        transition={{ duration: 0.5 }}
      /> */}
    </section>
  );
};

export default Hero;
