import React, { useState } from 'react';
import { Menu, X, Search, ShoppingBag } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white py-4 shadow-sm transition-all duration-500 font-inter">
      <div className="container mx-auto px-6 flex flex-wrap justify-between items-center">
        {/* Logo */}
        <div className="cursor-pointer">
           <svg width="48" height="48" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="#452829"/>
            <path d="M20 5L26 18H14L20 5Z" fill="#E8D1C5"/>
            <path d="M10 32L15 15H25L30 32" stroke="#E8D1C5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13 24H27" stroke="#E8D1C5" strokeWidth="2" strokeLinecap="round"/>
           </svg>
        </div>

        {/* Desktop Links + Shop Now */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#new-arrival" className="text-sm font-medium tracking-wide text-[#452829] hover:text-[#E8D1C5] transition-colors duration-300">
            NEW ARRIVAL
          </a>
          <a href="#size-chart" className="text-sm font-medium tracking-wide text-[#452829] hover:text-[#E8D1C5] transition-colors duration-300">
            SIZE CHART
          </a>
          
          <button className="text-[#452829] hover:text-[#E8D1C5] transition-colors">
            <Search size={20} />
          </button>
          
          <button className="text-[#452829] hover:text-[#E8D1C5] transition-colors">
            <ShoppingBag size={20} />
          </button>

          {/* Shop Button */}
          <button 
            className="rounded-[3px] uppercase tracking-widest text-sm font-medium transition-all duration-500 border border-[#452829] hover:border-[#E8D1C5]"
            style={{
              backgroundColor: '#452829',
              color: '#E8D1C5',
              padding: '8px 24px'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#E8D1C5';
              e.currentTarget.style.color = '#452829';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#452829';
              e.currentTarget.style.color = '#E8D1C5';
            }}
          >
            SHOP
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-[#452829]" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 p-6 flex flex-col space-y-4 md:hidden animate-fade-in-down shadow-xl">
           <a href="#new-arrival" className="text-lg text-[#452829] hover:text-[#E8D1C5]" onClick={() => setMenuOpen(false)}>
              NEW ARRIVAL
            </a>
            <a href="#size-chart" className="text-lg text-[#452829] hover:text-[#E8D1C5]" onClick={() => setMenuOpen(false)}>
              SIZE CHART
            </a>
          <button 
            className="w-full rounded-[3px] uppercase tracking-widest text-sm font-medium transition-all duration-500"
            style={{
              backgroundColor: '#452829',
              color: '#E8D1C5',
              padding: '8px 24px'
            }}
          >
            SHOP
          </button>
        </div>
      )}
    </nav>
  );
};