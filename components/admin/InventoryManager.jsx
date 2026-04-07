"use client";
import React, { useState } from 'react';
import { Plus, X, UploadCloud, Trash2, Edit, ExternalLink } from 'lucide-react';
import { AdminInput, AdminTextArea, AdminSelect } from './AdminFields';

const InventoryManager = () => {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Product Inventory</h2>
          <p className="text-xs text-slate-500">Manage your active digital and physical catalog</p>
        </div>
        <button 
          onClick={() => setShowAddForm(!showAddForm)}
          className={`flex items-center gap-2 px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all ${
            showAddForm ? 'bg-slate-100 text-slate-600' : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200'
          }`}
        >
          {showAddForm ? <X size={14}/> : <Plus size={14}/>} {showAddForm ? 'Close' : 'Add New Product'}
        </button>
      </div>

      {showAddForm && (
        <div className="bg-white rounded-lg border-t-4 border-blue-600 shadow-md overflow-hidden">
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-1">
                <AdminInput label="Product Name" placeholder="Enter title" />
                <div className="grid grid-cols-2 gap-4">
                  <AdminInput label="Price (INR)" type="number" placeholder="0.00" />
                  <AdminSelect label="Category" options={['Handbags', 'Jewelry', 'Accessories']} />
                </div>
                <AdminTextArea label="Description" placeholder="Technical specifications..." />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-bold text-slate-600 uppercase mb-2">Media Assets</label>
                <div className="flex-1 border-2 border-dashed border-slate-200 rounded-lg flex flex-col items-center justify-center p-6 bg-slate-50 hover:bg-white hover:border-blue-400 transition-all cursor-pointer">
                  <UploadCloud size={32} className="text-slate-400 mb-2" />
                  <span className="text-[11px] font-bold text-slate-600 uppercase">Drop Images Here</span>
                </div>
                <button className="mt-4 bg-blue-600 text-white py-3 rounded text-xs font-bold uppercase tracking-widest hover:bg-blue-700">Save to Database</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* INVENTORY TABLE */}
      <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
          <span className="text-xs font-bold text-slate-600 uppercase">Master Archive</span>
          <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-bold">168 ITEMS</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 text-[11px] text-slate-500 uppercase font-bold border-b border-slate-200">
              <tr>
                <th className="px-6 py-4">Image</th>
                <th className="px-6 py-4">Product Name</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[1, 2, 3].map(i => (
                <tr key={i} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4"><div className="w-10 h-10 bg-slate-100 rounded border border-slate-200" /></td>
                  <td className="px-6 py-4 font-bold text-slate-800 text-sm">Product Item #{i}</td>
                  <td className="px-6 py-4 text-xs font-semibold text-slate-500">Accessories</td>
                  <td className="px-6 py-4 text-sm font-bold">₹24,500</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded"><Edit size={16}/></button>
                      <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded"><Trash2 size={16}/></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InventoryManager;