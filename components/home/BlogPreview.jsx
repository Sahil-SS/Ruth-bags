"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const FEATURED_POSTS = [
  {
    id: 1,
    date: "March 12, 2026",
    category: "Craftsmanship",
    title: "The Art of Hand-Stitching",
    excerpt: "Discover why we still use traditional saddle stitching for every leather piece...",
    img: "https://images.unsplash.com/photo-1523475496153-3d6cc0f0bf19?q=80&w=1000"
  },
  {
    id: 2,
    date: "Feb 28, 2026",
    category: "Sustainability",
    title: "Sourcing Ethical Leathers",
    excerpt: "Our journey to finding the most sustainable vegetable-tanned leathers...",
    img: "https://images.unsplash.com/photo-1473188588955-719ac0841944?q=80&w=1000"
  },
  {
    id: 3,
    date: "Jan 15, 2026",
    category: "Design",
    title: "Minimalism in Simple Forms",
    excerpt: "How the philosophy of 'less is more' drives our seasonal design process...",
    img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000"
  }
];

const BlogPreview = () => {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-[1440px] mx-auto px-5 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-7xl font-serif italic lowercase tracking-tighter mb-4 md:mb-6">the journal.</h2>
            <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold">Stories behind the craft.</p>
          </div>
          <Link href="/blog" className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] font-black border-b border-black pb-2 transition-all">
            View All <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform"/>
          </Link>
        </div>

        {/* Blog Grid: 2 columns on mobile, 3 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-8 gap-y-10 md:gap-y-12">
          {FEATURED_POSTS.map((post) => (
            <motion.div 
              key={post.id}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] md:aspect-[16/10] overflow-hidden mb-4 md:mb-8 bg-gray-100">
                <img 
                  src={post.img} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" 
                />
                <div className="absolute top-2 left-2 md:top-4 md:left-4">
                  <span className="bg-white/90 backdrop-blur-md px-2 py-1 md:px-4 md:py-2 text-[7px] md:text-[8px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="space-y-2 md:space-y-4">
                <p className="text-[8px] md:text-[10px] text-gray-400 font-medium uppercase tracking-widest">{post.date}</p>
                <h3 className="text-lg md:text-2xl font-serif italic leading-tight group-hover:text-gray-600 transition-colors lowercase">
                  {post.title}
                </h3>
                {/* Excerpt hidden on mobile to keep the 2-column grid clean */}
                <p className="hidden md:block text-gray-500 text-sm leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;