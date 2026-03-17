"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, MessageSquare, BookOpen, Package, 
  LogOut, ArrowRight, Activity, Lock, FileText,
  Megaphone, Zap, BarChart3
} from 'lucide-react';

// --- SUB-COMPONENTS ---
import RuthIntelligence from '@/components/admin/RuthIntelligence';
import InventoryManager from '@/components/admin/InventoryManager';
import OrderManager from '@/components/admin/OrderManager';
import JournalManager from '@/components/admin/JournalManager';
import ReviewManager from '@/components/admin/ReviewManager';
import InvoiceGenerator from '@/components/admin/InvoiceGenerator';
import PromoAutomation from '@/components/admin/PromoAutomation';

const AdminPortal = () => {
  // Authentication & Navigation State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('intelligence');
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  
  // Cross-component state for Invoice Generation
  const [selectedInvoiceOrder, setSelectedInvoiceOrder] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginData.username === 'sahil' && loginData.password === '1234') {
      setIsAuthenticated(true);
    }
  };

  const triggerInvoice = (order) => {
    setSelectedInvoiceOrder(order);
    setActiveTab('invoice');
  };

  // --- LOGIN UI ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center p-6 relative overflow-hidden">
        {/* Background Ambience */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#E5E4E2] rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#DCDCDC] rounded-full blur-[120px] opacity-30" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-md w-full bg-white/70 backdrop-blur-xl rounded-[3.5rem] p-12 md:p-16 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-white/50 relative z-10"
        >
          <div className="flex flex-col items-center mb-12">
            <div className="w-12 h-12 border border-black/10 rounded-full flex items-center justify-center mb-6">
              <Lock size={18} strokeWidth={1.5} className="text-black/40" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif italic text-center tracking-tighter text-black/90">Atelier Portal</h1>
            <div className="h-[1px] w-12 bg-black/10 mt-6" />
            <p className="text-[9px] uppercase tracking-[0.6em] text-gray-400 mt-6 font-bold">Secure Artisan Access</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-8">
            <div className="space-y-6">
              <div className="relative group">
                <input 
                  type="text" required placeholder="Identifier" 
                  className="w-full bg-white/50 border-b border-gray-100 py-4 px-2 outline-none text-sm placeholder:text-gray-300 focus:border-black transition-all duration-500 font-light italic" 
                  onChange={(e) => setLoginData({...loginData, username: e.target.value})} 
                />
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-700 group-focus-within:w-full" />
              </div>
              <div className="relative group">
                <input 
                  type="password" required placeholder="Keycode" 
                  className="w-full bg-white/50 border-b border-gray-100 py-4 px-2 outline-none text-sm placeholder:text-gray-300 focus:border-black transition-all duration-500 font-light" 
                  onChange={(e) => setLoginData({...loginData, password: e.target.value})} 
                />
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-700 group-focus-within:w-full" />
              </div>
            </div>

            <button type="submit" className="w-full bg-black text-white py-6 rounded-full text-[10px] uppercase tracking-[0.5em] font-black shadow-2xl transition-all duration-500 flex items-center justify-center gap-3 overflow-hidden group">
              <span className="relative z-10">Enter System</span>
              <ArrowRight size={14} className="relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  // --- MAIN DASHBOARD UI ---
  return (
    <div className="flex min-h-screen bg-[#F9F9F7]">
      {/* --- SIDEBAR --- */}
      <aside className="w-72 bg-black text-white p-8 fixed h-full flex flex-col z-50 shadow-[20px_0_60px_rgba(0,0,0,0.05)]">
        <div className="mb-12 px-4">
          <h1 className="text-3xl font-serif italic tracking-tighter">Ruth Admin</h1>
          <div className="flex items-center gap-2 mt-4 text-[8px] uppercase tracking-widest text-green-500">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            Live Analytics Active
          </div>
        </div>

        <nav className="flex-1 space-y-2">
          <NavItem active={activeTab === 'intelligence'} icon={<BarChart3 size={18}/>} label="Intelligence" onClick={() => setActiveTab('intelligence')} />
          <NavItem active={activeTab === 'inventory'} icon={<ShoppingBag size={18}/>} label="Inventory" onClick={() => setActiveTab('inventory')} />
          <NavItem active={activeTab === 'management'} icon={<Package size={18}/>} label="Orders" onClick={() => setActiveTab('management')} />
          <NavItem active={activeTab === 'invoice'} icon={<FileText size={18}/>} label="Invoices" onClick={() => { setSelectedInvoiceOrder(null); setActiveTab('invoice'); }} />
          <NavItem active={activeTab === 'promotions'} icon={<Megaphone size={18}/>} label="Drops & Social" onClick={() => setActiveTab('promotions')} />
          
          <div className="py-4 opacity-20"><div className="h-[1px] bg-white w-full" /></div>
          
          <NavItem active={activeTab === 'blogs'} icon={<BookOpen size={18}/>} label="Journal" onClick={() => setActiveTab('blogs')} />
          <NavItem active={activeTab === 'testimonials'} icon={<MessageSquare size={18}/>} label="Reviews" onClick={() => setActiveTab('testimonials')} />
        </nav>

        <button 
          onClick={() => setIsAuthenticated(false)} 
          className="mt-auto flex items-center gap-3 text-gray-500 hover:text-white text-[10px] uppercase font-bold tracking-[0.3em] px-4 transition-all hover:translate-x-1"
        >
          <LogOut size={16} /> Exit Session
        </button>
      </aside>

      {/* --- CONTENT AREA --- */}
      <main className="flex-1 ml-72 p-16 overflow-y-auto">
        <AnimatePresence mode="wait">
          {activeTab === 'intelligence' && <RuthIntelligence key="intelligence" />}
          
          {activeTab === 'inventory' && <InventoryManager key="inventory" />}
          
          {activeTab === 'management' && (
            <OrderManager key="management" onGenerateInvoice={triggerInvoice} />
          )}
          
          {activeTab === 'invoice' && (
            <InvoiceGenerator 
              key="invoice" 
              order={selectedInvoiceOrder} 
              onBack={() => setActiveTab('management')} 
            />
          )}

          {activeTab === 'promotions' && <PromoAutomation key="promotions" />}

          {activeTab === 'blogs' && <JournalManager key="blogs" />}
          
          {activeTab === 'testimonials' && <ReviewManager key="testimonials" />}
        </AnimatePresence>
      </main>
    </div>
  );
};

// --- REUSABLE NAV ITEM ---
const NavItem = ({ icon, label, active, onClick }) => (
  <button 
    onClick={onClick} 
    className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-500 ${
      active 
      ? 'bg-white text-black shadow-[0_20px_40px_rgba(0,0,0,0.2)] scale-[1.02]' 
      : 'text-gray-500 hover:text-white hover:bg-white/5'
    }`}
  >
    <span className={`${active ? 'text-black' : 'text-gray-500'}`}>{icon}</span>
    <span className="text-[10px] uppercase tracking-[0.2em] font-black">{label}</span>
    {active && (
      <motion.div 
        layoutId="activeGlow"
        className="ml-auto w-1.5 h-1.5 bg-black rounded-full"
      />
    )}
  </button>
);

export default AdminPortal;