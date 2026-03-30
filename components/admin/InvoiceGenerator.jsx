/* eslint-disable react-hooks/purity */
"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Printer, ArrowLeft, Edit3, Eye, Check } from "lucide-react";
import { AdminInput, AdminSelect } from "./AdminFields";

const InvoiceGenerator = ({ order, onBack }) => {
  const [isDrafting, setIsDrafting] = useState(!order);
  const [customData, setCustomData] = useState(
    order || {
      id: `RH-INV-${Math.floor(1000 + Math.random() * 9000)}`,
      buyer: "",
      email: "",
      product: "",
      price: "",
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      size: "Standard",
      color: "Obsidian",
    },
  );

  const handlePrint = () => {
    window.print();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8 pb-20"
    >
      {/* --- TOP ACTION BAR --- */}
      <div className="flex justify-between items-center bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-sm no-print">
        <div className="flex gap-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-black text-gray-400 hover:text-black transition-colors"
          >
            <ArrowLeft size={14} /> Back
          </button>
          <div className="h-6 w-[1px] bg-gray-100" />
          <button
            onClick={() => setIsDrafting(!isDrafting)}
            className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-black text-black"
          >
            {isDrafting ? (
              <>
                <Eye size={14} /> Preview Invoice
              </>
            ) : (
              <>
                <Edit3 size={14} /> Edit Details Manually
              </>
            )}
          </button>
        </div>

        <button
          onClick={handlePrint}
          disabled={isDrafting && !customData.buyer}
          className="bg-black text-white px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.3em] font-black flex items-center gap-2 shadow-xl hover:scale-105 disabled:opacity-30 disabled:hover:scale-100 transition-all"
        >
          <Printer size={14} /> Print / Save PDF
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* --- LEFT: MANUAL ENTRY FORM (Optional) --- */}
        <AnimatePresence>
          {isDrafting && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="lg:col-span-4 space-y-6 no-print"
            >
              <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-6">
                <h3 className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-300 mb-4">
                  Manual Drafting
                </h3>

                <AdminInput
                  label="Client Name"
                  placeholder="e.g. Julianne Moore"
                  onChange={(e) =>
                    setCustomData({ ...customData, buyer: e.target.value })
                  }
                />
                <AdminInput
                  label="Client Email"
                  placeholder="client@luxury.com"
                  onChange={(e) =>
                    setCustomData({ ...customData, email: e.target.value })
                  }
                />
                <AdminInput
                  label="Product Title"
                  placeholder="e.g. Signature Duffle"
                  onChange={(e) =>
                    setCustomData({ ...customData, product: e.target.value })
                  }
                />
                <div className="grid grid-cols-2 gap-4">
                  <AdminInput
                    label="Amount (INR)"
                    placeholder="32000"
                    onChange={(e) =>
                      setCustomData({ ...customData, price: e.target.value })
                    }
                  />
                  <AdminSelect
                    label="Palette"
                    options={["Obsidian", "Sienna", "Bone", "Sage"]}
                    onChange={(e) =>
                      setCustomData({ ...customData, color: e.target.value })
                    }
                  />
                </div>

                <div className="pt-4 flex items-center gap-2 text-[9px] text-green-600 uppercase font-bold tracking-widest">
                  <Check size={12} /> Changes reflect in real-time
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- RIGHT: THE VISUAL INVOICE --- */}
        <div
          className={`${isDrafting ? "lg:col-span-8" : "lg:col-span-12"} flex justify-center transition-all duration-500`}
        >
          <div
            id="invoice-capture"
            className="bg-white w-full max-w-[800px] p-16 md:p-24 shadow-2xl print:shadow-none print:p-0 border border-gray-50"
            style={{ fontFamily: "serif" }}
          >
            {/* Invoice Header */}
            <div className="flex justify-between items-start mb-20">
              <div>
                <h1 className="text-4xl italic tracking-tighter mb-2">
                  Ruth Handcrafted
                </h1>
                <p className="text-[9px] uppercase tracking-[0.4em] text-gray-400 font-sans font-bold">
                  Atelier & Archive
                </p>
              </div>
              <div className="text-right">
                <h2 className="text-[10px] uppercase tracking-[0.5em] font-sans font-black mb-4 text-gray-300">
                  Official Invoice
                </h2>
                <p className="text-sm font-sans font-medium">{customData.id}</p>
                <p className="text-xs text-gray-400 font-sans mt-1">
                  {customData.date}
                </p>
              </div>
            </div>

            {/* Billing Info */}
            <div className="grid grid-cols-2 gap-20 mb-20 font-sans">
              <div>
                <h3 className="text-[9px] uppercase tracking-widest text-gray-300 font-black mb-4">
                  Billed To
                </h3>
                <p className="text-sm font-bold min-h-[1.25rem] border-b border-dotted border-gray-100">
                  {customData.buyer}
                </p>
                <p className="text-xs text-gray-500 mt-2">{customData.email}</p>
              </div>
              <div className="text-right">
                <h3 className="text-[9px] uppercase tracking-widest text-gray-300 font-black mb-4">
                  Provenance
                </h3>
                <p className="text-sm font-bold uppercase tracking-widest">
                  Atelier Ruth
                </p>
                <p className="text-xs text-gray-500 mt-1 italic">
                  Handcrafted in India
                </p>
              </div>
            </div>

            {/* Items Table */}
            <table className="w-full mb-20 font-sans">
              <thead>
                <tr className="border-b border-black">
                  <th className="text-left text-[9px] uppercase tracking-widest font-black py-4">
                    Piece Description
                  </th>
                  <th className="text-center text-[9px] uppercase tracking-widest font-black py-4">
                    Qty
                  </th>
                  <th className="text-right text-[9px] uppercase tracking-widest font-black py-4">
                    Acquisition Value
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                <tr>
                  <td className="py-10">
                    <p className="text-2xl font-bold italic font-serif lowercase min-h-[2rem]">
                      {customData.product || "Awaiting Selection..."}
                    </p>
                    <p className="text-[9px] uppercase tracking-widest text-gray-400 mt-2">
                      Variant: {customData.color} • {customData.size}
                    </p>
                  </td>
                  <td className="text-center text-sm font-light">01</td>
                  <td className="text-right text-lg font-medium">
                    ₹{customData.price || "0.00"}
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Totals */}
            <div className="flex justify-end font-sans">
              <div className="w-64 space-y-4">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Net Valuation</span>
                  <span>₹{customData.price || "0.00"}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Logistics</span>
                  <span className="text-[9px] font-black uppercase tracking-widest text-green-600">
                    Complimentary
                  </span>
                </div>
                <div className="flex justify-between border-t border-black pt-6 mt-4">
                  <span className="text-[10px] uppercase font-black tracking-widest">
                    Total Acquisition
                  </span>
                  <span className="text-3xl font-serif italic lowercase font-bold">
                    ₹{customData.price || "0.00"}
                  </span>
                </div>
              </div>
            </div>

            {/* Footer Notes */}
            <div className="mt-40 pt-10 border-t border-gray-50 text-center font-sans">
              <p className="text-[9px] uppercase tracking-[0.5em] text-gray-300 font-bold mb-4">
                Each piece is a singular journey.
              </p>
              <div className="flex justify-center gap-12 opacity-20 grayscale mb-6">
                {/* This would be where a small logo goes */}
                <div className="w-6 h-6 rounded-full border border-black" />
              </div>
              <p className="text-[8px] text-gray-300 italic">
                Electronic Acquisition Document — No physical signature
                required.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- PRINT STYLES --- */}
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #invoice-capture,
          #invoice-capture * {
            visibility: visible;
          }
          #invoice-capture {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            border: none !important;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default InvoiceGenerator;
