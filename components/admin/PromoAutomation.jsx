"use client";
import React from 'react';
import { Calendar, Link, Zap, MessageSquare, Copy } from 'lucide-react';
import { AdminInput, AdminSelect, AdminTextArea } from './AdminFields';

const PromoAutomation = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h2 className="text-xl font-bold text-slate-800">Campaigns & Social</h2>
        <div className="bg-orange-100 text-orange-700 px-3 py-1 rounded text-[10px] font-bold uppercase">3 Drops Scheduled</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* BLUE: LAUNCH CARD */}
        <div className="bg-white rounded-lg border-t-4 border-blue-500 shadow-sm p-6 space-y-6">
          <div className="flex items-center gap-2 font-bold text-blue-600 uppercase text-[11px] tracking-widest">
            <Calendar size={16} /> Scheduled Release
          </div>
          <AdminSelect label="Active Target" options={['Luna Collection', 'Voyage Series']} />
          <div className="grid grid-cols-2 gap-2">
            <AdminInput label="Date" type="date" />
            <AdminInput label="Time" type="time" />
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded text-xs font-bold uppercase">Confirm Release</button>
        </div>

        {/* RED: PRIVATE ACCESS */}
        <div className="bg-white rounded-lg border-t-4 border-red-500 shadow-sm p-6 space-y-6">
          <div className="flex items-center gap-2 font-bold text-red-600 uppercase text-[11px] tracking-widest">
            <Link size={16} /> VIP Direct Link
          </div>
          <p className="text-xs text-slate-500 leading-relaxed font-medium">Generate hidden gateway for premium acquisition tiers.</p>
          <div className="bg-slate-50 p-3 rounded text-[10px] font-mono text-slate-500 border border-slate-100 truncate">
            able.pro/secure/vip-hobo-402
          </div>
          <button className="w-full bg-red-600 text-white py-2 rounded text-xs font-bold uppercase">Generate Link</button>
        </div>

        {/* YELLOW: CONCIERGE QUICK REPLIES */}
        <div className="bg-white rounded-lg border-t-4 border-yellow-500 shadow-sm p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-bold text-yellow-600 uppercase text-[11px] tracking-widest">
              <Zap size={16} /> Concierge Fast-Reply
            </div>
          </div>
          <div className="space-y-3">
             {[1, 2].map(i => (
               <div key={i} className="p-3 bg-slate-50 border border-slate-100 rounded text-[11px] font-medium flex justify-between group hover:bg-yellow-50 transition-colors">
                  <span className="text-slate-600 italic">"Shipping typically takes 7 days..."</span>
                  <Copy size={12} className="text-slate-300 group-hover:text-yellow-600 cursor-pointer" />
               </div>
             ))}
          </div>
          <button className="w-full bg-yellow-500 text-white py-2 rounded text-xs font-bold uppercase">Manage Snippets</button>
        </div>
      </div>
    </div>
  );
};

export default PromoAutomation;