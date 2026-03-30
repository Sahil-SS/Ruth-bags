"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Heart, ShoppingBag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Navbar from '@/components/home/Navbar';

const PRODUCTS = [
  { id: 1, name: "Atelier Handbag", category: "Handbags", price: "24,500", img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000" },
  { id: 2, name: "City Backpack", category: "Backpacks", price: "18,200", img: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=1000" },
  // ... rest of your products
];

// Color Mapping for UI Swatches
const COLOR_MAP = [
  { name: "Obsidian", hex: "#1a1a1a" },
  { name: "Sienna", hex: "#88540B" },
  { name: "Bone", hex: "#F5F5F0" }
];

const OrderPage = () => {
  const params = useParams();
  const productId = parseInt(params.id);
  const product = PRODUCTS.find(p => p.id === productId) || PRODUCTS[0];

  const [selectedColor, setSelectedColor] = useState("Obsidian");
  const [selectedSize, setSelectedSize] = useState('Standard');

  const handleAcquisition = () => {
    const phoneNumber = "9681122088"; 
    const message = `Hello Ruth Handcrafted, I would like to acquire the following piece:
    
*Product:* ${product.name}
*ID:* #RH-${product.id.toString().padStart(4, '0')}
*Category:* ${product.category}
*Color:* ${selectedColor}
*Size:* ${selectedSize}
*Price:* ₹${product.price}

Please let me know the next steps for payment and shipping.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <main className="min-h-screen bg-white mt-20">
    <Navbar />
      {/* <nav className="fixed top-8 left-8 z-50">
        <Link href="/archive" className="flex items-center gap-2 text-[11px] uppercase tracking-[0.4em] font-bold text-gray-400 hover:text-black transition-colors">
          <ArrowLeft size={16} /> Return to Archive
        </Link>
      </nav> */}

      <div className="flex flex-col lg:flex-row max-w-[1800px] mx-auto">
        
        {/* --- LEFT SIDE: GRID GALLERY --- */}
        <div className="lg:w-[55%] w-full p-4 md:p-8 lg:p-12 lg:pt-24">
          <div className="grid grid-cols-2 gap-3">
            {[1, 2, 3, 4].map((idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative aspect-[4/5] bg-[#f9f9f9] overflow-hidden"
              >
                <img src={product.img} className="w-full h-full object-cover grayscale-[0.1] hover:grayscale-0 transition-all duration-700" alt="Product view" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- RIGHT SIDE: PRODUCT DETAILS --- */}
        <div className="lg:w-[45%] w-full p-8 md:p-16 lg:p-20 lg:pt-24 flex flex-col justify-start">
          <div className="max-w-md w-full sticky top-24">
            <header className="mb-12">
              <div className="flex justify-between items-start mb-4">
                <h1 className="text-5xl md:text-6xl font-serif italic tracking-tighter leading-tight">
                  {product.name}
                </h1>
                <Heart size={22} className="text-gray-300 hover:text-red-400 cursor-pointer mt-3 transition-colors" />
              </div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-gray-400 mb-6 font-bold">Ref: #RH-{product.id.toString().padStart(4, '0')}</p>
              <p className="text-3xl font-light tracking-tighter text-gray-900">₹{product.price}</p>
            </header>

            <div className="space-y-12">
              
              {/* Visual Color Selection */}
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.5em] font-black text-gray-300 mb-6">Select Palette</h4>
                <div className="flex gap-6">
                  {COLOR_MAP.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className="group flex flex-col items-center gap-3"
                    >
                      <div className={`w-10 h-10 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                        selectedColor === color.name ? 'border-black scale-110' : 'border-transparent hover:border-gray-200'
                      }`}>
                        <span 
                          className="w-7 h-7 rounded-full shadow-inner" 
                          style={{ backgroundColor: color.hex }}
                        />
                      </div>
                      <span className={`text-[9px] uppercase tracking-widest font-bold transition-colors ${
                        selectedColor === color.name ? 'text-black' : 'text-gray-400'
                      }`}>
                        {color.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.5em] font-black text-gray-300 mb-6">Select Dimensions</h4>
                <div className="flex gap-3">
                  {["Small", "Standard", "Oversized"].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`flex-1 py-4 text-[11px] uppercase tracking-[0.2em] font-bold border transition-all duration-300 ${
                        selectedSize === size 
                        ? 'bg-black text-white border-black shadow-lg' 
                        : 'bg-white text-gray-400 border-gray-100 hover:border-gray-300'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-8 space-y-8">
                <button 
                  onClick={handleAcquisition}
                  className="w-full bg-black text-white py-7 rounded-full text-[12px] uppercase tracking-[0.5em] font-black shadow-2xl hover:bg-gray-900 transition-all flex items-center justify-center gap-4 active:scale-95"
                >
                  <ShoppingBag size={18} /> Wish to Buy
                </button>
                
                <div className="flex justify-between items-center border-t border-gray-50 pt-8">
                  <div className="flex items-center gap-3 text-[9px] uppercase tracking-widest font-bold text-gray-400">
                    <ShieldCheck size={16} className="text-gray-900"/> Secure Inquiry
                  </div>
                  <div className="flex items-center gap-3 text-[9px] uppercase tracking-widest font-bold text-gray-400">
                    <Truck size={16} className="text-gray-900"/> White Glove Delivery
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default OrderPage;