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
    <section className="py-16 px-6 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Horizontal Scroll Container for Mobile / Centered Grid for Desktop */}
        <div className="flex md:justify-center items-start gap-8 md:gap-16 overflow-x-auto no-scrollbar pb-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center min-w-[100px] md:min-w-[140px] group cursor-pointer"
            >
              {/* The Circle */}
              <div 
                className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-6 transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundColor: cat.bg }}
              >
                <img 
                  src={cat.img} 
                  alt={cat.name}
                  className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>

              {/* Label */}
              <p className="text-[11px] uppercase tracking-[0.3em] font-sans font-semibold text-gray-400 group-hover:text-black transition-colors">
                {cat.name}
              </p>
              
              {/* Subtle underline dot */}
              <motion.div 
                className="w-1 h-1 bg-black rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCircular;