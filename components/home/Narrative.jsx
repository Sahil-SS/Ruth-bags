"use client";
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * All images are from Unsplash — free under the Unsplash License
 * (free for commercial use, no attribution required)
 *
 * Left image:  Artisan hands stitching leather at a workbench
 *              → unsplash.com/photos/1552664-… by Amauri Mejía
 *
 * Right image: Structured tan leather tote on neutral background
 *              → unsplash.com/photos/5koG… by Ekaterina Shevchenko
 */

const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.9, delay, ease: [0.215, 0.61, 0.355, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const pillars = [
  { number: "01", label: "Heritage" },
  { number: "02", label: "Craft" },
  { number: "03", label: "Utility" },
];

const Narrative = () => {
  const sectionRef = useRef(null);
  useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section ref={sectionRef} className="bg-[#FAF9F6] overflow-hidden py-20 md:py-32">
      <div className="max-w-[1440px] mx-auto px-5 md:px-12">

        {/* ── Section Label ── */}
        <FadeIn>
          <div className="flex items-center gap-4 mb-10 md:mb-16">
            <span className="h-[1px] w-10 bg-gray-300 block" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-gray-400 font-sans font-medium">
              Heritage &amp; Heart
            </span>
          </div>
        </FadeIn>

        {/* ── Grid ── */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">

          {/* ── LEFT: Artisan hands at work ── */}
          <FadeIn delay={0.1} className="lg:col-span-4 order-2 lg:order-1">
            <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-stone-100 group">
              {/* Artisan hands stitching leather — Unsplash free license */}
              <img
                src="https://images.unsplash.com/photo-1622467827417-bbe2237067a9?q=80&w=800&auto=format&fit=crop"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.2s]"
                alt="Artisan stitching leather by hand"
              />
              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-10 h-10 border-t border-l border-white/30 pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-10 h-10 border-b border-r border-white/30 pointer-events-none" />
              {/* Tag */}
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1">
                <span className="text-[8px] uppercase tracking-[0.3em] text-white/70 font-sans">Process</span>
              </div>
            </div>
          </FadeIn>

          {/* ── CENTER: Text content ── */}
          <div className="lg:col-span-4 order-1 lg:order-2 flex flex-col justify-center py-4 lg:py-10 text-center lg:px-4">
            <FadeIn delay={0.05}>
              <h2 className="text-[clamp(2.6rem,10vw,5rem)] font-serif font-light italic leading-[0.92] mb-6 text-black">
                Artistry<br />
                in Every<br />
                <span className="text-gray-300">Fiber.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="font-sans text-[11px] uppercase tracking-[0.22em] leading-loose text-gray-500 max-w-[260px] mx-auto mb-10">
                Every alanKRit piece is a fusion of ancient textile wisdom and modern architectural utility.
              </p>
            </FadeIn>

            {/* Pillars — horizontal on mobile */}
            <FadeIn delay={0.3}>
              <div className="flex gap-6 justify-center mb-10 overflow-x-auto no-scrollbar pb-1">
                {pillars.map(({ number, label }) => (
                  <div key={number} className="flex flex-col items-center gap-1 shrink-0">
                    <span className="font-serif italic text-2xl text-gray-200">{number}</span>
                    <span className="text-[9px] uppercase tracking-[0.3em] text-gray-400 font-sans">{label}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex justify-center">
                <button className="group relative px-8 py-4 border border-black text-[10px] uppercase tracking-[0.3em] font-sans font-bold overflow-hidden w-full sm:w-auto">
                  <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                    The Atelier Story
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-black origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.45 }}
                  />
                </button>
              </div>
            </FadeIn>
          </div>

          {/* ── RIGHT: Product image ── */}
          <FadeIn delay={0.2} className="lg:col-span-4 order-3 flex flex-col gap-3">
            <div className="relative aspect-square lg:aspect-[4/5] overflow-hidden bg-stone-50 group flex-1">
              {/* Structured leather tan tote — Unsplash free license */}
              <img
                src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop"
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                alt="The Ikkat Tote — structured leather bag"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700" />

              {/* Caption — always visible on mobile, revealed on hover for desktop */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/40 to-transparent lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-[8px] uppercase tracking-[0.4em] text-white/70 font-sans text-right">Archive No. 042</p>
                <p className="text-[9px] uppercase tracking-[0.3em] text-white font-serif italic text-right">The Ikkat Tote</p>
              </div>
            </div>
            <p className="hidden lg:block text-[8px] uppercase tracking-[0.4em] text-gray-400 font-sans text-right">
              Archive No. 042 // The Ikkat Tote
            </p>
          </FadeIn>

        </div>

        {/* ── Marquee strip ── */}
        <FadeIn delay={0.5}>
          <div className="mt-16 md:mt-24 border-t border-gray-100 pt-8 overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 28, ease: "linear", repeat: Infinity }}
              className="flex gap-16 whitespace-nowrap w-max"
            >
              {Array(8).fill(null).map((_, i) => (
                <span key={i} className="text-[10px] uppercase tracking-[0.4em] text-gray-300 font-sans shrink-0">
                  Handcrafted&nbsp;&nbsp;·&nbsp;&nbsp;Sustainable&nbsp;&nbsp;·&nbsp;&nbsp;Timeless&nbsp;&nbsp;·&nbsp;&nbsp;alanKRit
                </span>
              ))}
            </motion.div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default Narrative;