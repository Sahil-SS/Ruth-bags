"use client";
import React, { useState } from 'react';
import { Plus, X, Search, FileText, Trash2, MoreVertical } from 'lucide-react';
import { AdminInput, AdminSelect } from './AdminFields';

const OrderManager = ({ onGenerateInvoice }) => {
  const [orders, setOrders] = useState([
    { id: 'RH-4022', buyer: 'John Deo', email: 'john@example.com', product: 'Able Pro', price: '24,500', status: 'Pending', date: 'Jun, 26' },
    { id: 'RH-4023', buyer: 'Jenifer Vintage', email: 'jen@example.com', product: 'Mashable', price: '12,000', status: 'Shipped', date: 'Mar, 31' }
  ]);
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-xl font-bold text-slate-800">Order Management</h2>
        <button 
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-bold flex items-center gap-2 transition-all"
        >
          {showAddForm ? <X size={16}/> : <Plus size={16}/>}
          {showAddForm ? "Cancel" : "Add Order"}
        </button>
      </div>

      {showAddForm && (
        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <AdminInput label="Customer Name" placeholder="Full name" />
            <AdminInput label="Product" placeholder="Product name" />
            <AdminInput label="Price" type="number" placeholder="0.00" />
          </div>
          <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded text-sm font-bold">Save Order</button>
        </div>
      )}

      <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center bg-slate-50/50">
          <div className="relative flex-1 max-w-xs">
            <Search className="absolute left-3 top-2.5 text-slate-400" size={16} />
            <input type="text" placeholder="Search orders..." className="w-full pl-10 pr-4 py-2 text-xs border border-slate-300 rounded bg-white outline-none focus:border-blue-500" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 text-[11px] font-bold text-slate-500 uppercase tracking-wider border-b border-slate-200">
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4">Product</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {orders.map(order => (
                <tr key={order.id} className="hover:bg-slate-50 transition-colors text-sm text-slate-600">
                  <td className="px-6 py-4 font-bold text-blue-600">{order.id}</td>
                  <td className="px-6 py-4">
                    <div className="font-bold text-slate-800">{order.buyer}</div>
                    <div className="text-xs text-slate-400">{order.email}</div>
                  </td>
                  <td className="px-6 py-4">{order.product}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${
                      order.status === 'Pending' ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button onClick={() => onGenerateInvoice(order)} className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded"><FileText size={18}/></button>
                      <button className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded"><Trash2 size={18}/></button>
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

export default OrderManager;