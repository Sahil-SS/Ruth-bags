"use client";
import React, { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.3 });

  const footerLinks = {
    shop: [
      { name: "All Collections", href: "#" },
      { name: "New Arrivals", href: "#" },
      { name: "Best Sellers", href: "#" },
      { name: "Limited Edition", href: "#" },
      { name: "Sustainable Edit", href: "#" }
    ],
    about: [
      { name: "Our Story", href: "#" },
      { name: "Craftsmanship", href: "#" },
      { name: "Sustainability", href: "#" },
      { name: "Press", href: "#" },
      { name: "Careers", href: "#" }
    ],
    support: [
      { name: "Contact Us", href: "#" },
      { name: "Size Guide", href: "#" },
      { name: "Shipping & Returns", href: "#" },
      { name: "FAQs", href: "#" },
      { name: "Track Order", href: "#" }
    ]
  };

  const socialLinks = [
    { name: "Instagram", icon: "IG", href: "https://instagram.com/alankrit.in", color: "hover:bg-gradient-to-br from-purple-500 to-pink-500" },
    { name: "Pinterest", icon: "PN", href: "#", color: "hover:bg-red-600" },
    { name: "Facebook", icon: "FB", href: "#", color: "hover:bg-blue-600" },
    { name: "Twitter", icon: "TW", href: "#", color: "hover:bg-sky-500" }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const floatingShapeVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  return (
    <footer ref={footerRef} className="relative bg-gradient-to-b from-white to-stone-50/30 border-t border-gray-100 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Geometric Shapes */}
        <motion.div 
          variants={floatingShapeVariants}
          animate="animate"
          className="absolute top-20 right-[10%] w-64 h-64 bg-amber-100/20 rounded-full blur-3xl"
        />
        <motion.div 
          variants={floatingShapeVariants}
          animate="animate"
          custom={1}
          className="absolute bottom-40 left-[5%] w-80 h-80 bg-stone-100/30 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-transparent via-gray-100/10 to-transparent rounded-full blur-3xl"
        />

        {/* Decorative Lines */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-[0.02]">
          <pattern id="pattern-lines" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 0 0 L 60 60" stroke="currentColor" strokeWidth="0.5" className="text-gray-900" />
            <path d="M 60 0 L 0 60" stroke="currentColor" strokeWidth="0.5" className="text-gray-900" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-lines)" />
        </svg>
      </div>

      {/* Main Footer */}
      <div className="max-w-[1440px] mx-auto px-6 pt-20 pb-12 relative z-10">
        {/* Newsletter Section - Enhanced */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20 pb-16 border-b border-gray-200 relative"
        >
          {/* Decorative Element */}
          <motion.div 
            initial={{ width: 0 }}
            animate={isInView ? { width: "100%" } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute -bottom-[1px] left-0 h-[2px] bg-gradient-to-r from-transparent via-amber-300 to-transparent"
          />

          <div className="max-w-3xl mx-auto text-center relative">
            {/* Animated Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-amber-50 to-stone-100 rounded-full flex items-center justify-center shadow-lg"
            >
              <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </motion.div>

            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-[10px] uppercase tracking-[0.3em] text-amber-600 font-sans"
            >
              Stay Connected
            </motion.span>
            
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif italic mt-4 mb-4"
            >
              Join the Alankrit <br />
              <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Inner Circle</span>
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="text-sm text-gray-500 mb-8 font-sans max-w-lg mx-auto"
            >
              Be the first to know about new collections, artisan stories, and receive <span className="text-gray-800 font-medium">10% off</span> your first order.
            </motion.p>
            
            {/* Newsletter Form with Animation */}
            <motion.form 
              onSubmit={handleSubscribe}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto relative"
            >
              <div className="flex-1 relative">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  className="w-full px-6 py-4 bg-white border border-gray-200 focus:border-amber-400 outline-none transition-all duration-300 font-sans text-sm rounded-none shadow-sm hover:shadow-md focus:shadow-lg"
                  required
                />
                <motion.div 
                  className="absolute bottom-0 left-0 h-[2px] bg-amber-400"
                  initial={{ width: "0%" }}
                  whileInView={{ width: email ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              <motion.button 
                type="submit"
                className="group relative px-8 py-4 bg-black text-white overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 uppercase tracking-[0.2em] text-xs font-sans flex items-center gap-2">
                  Subscribe
                  <motion.svg 
                    className="w-4 h-4"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </motion.svg>
                </span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.button>
            </motion.form>

            {/* Success Message */}
            <AnimatePresence>
              {isSubscribed && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-green-50 text-green-600 px-6 py-2 rounded-full text-sm font-sans whitespace-nowrap"
                >
                  ✨ Thanks for subscribing!
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Links Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-16"
        >
          {/* Brand Column */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-3 relative group"
          >
            <div className="relative">
              <motion.h4 
                className="text-3xl font-serif italic mb-6 relative inline-block"
                whileHover={{ scale: 1.05 }}
              >
                alankrit
                <motion.div 
                  className="absolute -bottom-2 left-0 h-[2px] bg-amber-400"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.h4>
              <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-xs">
                Handcrafted luxury for the conscious modern nomad. Each piece tells a story of tradition, sustainability, and timeless design.
              </p>
              <div className="flex items-center gap-4">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-sans">
                  Crafted in India
                </span>
                <motion.span 
                  animate={{ width: [0, 32, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-8 h-[1px] bg-amber-300"
                />
              </div>
            </div>
          </motion.div>

          {/* Shop Links */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h5 className="text-xs uppercase tracking-[0.2em] font-sans text-gray-400 mb-6 relative inline-block">
              Shop
              <motion.span 
                className="absolute -bottom-1 left-0 w-full h-[1px] bg-amber-300"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
              />
            </h5>
            <ul className="space-y-4">
              {footerLinks.shop.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 * index }}
                >
                  <a 
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-amber-600 transition-colors duration-300 font-sans inline-block relative group"
                  >
                    {link.name}
                    <motion.span 
                      className="absolute -bottom-1 left-0 w-full h-[1px] bg-amber-400"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* About Links */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h5 className="text-xs uppercase tracking-[0.2em] font-sans text-gray-400 mb-6 relative inline-block">
              About
              <motion.span 
                className="absolute -bottom-1 left-0 w-full h-[1px] bg-amber-300"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
              />
            </h5>
            <ul className="space-y-4">
              {footerLinks.about.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 * index }}
                >
                  <a 
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-amber-600 transition-colors duration-300 font-sans inline-block relative group"
                  >
                    {link.name}
                    <motion.span 
                      className="absolute -bottom-1 left-0 w-full h-[1px] bg-amber-400"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h5 className="text-xs uppercase tracking-[0.2em] font-sans text-gray-400 mb-6 relative inline-block">
              Support
              <motion.span 
                className="absolute -bottom-1 left-0 w-full h-[1px] bg-amber-300"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
              />
            </h5>
            <ul className="space-y-4">
              {footerLinks.support.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 * index }}
                >
                  <a 
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-amber-600 transition-colors duration-300 font-sans inline-block relative group"
                  >
                    {link.name}
                    <motion.span 
                      className="absolute -bottom-1 left-0 w-full h-[1px] bg-amber-400"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-3 relative"
          >
            <h5 className="text-xs uppercase tracking-[0.2em] font-sans text-gray-400 mb-6 relative inline-block">
              Connect
              <motion.span 
                className="absolute -bottom-1 left-0 w-full h-[1px] bg-amber-300"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
              />
            </h5>
            
            {/* Email with animation */}
            <motion.a 
              href="mailto:hello@alankrit.in"
              className="block text-sm text-gray-600 hover:text-amber-600 transition-colors mb-4 font-sans group relative inline-block"
              whileHover={{ x: 5 }}
            >
              hello@alankrit.in
              <motion.span 
                className="absolute -bottom-1 left-0 w-full h-[1px] bg-amber-400"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            
            {/* Phone with animation */}
            <motion.a 
              href="tel:+911234567890"
              className="block text-sm text-gray-600 hover:text-amber-600 transition-colors mb-6 font-sans group relative inline-block"
              whileHover={{ x: 5 }}
            >
              +91 123 456 7890
              <motion.span 
                className="absolute -bottom-1 left-0 w-full h-[1px] bg-amber-400"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            {/* Social Icons with hover effects */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 * index }}
                >
                  <div className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:${social.color} transition-all duration-300 hover:shadow-lg`}>
                    <span className="text-xs font-sans tracking-wide text-gray-600 group-hover:text-white">
                      {social.icon}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar with enhanced styling */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 relative"
        >
          {/* Decorative gradient line */}
          <div className="absolute -top-[1px] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-300 to-transparent opacity-50" />

          {/* Copyright with animation */}
          <motion.div 
            className="flex items-center gap-4"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-sans">
              © {currentYear} alankrit
            </p>
            <span className="text-gray-300">|</span>
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-sans">
              All rights reserved
            </p>
          </motion.div>

          {/* Legal Links */}
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Cookie Policy"].map((item, index) => (
              <motion.a 
                key={item}
                href="#" 
                className="text-[10px] uppercase tracking-[0.2em] text-gray-400 hover:text-amber-600 transition-colors font-sans relative group"
                whileHover={{ y: -2 }}
              >
                {item}
                <motion.span 
                  className="absolute -bottom-1 left-0 w-full h-[1px] bg-amber-400"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Payment Icons with animation */}
          <motion.div 
            className="flex gap-3"
            whileHover={{ scale: 1.05 }}
          >
            {["Visa", "Mastercard", "Amex", "UPI"].map((payment, index) => (
              <motion.span 
                key={payment}
                className="text-[8px] uppercase tracking-[0.2em] text-gray-300 font-sans px-2 py-1 border border-gray-200 rounded hover:border-amber-300 hover:text-amber-600 transition-all cursor-default"
                whileHover={{ y: -2 }}
              >
                {payment}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Made with love note - animated */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
          className="mt-8 text-center relative"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <p className="text-[8px] uppercase tracking-[0.3em] text-gray-300 font-sans">
              Handcrafted with 
              <motion.span 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block mx-1 text-amber-400"
              >
                ♥
              </motion.span> 
              in India
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;