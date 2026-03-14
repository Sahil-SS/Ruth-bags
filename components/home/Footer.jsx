"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <footer className="relative bg-[#0A0A0A] pt-28 pb-12 overflow-hidden text-white">
      
      {/* ── STATIC SUBTLE WATERMARK ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[22vw] font-serif italic text-white/[0.015] leading-none">
          Ruth Bags
        </span>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* ── TOP SECTION ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
          
          {/* Newsletter - Increased Font Sizes */}
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-7xl font-serif italic mb-10 leading-tight">
              Join the <br /> <span className="text-gray-500">Collective.</span>
            </h2>
            
            <AnimatePresence mode="wait">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="relative max-w-md group">
                  <input 
                    type="email"
                    placeholder="EMAIL ADDRESS"
                    className="w-full bg-transparent border-b border-white/20 py-5 text-sm md:text-base tracking-[0.2em] outline-none focus:border-white transition-colors placeholder:text-gray-700"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button className="absolute right-0 top-1/2 -translate-y-1/2 text-xs md:text-sm tracking-[0.2em] font-bold uppercase hover:text-gray-400 transition-colors">
                    Join →
                  </button>
                </form>
              ) : (
                <motion.p 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="text-xs md:text-sm tracking-[0.3em] text-gray-400 uppercase font-medium"
                >
                  Welcome to the Inner Circle.
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Navigation - Increased Font Sizes */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-xs md:text-sm uppercase tracking-[0.4em] text-gray-500 mb-8 font-bold">Shop</h4>
              <ul className="space-y-5 text-sm md:text-base tracking-widest text-gray-300 font-light">
                <li className="hover:text-white transition-colors cursor-pointer">Collections</li>
                <li className="hover:text-white transition-colors cursor-pointer">Best Sellers</li>
                <li className="hover:text-white transition-colors cursor-pointer">Archives</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xs md:text-sm uppercase tracking-[0.4em] text-gray-500 mb-8 font-bold">Studio</h4>
              <ul className="space-y-5 text-sm md:text-base tracking-widest text-gray-300 font-light">
                <li className="hover:text-white transition-colors cursor-pointer">The Story</li>
                <li className="hover:text-white transition-colors cursor-pointer">Craftsmanship</li>
                <li className="hover:text-white transition-colors cursor-pointer">Sustainability</li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="text-xs md:text-sm uppercase tracking-[0.4em] text-gray-500 mb-8 font-bold">Connect</h4>
              <div className="flex flex-wrap gap-6 text-sm md:text-base tracking-widest text-gray-300 font-light">
                <span className="hover:text-white cursor-pointer border-b border-transparent hover:border-white transition-all">Instagram</span>
                <span className="hover:text-white cursor-pointer border-b border-transparent hover:border-white transition-all">Pinterest</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── CENTER SECTION: Massive Wordmark ── */}
        <div className="pt-16 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10">
            <h1 className="text-[14vw] leading-[0.8] font-serif italic text-white/90  tracking-tighter">
              Ruth Bags
            </h1>
            <div className="text-right pb-4">
              <p className="text-xs md:text-sm tracking-[0.4em] text-gray-600 uppercase mb-3">Designed in India</p>
              <p className="text-xs md:text-sm tracking-[0.4em] text-gray-600 uppercase">Worldwide Shipping</p>
            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between gap-8">
          <p className="text-[10px] md:text-xs tracking-[0.3em] text-gray-600 uppercase">
            © 2026 alanKRit Atelier. All rights reserved.
          </p>
          <div className="flex gap-10">
            <span className="text-[10px] md:text-xs tracking-[0.3em] text-gray-600 uppercase hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-[10px] md:text-xs tracking-[0.3em] text-gray-600 uppercase hover:text-white cursor-pointer transition-colors">Terms of Use</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;