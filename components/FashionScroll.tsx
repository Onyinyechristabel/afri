import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FashionItem } from '../types';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const items: FashionItem[] = [
  {
    id: '01',
    title: "Savanna Silk",
    subtitle: "Evening Wear Collection",
    description: "Inspired by the golden hour of the Serengeti, this collection features flowing silks in earth tones, accented with hand-beaded gold details.",
    imageUrl: "https://picsum.photos/seed/africa2/1000/1400",
    price: "$450"
  },
  {
    id: '02',
    title: "Urban Ankara",
    subtitle: "Street Style Series",
    description: "Bold geometric patterns meet contemporary street silhouettes. A fusion of Lagos energy and modern minimalism.",
    imageUrl: "https://picsum.photos/seed/africa3/1000/1400",
    price: "$280"
  },
  {
    id: '03',
    title: "Kente Royal",
    subtitle: "Ceremonial Edit",
    description: "Woven with history. Our Kente series pays homage to royalty with structured shoulders and deep, resonant colors.",
    imageUrl: "https://picsum.photos/seed/africa4/1000/1400",
    price: "$620"
  },
   {
    id: '04',
    title: "Dune Drift",
    subtitle: "Resort Collection",
    description: "Lightweight linens in sand and terracotta. Perfect for the coastal breeze, embodying effortless elegance.",
    imageUrl: "https://picsum.photos/seed/africa5/1000/1400",
    price: "$310"
  }
];

export const FashionScroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Create a smooth pinning effect where panels overlap
      sectionsRef.current.forEach((section, i) => {
        if (!section) return;
        
        ScrollTrigger.create({
          trigger: section,
          start: "top top", 
          pin: true, 
          pinSpacing: false,
          snap: {
            snapTo: 1,
            duration: 0.8,
            ease: "power2.inOut"
          },
          // The last item shouldn't block the footer
          end: i === items.length - 1 ? "+=100%" : "bottom top", 
        });

        // Parallax effect for image inside
        const img = section.querySelector('.parallax-img');
        if (img) {
          gsap.fromTo(img, 
            { y: -50, scale: 1.1 },
            { 
              y: 50, 
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: true
              }
            }
          );
        }

        // Text reveal animation
        const textContent = section.querySelector('.text-content');
        if (textContent) {
           gsap.from(textContent, {
             y: 100,
             opacity: 0,
             duration: 1,
             ease: "power3.out",
             scrollTrigger: {
               trigger: section,
               start: "top center",
               toggleActions: "play none none reverse"
             }
           });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-brand-dark">
      {items.map((item, index) => (
        <div 
          key={item.id} 
          ref={el => (sectionsRef.current[index] = el)}
          className="h-screen w-full relative flex flex-col md:flex-row overflow-hidden border-b border-white/5"
        >
          {/* Text Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-24 bg-brand-charcoal z-10 relative">
             <div className="text-content max-w-lg">
                <span className="text-8xl font-serif text-white/5 absolute -top-10 -left-10 select-none pointer-events-none">
                  {item.id}
                </span>
                <h3 className="text-brand-gold uppercase tracking-widest text-sm mb-4 font-bold">{item.subtitle}</h3>
                <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-none">{item.title}</h2>
                <p className="text-gray-400 font-sans text-lg mb-10 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center gap-8">
                  <span className="text-3xl font-serif text-white">{item.price}</span>
                  <Button variant="primary" className="flex items-center gap-2 group">
                    Shop Look <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
             </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 h-full relative overflow-hidden">
             <div className="absolute inset-0 bg-black/20 z-10"></div>
             <img 
              src={item.imageUrl} 
              alt={item.title} 
              className="parallax-img w-full h-full object-cover"
             />
          </div>
        </div>
      ))}
    </div>
  );
};
