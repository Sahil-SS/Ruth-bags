"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 w-full z-[100] font-serif bg-white">
      {/* 1. Rolling Banner */}
      <div className="w-full bg-[#0a0a0a] text-white py-2.5 overflow-hidden border-b border-white/10">
        <div className="flex whitespace-nowrap animate-marquee">
          {[1, 2, 3, 4].map((i) => (
            <span key={i} className="text-[10px] uppercase tracking-[0.3em] px-8 italic font-light font-sans">
              Limited Edition Canvas Collection • Free Shipping Over $200 • Handcrafted in Italy 
            </span>
          ))}
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <nav className="border-b border-gray-100 px-6 md:px-12 h-24 flex items-center">
        <div className="max-w-[1440px] mx-auto w-full grid grid-cols-3 items-center">
          
          {/* LEFT: Links - Spread evenly on the left side */}
          <div className="flex items-center">
            {/* Hamburger for Mobile */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 -ml-2">
              {isOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
            </button>

            {/* Desktop Links - Left Aligned */}
            <div className="hidden md:flex space-x-12 justify-start ml-12">
              <a href="#" className="text-[12px] uppercase tracking-[0.2em] font-medium hover:text-gray-400 transition-colors whitespace-nowrap">Shop All</a>
              <a href="#" className="text-[12px] uppercase tracking-[0.2em] font-medium hover:text-gray-400 transition-colors whitespace-nowrap">New In</a>
            </div>
          </div>

          {/* CENTER: Logo - Absolute Center */}
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-2xl md:text-4xl font-light tracking-[0.15em] leading-none uppercase">
              L'ARTISAN
            </h1>
            <span className="text-[8px] tracking-[0.5em] uppercase text-gray-400 mt-2 hidden md:block font-sans">
              Atelier de Luxe
            </span>
          </div>

          {/* RIGHT: Links + Icons - Spread evenly on the right side */}
          <div className="flex items-center justify-around">
            <div className="hidden md:flex space-x-12 mr-12">
              <a href="#" className="text-[12px] uppercase tracking-[0.2em] font-medium hover:text-gray-400 transition-colors whitespace-nowrap">Journal</a>
              <a href="#" className="text-[12px] uppercase tracking-[0.2em] font-medium hover:text-gray-400 transition-colors whitespace-nowrap">Our Story</a>
            </div>
            
            <div className="flex items-center space-x-6">
              <Search size={20} strokeWidth={1.2} className="cursor-pointer hover:opacity-50 transition-opacity" />
              <div className="relative cursor-pointer group">
                <ShoppingBag size={20} strokeWidth={1.2} />
                <span className="absolute -top-2 -right-2 bg-black text-white text-[7px] w-4 h-4 rounded-full flex items-center justify-center font-sans font-bold">
                  0
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* 3. Dropdown Menu for Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-8 space-y-8 bg-white">
              {['New Arrivals', 'Backpacks', 'Tote Bags', 'Leather Goods', 'Our Story'].map((item, idx) => (
                <motion.a 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  key={item} 
                  href="#" 
                  className="text-3xl font-light italic tracking-tight text-gray-900"
                >
                  {item}
                </motion.a>
              ))}
              <div className="pt-8 border-t border-gray-50 flex justify-between font-sans">
                <span className="text-[11px] tracking-[0.3em] uppercase text-gray-400 font-bold">Search</span>
                <span className="text-[11px] tracking-[0.3em] uppercase text-gray-400 font-bold">My Account</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;