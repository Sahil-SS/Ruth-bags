/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=800",
    customer: "@elena_style",
    text: "Perfect for my aesthetic.",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800",
    customer: "@markus.nomad",
    text: "The patina is gorgeous.",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800",
    customer: "@sasha_office",
    text: "Luxury sustainable leather.",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=800",
    customer: "@julian_vows",
    text: "Craftsmanship in every stitch.",
  },
];

const CompactGallery = () => {
  return (
    <section className="bg-white pt-15 pb-2 px-4 md:px-12 border-t border-gray-50">
      {/* Container width matched to 1440px to align with FeaturedProduct */}
      <div className="max-w-360 mx-auto">
        {/* Header matched to FeaturedProduct style */}
        <div className="mb-16 md:mb-15">
          <span className="text-[9px] uppercase tracking-[0.4em] text-gray-400 font-sans block mb-2">
            The Collective
          </span>
          <h2 className="text-3xl md:text-6xl font-serif italic text-gray-900 whitespace-nowrap">
            In Good Company
          </h2>
        </div>

        {/* Grid logic: Same as products (2 mobile, 4 desktop) but with a stagger */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-16 md:gap-x-8 lg:gap-x-12">
          {TESTIMONIALS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.05,
                duration: 0.7,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 !== 0 ? "lg:pt-20" : ""}`}
            >
              <div className="relative aspect-square overflow-hidden bg-[#F9F9F7] mb-6 group cursor-crosshair">
                <img
                  src={item.url}
                  alt={item.customer}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Subtle Instagram Link Overlay */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white/90 p-3 rounded-full shadow-sm translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Instagram size={16} className="text-black" />
                  </div>
                </div>
              </div>

              {/* Text: Compact and elegant */}
              <div className="px-1">
                <p className="text-[13px] md:text-[15px] font-serif italic text-gray-800 leading-snug mb-3">
                  &quot;{item.text}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-px w-6 bg-gray-200" />
                  <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 font-sans">
                    {item.customer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Adds bottom clearance for the staggered items on desktop */}
        <div className="hidden lg:block h-20" />
      </div>
    </section>
  );
};

export default CompactGallery;
