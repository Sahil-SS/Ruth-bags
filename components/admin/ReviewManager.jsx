"use client";
import React from 'react';
import { Star, MessageSquare, Plus, CheckCircle } from 'lucide-react';
import { AdminInput, AdminTextArea } from './AdminFields';

const ReviewManager = () => {
  return (
    <div className="space-y-6 max-w-4xl">
      {/* SECTION HEADER */}
      <div className="flex items-center justify-between bg-white p-4 rounded border border-slate-200 shadow-sm">
        <div>
          <h2 className="text-lg font-bold text-slate-800 uppercase tracking-tight">Client Reviews</h2>
          <p className="text-xs text-slate-500 font-medium mt-1 uppercase tracking-tighter">Manage and Curate Social Proof</p>
        </div>
        <div className="flex items-center gap-2 text-yellow-600 bg-yellow-50 px-3 py-1.5 rounded border border-yellow-100">
          <Star size={14} fill="currentColor" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-700">4.9 Avg Rating</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* ADD REVIEW FORM */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded border-t-4 border-yellow-500 shadow-sm p-6 space-y-6">
            <div className="flex items-center gap-2 text-slate-800 mb-2">
              <Plus size={18} className="text-yellow-600" />
              <span className="text-[11px] font-bold uppercase tracking-widest">Add New Testimonial</span>
            </div>

            <div className="flex gap-1.5 mb-4">
              {[1, 2, 3, 4, 5].map(s => (
                <button key={s} className="text-yellow-400 hover:text-yellow-500 transition-colors">
                  <Star size={20} fill="currentColor" />
                </button>
              ))}
            </div>

            <AdminTextArea 
              label="Review Content" 
              placeholder="Enter the client's testimonial..." 
            />
            
            <AdminInput 
              label="Client Identity / Location" 
              placeholder="e.g. Elena R., Milan" 
            />

            <button className="w-full bg-blue-600 text-white py-3 rounded text-xs font-bold uppercase tracking-widest hover:bg-blue-700 transition-all shadow-sm">
              Save Testimonial
            </button>
          </div>
        </div>

        {/* GUIDELINES / STATUS */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-slate-800 text-white p-6 rounded shadow-lg">
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">System Update</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle size={16} className="text-green-400 mt-0.5" />
                <p className="text-xs font-medium text-slate-300 leading-relaxed">
                  Reviews are automatically synced to the main landing page once saved.
                </p>
              </div>
              <div className="flex items-start gap-3 opacity-60">
                <MessageSquare size={16} className="text-blue-400 mt-0.5" />
                <p className="text-xs font-medium text-slate-300 leading-relaxed">
                  Only the last 6 reviews will be displayed in the featured carousel.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white border border-slate-200 rounded">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Live Status</p>
            <div className="flex justify-between items-center text-xs font-bold text-slate-700">
              <span>Published Reviews</span>
              <span className="bg-slate-100 px-2 py-1 rounded">24</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewManager;