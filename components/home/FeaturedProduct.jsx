"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: delay, ease: [0.215, 0.61, 0.355, 1] }}
  >
    {children}
  </motion.div>
);

const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: "Atelier Tote",
    price: 420,
    img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800",
  },
  {
    id: 2,
    name: "Nomad Backpack",
    price: 580,
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800",
  },
  {
    id: 3,
    name: "Luna Crossbody",
    price: 190,
    img: "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=800",
  },
  {
    id: 4,
    name: "City Pouch",
    price: 95,
    img: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800",
  },
];

const FeaturedProduct = () => {
  return (
    <section className="bg-white min-h-screen">
      {/* Compact Header */}
      <div className="px-6 md:px-12 pt-20 pb-12 max-w-[1440px] mx-auto text-center md:text-left">
        <FadeIn>
          <span className="text-[9px] uppercase tracking-[0.4em] text-gray-400 font-sans block mb-2">
            Selection 01
          </span>
          {/* Forced to one line with whitespace-nowrap or controlled sizing */}
          <h1 className="text-3xl md:text-6xl font-serif italic text-gray-900 whitespace-nowrap">
            Featured Pieces
          </h1>
        </FadeIn>
      </div>

      {/* Optimized Grid: 2 columns on mobile, 4 columns on desktop */}
      <div className="px-4 md:px-12 pb-20 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-8">
          {FEATURED_PRODUCTS.map((product, index) => (
            <FadeIn key={product.id} delay={index * 0.05}>
              <div className="group cursor-pointer">
                {/* Reduced Image Size via Aspect Ratio and Grid */}
                <div className="relative aspect-[3/4] bg-[#F9F9F7] overflow-hidden mb-4 border border-transparent group-hover:border-gray-100 transition-all">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Compact Product Info */}
                <div className="px-1">
                  <h3 className="text-[13px] md:text-base font-serif italic text-gray-900 truncate">
                    {product.name}
                  </h3>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1 font-sans">
                    ${product.price}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Minimal Footer */}
      <Link href="/products">
        <div className="py-12 flex justify-center">
          <button className="text-[10px] uppercase tracking-[0.3em] font-bold border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-all">
            View All
          </button>
        </div>
      </Link>
    </section>
  );
};

export default FeaturedProduct;
