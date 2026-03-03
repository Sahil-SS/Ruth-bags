"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Quote } from 'lucide-react';

const GALLERY_IMAGES = [
  { id: 1, url: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=1000", customer: "@elena_style", text: "Finally found a bag that matches my aesthetic and my workload.", size: "tall" },
  { id: 2, url: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800", customer: "@markus.nomad", text: "The tan patina after 3 months of travel is just gorgeous.", size: "square" },
  { id: 3, url: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800", customer: "@sasha_office", text: "Sustainable leather that actually feels like luxury.", size: "wide" },
  { id: 4, url: "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=800", customer: "@julian_vows", text: "The craftsmanship is visible in every single stitch.", size: "square" },
  { id: 5, url: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800", customer: "@travelwith_tm", text: "My go-to duffel for every weekend escape.", size: "tall" },
  { id: 6, url: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800", customer: "@minimalist_jen", text: "The structure of the Atelier Tote is architecturally perfect.", size: "square" },
];

const GalleryGrid = () => {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 p-4 md:p-8">
      {GALLERY_IMAGES.map((img, i) => (
        <motion.div
          key={img.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.6 }}
          viewport={{ once: true }}
          className="relative group break-inside-avoid rounded-xl overflow-hidden cursor-crosshair bg-gray-50"
        >
          {/* Image */}
          <img 
            src={img.url} 
            alt={img.customer} 
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
          />

          {/* Hover Overlay */}
          <motion.div 
            className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-6"
          >
            <div className="flex justify-end">
              <Instagram size={18} className="text-white/80" />
            </div>

            <div className="space-y-3">
              <Quote size={24} className="text-white/40 fill-white/10" />
              <p className="text-white text-sm md:text-base font-serif italic leading-relaxed">
                {img.text}
              </p>
              <div className="pt-2 border-t border-white/20">
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/90 font-sans">
                  {img.customer}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mobile Caption (Shows always on mobile, hidden on desktop hover) */}
          <div className="md:hidden p-4 bg-white border-t border-gray-100">
             <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">{img.customer}</p>
             <p className="text-xs italic text-gray-600 line-clamp-2">"{img.text}"</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default GalleryGrid;