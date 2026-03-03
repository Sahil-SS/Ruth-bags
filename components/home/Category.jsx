"use client";
import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  { id: 1, name: "Handbags", img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=500", bg: "#F7F7F5" },
  { id: 2, name: "Backpacks", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=500", bg: "#EAEAE8" },
  { id: 3, name: "Totes", img: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=500", bg: "#F2F2F0" },
  { id: 4, name: "Wallets", img: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=500", bg: "#E8EAE6" },
  { id: 5, name: "Travel", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=500", bg: "#F9F6F1" },
];

const CategoryCircular = () => {
  return (
    <section className="mt-32 md:mt-40 py-12 md:py-20 px-4 bg-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Changed 'overflow-x-auto' to 'flex-wrap' to ensure visibility on mobile */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-10 md:gap-16">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                delay: i * 0.1, 
                duration: 0.7, 
                ease: [0.215, 0.61, 0.355, 1] 
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }} // Gentle lift on hover
              className="flex flex-col items-center group cursor-pointer w-[28%] md:w-auto"
            >
              {/* The Circle Container */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36 mb-4">
                {/* Background Pulse Animation */}
                <motion.div 
                  className="absolute inset-0 rounded-full z-0 opacity-40"
                  style={{ backgroundColor: cat.bg }}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                />

                {/* The Main Circle */}
                <div 
                  className="relative z-10 w-full h-full rounded-full overflow-hidden border border-gray-100 shadow-sm transition-all duration-700 group-hover:border-black/10 group-hover:shadow-xl"
                  style={{ backgroundColor: cat.bg }}
                >
                  <motion.img 
                    src={cat.img} 
                    alt={cat.name}
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.8 }}
                    className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:opacity-100"
                  />
                </div>
              </div>

              {/* Label Animation */}
              <div className="text-center">
                <p className="text-[9px] md:text-[11px] uppercase tracking-[0.3em] font-bold text-gray-400 group-hover:text-black transition-colors duration-300">
                  {cat.name}
                </p>
                
                {/* Underline grow effect */}
                <div className="h-[1px] w-0 bg-black mx-auto mt-1 group-hover:w-full transition-all duration-500 ease-out" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCircular;