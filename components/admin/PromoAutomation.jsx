"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, Link as LinkIcon, Lock, 
  MessageSquare, Copy, Check, Clock, 
  Zap, Share2, EyeOff, Plus
} from 'lucide-react';
import { AdminInput, AdminSelect, AdminTextArea } from './AdminFields';

const PromoAutomation = () => {
  const [copied, setCopied] = useState(false);

  // Mock State for Quick Replies
  const quickReplies = [
    { id: 1, title: "Leather Care", text: "To maintain the grain of your vegetable-tanned leather, we recommend a pH-neutral conditioner applied with a soft microfiber cloth once every quarter." },
    { id: 2, title: "Shipping Timeline", text: "Our pieces are handcrafted upon order. Please allow 7-10 business days for dispatch. You will receive a tracking link via email." },
    { id: 3, title: "Custom Initials", text: "We offer complimentary gold-foil embossing for up to 3 initials. Would you like to add this to your piece?" }
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-12 pb-20">
      
      {/* SECTION HEADER */}
      <div className="border-b border-gray-100 pb-8">
        <h2 className="text-5xl font-serif italic lowercase tracking-tight">drops & automation.</h2>
        <p className="text-[10px] text-gray-400 uppercase tracking-[0.3em] mt-4 font-bold">Manage Exclusivity & High-Touch Sales</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* --- LEFT COLUMN: PROMOTION & DROPS --- */}
        <div className="space-y-8">
          <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm space-y-8">
            <div className="flex items-center gap-3 mb-2">
              <Calendar size={20} className="text-black" />
              <h3 className="text-xl font-serif italic">Scheduled Launch</h3>
            </div>
            
            <div className="space-y-6">
              <AdminSelect label="Select Product to Drop" options={['Luna Hobo', 'Atelier Tote', 'Voyage Duffle']} />
              <div className="grid grid-cols-2 gap-4">
                <AdminInput label="Launch Date" type="date" />
                <AdminInput label="Launch Time" type="time" />
              </div>
              <div className="p-6 bg-gray-50 rounded-[2rem] border border-dashed border-gray-200">
                <div className="flex items-center gap-3 text-gray-400">
                  <Clock size={14} />
                  <span className="text-[9px] uppercase tracking-widest font-black">Automatic Go-Live Active</span>
                </div>
              </div>
              <button className="w-full bg-black text-white py-5 rounded-full text-[10px] uppercase tracking-[0.4em] font-black shadow-lg">
                Schedule Product Drop
              </button>
            </div>
          </div>

          <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <Lock size={20} className="text-black" />
              <h3 className="text-xl font-serif italic">Private Access Links</h3>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">Generate a hidden URL for VIP clients. This product will not appear in the public archive.</p>
            <div className="flex gap-4">
              <div className="flex-1 bg-[#F9F9F7] px-6 py-4 rounded-full text-[10px] text-gray-500 font-mono truncate">
                ruth.com/archive/vip-luna-hobo-992
              </div>
              <button className="p-4 bg-black text-white rounded-full hover:scale-110 transition-transform shadow-lg">
                <Share2 size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: WHATSAPP AUTOMATION --- */}
        <div className="space-y-8">
          <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm space-y-8">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <Zap size={20} className="text-yellow-500 fill-yellow-500" />
                <h3 className="text-xl font-serif italic">Quick Concierge Replies</h3>
              </div>
              <button className="p-2 bg-gray-50 text-gray-400 rounded-full hover:text-black"><Plus size={16}/></button>
            </div>

            <div className="space-y-4">
              {quickReplies.map((reply) => (
                <div key={reply.id} className="p-6 bg-[#F9F9F7] rounded-[2rem] group hover:bg-black transition-all duration-500">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-[10px] uppercase tracking-widest font-black group-hover:text-white/50">{reply.title}</h4>
                    <button 
                      onClick={() => copyToClipboard(reply.text)}
                      className="text-gray-300 group-hover:text-white transition-colors"
                    >
                      <Copy size={14} />
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 group-hover:text-white/90 leading-relaxed italic font-serif">
                    "{reply.text}"
                  </p>
                </div>
              ))}
              {copied && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-[10px] uppercase font-bold text-green-600 tracking-widest">
                  Copied to Clipboard
                </motion.div>
              )}
            </div>
          </div>

          <div className="bg-black text-white p-10 rounded-[3rem] shadow-2xl space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <MessageSquare size={20} className="text-white" />
              <h3 className="text-xl font-serif italic">Atelier Chat Logs</h3>
            </div>
            <AdminTextArea 
              label="Bespoke Request Notes" 
              placeholder="Siddharth requested silver hardware instead of brass for the RH-4022 order..." 
            />
            <button className="w-full bg-white text-black py-5 rounded-full text-[10px] uppercase tracking-[0.4em] font-black">
              Save Conversation Log
            </button>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default PromoAutomation;