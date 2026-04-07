"use client";
import React from 'react';

const inputStyle = "w-full bg-white border border-slate-300 rounded px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-700 placeholder:text-slate-400";
const labelStyle = "block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5";

export const AdminInput = ({ label, placeholder, type = "text", onChange, required }) => (
  <div className="mb-4">
    <label className={labelStyle}>{label}</label>
    <input 
      type={type} required={required} placeholder={placeholder} onChange={onChange}
      className={inputStyle} 
    />
  </div>
);

export const AdminTextArea = ({ label, placeholder, onChange }) => (
  <div className="mb-4">
    <label className={labelStyle}>{label}</label>
    <textarea 
      placeholder={placeholder} onChange={onChange}
      className={`${inputStyle} h-32 resize-none`} 
    />
  </div>
);

export const AdminSelect = ({ label, options, onChange }) => (
  <div className="mb-4">
    <label className={labelStyle}>{label}</label>
    <select onChange={onChange} className={inputStyle}>
      {options.map(o => <option key={o} value={o}>{o}</option>)}
    </select>
  </div>
);