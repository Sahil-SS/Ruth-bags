/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1553531384-cc64ac80f931?q=80&w=2000&auto=format&fit=crop",
    tag: "Travel Collection",
    title: "Your next",
    titleLine2: "adventure,",
    titleAccent: "sorted.",
    cta: "Shop Travel",
    href: "/products?category=Travel",
    bg: "#EEF0EB",
  },
  {
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2000&auto=format&fit=crop",
    tag: "New Arrivals",
    title: "Carry every",
    titleLine2: "story,",
    titleAccent: "beautifully.",
    cta: "Shop New In",
    href: "/products?category=New Arrivals",
    bg: "#F2EDE8",
  },
  {
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=2000&auto=format&fit=crop",
    tag: "Tote Bags",
    title: "Effortless",
    titleLine2: "style,",
    titleAccent: "everyday.",
    cta: "Shop Totes",
    href: "/products?category=Totes",
    bg: "#EAF0EE",
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const slide = slides[current];

  const imageVariants = {
    enter: (dir) => ({ x: dir > 0 ? "6%" : "-6%", opacity: 0, scale: 1.04 }),
    center: { x: "0%", opacity: 1, scale: 1 },
    exit: (dir) => ({ x: dir < 0 ? "6%" : "-6%", opacity: 0, scale: 0.97 }),
  };

  const textVariants = {
    enter: { opacity: 0, y: 28 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <section
      className="w-full flex flex-col md:flex-row overflow-hidden border-b border-gray-100 mt-32"
      style={{
        minHeight: "clamp(420px, 65vh, 780px)",
        transition: "background 0.8s ease",
        background: slide.bg,
      }}
    >
      {/* ── Left: Image ── */}
      <div className="w-full md:w-[58%] relative overflow-hidden order-2 md:order-1 min-h-[340px] md:min-h-full">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <img
              src="/ruth1.png"
              alt={slide.tag}
              className="w-full h-full object-cover"
            />
            {/* Subtle right-edge fade so it blends into the text panel */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[rgba(0,0,0,0.04)]" />
          </motion.div>
        </AnimatePresence>

        {/* Slide counter — bottom-left of image */}
        <div className="absolute bottom-6 left-6 flex items-center gap-1 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="group flex items-center"
            >
              <motion.div
                animate={{
                  width: i === current ? 28 : 10,
                  backgroundColor:
                    i === current ? "#1a1a1a" : "rgba(0,0,0,0.25)",
                }}
                transition={{ duration: 0.4 }}
                className="h-[2px] rounded-full"
              />
            </button>
          ))}
        </div>
      </div>

      {/* ── Right: Text ── */}
      <div
        className="w-full md:w-[42%] flex flex-col justify-center items-start
                   px-10 py-14 md:px-14 lg:px-20 xl:px-28 order-1 md:order-2 relative"
      >
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={textVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-md w-full"
          >
            {/* Tag line */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="flex items-center gap-3 mb-7"
            >
              <span className="block w-8 h-px bg-gray-400" />
              <span className="text-[9px] uppercase tracking-[0.35em] text-gray-500 font-sans font-semibold">
                {slide.tag}
              </span>
            </motion.div>

            {/* Headline */}
            <h2
              className="font-serif font-light leading-[1.08] text-gray-900 mb-10"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4.2rem)" }}
            >
              {slide.title}
              <br />
              {slide.titleLine2}
              <br />
              <span className="italic">{slide.titleAccent}</span>
            </h2>

            {/* CTA */}
            <Link href={slide.href}>
              <button className="group relative px-9 py-4 bg-black text-white overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gray-800 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.45 }}
                />
                <span className="relative z-10 uppercase tracking-[0.28em] text-[10px] font-sans font-medium whitespace-nowrap">
                  {slide.cta}
                </span>
              </button>
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Slide number — bottom-right of panel */}
        <AnimatePresence mode="wait">
          <motion.span
            key={current}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-8 right-10 font-sans text-[10px] tracking-[0.2em] text-gray-400 select-none"
          >
            0{current + 1} / 0{slides.length}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Progress bar along the very bottom */}
      <motion.div
        key={current}
        className="absolute bottom-0 left-0 h-[2px] bg-black/20"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 5.5, ease: "linear" }}
      />
    </section>
  );
};

export default Banner;
