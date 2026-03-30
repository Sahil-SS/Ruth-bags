/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";

const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.8, delay, ease: [0.215, 0.61, 0.355, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const Narrative = () => {
  return (
    <section className="bg-white py-20 md:py-2 px-4 md:px-12 border-t border-gray-50">
      <div className="max-w-360 mx-auto">
        <FadeIn className="mb-16 md:mb-24">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 bg-black" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-sans font-bold">
              The Philosophy
            </span>
          </div>
          <h2 className="text-3xl md:text-6xl font-serif italic text-gray-900 leading-[1.1]">
            Heritage & <br className="hidden md:block" /> Architectural Craft
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <FadeIn delay={0.1} className="lg:col-span-7">
            <div className="relative aspect-4/5 md:aspect-16/10 overflow-hidden bg-[#F9F9F7] group">
              <img
                src="https://images.unsplash.com/photo-1622467827417-bbe2237067a9?q=80&w=1200"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s] ease-out"
                alt="The craftsmanship process"
              />
              {/* Corner Badge - Minimalist */}
              <div className="absolute top-0 left-0 bg-white p-4">
                <span className="text-[9px] uppercase tracking-[0.3em] font-bold">
                  Process // 01
                </span>
              </div>
            </div>
          </FadeIn>

          {/* RIGHT: Descriptive Content */}
          <div className="lg:col-span-5 space-y-10">
            <FadeIn delay={0.2}>
              <h3 className="text-xl md:text-2xl font-serif italic mb-6 leading-relaxed">
                Every piece is a dialogue between ancient textile wisdom and
                modern utility.
              </h3>
              <p className="text-gray-500 text-sm md:text-base font-sans leading-relaxed tracking-wide">
                We believe in &quot;slow-made&quot; luxury. Each alanKRit bag
                begins its journey at the hands of master artisans, utilizing
                sustainable fibers that are woven to last generations, not
                seasons.
              </p>
            </FadeIn>

            <FadeIn
              delay={0.3}
              className="grid grid-cols-3 gap-4 pt-10 border-t border-gray-100"
            >
              {[
                { n: "01", t: "Heritage" },
                { n: "02", t: "Craft" },
                { n: "03", t: "Utility" },
              ].map((p) => (
                <div key={p.n} className="space-y-2">
                  <span className="text-xs font-serif italic text-gray-300 block">
                    {p.n}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest font-bold font-sans">
                    {p.t}
                  </span>
                </div>
              ))}
            </FadeIn>

            <FadeIn delay={0.4}>
              <button className="group flex items-center gap-6 text-[10px] uppercase tracking-[0.4em] font-bold border-b border-black pb-2 hover:text-gray-400 hover:border-gray-200 transition-all">
                The Atelier Story
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </button>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Narrative;
