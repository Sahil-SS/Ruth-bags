"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronRight,
  Home,
  ShoppingBag,
  Search,
  User,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ScrollingBanner from "./ScrollingBanner";

const categories = [
  { id: 1, name: "Handbags" },
  { id: 2, name: "Backpacks" },
  { id: 3, name: "Totes" },
  { id: 4, name: "Wallets" },
  { id: 8, name: "Travel" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  // Reset category accordion when menu closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => setShowCategories(false), 300);
    }
  }, [isOpen]);

  return (
    <>
      <div className="fixed top-0 w-full z-[100] bg-white">
        {/* Top Banner */}
        <ScrollingBanner />

        {/* Main Navbar - Thinner & Symmetrical */}
        <nav className="border-b border-gray-100 px-4 md:px-8 h-14 md:h-20 flex items-center bg-white w-full mb-4">
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between space-x-4 md:space-x-8">
            {/* LEFT: Mobile Hamburger OR Desktop Links */}
            <div className="flex md:hidden flex-1 justify-start">
              <button
                onClick={() => setIsOpen(true)}
                className="p-1 -ml-1 text-gray-800 hover:text-black transition-colors"
              >
                <Menu size={24} strokeWidth={1.5} />
              </button>
            </div>

            {/* Desktop Left Links - Spaced equally */}
            <div className="hidden md:flex flex-1 justify-end items-center gap-8 lg:gap-16 pr-8 lg:pr-12">
              <Link
                href="/products"
                className="text-[13px] font-sans uppercase tracking-[0.2em] text-gray-800 hover:text-black transition-colors whitespace-nowrap"
              >
                Shop All
              </Link>
              <Link
                href="/products?category=New Arrivals"
                className="text-[13px] font-sans uppercase tracking-[0.2em] text-gray-800 hover:text-black transition-colors whitespace-nowrap"
              >
                New In
              </Link>
            </div>

            {/* CENTER: Logo */}
            <Link
              href="/"
              className="flex flex-row items-center justify-center gap-3 shrink-0"
            >
              <div className="relative w-8 h-8 md:w-12 md:h-12 shrink-0">
                <Image
                  src="/logo.png"
                  alt="Ruth Bags Logo"
                  fill
                  className="object-contain scale-110"
                  priority
                />
              </div>

              <div className="flex flex-col justify-center leading-none text-center">
                <h1 className="text-xl md:text-2xl font-serif font-bold tracking-[0.15em] uppercase text-gray-900">
                  Ruth Bags
                </h1>
                <span className="text-[6px] md:text-[8px] tracking-[0.4em] uppercase text-[#7A8A9E] font-sans mt-1">
                  Atelier de Luxe
                </span>
              </div>
            </Link>

            {/* RIGHT: Empty space for mobile balance OR Desktop Links */}
            <div className="flex md:hidden flex-1 justify-end">
              {/* Keeping this empty to ensure the logo stays perfectly centered on mobile */}
            </div>

            {/* Desktop Right Links - Spaced equally */}
            <div className="hidden md:flex flex-1 justify-start items-center gap-8 lg:gap-16 pl-8 lg:pl-12">
              <Link
                href="/collections"
                className="text-[13px] font-sans uppercase tracking-[0.2em] text-gray-800 hover:text-black transition-colors whitespace-nowrap"
              >
                Collections
              </Link>
              <Link
                href="/about"
                className="text-[13px] font-sans uppercase tracking-[0.2em] text-gray-800 hover:text-black transition-colors whitespace-nowrap"
              >
                Atelier
              </Link>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Slide-In Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-white z-[120] md:hidden flex flex-col pb-20" // padding bottom to clear the bottom bar
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between px-4 h-14 border-b border-gray-100 shrink-0">
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 -ml-2 text-gray-600 hover:text-black"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
              <div className="flex items-center gap-2">
                <div className="relative w-6 h-6 shrink-0">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col justify-center text-center">
                  <h2 className="text-[14px] font-serif font-bold tracking-widest uppercase leading-none">
                    Ruth Bags
                  </h2>
                  <span className="text-[5px] tracking-[0.3em] uppercase text-gray-500 mt-[2px]">
                    Atelier de Luxe
                  </span>
                </div>
              </div>
              <div className="w-8"></div> {/* Spacer for perfect centering */}
            </div>

            {/* Mobile Menu Links */}
            <div className="flex-1 overflow-y-auto font-sans">
              {/* Accordion Toggle for Categories */}
              <button
                onClick={() => setShowCategories(!showCategories)}
                className="flex justify-between items-center w-full px-6 py-5 border-b border-gray-200 text-left text-[15px] font-medium text-gray-800 hover:bg-gray-50 transition-colors"
              >
                Shop By Category
                <motion.div
                  animate={{ rotate: showCategories ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronRight
                    size={18}
                    strokeWidth={1.5}
                    className="text-gray-400"
                  />
                </motion.div>
              </button>

              {/* Expandable Categories List */}
              <AnimatePresence>
                {showCategories && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden bg-[#FAFAFA]"
                  >
                    <div className="flex flex-col border-b border-gray-200">
                      {categories.map((cat) => (
                        <Link
                          key={cat.id}
                          href={`/products?category=${cat.name}`}
                          onClick={() => setIsOpen(false)}
                          className="block px-10 py-4 border-b border-gray-100 last:border-b-0 text-[14px] text-gray-600 font-light tracking-wide hover:text-black transition-colors"
                        >
                          {cat.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Primary Nav Links */}
              <Link
                href="/products"
                onClick={() => setIsOpen(false)}
                className="block px-6 py-5 border-b border-gray-200 text-[15px] font-medium text-gray-800 hover:bg-gray-50 transition-colors"
              >
                Shop All
              </Link>
              <Link
                href="/products?category=New Arrivals"
                onClick={() => setIsOpen(false)}
                className="block px-6 py-5 border-b border-gray-200 text-[15px] font-medium text-gray-800 hover:bg-gray-50 transition-colors"
              >
                New In
              </Link>

              {/* Remaining Nav Links */}
              <Link
                href="/collections"
                onClick={() => setIsOpen(false)}
                className="block px-6 py-5 border-b border-gray-200 text-[15px] font-medium text-gray-800 hover:bg-gray-50 transition-colors"
              >
                Collections
              </Link>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="block px-6 py-5 border-b border-gray-200 text-[15px] font-medium text-gray-800 hover:bg-gray-50 transition-colors"
              >
                Atelier
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Tab Bar */}
      <div className="md:hidden fixed bottom-0 w-full bg-white border-t border-gray-200 flex justify-between items-center px-6 py-3 z-[90] pb-safe">
        <Link
          href="/"
          className="flex flex-col items-center gap-1.5 text-gray-400 hover:text-gray-900 transition-colors"
        >
          <Home size={20} strokeWidth={1.5} />
          <span className="text-[8px] font-sans font-medium tracking-wider uppercase">
            Home
          </span>
        </Link>
        <Link
          href="/products"
          className="flex flex-col items-center gap-1.5 text-gray-400 hover:text-gray-900 transition-colors"
        >
          <ShoppingBag size={20} strokeWidth={1.5} />
          <span className="text-[8px] font-sans font-medium tracking-wider uppercase">
            Shop
          </span>
        </Link>
        <button className="flex flex-col items-center gap-1.5 text-gray-400 hover:text-gray-900 transition-colors">
          <Search size={20} strokeWidth={1.5} />
          <span className="text-[8px] font-sans font-medium tracking-wider uppercase">
            Search
          </span>
        </button>
        <Link
          href="/account"
          className="flex flex-col items-center gap-1.5 text-gray-400 hover:text-gray-900 transition-colors"
        >
          <User size={20} strokeWidth={1.5} />
          <span className="text-[8px] font-sans font-medium tracking-wider uppercase">
            Account
          </span>
        </Link>
        <Link
          href="https://wa.me/"
          target="_blank"
          className="flex flex-col items-center gap-1.5 text-[#25D366] hover:text-[#1ebe5c] transition-colors"
        >
          <MessageCircle size={20} strokeWidth={1.5} />
          <span className="text-[8px] font-sans font-medium tracking-wider uppercase">
            WhatsApp
          </span>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
