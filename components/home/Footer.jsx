"use client";
import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

// ── Reusable reveal — same config as Narrative & Newsletter ──────────────────
const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.9, delay, ease: [0.215, 0.61, 0.355, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

// ── Data ─────────────────────────────────────────────────────────────────────
const NAV = {
  Shop:    ["All Collections", "New Arrivals", "Best Sellers", "Limited Edition", "Sustainable Edit"],
  About:   ["Our Story", "Craftsmanship", "Sustainability", "Press", "Careers"],
  Support: ["Contact Us", "Size Guide", "Shipping & Returns", "FAQs", "Track Order"],
};

const SOCIALS = [
  { label: "Instagram", short: "IG", href: "https://instagram.com/alankrit.in" },
  { label: "Pinterest", short: "PN", href: "#" },
  { label: "Facebook",  short: "FB", href: "#" },
  { label: "Twitter",   short: "TW", href: "#" },
];

const PAYMENTS = ["Visa", "Mastercard", "Amex", "UPI"];

// ─────────────────────────────────────────────────────────────────────────────
const Footer = () => {
  const year = new Date().getFullYear();
  const [email, setEmail]         = useState("");
  const [focused, setFocused]     = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const footerRef                 = useRef(null);
  const isInView                  = useInView(footerRef, { once: true, amount: 0.1 });

  const handleSubmit = () => { if (email) setSubmitted(true); };

  return (
    <footer
      ref={footerRef}
      className="relative bg-[#0E0E0C] overflow-hidden"
    >
      {/* ── Same dot-grid texture as Hero (inverted) ── */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle,_#fff_1px,_transparent_1px)] bg-[length:40px_40px]" />
      </div>

      {/* ── Ambient top glow ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* ══════════════════════════════════════════════════════
          HERO BAND — large italic wordmark across full width
      ══════════════════════════════════════════════════════ */}
      <div className="border-b border-white/[0.06] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[1440px] mx-auto px-5 md:px-12 pt-20 md:pt-28 pb-10 md:pb-16"
        >
          {/* Section label — identical to Narrative */}
          <div className="flex items-center gap-4 mb-8">
            <motion.span
              initial={{ width: 0 }}
              animate={isInView ? { width: 40 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-[1px] bg-white/20 block"
            />
            <span className="text-[10px] uppercase tracking-[0.35em] text-white/30 font-sans font-medium">
              Crafted in India
            </span>
          </div>

          {/* Giant wordmark — breaks left/right like Hero title */}
          <div className="flex flex-col">
            <span className="text-[clamp(4.5rem,18vw,14rem)] font-serif font-light italic leading-[0.88] text-white/90 select-none">
              alan
            </span>
            <span className="text-[clamp(4.5rem,18vw,14rem)] font-serif font-light italic leading-[0.88] text-white/20 select-none self-end pl-4 md:pl-20">
              krit.
            </span>
          </div>

          {/* Tagline below wordmark */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-8 font-sans text-[10px] md:text-[11px] uppercase tracking-[0.28em] leading-loose text-white/30 max-w-xs"
          >
            Handcrafted luxury for the conscious modern nomad — tradition, sustainability, timeless design.
          </motion.p>
        </motion.div>
      </div>

      {/* ══════════════════════════════════════════════════════
          BODY — newsletter + nav links
      ══════════════════════════════════════════════════════ */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10">

          {/* ── Newsletter column ─────────────────────────── */}
          <FadeIn delay={0.1} className="lg:col-span-4">
            <div className="flex items-center gap-4 mb-5">
              <span className="h-[1px] w-6 bg-white/20 block" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-white/30 font-sans">
                Stay Connected
              </span>
            </div>

            <h3 className="font-serif font-light italic text-[clamp(1.8rem,5vw,2.8rem)] leading-[1.05] text-white/90 mb-5">
              The Inner<br />
              <span className="text-white/20">Circle.</span>
            </h3>

            <p className="font-sans text-[10px] uppercase tracking-[0.22em] leading-loose text-white/30 mb-8 max-w-[240px]">
              First access to limited drops, seasonal archives and artisan stories. No noise, just beauty.
            </p>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -8 }}
                >
                  {/* Input row */}
                  <div className="relative border-b border-white/15 focus-within:border-white/50 transition-colors duration-400 mb-1">
                    <input
                      type="email"
                      required
                      value={email}
                      placeholder="YOUR EMAIL ADDRESS"
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setFocused(true)}
                      onBlur={() => setFocused(false)}
                      className="w-full bg-transparent py-4 pr-20 outline-none text-white text-[10px] tracking-[0.22em] font-sans placeholder:text-white/20"
                    />
                    <button
                      onClick={handleSubmit}
                      className="absolute right-0 top-1/2 -translate-y-1/2 group"
                    >
                      <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-white/30 group-hover:text-white transition-colors duration-300">
                        Join →
                      </span>
                    </button>
                    {/* Focus underline — same animation as Newsletter section */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-[1px] bg-white origin-left"
                      animate={{ scaleX: focused ? 1 : 0 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                  <p className="font-sans text-[8px] uppercase tracking-[0.25em] text-white/15 mt-4">
                    No spam. Unsubscribe anytime.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-4 py-2"
                >
                  {/* Checkmark box — mirrors Newsletter success state */}
                  <div className="w-8 h-8 border border-white/20 flex items-center justify-center shrink-0">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <motion.path
                        d="M2 7L5.5 10.5L12 4"
                        stroke="white"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      />
                    </svg>
                  </div>
                  <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/40">
                    You're on the list.
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Social row */}
            <div className="flex gap-3 mt-12">
              {SOCIALS.map(({ short, label, href }, i) => (
                <motion.a
                  key={short}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.07 }}
                  whileTap={{ scale: 0.92 }}
                  className="w-10 h-10 border border-white/10 hover:border-white/40 flex items-center justify-center transition-colors duration-300 group"
                >
                  <span className="font-sans text-[9px] tracking-widest text-white/30 group-hover:text-white/80 transition-colors duration-300">
                    {short}
                  </span>
                </motion.a>
              ))}
            </div>
          </FadeIn>

          {/* ── Nav link columns ───────────────────────────── */}
          {Object.entries(NAV).map(([heading, links], gi) => (
            <FadeIn key={heading} delay={0.15 + gi * 0.08} className="lg:col-span-2">
              {/* Column heading — same style as ProductSection category bar */}
              <p className="text-[10px] uppercase tracking-[0.3em] font-sans font-medium text-white/25 mb-7 pb-4 border-b border-white/[0.06]">
                {heading}
              </p>
              <ul className="space-y-5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="group relative inline-block font-sans text-[11px] uppercase tracking-[0.18em] text-white/40 hover:text-white/90 transition-colors duration-300"
                    >
                      {link}
                      {/* Sliding underline — mirrors Hero secondary button */}
                      <span className="absolute -bottom-[2px] left-0 w-full h-[1px] bg-white/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </a>
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}

          {/* ── Contact column ─────────────────────────────── */}
          <FadeIn delay={0.39} className="lg:col-span-2">
            <p className="text-[10px] uppercase tracking-[0.3em] font-sans font-medium text-white/25 mb-7 pb-4 border-b border-white/[0.06]">
              Contact
            </p>
            <div className="space-y-5">
              <a
                href="mailto:hello@alankrit.in"
                className="group relative inline-block font-sans text-[11px] uppercase tracking-[0.18em] text-white/40 hover:text-white/90 transition-colors duration-300"
              >
                hello@alankrit.in
                <span className="absolute -bottom-[2px] left-0 w-full h-[1px] bg-white/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
              <a
                href="tel:+911234567890"
                className="group relative inline-block font-sans text-[11px] uppercase tracking-[0.18em] text-white/40 hover:text-white/90 transition-colors duration-300"
              >
                +91 123 456 7890
                <span className="absolute -bottom-[2px] left-0 w-full h-[1px] bg-white/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>

              {/* Store tag */}
              <div className="pt-4">
                <div className="inline-flex items-center gap-3 border border-white/10 px-4 py-3">
                  {/* Pulse dot */}
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/40 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white/60" />
                  </span>
                  <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-white/30">
                    Open · Mon–Sat
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          BOTTOM BAR
      ══════════════════════════════════════════════════════ */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-[1440px] mx-auto px-5 md:px-12 py-6">
          <FadeIn>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

              {/* Copyright */}
              <p className="font-sans text-[9px] uppercase tracking-[0.3em] text-white/20">
                © {year} alanKRit — All rights reserved
              </p>

              {/* Legal */}
              <div className="flex gap-5 flex-wrap">
                {["Privacy Policy", "Terms of Use", "Cookie Policy"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="font-sans text-[9px] uppercase tracking-[0.25em] text-white/20 hover:text-white/60 transition-colors duration-300"
                  >
                    {item}
                  </a>
                ))}
              </div>

              {/* Payment methods */}
              <div className="flex gap-2 flex-wrap">
                {PAYMENTS.map((p) => (
                  <span
                    key={p}
                    className="font-sans text-[8px] uppercase tracking-[0.2em] text-white/20 border border-white/[0.08] px-2 py-1"
                  >
                    {p}
                  </span>
                ))}
              </div>

            </div>
          </FadeIn>
        </div>
      </div>

      {/* ── Progress bar — echoes Hero's bottom progress line ── */}
      <motion.div
        className="h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />

    </footer>
  );
};

export default Footer;