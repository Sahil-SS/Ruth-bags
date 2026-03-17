"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Send } from 'lucide-react';
import { AdminInput, AdminTextArea, AdminSelect } from './AdminFields';

const JournalManager = () => {
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-12">
      <div className="border-b border-gray-100 pb-8">
        <h2 className="text-5xl font-serif italic lowercase tracking-tight">the journal editor.</h2>
        <p className="text-[10px] text-gray-400 uppercase tracking-[0.3em] mt-4 font-bold">Write & Publish Stories</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8 bg-white p-12 rounded-[3rem] border border-gray-100 shadow-sm">
          <AdminInput label="Story Title" placeholder="The Art of Patina..." />
          <div className="grid grid-cols-2 gap-4">
            <AdminSelect label="Category" options={['Craftsmanship', 'Design', 'Studio', 'Materials']} />
            <AdminInput label="Reading Time" placeholder="5 Min Read" />
          </div>
          <AdminTextArea label="The Content" placeholder="Once upon a time in the atelier..." />
          <button className="w-full bg-black text-white py-6 rounded-full text-[10px] uppercase tracking-[0.4em] font-black flex items-center justify-center gap-3">
            <Send size={16} /> Publish Entry
          </button>
        </div>

        <div className="space-y-8">
          <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-300">Live Preview</h4>
          <div className="bg-white p-8 rounded-[2rem] border border-gray-100 opacity-50 border-dashed">
            <p className="text-xs text-gray-400 italic">Visual preview will generate as you type...</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default JournalManager;