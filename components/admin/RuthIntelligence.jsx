"use client";
import React from 'react';
import { CreditCard, Users, Zap, ShoppingBag, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const RuthIntelligence = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h2 className="text-xl font-bold text-slate-800">Dashboard Overview</h2>
        <div className="text-xs font-semibold bg-white px-3 py-1.5 rounded border border-slate-200">
          Last updated: 07 April, 2026
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard label="Total Earnings" value="₹30,200" trend="+15.5%" positive icon={<CreditCard className="text-blue-600"/>} />
        <StatCard label="Active Users" value="842" trend="+8.2%" positive icon={<Users className="text-green-600"/>} />
        <StatCard label="Drop Velocity" value="94%" trend="-2.1%" icon={<Zap className="text-orange-600"/>} />
        <StatCard label="Page Views" value="1,62,564" trend="+49.5%" positive icon={<ShoppingBag className="text-purple-600"/>} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-6">Revenue Analysis</h3>
          <div className="h-64 flex items-end justify-between gap-2">
            {[40, 70, 45, 90, 65, 80, 30, 95, 55, 75].map((h, i) => (
              <div key={i} className="flex-1 bg-blue-100 hover:bg-blue-600 transition-colors rounded-t h-full" style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="flex justify-between mt-4 text-[10px] font-bold text-slate-400 uppercase">
            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-6">Project Progress</h3>
          <div className="space-y-6">
            <ProgressItem label="Inventory Audit" value={80} color="bg-blue-500" />
            <ProgressItem label="Marketing Drop" value={45} color="bg-green-500" />
            <ProgressItem label="Journal Updates" value={60} color="bg-orange-500" />
            <ProgressItem label="Review Response" value={90} color="bg-purple-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ label, value, trend, positive, icon }) => (
  <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 bg-slate-50 rounded-lg">{icon}</div>
      <span className={`text-xs font-bold flex items-center gap-1 ${positive ? 'text-green-600' : 'text-red-600'}`}>
        {positive ? <ArrowUpRight size={14}/> : <ArrowDownRight size={14}/>} {trend}
      </span>
    </div>
    <h4 className="text-2xl font-bold text-slate-800">{value}</h4>
    <p className="text-xs font-medium text-slate-500 mt-1">{label}</p>
  </div>
);

const ProgressItem = ({ label, value, color }) => (
  <div>
    <div className="flex justify-between text-xs font-bold mb-1.5">
      <span>{label}</span>
      <span>{value}%</span>
    </div>
    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
      <div className={`h-full ${color}`} style={{ width: `${value}%` }} />
    </div>
  </div>
);

export default RuthIntelligence;