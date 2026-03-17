"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquare } from 'lucide-react';
import { AdminInput, AdminTextArea } from './AdminFields';

const ReviewManager = () => {
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-12">
      <div className="border-b border-gray-100 pb-8">
        <h2 className="text-5xl font-serif italic lowercase tracking-tight">client reviews.</h2>
        <p className="text-[10px] text-gray-400 uppercase tracking-[0.3em] mt-4 font-bold">Curate Social Proof</p>
      </div>

      <div className="max-w-2xl bg-white p-12 rounded-[3rem] border border-gray-100 shadow-sm space-y-8">
        <div className="flex gap-2 text-black mb-4">
          {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} fill="currentColor" />)}
        </div>
        <AdminTextArea label="The Words" placeholder="A masterpiece of leatherwork..." />
        <AdminInput label="Client Identity" placeholder="Elena R., Milan" />
        <button className="w-full bg-black text-white py-6 rounded-full text-[10px] uppercase tracking-[0.4em] font-black">
          Add Testimonial
        </button>
      </div>
    </motion.div>
  );
};

export default ReviewManager;