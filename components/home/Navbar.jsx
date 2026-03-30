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

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  // YOUR EXACT CATEGORIES
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

  const menuVariants = {
    enter: (direction) => ({ x: direction > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({ x: direction < 0 ? "100%" : "-100%", opacity: 0 }),
  };

  return (
    <div className="fixed top-0 w-full z-100 font-serif bg-white">
      {/* 1. Rolling Banner */}
      <div className="w-full bg-[#0a0a0a] text-white py-2.5 overflow-hidden border-b border-white/10">
        <div className="flex whitespace-nowrap animate-marquee">
          {[1, 2, 3].map((i) => (
            <span
              key={i}
              className="text-[10px] uppercase tracking-[0.3em] px-8 italic font-light font-sans"
            >
              Limited Edition Canvas Collection • Free Shipping Over ₹20,000 •
              Handcrafted Luxury
            </span>
          ))}
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <nav className="border-b border-gray-100 px-6 md:px-12 h-24 flex items-center bg-white">
        <div className="max-w-360 mx-auto w-full grid grid-cols-3 items-center">
          {/* LEFT: Links */}
          <div className="flex items-center">
            <button
              onClick={() => {
                setIsOpen(!isOpen);
                setActiveView("main");
              }}
              className="md:hidden p-2 -ml-2"
            >
              {isOpen ? (
                <X size={24} strokeWidth={1} />
              ) : (
                <Menu size={24} strokeWidth={1} />
              )}
            </button>
            <div className="hidden md:flex space-x-12 ml-12">
              <Link
                href="/products"
                className="text-[12px] uppercase tracking-[0.2em] font-medium hover:text-gray-400 transition-colors"
              >
                Shop All
              </Link>
              <Link
                href="/products?category=New Arrivals"
                className="text-[12px] uppercase tracking-[0.2em] font-medium hover:text-gray-400 transition-colors"
              >
                New In
              </Link>
            </div>
          </div>

          {/* CENTER: Branded Logo Layout */}
          <Link
            href="/"
            className="flex items-center justify-center gap-4 group cursor-pointer"
          >
            <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0">
              <Image
                src="/logo.png"
                alt="Ruth Bags Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col border-l border-gray-100 pl-4 items-center justify-around text-center">
              <h1 className="text-2xl md:text-3xl font-light tracking-[0.15em] leading-none uppercase">
                Ruth Bags
              </h1>
              <span className="text-[8px] md:text-[9px] tracking-[0.5em] uppercase text-gray-400 mt-2 hidden md:block font-sans font-bold">
                Atelier de Luxe
              </span>
            </div>
          </Link>

          {/* RIGHT: Icons */}
          <div className="flex items-center justify-end space-x-6">
            <Search
              size={20}
              strokeWidth={1}
              className="cursor-pointer hidden md:block hover:opacity-50 transition-opacity"
            />
            <div className="relative cursor-pointer group">
              <ShoppingBag size={20} strokeWidth={1} />
              <span className="absolute -top-2 -right-2 bg-black text-white text-[7px] w-4 h-4 rounded-full flex items-center justify-center font-sans font-bold">
                0
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* 3. Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 top-28.75 bg-white z-90 md:hidden flex flex-col"
          >
            {/* Scrollable Container ensures side bar scrolls properly on mobile */}
            <div className="relative flex-1 overflow-y-auto pb-24 custom-scrollbar">
              <AnimatePresence
                mode="wait"
                custom={activeView === "main" ? -1 : 1}
              >
                {/* VIEW 1: MAIN MENU */}
                {activeView === "main" ? (
                  <motion.div
                    key="main"
                    custom={-1}
                    variants={menuVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                    className="p-8 flex flex-col"
                  >
                    <button
                      onClick={() => setActiveView("occasion")}
                      className="text-3xl font-light italic py-6 border-b border-gray-50 flex justify-between items-center text-left text-black"
                    >
                      Shop By Category{" "}
                      <ChevronRight size={20} className="text-gray-300" />
                    </button>
                    {[
                      {
                        name: "New Arrivals",
                        href: "/products?category=New Arrivals",
                      },
                      {
                        name: "Backpacks",
                        href: "/products?category=Backpacks",
                      },
                      { name: "Tote Bags", href: "/products?category=Totes" },
                      {
                        name: "Baby Bags",
                        href: "/products?category=Baby Bags",
                      },
                      {
                        name: "School Bags",
                        href: "/products?category=School Bags",
                      },
                      { name: "Our Story", href: "/our-story" },
                    ].map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-3xl font-light italic py-6 border-b border-gray-50 flex justify-between items-center"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                ) : (
                  /* VIEW 2: CATEGORIES WITH IMAGES */
                  <motion.div
                    key="occasion"
                    custom={1}
                    variants={menuVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                    className="p-8 flex flex-col"
                  >
                    <button
                      onClick={() => setActiveView("main")}
                      className="flex items-center text-gray-400 mb-10 text-[10px] uppercase tracking-[0.4em] font-bold"
                    >
                      <ChevronLeft size={16} className="mr-2" /> Back
                    </button>

                    <h2 className="text-4xl font-serif italic mb-10">
                      Categories
                    </h2>

                    <div className="space-y-8">
                      {categoryItems.map((item) => (
                        <Link
                          key={item.name}
                          href={`/products?category=${item.slug}`}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center space-x-6 group border-b border-gray-50 pb-6"
                        >
                          <div className="relative w-24 h-24 bg-gray-50 overflow-hidden shrink-0 rounded-sm">
                            <img
                              src={item.img}
                              alt={item.name}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                          </div>
                          <span className="text-2xl font-light text-gray-900">
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
