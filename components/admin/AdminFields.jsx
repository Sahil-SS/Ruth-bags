"use client";
import React from 'react';

export const AdminInput = ({ label, placeholder, type = "text", onChange }) => (
  <div className="space-y-2 flex flex-col">
    <label className="text-[9px] uppercase tracking-[0.3em] font-black text-gray-400 ml-4">{label}</label>
    <input 
      type={type}
      onChange={onChange}
      className="w-full bg-[#F9F9F7] border-none rounded-full px-6 py-4 outline-none focus:ring-1 ring-black transition-all text-sm" 
      placeholder={placeholder} 
    />
  </div>
);

export const AdminTextArea = ({ label, placeholder, onChange }) => (
  <div className="space-y-2 flex flex-col">
    <label className="text-[9px] uppercase tracking-[0.3em] font-black text-gray-400 ml-4">{label}</label>
    <textarea 
      onChange={onChange}
      className="w-full bg-[#F9F9F7] border-none rounded-[2rem] p-6 h-32 outline-none focus:ring-1 ring-black transition-all text-sm resize-none" 
      placeholder={placeholder} 
    />
  </div>
);

export const AdminSelect = ({ label, options, onChange }) => (
  <div className="space-y-2 flex flex-col">
    <label className="text-[9px] uppercase tracking-[0.3em] font-black text-gray-400 ml-4">{label}</label>
    <select 
      onChange={onChange}
      className="w-full bg-[#F9F9F7] border-none rounded-full px-6 py-4 outline-none focus:ring-1 ring-black transition-all appearance-none text-sm cursor-pointer"
    >
      {options.map(o => <option key={o} value={o}>{o}</option>)}
    </select>
  </div>
);
