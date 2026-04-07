"use client";
import React from 'react';
import { Send, FileText, Save, Plus } from 'lucide-react';
import { AdminInput, AdminTextArea, AdminSelect } from './AdminFields';

const JournalManager = () => {
  return (
    <div className="space-y-6">
      {/* HEADER ACTIONS */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded border border-slate-200 shadow-sm">
        <h2 className="text-lg font-bold text-slate-800 uppercase tracking-tight">Journal Editor</h2>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all">
            <Save size={14} /> Save Draft
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded text-xs font-bold hover:bg-blue-700 transition-all shadow-sm">
            <Send size={14} /> Publish
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* MAIN COMPOSER */}
        <div className="lg:col-span-8">
          <div className="bg-white rounded border-t-4 border-blue-600 shadow-sm p-6 space-y-4">
            <div className="flex items-center gap-2 text-blue-600 mb-2">
              <FileText size={18} />
              <span className="text-[11px] font-bold uppercase tracking-widest">Post Content</span>
            </div>
            
            <AdminInput label="Title" placeholder="Enter headline" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AdminSelect label="Category" options={['Craftsmanship', 'Events', 'Archive', 'News']} />
              <AdminInput label="Read Time" type="number" placeholder="5" />
            </div>

            <AdminTextArea label="Content Body" placeholder="Write entry..." />
          </div>
        </div>

        {/* METADATA & MEDIA */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded border-t-4 border-green-500 shadow-sm p-6">
            <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-4">Post Settings</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                <span className="text-xs font-bold text-slate-400 uppercase">Visibility</span>
                <span className="text-xs font-bold text-slate-700">Public</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-slate-400 uppercase">Slug</span>
                <span className="text-xs font-bold text-blue-600">/journal-post-01</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded border border-slate-200 shadow-sm p-6">
            <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-4">Featured Image</h4>
            <div className="aspect-video bg-slate-50 border-2 border-dashed border-slate-200 rounded flex flex-col items-center justify-center text-slate-400 hover:text-blue-500 hover:border-blue-300 transition-all cursor-pointer group">
              <Plus size={24} className="mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-bold uppercase">Upload</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalManager;