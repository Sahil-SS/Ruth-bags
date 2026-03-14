"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const categories = [
  { id: 1, name: "Handbags", img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2069&auto=format&fit=crop", bg: "#F7F7F5" },
  { id: 2, name: "Backpacks", img: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=600", bg: "#EAEAE8" },
  { id: 3, name: "Totes", img: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600", bg: "#F2F2F0" },
  { id: 4, name: "Wallets", img: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=600", bg: "#E8EAE6" },
  // { id: 7, name: "Rings", img: "https://images.unsplash.com/photo-1603912627214-923b3f57242d?q=80&w=600", bg: "#F1F1F1" },
  { id: 8, name: "Travel", img: "https://images.unsplash.com/photo-1553531384-cc64ac80f931?q=80&w=600", bg: "#F9F6F1" },
];

const CategoryCircular = () => {
  return (
    <section className="mt-32 md:mt-40 py-8 md:py-20 px-4 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-12 md:gap-20">
{categories.map((cat, i) => (
  <Link 
    key={cat.id} 
    // IMPORTANT: Ensure this path matches your folder name in the /app directory
    href={`/products?category=${cat.name}`} 
    className="w-[28%] md:w-auto"
  >
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-44 md:h-44 mb-6">
                  <motion.div className="absolute inset-0 rounded-full z-0 opacity-40" style={{ backgroundColor: cat.bg }} whileHover={{ scale: 1.1 }} />
                  <div className="relative z-10 w-full h-full rounded-full overflow-hidden border border-gray-100 shadow-sm group-hover:shadow-2xl transition-all duration-700">
                    <img src={cat.img} alt={cat.name} className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:opacity-100 transition-transform duration-500 group-hover:scale-110" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-[12px] md:text-[14px] uppercase tracking-[0.4em] font-bold text-gray-500 group-hover:text-black transition-colors duration-300">
                    {cat.name}
                  </p>
                  <div className="h-[1.5px] w-0 bg-black mx-auto mt-2 group-hover:w-full transition-all duration-500 ease-out" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCircular;