"use client";
import React from 'react';
import { motion } from 'framer-motion';

const WhatsAppFloatingIcon = () => {
  // CONFIGURATION
  const phoneNumber = "9681122088"; // Replace with your actual WhatsApp number
  const message = "Hello! I'm interested in the Ruth collection and would like some assistance.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5, x: -20 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      /* CRITICAL CHANGE: 
         'hidden' by default (mobile), 'md:flex' on tablet/desktop.
         This prevents it from overlapping your new Mobile Bottom Bar.
      */
      className="fixed bottom-12 left-8 z-[90] hidden md:flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      {/* Tooltip Label - Signature Green style */}
      <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-white text-[#25D366] text-[10px] font-bold uppercase tracking-widest px-4 py-2 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-gray-100 rounded-sm whitespace-nowrap">
        Chat&nbsp;With&nbsp;Us
      </div>

      {/* WhatsApp Icon Container */}
      <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_10px_30px_-5px_rgba(37,211,102,0.4)] relative">
        
        {/* Official WhatsApp SVG */}
        <svg 
          viewBox="0 0 24 24" 
          width="32" 
          height="32" 
          fill="white" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.431 5.631 1.432h.006c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>

        {/* Subtle Background Pulse */}
        <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-10"></span>
      </div>
    </motion.a>
  );
};

export default WhatsAppFloatingIcon;