"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, X, UploadCloud, Trash2, Power } from 'lucide-react';
import { AdminInput, AdminTextArea, AdminSelect } from './AdminFields';

const InventoryManager = () => {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-12">
      <div className="flex justify-between items-end border-b border-gray-100 pb-8">
        <div>
          <h2 className="text-5xl font-serif italic lowercase tracking-tight">inventory.</h2>
          <p className="text-[10px] text-gray-400 uppercase tracking-[0.3em] mt-4 font-bold">Manage Handcrafted Pieces</p>
        </div>
        <button 
          onClick={() => setShowAddForm(!showAddForm)}
          className={`px-8 py-4 rounded-full text-[10px] uppercase tracking-widest font-black transition-all ${showAddForm ? 'bg-gray-100 text-black' : 'bg-black text-white shadow-xl'}`}
        >
          {showAddForm ? <X size={16}/> : '+ Add New Creation'}
        </button>
      </div>

      {showAddForm && (
        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <AdminInput label="Product Name" placeholder="e.g. Atelier Tote" />
              <div className="grid grid-cols-2 gap-4">
                <AdminInput label="Price (INR)" placeholder="24500" type="number" />
                <AdminSelect label="Category" options={['Handbags', 'Backpacks', 'Wallets', 'Rings', 'Travel']} />
              </div>
              <AdminTextArea label="The Story / Description" placeholder="Describe the materials and craft..." />
            </div>
            
            <div className="space-y-6 flex flex-col">
              <label className="text-[9px] uppercase tracking-[0.3em] font-black text-gray-400 ml-4">Imagery</label>
              <div className="flex-1 border-2 border-dashed border-gray-100 rounded-[2rem] flex flex-col items-center justify-center p-12 group hover:border-black transition-colors cursor-pointer">
                <UploadCloud className="text-gray-200 group-hover:text-black transition-colors mb-4" size={40} />
                <p className="text-[10px] uppercase tracking-widest text-gray-400 group-hover:text-black">Drop high-res visuals here</p>
              </div>
              <button className="w-full bg-black text-white py-6 rounded-full text-[10px] uppercase tracking-[0.4em] font-black">Publish Piece</button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Simplified Table for viewing existing items */}
      <div className="bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-sm">
        <div className="p-8 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
          <span className="text-[10px] uppercase tracking-widest font-black">Active Archive</span>
          <span className="text-[10px] text-gray-400 uppercase tracking-widest">16 Pieces Total</span>
        </div>
        <div className="divide-y divide-gray-50">
          {[1, 2].map(i => (
            <div key={i} className="p-8 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-6">
                <div className="w-12 h-16 bg-[#F9F9F7] rounded-lg" />
                <div>
                  <h4 className="font-serif italic text-xl lowercase">Atelier Bag</h4>
                  <p className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">₹24,500 • Handbags</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <button className="flex items-center gap-2 text-[9px] uppercase font-black text-green-600">
                  <Power size={14} /> In Stock
                </button>
                <button className="text-gray-300 hover:text-red-500 transition-colors"><Trash2 size={18}/></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default InventoryManager;