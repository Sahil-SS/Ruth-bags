"use client";
import React, { useState } from "react";
import { Printer, ArrowLeft, Eye, Download, CheckCircle } from "lucide-react";
import { AdminInput, AdminSelect } from "./AdminFields";

const InvoiceGenerator = ({ order, onBack }) => {
  const [customData, setCustomData] = useState(order || { id: 'INV-4421', buyer: 'Guest', price: '0', date: 'April 07, 2026' });

  return (
    <div className="space-y-6">
      {/* TOOLBAR */}
      <div className="flex flex-wrap justify-between items-center bg-white p-4 rounded-lg border border-slate-200 shadow-sm no-print">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-full text-slate-500"><ArrowLeft size={18} /></button>
          <div className="h-4 w-[1px] bg-slate-200" />
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest">Invoice Editor</h3>
        </div>
        <div className="flex gap-2">
          <button onClick={() => window.print()} className="bg-blue-600 text-white px-4 py-2 rounded text-xs font-bold uppercase tracking-wider flex items-center gap-2">
            <Printer size={14} /> Print PDF
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* FORM SIDE */}
        <div className="lg:col-span-4 space-y-4 no-print">
          <div className="bg-white p-6 rounded-lg border-t-4 border-blue-600 shadow-sm">
            <h4 className="text-xs font-bold text-slate-400 uppercase mb-4 tracking-widest">Manual Override</h4>
            <AdminInput label="Patron Name" placeholder="Elena Rossi" onChange={(e) => setCustomData({...customData, buyer: e.target.value})} />
            <AdminInput label="Total Amount" placeholder="0.00" onChange={(e) => setCustomData({...customData, price: e.target.value})} />
            <div className="p-3 bg-green-50 rounded border border-green-100 text-[10px] font-bold text-green-700 flex items-center gap-2 uppercase tracking-tighter">
              <CheckCircle size={14} /> Syncing in real-time
            </div>
          </div>
        </div>

        {/* INVOICE PREVIEW */}
        <div className="lg:col-span-8 flex justify-center">
          <div className="bg-white w-full max-w-2xl p-12 lg:p-16 border border-slate-200 shadow-xl print:shadow-none print:border-none">
             <div className="flex justify-between items-start border-b border-slate-100 pb-10 mb-10">
                <div>
                  <h1 className="text-2xl font-black text-slate-900 uppercase">ABLE PRO</h1>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Official Document</p>
                </div>
                <div className="text-right">
                   <p className="text-xs font-bold text-slate-400 uppercase">Invoice ID</p>
                   <p className="text-sm font-black text-blue-600">{customData.id}</p>
                   <p className="text-[10px] text-slate-400 mt-1">{customData.date}</p>
                </div>
             </div>

             <div className="grid grid-cols-2 gap-10 mb-10 text-sm">
                <div>
                   <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Billed To</p>
                   <p className="font-bold text-slate-800">{customData.buyer}</p>
                   <p className="text-slate-500 mt-1">International Acquisition</p>
                </div>
                <div className="text-right">
                   <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Provenance</p>
                   <p className="font-bold text-slate-800">Able HQ Terminal</p>
                </div>
             </div>

             <table className="w-full text-sm mb-10">
                <thead className="bg-slate-50 border-y border-slate-200">
                   <tr>
                      <th className="py-3 text-left font-bold text-slate-600 uppercase text-[10px] px-2 tracking-widest">Description</th>
                      <th className="py-3 text-right font-bold text-slate-600 uppercase text-[10px] px-2 tracking-widest">Amount</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                   <tr>
                      <td className="py-8 font-bold text-slate-800">Master Item Acquisition — Standard Variant</td>
                      <td className="py-8 text-right font-bold">₹{customData.price}</td>
                   </tr>
                </tbody>
             </table>

             <div className="flex justify-end border-t-2 border-slate-900 pt-6">
                <div className="text-right">
                   <p className="text-[10px] font-bold text-slate-400 uppercase">Total Valuation</p>
                   <p className="text-3xl font-black text-slate-900">₹{customData.price}</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceGenerator;