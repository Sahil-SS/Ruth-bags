"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, Users, ShoppingBag, 
  ArrowUpRight, Globe, Clock, 
  CreditCard, Activity, Zap
} from 'lucide-react';

const RuthIntelligence = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }} 
      animate={{ opacity: 1, x: 0 }} 
      className="space-y-12 pb-20"
    >
      
      {/* --- HEADER --- */}
      <div className="border-b border-gray-100 pb-8 flex justify-between items-end">
        <div>
          <h2 className="text-5xl font-serif italic lowercase tracking-tight text-black/90">intelligence.</h2>
          <p className="text-[10px] text-gray-400 uppercase tracking-[0.4em] mt-4 font-black">
            Global Performance & Growth Analytics
          </p>
        </div>
        <div className="flex items-center gap-3 text-green-500">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
          <span className="text-[9px] uppercase tracking-[0.3em] font-black">Live Feed Active</span>
        </div>
      </div>

      {/* --- EXECUTIVE KPI CARDS --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPIBox label="Total Acquisitions" value="₹12.4L" trend="+14%" icon={<CreditCard size={20}/>} />
        <KPIBox label="Global Collectors" value="842" trend="+8%" icon={<Users size={20}/>} />
        <KPIBox label="Drop Performance" value="94%" trend="+2%" icon={<Zap size={20}/>} />
        <KPIBox label="Active silhouttes" value="12" trend="0%" icon={<ShoppingBag size={20}/>} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* --- MAIN GROWTH CHART --- */}
        <div className="lg:col-span-8 bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm relative overflow-hidden">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h3 className="text-xl font-serif italic">Acquisition Cycle</h3>
              <p className="text-[9px] uppercase tracking-widest text-gray-400 mt-1">Revenue vs. Projections</p>
            </div>
            <div className="flex gap-4">
              {['W', 'M', 'Y'].map(t => (
                <button key={t} className="text-[10px] uppercase font-black text-gray-300 hover:text-black transition-colors">{t}</button>
              ))}
            </div>
          </div>
          
          <div className="h-72 w-full flex items-end justify-between gap-3 px-2">
             {/* Visual Chart Representation */}
             {[55, 30, 85, 45, 100, 75, 90, 60, 80, 95].map((h, i) => (
               <motion.div 
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: i * 0.05, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-full bg-[#F9F9F7] rounded-t-2xl relative group cursor-pointer"
               >
                 <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-t-2xl" />
                 {/* Tooltip on hover */}
                 <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-[8px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap uppercase tracking-widest font-black">
                   ₹{Math.floor(h * 100)} Acquisition
                 </div>
               </motion.div>
             ))}
          </div>
          <div className="flex justify-between mt-8 text-[9px] uppercase tracking-[0.3em] text-gray-300 font-bold px-4">
            <span>Sept</span><span>Oct</span><span>Nov</span><span>Dec</span><span>Jan</span><span>Feb</span><span>Mar</span>
          </div>
        </div>

        {/* --- GEOGRAPHIC DISTRIBUTION --- */}
        <div className="lg:col-span-4 bg-black text-white p-10 rounded-[3rem] shadow-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-10">
              <Globe size={18} className="text-gray-500" />
              <h3 className="text-xl font-serif italic">Market Presence</h3>
            </div>
            <div className="space-y-8">
              <RegionProgress name="Mumbai" percentage="48%" />
              <RegionProgress name="London" percentage="18%" />
              <RegionProgress name="New York" percentage="12%" />
              <RegionProgress name="Dubai" percentage="10%" />
            </div>
          </div>
          <div className="pt-10 border-t border-white/10 mt-10">
            <p className="text-[9px] uppercase tracking-[0.4em] text-gray-500 font-black">Emerging Interest</p>
            <p className="text-2xl font-serif italic mt-2 text-white/90 lowercase">scandinavia region.</p>
          </div>
        </div>

      </div>

      {/* --- RECENT SYSTEM PULSE --- */}
      <div className="bg-white p-10 rounded-[3.5rem] border border-gray-100 shadow-sm">
        <div className="flex items-center gap-3 mb-10">
          <Activity size={18} className="text-black" />
          <h3 className="text-xl font-serif italic">The System Pulse</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8">
          <PulseItem 
            title="Private Link Accessed" 
            detail="VIP Client #902 opened #RH-0043" 
            time="4m ago"
          />
          <PulseItem 
            title="Invoice Generated" 
            detail="Order #RH-4011 finalized for dispatch" 
            time="12m ago"
          />
          <PulseItem 
            title="Collection Drop Scheduled" 
            detail="'Atelier Noir' scheduled for Fri 9PM" 
            time="2h ago"
          />
          <PulseItem 
            title="Inventory Adjustment" 
            detail="Luna Hobo (Obsidian) set to Out of Stock" 
            time="1d ago"
          />
        </div>
      </div>

    </motion.div>
  );
};

// --- PRIVATE SUB-COMPONENTS ---

const KPIBox = ({ label, value, trend, icon }) => (
  <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm group hover:border-black transition-all duration-500">
    <div className="flex justify-between items-start mb-6">
      <div className="p-3 bg-[#F9F9F7] rounded-2xl group-hover:bg-black group-hover:text-white transition-colors duration-500">
        {icon}
      </div>
      <span className="text-[10px] font-black text-green-500 bg-green-50 px-2 py-1 rounded-lg flex items-center gap-1">
        <ArrowUpRight size={10} /> {trend}
      </span>
    </div>
    <h4 className="text-[10px] uppercase tracking-widest text-gray-400 font-black">{label}</h4>
    <p className="text-3xl font-serif italic mt-2 text-black/90 tracking-tight">{value}</p>
  </div>
);

const RegionProgress = ({ name, percentage }) => (
  <div className="space-y-3">
    <div className="flex justify-between text-[10px] uppercase tracking-widest font-black">
      <span className="text-white/80">{name}</span>
      <span className="text-gray-500">{percentage}</span>
    </div>
    <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: percentage }}
        transition={{ duration: 1.5, ease: "circOut" }}
        className="h-full bg-white"
      />
    </div>
  </div>
);

const PulseItem = ({ title, detail, time }) => (
  <div className="flex justify-between items-center group cursor-default">
    <div className="space-y-1">
      <h5 className="text-[10px] uppercase tracking-widest font-black text-gray-300 group-hover:text-black transition-colors">{title}</h5>
      <p className="text-sm font-medium italic font-serif">{detail}</p>
    </div>
    <span className="text-[9px] uppercase font-bold text-gray-300">{time}</span>
  </div>
);

export default RuthIntelligence;