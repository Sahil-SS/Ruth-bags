"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// Using more professional, thin-stroke icons
import { 
  Compass, 
  ShoppingBag, 
  Search, 
  User, 
  MessageCircle 
} from 'lucide-react';

const MobileNavbar = () => {
  const pathname = usePathname();
  const phoneNumber = "9681122088"; // Your actual number
  const message = "Hello! I'm interested in the Ruth collection.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const navItems = [
    { label: 'Home', icon: <Compass size={20} strokeWidth={1.2} />, href: '/' },
    { label: 'Shop', icon: <ShoppingBag size={20} strokeWidth={1.2} />, href: '/shop' },
    { label: 'Search', icon: <Search size={20} strokeWidth={1.2} />, href: '/search' },
    { label: 'Account', icon: <User size={20} strokeWidth={1.2} />, href: '/account' },
    { label: 'WhatsApp', icon: <MessageCircle size={20} strokeWidth={1.2} />, href: whatsappUrl, isExternal: true },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[100] md:hidden">
      {/* High-end Glassmorphism Effect */}
      <div className="absolute inset-0 bg-white/90 backdrop-blur-md border-t border-gray-100" />
      
      <div className="relative flex justify-around items-center h-16 px-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          
          const NavContent = (
            <div className="flex flex-col items-center justify-center py-1">
              <span className={`transition-all duration-300 ${isActive ? 'text-black scale-110' : 'text-gray-400'}`}>
                {item.icon}
              </span>
              <span className={`text-[9px] uppercase tracking-[0.15em] mt-1.5 font-serif italic transition-colors ${isActive ? 'text-black font-medium' : 'text-gray-400'}`}>
                {item.label}
              </span>
            </div>
          );

          if (item.isExternal) {
            return (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="flex-1">
                {NavContent}
              </a>
            );
          }

          return (
            <Link key={item.label} href={item.href} className="flex-1">
              {NavContent}
            </Link>
          );
        })}
      </div>
      
      {/* Ensures content clears the iPhone home indicator */}
      <div className="h-[env(safe-area-inset-bottom)] bg-white/90" />
    </nav>
  );
};

export default MobileNavbar;