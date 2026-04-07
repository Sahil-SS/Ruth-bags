"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, LayoutDashboard, ShoppingBag, Package, 
  FileText, Megaphone, BookOpen, MessageSquare, 
  LogOut, Bell, Search, ChevronLeft, ChevronRight
} from 'lucide-react';

// Sub-components
import RuthIntelligence from '@/components/admin/RuthIntelligence';
import InventoryManager from '@/components/admin/InventoryManager';
import OrderManager from '@/components/admin/OrderManager';
import JournalManager from '@/components/admin/JournalManager';
import ReviewManager from '@/components/admin/ReviewManager';
import InvoiceGenerator from '@/components/admin/InvoiceGenerator';
import PromoAutomation from '@/components/admin/PromoAutomation';

const AdminPortal = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('intelligence');
  const [selectedInvoiceOrder, setSelectedInvoiceOrder] = useState(null);
  
  const [loginData, setLoginData] = useState({ username: '', password: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginData.username === 'sahil' && loginData.password === '1234') {
      setIsAuthenticated(true);
    } else {
      alert("Invalid Credentials");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setMobileMenuOpen(false);
  };

  // --- LOGIN VIEW ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full bg-white rounded-xl shadow-2xl p-10 border border-slate-200"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg shadow-blue-200">S</div>
            <h1 className="text-2xl font-black text-slate-800 uppercase tracking-tight">Terminal Access</h1>
            <p className="text-slate-400 text-xs font-bold uppercase mt-2 tracking-widest">Management Portal v3.0</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Identifier</label>
              <input 
                type="text" required placeholder="admin_username"
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                onChange={(e) => setLoginData({...loginData, username: e.target.value})} 
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Keycode</label>
              <input 
                type="password" required placeholder="••••••••"
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                onChange={(e) => setLoginData({...loginData, password: e.target.value})} 
              />
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg shadow-xl shadow-blue-100 transition-all active:scale-[0.98] uppercase text-xs tracking-widest">
              Establish Session
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  // --- DASHBOARD VIEW ---
  return (
    <div className="min-h-screen bg-[#f4f7fa] flex text-slate-700 font-sans relative">
      
      {/* MOBILE BACKDROP */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60] lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* --- SIDEBAR --- */}
      <aside 
        className={`fixed inset-y-0 left-0 z-[70] bg-[#1c2331] text-slate-300 transition-all duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0 ${isSidebarCollapsed ? 'lg:w-20' : 'lg:w-64'}`}
      >
        <div className="h-20 flex items-center justify-between px-6 border-b border-slate-700/50 relative">
          {!isSidebarCollapsed && <span className="text-xl font-bold text-white tracking-tighter">RUTH BAGS</span>}
          
          {/* MOBILE CROSS ICON - Placed properly in the header area */}
          <button onClick={() => setMobileMenuOpen(false)} className="lg:hidden absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white hover:bg-white/10 rounded-full transition-colors">
            <X size={20} />
          </button>

          {/* DESKTOP COLLAPSE */}
          <button onClick={() => setSidebarCollapsed(!isSidebarCollapsed)} className="hidden lg:flex p-1.5 hover:bg-slate-700 rounded text-slate-400 hover:text-white transition-colors">
            {isSidebarCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>

        <nav className="mt-6 px-3 space-y-1 h-[calc(100vh-160px)] overflow-y-auto custom-scrollbar">
          <NavItem active={activeTab === 'intelligence'} icon={<LayoutDashboard size={20}/>} label="Dashboard" collapsed={isSidebarCollapsed} onClick={() => { setActiveTab('intelligence'); setMobileMenuOpen(false); }} />
          {!isSidebarCollapsed && <p className="px-4 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Core Archive</p>}
          <NavItem active={activeTab === 'inventory'} icon={<ShoppingBag size={20}/>} label="Inventory" collapsed={isSidebarCollapsed} onClick={() => { setActiveTab('inventory'); setMobileMenuOpen(false); }} />
          <NavItem active={activeTab === 'management'} icon={<Package size={20}/>} label="Orders" collapsed={isSidebarCollapsed} onClick={() => { setActiveTab('management'); setMobileMenuOpen(false); }} />
          <NavItem active={activeTab === 'invoice'} icon={<FileText size={20}/>} label="Invoices" collapsed={isSidebarCollapsed} onClick={() => { setActiveTab('invoice'); setMobileMenuOpen(false); }} />
          <NavItem active={activeTab === 'promotions'} icon={<Megaphone size={20}/>} label="Marketing" collapsed={isSidebarCollapsed} onClick={() => { setActiveTab('promotions'); setMobileMenuOpen(false); }} />
          <NavItem active={activeTab === 'blogs'} icon={<BookOpen size={20}/>} label="Journal" collapsed={isSidebarCollapsed} onClick={() => { setActiveTab('blogs'); setMobileMenuOpen(false); }} />
          <NavItem active={activeTab === 'testimonials'} icon={<MessageSquare size={20}/>} label="Reviews" collapsed={isSidebarCollapsed} onClick={() => { setActiveTab('testimonials'); setMobileMenuOpen(false); }} />
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-slate-700/50 bg-[#1c2331]">
          <button onClick={handleLogout} className={`flex items-center gap-4 px-4 py-3 rounded-lg w-full text-slate-400 hover:text-red-400 hover:bg-red-400/10 transition-all ${isSidebarCollapsed ? 'justify-center' : ''}`}>
            <LogOut size={20} />
            {!isSidebarCollapsed && <span className="text-sm font-bold uppercase tracking-wider">Terminate</span>}
          </button>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <div className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ${isSidebarCollapsed ? 'lg:ml-20' : 'lg:ml-64'}`}>
        <header className="h-20 bg-white/90 backdrop-blur-md border-b border-slate-200 sticky top-0 z-40 px-4 lg:px-8 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-4">
            <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"><Menu size={24} /></button>
            <div className="hidden md:flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-lg border border-slate-200">
              <Search size={18} className="text-slate-400" />
              <input type="text" placeholder="Search archive..." className="bg-transparent border-none outline-none text-sm w-48" />
            </div>
          </div>
          <div className="flex items-center gap-4">
             <button className="p-2 text-slate-400 hover:bg-slate-100 rounded-full relative transition-colors"><Bell size={20} /><span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white" /></button>
             <div className="h-8 w-[1px] bg-slate-200 mx-2" />
             <div className="flex items-center gap-3">
               <div className="text-right hidden sm:block">
                 <p className="text-sm font-bold text-slate-800 leading-none">Sahil Admin</p>
                 <p className="text-[10px] font-bold text-blue-600 uppercase mt-1 tracking-tighter">System Superuser</p>
               </div>
               <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-blue-200">S</div>
             </div>
          </div>
        </header>

        <main className="p-4 lg:p-8">
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, x: 5 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
              {activeTab === 'intelligence' && <RuthIntelligence />}
              {activeTab === 'inventory' && <InventoryManager />}
              {activeTab === 'management' && <OrderManager onGenerateInvoice={(o) => { setSelectedInvoiceOrder(o); setActiveTab('invoice'); }} />}
              {activeTab === 'invoice' && <InvoiceGenerator order={selectedInvoiceOrder} onBack={() => setActiveTab('management')} />}
              {activeTab === 'promotions' && <PromoAutomation />}
              {activeTab === 'blogs' && <JournalManager />}
              {activeTab === 'testimonials' && <ReviewManager />}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

const NavItem = ({ icon, label, active, onClick, collapsed }) => (
  <button 
    onClick={onClick} 
    className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-all relative group ${
      active ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'
    }`}
  >
    <span className={active ? 'text-white' : 'group-hover:scale-110 transition-transform'}>{icon}</span>
    {!collapsed && <span className="text-sm font-bold tracking-tight uppercase">{label}</span>}
    {collapsed && (
      <div className="absolute left-full ml-4 px-2 py-1 bg-slate-800 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-[100] font-bold uppercase">
        {label}
      </div>
    )}
  </button>
);

export default AdminPortal;