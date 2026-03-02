"use client";
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, X, Check } from 'lucide-react';

// 1. DATA REMAINS THE SAME
const ALL_PRODUCTS = [
  { id: 1, name: "Atelier Tote", price: 420, cat: "Handbags", color: "#1a1a1a", colorName: "Black", img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800" },
  { id: 2, name: "Nomad Backpack", price: 580, cat: "Backpacks", color: "#bc9060", colorName: "Tan", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800" },
  { id: 3, name: "Luna Crossbody", price: 190, cat: "Crossbody", color: "#e3d5ca", colorName: "Beige", img: "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=800" },
  { id: 4, name: "City Pouch", price: 95, cat: "Accessories", color: "#1a1a1a", colorName: "Black", img: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800" },
  { id: 5, name: "Overnight Duffel", price: 890, cat: "Travel", color: "#4b5320", colorName: "Olive", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800" },
  { id: 6, name: "Minimalist Wallet", price: 85, cat: "Accessories", color: "#bc9060", colorName: "Tan", img: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800" },
];

const priceRanges = [
  { label: "All", min: 0, max: 10000 },
  { label: "Under $200", min: 0, max: 200 },
  { label: "$200 - $500", min: 200, max: 500 },
  { label: "Over $500", min: 500, max: 10000 }
];

const colors = [
  { name: "All", hex: "transparent" },
  { name: "Black", hex: "#1a1a1a" },
  { name: "Tan", hex: "#bc9060" },
  { name: "Beige", hex: "#e3d5ca" },
  { name: "Olive", hex: "#4b5320" }
];

// 2. MOVE THIS OUTSIDE THE MAIN COMPONENT
const FilterLayout = ({ activePriceRange, setActivePriceRange, selectedColor, setSelectedColor }) => (
  <div className="space-y-12">
    <div>
      <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-6 text-gray-400 font-sans">Price Range</h3>
      <div className="flex flex-col gap-3">
        {priceRanges.map((range) => (
          <button
            key={range.label}
            onClick={() => setActivePriceRange(range.label)}
            className={`text-[12px] uppercase tracking-widest text-left transition-all ${activePriceRange === range.label ? "text-black font-bold pl-2 border-l border-black" : "text-gray-400 hover:text-black"}`}
          >
            {range.label}
          </button>
        ))}
      </div>
    </div>

    <div>
      <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-6 text-gray-400 font-sans">Color</h3>
      <div className="grid grid-cols-3 gap-4">
        {colors.map((c) => (
          <button
            key={c.name}
            onClick={() => setSelectedColor(c.name)}
            className="flex flex-col items-center gap-2 group"
          >
            <div 
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${selectedColor === c.name ? 'border-black scale-110' : 'border-gray-100'}`}
              style={{ backgroundColor: c.name === "All" ? '#fff' : c.hex }}
            >
              {c.name === "All" && <div className="w-full h-[1px] bg-gray-200 rotate-45" />}
              {selectedColor === c.name && c.name !== "All" && <Check size={14} className={c.name === 'Beige' ? 'text-black' : 'text-white'} />}
            </div>
            <span className="text-[8px] uppercase tracking-tighter text-gray-500 font-sans">{c.name}</span>
          </button>
        ))}
      </div>
    </div>
  </div>
);

const ProductSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activePriceRange, setActivePriceRange] = useState("All");
  const [selectedColor, setSelectedColor] = useState("All");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    const range = priceRanges.find(r => r.label === activePriceRange);
    return ALL_PRODUCTS.filter(p => {
      const matchesCategory = activeCategory === "All" || p.cat === activeCategory;
      const matchesColor = selectedColor === "All" || p.colorName === selectedColor;
      const matchesPrice = p.price >= range.min && p.price <= range.max;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesColor && matchesPrice && matchesSearch;
    });
  }, [activeCategory, selectedColor, activePriceRange, searchQuery]);

  // Props to pass to the layout
  const filterProps = { activePriceRange, setActivePriceRange, selectedColor, setSelectedColor };

  return (
    <section className="bg-white min-h-screen px-4 md:px-12 py-20 relative">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col gap-10 mb-16">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl md:text-5xl font-serif italic">Archive</h2>
            <div className="relative group hidden md:block">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
              <input 
                type="text" 
                placeholder="Find a piece..."
                className="w-48 pl-6 py-1 border-b border-gray-100 focus:border-black outline-none transition-all text-[11px] uppercase tracking-widest font-sans"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Category Nav */}
          <div className="flex gap-4 overflow-x-auto no-scrollbar border-b border-gray-50 pb-4">
            {["All", "Handbags", "Backpacks", "Travel", "Accessories"].map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] uppercase tracking-[0.3em] font-sans whitespace-nowrap px-4 py-2 transition-all ${activeCategory === cat ? 'text-black font-bold border-b border-black' : 'text-gray-400'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-16">
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block w-56 shrink-0 sticky top-32 h-fit">
            <FilterLayout {...filterProps} />
            <button 
              onClick={() => {setActivePriceRange("All"); setSelectedColor("All"); setActiveCategory("All")}}
              className="mt-12 text-[10px] uppercase tracking-widest text-gray-300 hover:text-red-400 font-sans"
            >
              Clear Filters
            </button>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-x-4 md:gap-x-10 gap-y-16">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((p) => (
                  <motion.div layout key={p.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="group">
                    <div className="aspect-[4/5] bg-[#F9F9F7] mb-5 overflow-hidden border border-transparent group-hover:border-gray-100 transition-all">
                      <img src={p.img} alt={p.name} className="w-full h-full object-cover mix-blend-multiply transition-transform duration-1000 group-hover:scale-110" />
                    </div>
                    <div className="px-1">
                      <h4 className="text-[12px] md:text-base font-serif italic text-gray-900 leading-tight">{p.name}</h4>
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-2 font-sans">${p.price}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Mobile Filter Button */}
      <button 
        onClick={() => setIsMobileFilterOpen(true)}
        className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-black text-white px-10 py-4 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold flex items-center gap-3 shadow-xl font-sans"
      >
        <SlidersHorizontal size={14} /> Filter
      </button>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileFilterOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsMobileFilterOpen(false)} className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]" />
            <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "spring", damping: 25 }} className="fixed inset-x-0 bottom-0 h-[60vh] bg-white z-[101] rounded-t-[30px] p-10 overflow-y-auto">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-serif italic">Filter by</h3>
                <X size={20} onClick={() => setIsMobileFilterOpen(false)} />
              </div>
              <FilterLayout {...filterProps} />
              <button onClick={() => setIsMobileFilterOpen(false)} className="w-full bg-black text-white py-4 mt-10 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold font-sans">Apply</button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProductSection;