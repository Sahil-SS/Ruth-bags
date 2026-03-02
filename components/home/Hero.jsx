"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const heroContent = [
    {
      season: "Spring / Summer 2026",
      title: "The Art of",
      titleAccent: "Movement.",
      description: "Designed for the modern nomad. Each piece is handcrafted with sustainable leather and a commitment to timeless silhouette.",
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2069&auto=format&fit=crop",
      badge: "Handmade",
      badgeSub: "Authentic",
      color: "from-amber-50/50"
    },
    {
      season: "Limited Edition",
      title: "Timeless",
      titleAccent: "Elegance.",
      description: "Discover our exclusive collection where traditional craftsmanship meets contemporary design. Each piece tells a unique story.",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1935&auto=format&fit=crop",
      badge: "Exclusive",
      badgeSub: "Limited",
      color: "from-stone-50/50"
    },
    {
      season: "Sustainable Luxury",
      title: "Conscious",
      titleAccent: "Craftsmanship.",
      description: "Ethically sourced materials and artisanal techniques combine to create pieces that respect both heritage and environment.",
      image: "https://images.unsplash.com/photo-1591561954555-607968c989ab?q=80&w=1974&auto=format&fit=crop",
      badge: "Eco",
      badgeSub: "Sustainable",
      color: "from-emerald-50/50"
    }
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
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_#000_1px,_transparent_1px)] bg-[length:40px_40px]" />
      </div>

      <div className="max-w-[1440px] mx-auto w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-5 z-20 order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Season Badge with Animated Line */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-4 mb-6"
                >
                  <motion.span 
                    animate={{ width: [0, 48] }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="h-[1px] bg-gray-300"
                  />
                  <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-sans font-medium">
                    {currentContent.season}
                  </span>
                </motion.div>

                {/* Main Title */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-[0.9] mb-6">
                  {currentContent.title}
                  <br />
                  <motion.span 
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="block italic text-gray-900 pl-8 md:pl-16 mt-2"
                  >
                    {currentContent.titleAccent}
                  </motion.span>
                </h1>

                {/* Description */}
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="font-sans text-sm md:text-base text-gray-600 max-w-md leading-relaxed mb-10 tracking-wide"
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
                  <button className="group relative px-10 py-5 bg-black text-white overflow-hidden w-full sm:w-auto">
                    <span className="relative z-10 uppercase tracking-[0.25em] text-xs font-sans font-medium">
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
                    <span className="relative z-10 uppercase tracking-[0.25em] text-xs font-sans font-medium text-gray-600 group-hover:text-black transition-colors duration-300">
                      View Film
                    </span>
                    <motion.div 
                      className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-200 group-hover:bg-black"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </button>
                </motion.div>

                {/* Slide Indicators - Minimal Version */}
                <div className="flex gap-4 mt-12">
                  {heroContent.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className="group"
                    >
                      <motion.div 
                        className={`h-[2px] transition-all duration-300 ${
                          index === currentIndex ? 'w-8 bg-black' : 'w-4 bg-gray-300 group-hover:bg-gray-400'
                        }`}
                        whileHover={{ width: 24 }}
                      />
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Image Content */}
          <div className="lg:col-span-7 relative order-1 lg:order-2">
            <div className="relative aspect-[3/4] md:aspect-[4/3] lg:aspect-square">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-full h-full overflow-hidden bg-gray-100 shadow-2xl"
                >
                  <motion.img 
                    src={currentContent.image}
                    alt="Luxury collection"
                    className="object-cover w-full h-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.2 }}
                  />
                  
                  {/* Elegant Gradient Overlay */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ delay: 0.5 }}
                    className={`absolute inset-0 bg-gradient-to-t ${currentContent.color} via-transparent to-transparent`}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Decorative Element - Subtle Corner Accent */}
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 w-16 h-16 border-r-2 border-b-2 border-gray-200/50"
              />
            </div>

            {/* Ambient Background Blur */}
            <div className="absolute -z-10 top-20 -right-20 w-72 h-72 bg-amber-50 rounded-full blur-3xl opacity-40" />
            <div className="absolute -z-10 bottom-0 -left-20 w-72 h-72 bg-stone-50 rounded-full blur-3xl opacity-40" />
          </div>

        </div>
      </div>
      
      {/* Progress Bar */}
      <motion.div 
        className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-black via-gray-400 to-transparent"
        initial={{ width: "0%" }}
        animate={{ width: `${((currentIndex + 1) / heroContent.length) * 100}%` }}
        transition={{ duration: 0.5 }}
      />
    </section>
  );
};

export default Hero;