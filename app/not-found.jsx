"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="h-screen w-full bg-[#FAF9F6] flex flex-col items-center justify-center overflow-hidden relative">
      
      {/* Background Decorative Element */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.03, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="text-[30vw] font-serif italic text-black font-black"
        >
          404
        </motion.h2>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "circOut" }}
        >
          <span className="text-[10px] uppercase tracking-[0.6em] text-gray-400 font-bold mb-8 block">
            Error — Page Out of Reach
          </span>
          
          <h1 className="text-6xl md:text-8xl font-serif italic lowercase tracking-tighter text-black/90 mb-8">
            lost in the <br /> 
            <span className="md:ml-20">details.</span>
          </h1>

          <p className="max-w-md mx-auto text-gray-500 text-sm md:text-base font-light leading-relaxed mb-12">
            The piece you are looking for has been moved or archived. 
            Perhaps it's time to return to the beginning of the collection.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-10 py-5 rounded-full text-[10px] uppercase tracking-[0.4em] font-black shadow-2xl flex items-center gap-3"
              >
                <ArrowLeft size={14} /> Back to Home
              </motion.button>
            </Link>
            
            <Link href="/products">
              <motion.button
                whileHover={{ x: 5 }}
                className="text-black border-b border-black pb-1 text-[10px] uppercase tracking-[0.4em] font-black flex items-center gap-2"
              >
                The Archive <Search size={12} />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Aesthetic Footer Detail */}
      <div className="absolute bottom-12 flex flex-col items-center gap-4">
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent to-gray-200" />
        <p className="text-[8px] uppercase tracking-[0.5em] text-gray-300 font-medium">
          Ruth Handcrafted © 2026
        </p>
      </div>

      {/* Floating Product Silhouette (Optional Aesthetic Touch) */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/4 -right-20 opacity-10 hidden lg:block"
      >
        <img 
          src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=600" 
          className="w-64 grayscale" 
          alt="Decorative"
        />
      </motion.div>
    </main>
  );
}