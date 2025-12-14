import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FashionScroll } from './components/FashionScroll';
import { StylistChat } from './components/StylistChat';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-brand-dark min-h-screen text-brand-cream font-sans selection:bg-brand-gold selection:text-brand-dark">
      <Navbar />
      <main>
        <Hero />
        <section id="collections">
          <FashionScroll />
        </section>
        <section className="py-24 bg-brand-charcoal text-center px-6">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">BESPOKE TAILORING</h2>
          <p className="max-w-2xl mx-auto text-gray-400 mb-8">
            Each piece is cut to perfection. Experience the luxury of garments made to fit your unique silhouette.
          </p>
          <img 
            src="https://picsum.photos/seed/fabric/1200/400" 
            alt="Fabric Texture" 
            className="w-full h-64 object-cover opacity-50 rounded-lg mx-auto max-w-4xl"
          />
        </section>
      </main>
      <StylistChat />
      <Footer />
    </div>
  );
}

export default App;
