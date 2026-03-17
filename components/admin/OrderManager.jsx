"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, Plus, X, Trash2, FileText, Clock } from 'lucide-react';
import { AdminInput, AdminSelect } from './AdminFields';

const OrderManager = ({ onGenerateInvoice }) => {
  // --- STATE MANAGEMENT ---
  const [orders, setOrders] = useState([
    { 
      id: 'RH-4022', 
      buyer: 'Siddharth M.', 
      email: 'sid@example.com', 
      product: 'Atelier Tote', 
      price: '24,500', 
      status: 'Packaging', 
      date: 'March 17, 2026', 
      size: 'Standard', 
      color: 'Obsidian' 
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    buyer: '',
    email: '',
    product: '',
    price: '',
    size: 'Standard',
    color: 'Obsidian'
  });

  // --- HANDLERS ---
  const handleAddOrder = (e) => {
    e.preventDefault();
    
    const newOrder = {
      ...formData,
      id: `RH-${Math.floor(1000 + Math.random() * 9000)}`, // Generates random ID
      status: 'Packaging',
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    };

    setOrders([newOrder, ...orders]);
    setShowAddForm(false);
    // Reset form
    setFormData({ buyer: '', email: '', product: '', price: '', size: 'Standard', color: 'Obsidian' });
  };

  const deleteOrder = (id) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-12 pb-20">
      
      {/* --- HEADER --- */}
      <div className="flex justify-between items-end border-b border-gray-100 pb-8">
        <div>
          <h2 className="text-5xl font-serif italic lowercase tracking-tight">order log.</h2>
          <p className="text-[10px] text-gray-400 uppercase tracking-[0.3em] mt-4 font-bold">
            Total Acquisitions: {orders.length}
          </p>
        </div>
        <button 
          onClick={() => setShowAddForm(!showAddForm)}
          className={`px-8 py-4 rounded-full text-[10px] uppercase tracking-widest font-black transition-all flex items-center gap-3 ${showAddForm ? 'bg-gray-100 text-black' : 'bg-black text-white shadow-xl'}`}
        >
          {showAddForm ? <X size={14}/> : <Plus size={14}/>}
          {showAddForm ? "Cancel Entry" : "Manual Order Entry"}
        </button>
      </div>

      {/* --- MANUAL ENTRY FORM --- */}
      <AnimatePresence>
        {showAddForm && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: 'auto', opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <form onSubmit={handleAddOrder} className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <AdminInput 
                  label="Buyer Full Name" 
                  placeholder="e.g. Elena Rossi" 
                  onChange={(e) => setFormData({...formData, buyer: e.target.value})}
                  required
                />
                <AdminInput 
                  label="Contact Email" 
                  placeholder="elena@example.com" 
                  type="email"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
                <div className="grid grid-cols-2 gap-4">
                  <AdminInput 
                    label="Product Name" 
                    placeholder="e.g. Atelier Tote" 
                    onChange={(e) => setFormData({...formData, product: e.target.value})}
                    required
                  />
                  <AdminInput 
                    label="Amount (INR)" 
                    placeholder="24500" 
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                    required
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <AdminSelect 
                    label="Dimensions" 
                    options={['Small', 'Standard', 'Oversized']} 
                    onChange={(e) => setFormData({...formData, size: e.target.value})}
                  />
                  <AdminSelect 
                    label="Palette" 
                    options={['Obsidian', 'Sienna', 'Bone', 'Sage']} 
                    onChange={(e) => setFormData({...formData, color: e.target.value})}
                  />
                </div>
                <div className="pt-4">
                  <button type="submit" className="w-full bg-black text-white py-6 rounded-full text-[10px] uppercase tracking-[0.4em] font-black shadow-lg hover:bg-gray-900 transition-colors">
                    Record Acquisition
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- ORDERS LIST --- */}
      <div className="space-y-6">
        {orders.map(order => (
          <motion.div 
            layout
            key={order.id} 
            className="bg-white p-8 rounded-[2.5rem] border border-gray-100 flex flex-col xl:flex-row xl:items-center justify-between gap-8 shadow-sm group hover:border-black/10 transition-colors"
          >
            <div className="flex gap-8 items-center">
              <div className="w-16 h-16 bg-[#F9F9F7] rounded-2xl flex items-center justify-center text-black">
                <Package size={24} />
              </div>
              <div>
                <div className="flex items-center gap-4">
                  <h3 className="font-serif text-2xl italic tracking-tighter">{order.buyer}</h3>
                  <span className="text-[9px] bg-black text-white px-3 py-1 rounded font-black uppercase tracking-widest">{order.id}</span>
                </div>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-2">
                  <p className="text-[9px] uppercase tracking-widest text-gray-400 font-black">
                    {order.product} • {order.color} • {order.size} • ₹{order.price}
                  </p>
                  <span className="text-[10px] text-gray-300 italic flex items-center gap-1">
                    <Clock size={12}/> {order.date}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* STATUS CONTROLS */}
              <div className="flex gap-1 bg-gray-50 p-1.5 rounded-full">
                {['Packaging', 'Shipping', 'Delivered'].map(s => (
                  <button 
                    key={s}
                    className={`px-5 py-2.5 rounded-full text-[8px] uppercase font-black transition-all ${order.status === s ? 'bg-white text-black shadow-sm' : 'text-gray-300 hover:text-black'}`}
                  >
                    {s}
                  </button>
                ))}
              </div>

              {/* ACTION: INVOICE GENERATOR */}
              <button 
                onClick={() => onGenerateInvoice(order)}
                className="p-4 bg-gray-50 text-gray-400 hover:bg-black hover:text-white rounded-full transition-all shadow-sm"
                title="Generate Invoice"
              >
                <FileText size={18} />
              </button>
              
              <button 
                onClick={() => deleteOrder(order.id)}
                className="p-4 text-gray-200 hover:text-red-500 transition-colors"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </motion.div>
        ))}

        {orders.length === 0 && (
          <div className="py-20 text-center border-2 border-dashed border-gray-100 rounded-[3rem]">
            <p className="font-serif italic text-gray-300 text-2xl">No orders logged.</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default OrderManager;