"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, ChevronRight, CreditCard, Truck, Landmark, ArrowLeft, ShieldCheck } from 'lucide-react';

const PaymentPage = () => {
  const [step, setStep] = useState(1); // 1: Shipping, 2: Payment
  const [paymentMethod, setPaymentMethod] = useState('card');

  return (
    <main className="min-h-screen bg-[#FAF9F6] pt-24 pb-12">
      <div className="max-w-[1200px] mx-auto px-5 md:px-12">
        
        {/* --- CHECKOUT HEADER --- */}
        <header className="mb-12 text-center md:text-left">
          <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-4 hover:text-black transition-colors">
            <ArrowLeft size={14} /> Back to Archive
          </button>
          <h1 className="text-5xl md:text-7xl font-serif italic lowercase tracking-tighter">Secure Checkout</h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* --- LEFT SIDE: FORM INPUTS --- */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Step Indicators */}
            <div className="flex items-center gap-8 border-b border-gray-100 pb-6">
              <div className={`text-[10px] uppercase tracking-[0.3em] font-black ${step === 1 ? 'text-black' : 'text-gray-300'}`}>01 Shipping</div>
              <ChevronRight size={14} className="text-gray-200" />
              <div className={`text-[10px] uppercase tracking-[0.3em] font-black ${step === 2 ? 'text-black' : 'text-gray-300'}`}>02 Payment</div>
            </div>

            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.div 
                  key="shipping"
                  initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <Input label="First Name" placeholder="Jane" />
                    <Input label="Last Name" placeholder="Doe" />
                  </div>
                  <Input label="Email Address" type="email" placeholder="jane@example.com" />
                  <Input label="Shipping Address" placeholder="123 Atelier Street" />
                  <div className="grid grid-cols-2 gap-4">
                    <Input label="City" placeholder="Paris" />
                    <Input label="Postal Code" placeholder="75001" />
                  </div>
                  <button 
                    onClick={() => setStep(2)}
                    className="w-full bg-black text-white py-6 rounded-full text-[10px] uppercase tracking-[0.4em] font-black shadow-xl"
                  >
                    Continue to Payment
                  </button>
                </motion.div>
              ) : (
                <motion.div 
                  key="payment"
                  initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}
                  className="space-y-8"
                >
                  {/* Payment Method Selection */}
                  <div className="grid grid-cols-3 gap-4">
                    <PaymentTile icon={<CreditCard />} label="Card" active={paymentMethod === 'card'} onClick={() => setPaymentMethod('card')} />
                    <PaymentTile icon={<Landmark />} label="Bank" active={paymentMethod === 'bank'} onClick={() => setPaymentMethod('bank')} />
                    <PaymentTile icon="UPI" label="UPI" active={paymentMethod === 'upi'} onClick={() => setPaymentMethod('upi')} />
                  </div>

                  <div className="bg-white p-8 rounded-3xl border border-gray-100 space-y-6 shadow-sm">
                    <Input label="Card Number" placeholder="**** **** **** ****" />
                    <div className="grid grid-cols-2 gap-4">
                      <Input label="Expiry Date" placeholder="MM/YY" />
                      <Input label="CVC" placeholder="***" />
                    </div>
                  </div>

                  <button className="w-full bg-black text-white py-6 rounded-full text-[10px] uppercase tracking-[0.4em] font-black shadow-2xl flex items-center justify-center gap-3">
                    <Lock size={14} /> Pay ₹24,500
                  </button>
                  <button onClick={() => setStep(1)} className="w-full text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                    Back to Shipping
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* --- RIGHT SIDE: ORDER SUMMARY --- */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-[2rem] p-8 md:p-10 sticky top-32 border border-gray-100 shadow-sm">
              <h3 className="text-[10px] uppercase tracking-[0.5em] font-black text-gray-300 mb-8">Order Summary</h3>
              
              {/* Product Info */}
              <div className="flex gap-6 mb-8 pb-8 border-b border-gray-50">
                <div className="w-20 h-24 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
                  <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=200" className="w-full h-full object-cover grayscale" />
                </div>
                <div className="flex flex-col justify-between py-1">
                  <div>
                    <h4 className="font-serif italic text-xl lowercase leading-none">Atelier Handbag</h4>
                    <p className="text-[9px] uppercase tracking-widest text-gray-400 mt-2">Standard / Obsidian</p>
                  </div>
                  <p className="text-sm font-medium">₹24,500</p>
                </div>
              </div>

              {/* Totals */}
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Subtotal</span>
                  <span>₹24,500</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Shipping</span>
                  <span className="text-green-600 uppercase text-[10px] font-bold tracking-widest">Complimentary</span>
                </div>
                <div className="pt-4 mt-4 border-t border-gray-50 flex justify-between items-end">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-black">Total</span>
                  <span className="text-3xl font-serif italic leading-none">₹24,500</span>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="mt-10 flex items-center justify-center gap-2 text-[9px] uppercase tracking-widest text-gray-300 font-bold bg-gray-50 py-3 rounded-full">
                <ShieldCheck size={14} /> 256-bit SSL Encrypted
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

// Helper Components
const Input = ({ label, type = "text", placeholder }) => (
  <div className="flex flex-col gap-2">
    <label className="text-[9px] uppercase tracking-[0.3em] font-black text-gray-400 ml-1">{label}</label>
    <input 
      type={type} 
      placeholder={placeholder}
      className="bg-transparent border-b border-gray-200 py-3 px-1 text-sm focus:border-black transition-colors outline-none placeholder:text-gray-200"
    />
  </div>
);

const PaymentTile = ({ icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center justify-center p-6 rounded-2xl border transition-all ${
      active ? 'bg-black border-black text-white shadow-lg' : 'bg-white border-gray-100 text-gray-400 hover:border-black hover:text-black'
    }`}
  >
    <div className="mb-2">{icon}</div>
    <span className="text-[8px] uppercase tracking-widest font-black">{label}</span>
  </button>
);

export default PaymentPage;