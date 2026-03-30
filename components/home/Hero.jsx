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
      image:
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2069&auto=format&fit=crop",
      color: "from-amber-50/50",
    },
    {
      season: "Limited Edition",
      title: "Timeless",
      titleAccent: "Elegance.",
      description:
        "Discover our exclusive collection where traditional craftsmanship meets contemporary design. Each piece tells a unique story.",
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1935&auto=format&fit=crop",
      color: "from-stone-50/50",
    },
    {
      season: "Sustainable Luxury",
      title: "Conscious",
      titleAccent: "Craftsmanship.",
      description:
        "Ethically sourced materials and artisanal techniques combine to create pieces that respect both heritage and environment.",
      image:
        "https://images.unsplash.com/photo-1591561954555-607968c989ab?q=80&w=1974&auto=format&fit=crop",
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
    <section className="relative pt-10 md:pt-2 pb-15 px-6 overflow-hidden min-h-screen flex flex-col justify-center bg-white">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,#000_1px,transparent_1px)] bg-size-[40px_40px]" />
      </div>

      <div className="max-w-360 mx-auto w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="lg:col-span-6 z-20 order-2 lg:order-1 lg:pr-10">
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
                  className="flex items-center gap-4 mb-6"
                >
                  <motion.span
                    animate={{ width: [0, 48] }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="h-px bg-gray-300"
                  />
                  <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-sans font-medium">
                    {currentContent.season}
                  </span>
                </motion.div>

                {/* Main Title */}
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-[0.95] mb-6">
                  {currentContent.title}
                  <br />
                  <motion.span
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="block italic text-gray-900 pl-4 md:pl-12 mt-2"
                  >
                    {currentContent.titleAccent}
                  </motion.span>
                </h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="font-sans text-xs md:text-sm text-gray-500 max-w-sm leading-relaxed mb-10 tracking-wide"
                >
                  {currentContent.description}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <button className="group relative px-8 py-4 bg-black text-white overflow-hidden w-full sm:w-auto">
                    <span className="relative z-10 uppercase tracking-[0.25em] text-[10px] font-sans font-medium">
                      Shop Collection
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gray-800 origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </button>

                  <button className="group relative px-8 py-4 overflow-hidden w-full sm:w-auto">
                    <span className="relative z-10 uppercase tracking-[0.25em] text-[10px] font-sans font-medium text-gray-600 group-hover:text-black transition-colors duration-300">
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

                {/* Slide Indicators */}
                <div className="flex gap-4 mt-12">
                  {heroContent.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className="group"
                    >
                      <motion.div
                        className={`h-0.5 transition-all duration-300 ${
                          index === currentIndex
                            ? "w-8 bg-black"
                            : "w-4 bg-gray-300 group-hover:bg-gray-400"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Image Content - MADE SMALLER */}
          <div className="lg:col-span-6 relative order-1 lg:order-2 flex justify-center">
            {/* - Reduced scale on mobile (max-w-[85%]) 
                - Increased padding on desktop (lg:p-12)
                - Tighter aspect ratio 
            */}
            <div className="relative w-full max-w-[85%] lg:max-w-full lg:p-12">
              <div className="relative aspect-4/5 md:aspect-3/3.5 lg:aspect-4/5 max-h-[70vh] mx-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="relative w-full h-full overflow-hidden bg-gray-50 shadow-xl"
                  >
                    <motion.img
                      src={currentContent.image}
                      alt="Luxury collection"
                      className="object-cover w-full h-full"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 1.2 }}
                    />

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.2 }}
                      transition={{ delay: 0.5 }}
                      className={`absolute inset-0 bg-linear-to-t ${currentContent.color} via-transparent to-transparent`}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Subtle Decorative Frame */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute inset-0 border border-black/5 -m-4 pointer-events-none hidden md:block"
                />
              </div>
            </div>

            {/* Ambient Background Blur - Subtle */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-stone-50 rounded-full blur-[100px] opacity-30" />
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-black"
        initial={{ width: "0%" }}
        animate={{
          width: `${((currentIndex + 1) / heroContent.length) * 100}%`,
        }}
        transition={{ duration: 0.5 }}
      />
    </section>
  );
};

export default Hero;
