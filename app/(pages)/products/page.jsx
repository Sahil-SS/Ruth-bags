"use client";
import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, SlidersHorizontal, Check } from 'lucide-react';
import Link from 'next/link';

// --- ENRICHED PRODUCT DATABASE ---
const PRODUCTS = [
  { id: 1, name: "Atelier Handbag", category: "Handbags", price: "₹24,500", img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000" },
  { id: 2, name: "City Backpack", category: "Backpacks", price: "₹18,200", img: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=1000" },
  { id: 3, name: "Slouchy Tote", category: "Totes", price: "₹12,500", img: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1000" },
  { id: 4, name: "Minimalist Wallet", category: "Wallets", price: "₹4,500", img: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1000" },
  { id: 5, name: "Signature Ring", category: "Rings", price: "₹8,900", img: "https://images.unsplash.com/photo-1603912627214-923b3f57242d?q=80&w=1000" },
  { id: 6, name: "Voyage Duffle", category: "Travel", price: "₹32,000", img: "https://images.unsplash.com/photo-1553531384-cc64ac80f931?q=80&w=1000" },
  { id: 7, name: "Luna Hobo", category: "Handbags", price: "₹21,000", img: "https://images.unsplash.com/photo-1591348113524-7389a9f53835?q=80&w=1000" },
  { id: 8, name: "Trek Backpack", category: "Backpacks", price: "₹15,500", img: "https://images.unsplash.com/photo-1577733966973-d680bfee2e99?q=80&w=1000" },
  { id: 9, name: "Canvas Tote", category: "Totes", price: "₹9,000", img: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1000" },
  { id: 10, name: "Fold Wallet", category: "Wallets", price: "₹5,200", img: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=1000" },
  { id: 11, name: "Gold Band", category: "Rings", price: "₹14,500", img: "https://images.unsplash.com/photo-1598560912005-59a395b1a48e?q=80&w=1000" },
  { id: 12, name: "Weekender", category: "Travel", price: "₹28,500", img: "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=1000" },
  { id: 13, name: "Classic Clutch", category: "Handbags", price: "₹16,500", img: "https://images.unsplash.com/photo-1566150905458-1bf1fd15dcb1?q=80&w=1000" },
  { id: 14, name: "Urban Pack", category: "Backpacks", price: "₹19,000", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000" },
  { id: 15, name: "Market Tote", category: "Totes", price: "₹8,500", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000" },
  { id: 16, name: "Zip Wallet", category: "Wallets", price: "₹3,900", img: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=1000" }
];

const FILTER_DATA = {
  Categories: ["All", "Handbags", "Backpacks", "Totes", "Wallets", "Rings", "Travel"],
  Colors: [
    { name: "Obsidian", hex: "#000000" },
    { name: "Sienna", hex: "#88540B" },
    { name: "Bone", hex: "#F5F5F0" },
    { name: "Sage", hex: "#9CAF88" }
  ],
  Sizes: ["Small", "Standard", "Oversized"],
  Price: ["Under ₹10,000", "₹10,000 - ₹20,000", "Over ₹20,000"]
};

const ProductArchiveContent = () => {
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get('category') || "All";
  
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  useEffect(() => {
    setSelectedCategory(categoryFromUrl);
  }, [categoryFromUrl]);

  const filteredProducts = selectedCategory === "All" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <section className="bg-white min-h-screen pt-32 pb-32 overflow-x-hidden relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* --- DYNAMIC HEADER --- */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-gray-100 pb-12">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
          >
            <h1 className="text-7xl md:text-9xl font-serif italic text-black/90 lowercase tracking-tighter">
              {selectedCategory === "All" ? "the archive." : `${selectedCategory}.`}
            </h1>
            <div className="flex items-center gap-4 mt-6">
              <p className="font-sans text-xs uppercase tracking-[0.5em] text-gray-400 font-bold">
                Ruth Handcrafted / {selectedCategory}
              </p>
              <span className="hidden md:block h-[1px] w-12 bg-gray-200" />
              <p className="text-[10px] uppercase tracking-widest text-gray-300">
                {filteredProducts.length} pieces curated
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* --- DESKTOP SIDEBAR --- */}
          <aside className="lg:col-span-3 space-y-16 sticky top-32 h-fit hidden lg:block">
            {Object.entries(FILTER_DATA).map(([title, options]) => (
              <div key={title} className="space-y-8">
                <h3 className="text-[11px] uppercase tracking-[0.4em] font-black text-gray-300">
                  {title}
                </h3>
                <div className="space-y-4">
                  {title === "Colors" ? (
                    <div className="grid grid-cols-2 gap-3">
                      {options.map((color) => (
                        <button key={color.name} className="flex items-center gap-3 group text-[11px] tracking-widest uppercase text-gray-400 hover:text-black transition-all">
                          <span className="w-3 h-3 rounded-full border border-black/5" style={{ backgroundColor: color.hex }} />
                          {color.name}
                        </button>
                      ))}
                    </div>
                  ) : (
                    options.map((opt) => (
                      <button 
                        key={opt} 
                        onClick={() => setSelectedCategory(opt)}
                        className="flex items-center gap-4 w-full group text-left"
                      >
                        <div className={`w-4 h-4 border flex items-center justify-center transition-all duration-500 ${selectedCategory === opt ? 'bg-black border-black' : 'border-gray-200 group-hover:border-black'}`}>
                          {selectedCategory === opt && <Check size={10} className="text-white" />}
                        </div>
                        <span className={`text-[13px] uppercase tracking-[0.2em] transition-all duration-500 ${selectedCategory === opt ? 'text-black font-bold translate-x-2' : 'text-gray-400'}`}>
                          {opt}
                        </span>
                      </button>
                    ))
                  )}
                </div>
              </div>
            ))}
          </aside>

          {/* --- PRODUCT GRID --- */}
          <main className="lg:col-span-9">
            <AnimatePresence mode="wait">
              {filteredProducts.length > 0 ? (
                <motion.div 
                  key={selectedCategory}
                  initial="hidden" animate="show" exit="hidden"
                  variants={{
                    hidden: { opacity: 0 },
                    show: { opacity: 1, transition: { staggerChildren: 0.08 } }
                  }}
                  className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-12 gap-y-16 md:gap-y-24"
                >
{filteredProducts.map((product) => (
          /* ADD THE LINK WRAPPER HERE */
          <Link href={`/order/${product.id}`} key={product.id} className="block group cursor-pointer">
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
              }}
            >
              {/* All your existing card content (image, h3, price, etc.) stays inside here */}
              <div className="relative aspect-[3/4] bg-[#F9F9F7] overflow-hidden mb-6 md:mb-8">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700 z-10" />
                <motion.img 
                  src={product.img} 
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-[1.5s] ease-out group-hover:scale-110" 
                />
              </div>
              <div className="space-y-4 px-1">
                <h3 className="text-xl md:text-2xl font-serif italic text-gray-900 lowercase leading-tight">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">{product.category}</p>
                  <p className="text-sm md:text-lg font-sans font-light tracking-tighter text-gray-900">{product.price}</p>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
              ) : (
                <div className="h-[60vh] flex flex-col items-center justify-center">
                  <p className="font-serif italic text-3xl text-gray-300">No pieces found.</p>
                  <button onClick={() => setSelectedCategory("All")} className="mt-8 border-b border-black text-[10px] uppercase tracking-[0.4em] font-bold pb-2">Reset</button>
                </div>
              )}
            </AnimatePresence>
          </main>
        </div>
      </div>

      {/* --- MOBILE FLOATING FILTER BUTTON --- */}
      <motion.button 
        initial={{ y: 100 }} animate={{ y: 0 }}
        onClick={() => setIsMobileFilterOpen(true)}
        className="lg:hidden fixed bottom-18 left-1/2 -translate-x-1/2 z-[90] flex items-center gap-3 bg-black/90 backdrop-blur-xl text-white px-8 py-5 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 active:scale-90 transition-transform"
      >
        <SlidersHorizontal size={14} />
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Filter Archive</span>
      </motion.button>

      {/* --- ENHANCED MOBILE FILTER DRAWER --- */}
      <AnimatePresence>
        {isMobileFilterOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsMobileFilterOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[1000] lg:hidden"
            />
            <motion.div 
              initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed inset-x-0 bottom-0 h-[75vh] bg-white z-[1001] rounded-t-[3rem] p-8 lg:hidden overflow-y-auto shadow-2xl"
            >
              <div className="w-12 h-1 bg-gray-200 rounded-full mx-auto mb-8" />
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-4xl font-serif italic">Filters</h2>
                <button onClick={() => setIsMobileFilterOpen(false)} className="p-3 bg-gray-50 rounded-full"><X size={20}/></button>
              </div>

              <div className="space-y-14 pb-32">
                {Object.entries(FILTER_DATA).map(([title, options]) => (
                  <div key={title}>
                    <h3 className="text-[10px] uppercase tracking-[0.5em] font-black text-gray-300 mb-8">{title}</h3>
                    <div className="flex flex-wrap gap-4">
                      {options.map((opt) => {
                        const isColor = title === "Colors";
                        const name = isColor ? opt.name : opt;
                        const active = selectedCategory === name;

                        return (
                          <button 
                            key={name}
                            onClick={() => { if(!isColor) setSelectedCategory(name); }}
                            className={`flex items-center gap-3 px-6 py-4 rounded-full border transition-all duration-500 ${
                              active ? 'bg-black border-black text-white shadow-xl scale-105' : 'bg-gray-50 border-gray-100 text-gray-500'
                            }`}
                          >
                            {isColor && (
                              <span className="w-4 h-4 rounded-full border border-black/10" style={{ backgroundColor: opt.hex }} />
                            )}
                            <span className="text-[10px] uppercase tracking-widest font-bold">{name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <div className="fixed bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-white via-white to-transparent">
                <button 
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="w-full bg-black text-white py-6 rounded-2xl text-[10px] uppercase tracking-[0.4em] font-bold shadow-2xl"
                >
                  Apply Selection
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

const ProductArchive = () => (
  <Suspense fallback={
    <div className="h-screen flex items-center justify-center bg-white">
      <div className="w-12 h-[1px] bg-black animate-pulse" />
    </div>
  }>
    <ProductArchiveContent />
  </Suspense>
);

export default ProductArchive;