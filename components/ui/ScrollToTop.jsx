"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled upto a certain distance
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-12 right-6 md:right-12 z-[100] group flex flex-col items-center gap-2"
        >
          {/* The Icon Container */}
          <div className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm group-hover:bg-black group-hover:border-black transition-all duration-500">
            <ArrowUp 
              size={18} 
              strokeWidth={1.5} 
              className="text-black group-hover:text-white transition-colors duration-500" 
            />
          </div>
          
          {/* Subtle Label */}
          <span className="text-[8px] uppercase tracking-[0.4em] text-gray-400 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            Top
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;