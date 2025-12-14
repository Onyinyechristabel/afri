import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white/60 py-16 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h4 className="text-2xl font-serif text-white font-bold">AFRI<span className="text-brand-gold">CHIC</span></h4>
            <p className="text-sm">Redefining modern elegance through the lens of African heritage.</p>
          </div>
          <div>
            <h5 className="text-white font-serif mb-4">Shop</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-gold">New Arrivals</a></li>
              <li><a href="#" className="hover:text-brand-gold">Best Sellers</a></li>
              <li><a href="#" className="hover:text-brand-gold">Accessories</a></li>
            </ul>
          </div>
           <div>
            <h5 className="text-white font-serif mb-4">Help</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-gold">Size Guide</a></li>
              <li><a href="#" className="hover:text-brand-gold">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-brand-gold">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-serif mb-4">Follow Us</h5>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-gold"><Instagram size={20} /></a>
              <a href="#" className="hover:text-brand-gold"><Facebook size={20} /></a>
              <a href="#" className="hover:text-brand-gold"><Twitter size={20} /></a>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/5 text-center text-xs">
          &copy; 2024 AfriChic Fashion House. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};
