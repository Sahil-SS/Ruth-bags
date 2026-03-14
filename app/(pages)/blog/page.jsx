"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, Clock, Share2 } from 'lucide-react';

// --- DATA WITH FULL CONTENT ---
const ALL_POSTS = [
  { 
    id: 1, 
    date: "March 12, 2026", 
    category: "Craftsmanship", 
    title: "The Art of Hand-Stitching: A Lost Tradition", 
    img: "https://images.unsplash.com/photo-1523475496153-3d6cc0f0bf19?q=80&w=1000",
    readTime: "6 min read",
    content: [
      { type: "p", text: "In an era of mass production and rapid consumption, the quiet rhythm of a needle passing through thick leather is a form of resistance. Hand-stitching, specifically the traditional saddle stitch, is the backbone of the Ruth Handcrafted archive." },
      { type: "h3", text: "The Strength of the Saddle Stitch" },
      { type: "p", text: "Unlike a sewing machine—where a single broken thread can cause the entire seam to unravel—the saddle stitch uses two needles and a single piece of waxed linen thread. Each stitch is essentially a knot. If one side fails, the other remains locked in place." },
      { type: "img", url: "https://images.unsplash.com/photo-1473188588955-719ac0841944?q=80&w=1000" },
      { type: "p", text: "This process cannot be rushed. It takes hours. It takes calloused fingers and a sharp eye. But the result is a piece of art that doesn't just last a season—it lasts a lifetime." }
    ]
  },
  { 
    id: 2, 
    date: "Feb 28, 2026", 
    category: "Sustainability", 
    title: "Sourcing Ethical Leathers from Italian Tanneries", 
    img: "https://images.unsplash.com/photo-1473188588955-719ac0841944?q=80&w=1000",
    readTime: "5 min read",
    content: [
      { type: "p", text: "Sustainability is not a marketing buzzword for us; it is a prerequisite. Our journey took us to the heart of Tuscany, where tanneries have been using vegetable tannins for centuries." },
      { type: "p", text: "Vegetable tanning uses natural barks and organic materials instead of harsh chemicals like chrome. It is better for the planet and results in leather that develops a beautiful, unique patina over time." }
    ]
  },
  { 
    id: 3, 
    date: "Jan 15, 2026", 
    category: "Design", 
    title: "Minimalism: Finding Beauty in Simple Forms", 
    img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000",
    readTime: "4 min read",
    content: [
      { type: "p", text: "We believe that every line must serve a purpose. If a pocket doesn't enhance the utility, it is removed. If a buckle is purely decorative, it is gone." },
      { type: "p", text: "Minimalism is often mistaken for emptiness. In reality, it is the intentionality of every single detail. By removing the noise, we allow the quality of the material and the silhouette to speak for itself." }
    ]
  }
];

const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  // Prevent scrolling when the reader is open
  useEffect(() => {
    if (selectedPost) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [selectedPost]);

  return (
    <main className="bg-white min-h-screen pt-32 pb-24 relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* --- HEADER --- */}
        <div className="border-b border-gray-100 pb-20 mb-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-8xl md:text-[12rem] font-serif italic lowercase tracking-tighter"
          >
            journal.
          </motion.h1>
          <p className="text-[10px] uppercase tracking-[0.6em] text-gray-400 font-black mt-8">Insights / Craft / Community</p>
        </div>

        {/* --- BLOG GRID --- */}
<div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-10 gap-y-12 md:gap-y-24">
          {ALL_POSTS.map((post, idx) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedPost(post)}
              className="group cursor-pointer"
            >
              {/* Image Aspect Ratio adjusted for tighter mobile grid */}
              <div className="relative aspect-[3/4] overflow-hidden mb-4 md:mb-8 bg-gray-50">
                <img 
                  src={post.img} 
                  className="w-full h-full object-cover group-hover:grayscale-0 transition-transform duration-[1.5s] group-hover:scale-110" 
                  alt={post.title}
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="space-y-2 md:space-y-4 px-1">
                <div className="flex flex-wrap items-center gap-2 md:gap-4">
                  <span className="text-[7px] md:text-[9px] uppercase tracking-widest text-gray-400 font-black">{post.category}</span>
                  <span className="hidden md:block h-[1px] w-8 bg-gray-200" />
                  <span className="text-[7px] md:text-[9px] uppercase tracking-widest text-gray-400">{post.date}</span>
                </div>
                {/* Responsive font size for the title */}
                <h2 className="text-lg md:text-3xl font-serif italic leading-tight lowercase">
                  {post.title}
                </h2>
                <button className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-bold border-b border-black pb-0.5">
                  Read +
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- FULL SCREEN ARTICLE READER --- */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div 
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="fixed inset-0 z-[2000] bg-white overflow-y-auto"
          >
            {/* Reader Navbar */}
            <nav className="sticky top-0 z-[2001] bg-white/80 backdrop-blur-md px-6 md:px-12 py-6 flex justify-between items-center border-b border-gray-50">
              <button 
                onClick={() => setSelectedPost(null)}
                className="flex items-center gap-3 text-[10px] uppercase tracking-widest font-black"
              >
                <ArrowLeft size={16} /> Back to Journal
              </button>
              <div className="flex items-center gap-6">
                <Share2 size={18} className="cursor-pointer text-gray-400 hover:text-black" />
                <X 
                  onClick={() => setSelectedPost(null)} 
                  className="cursor-pointer hover:rotate-90 transition-transform duration-300" 
                  size={24} 
                />
              </div>
            </nav>

            {/* Article Content */}
            <article className="max-w-[800px] mx-auto px-6 py-20">
              {/* Cover Image */}
              <motion.img 
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 1 }}
                src={selectedPost.img} 
                className="w-full aspect-video object-cover mb-20 shadow-2xl"
              />

              <div className="space-y-4 mb-12">
                <div className="flex items-center gap-3 text-gray-400 text-[10px] uppercase tracking-[0.3em] font-bold">
                  <span>{selectedPost.category}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Clock size={12}/> {selectedPost.readTime}</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-serif italic lowercase leading-tight tracking-tighter">
                  {selectedPost.title}
                </h1>
                <p className="text-gray-400 text-xs italic">{selectedPost.date}</p>
              </div>

              {/* Dynamic Content Rendering */}
              <div className="space-y-10">
                {selectedPost.content.map((block, i) => {
                  if (block.type === "p") return (
                    <p key={i} className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
                      {block.text}
                    </p>
                  );
                  if (block.type === "h3") return (
                    <h3 key={i} className="text-3xl font-serif italic pt-6">{block.text}</h3>
                  );
                  if (block.type === "img") return (
                    <img key={i} src={block.url} className="w-full h-auto py-10" alt="Editorial" />
                  );
                  return null;
                })}
              </div>

              {/* Footer CTA */}
              <div className="mt-32 pt-16 border-t border-gray-100 text-center">
                <p className="font-serif italic text-2xl mb-8">End of story.</p>
                <button 
                  onClick={() => setSelectedPost(null)}
                  className="bg-black text-white px-12 py-5 text-[10px] uppercase tracking-[0.4em] font-black rounded-full shadow-xl"
                >
                  Return to Archive
                </button>
              </div>
            </article>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default BlogPage;