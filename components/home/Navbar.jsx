/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag,
  Search,
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeView, setActiveView] = useState("main");
  const [bannerIndex, setBannerIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const bannerMessages = [
    "Free Shipping Over ₹20,000",
    "Spring / Summer 2026 Collection",
    "Subscribe For Early Access",
  ];

  const bannerMessagesFull = [
    "Limited Edition Canvas Collection • Free Shipping Over ₹20,000 • Handcrafted Luxury",
    "New Season Arrivals • Explore The Spring / Summer 2026 Collection",
    "Join The Atelier • Subscribe For Exclusive Updates & Early Access",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setBannerIndex((prev) => (prev + 1) % bannerMessages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [bannerMessages.length]);

  const nextBanner = () => {
    setDirection(1);
    setBannerIndex((prev) => (prev + 1) % bannerMessages.length);
  };

  const prevBanner = () => {
    setDirection(-1);
    setBannerIndex(
      (prev) => (prev - 1 + bannerMessages.length) % bannerMessages.length,
    );
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const categoryItems = [
    {
      name: "New Arrivals",
      img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=500",
      slug: "New Arrivals",
    },
    {
      name: "Backpacks",
      img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=500",
      slug: "Backpacks",
    },
    {
      name: "Tote Bags",
      img: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=500",
      slug: "Totes",
    },
    {
      name: "Baby Bags",
      img: "https://images.unsplash.com/photo-1522338140262-f46f591261c8?q=80&w=500",
      slug: "Baby Bags",
    },
    {
      name: "School Bags",
      img: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=500",
      slug: "School Bags",
    },
  ];

  const bannerVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <div className="fixed top-0 w-full z-100 font-serif bg-white">
      {/* Banner */}
      <div className="w-full bg-[#0a0a0a] text-white border-b border-white/10 relative flex justify-center items-center h-9 md:h-11 overflow-hidden">
        {/* Mobile: minimal — no arrows, just the short message */}
        <div className="flex md:hidden w-full justify-center items-center h-full overflow-hidden px-4">
          <AnimatePresence custom={direction} mode="wait">
            <motion.span
              key={bannerIndex}
              custom={direction}
              variants={bannerVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="text-[9px] uppercase tracking-[0.25em] text-center w-full"
            >
              {bannerMessages[bannerIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Desktop: full message with arrows */}
        <div className="hidden md:flex w-full justify-center items-center h-full overflow-hidden">
          <button
            onClick={prevBanner}
            className="absolute left-8 z-10 p-1 text-gray-400 hover:text-white"
          >
            <ChevronLeft size={14} />
          </button>

          <div className="w-full max-w-xl relative flex justify-center items-center h-full overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.span
                key={bannerIndex}
                custom={direction}
                variants={bannerVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4 }}
                className="text-[10px] uppercase tracking-[0.3em] px-6 text-center w-full"
              >
                {bannerMessagesFull[bannerIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <button
            onClick={nextBanner}
            className="absolute right-8 z-10 p-1 text-gray-400 hover:text-white"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* Navbar */}
      <nav className="border-b border-gray-100 px-4 md:px-12 h-20 md:h-28 flex items-center bg-white">
        <div className="max-w-360 mx-auto w-full relative flex items-center justify-center">

          {/* LEFT — absolutely positioned */}
          <div className="absolute left-0 flex items-center">
            {/* Mobile hamburger */}
            <button
              onClick={() => {
                setIsOpen(!isOpen);
                setActiveView("main");
              }}
              className="md:hidden p-2 -ml-2"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Desktop nav links */}
            <div className="hidden md:flex space-x-12">
              <Link
                href="/products"
                className="text-[12px] uppercase tracking-[0.2em]"
              >
                Shop All
              </Link>
              <Link
                href="/products?category=New Arrivals"
                className="text-[12px] uppercase tracking-[0.2em]"
              >
                New In
              </Link>
            </div>
          </div>

          {/* CENTER LOGO — truly centered */}
          <Link
            href="/"
            className="flex flex-row items-center justify-center gap-3 md:gap-5"
          >
            {/*
              Logo is sized to visually match the brand name text height.
              Mobile: brand name ~28px tall → logo 28px (w-7 h-7)
              Desktop: brand name ~48px tall → logo 48px (w-12 h-12)
            */}
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-20 md:h-20 shrink-0">
              <Image
                src="/logo.png"
                alt="Ruth Bags Logo"
                fill
                className="object-contain scale-125"
                priority
              />
            </div>

            <div className="flex flex-col justify-center leading-none">
              <h1 className="text-[1.6rem] sm:text-[1.9rem] md:text-[2.6rem] font-serif font-bold tracking-widest uppercase leading-none whitespace-nowrap">
                Ruth Bags
              </h1>
              <span className="text-[7px] sm:text-[8px] md:text-[11px] tracking-[0.4em] uppercase text-[#7A8A9E] font-sans font-semibold mt-1 whitespace-nowrap">
                Atelier de Luxe
              </span>
            </div>
          </Link>

          {/* RIGHT — absolutely positioned */}
          <div className="absolute right-0 flex items-center space-x-4 md:space-x-6">
            <Search className="hidden md:block cursor-pointer" size={20} />
            <div className="relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 bg-black text-white text-[7px] w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </div>
          </div>

        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 top-[116px] bg-white z-90 md:hidden flex flex-col"
          >
            <div className="flex-1 overflow-y-auto p-8">
              <button
                onClick={() => setActiveView("occasion")}
                className="text-2xl py-6 border-b flex justify-between w-full"
              >
                Shop By Category <ChevronRight />
              </button>

              {categoryItems.map((item) => (
                <Link
                  key={item.name}
                  href={`/products?category=${item.slug}`}
                  onClick={() => setIsOpen(false)}
                  className="block py-6 border-b text-xl"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;