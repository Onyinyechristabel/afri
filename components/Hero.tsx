import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ken Burns Effect (Slow Zoom)
      gsap.to(imageRef.current, {
        scale: 1.1,
        duration: 20,
        ease: "none",
        repeat: -1,
        yoyo: true
      });

      // Text and Button Reveal
      const tl = gsap.timeline({ delay: 0.5 });

      tl.from(textRef.current, {
        y: 30,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
      })
      .from(buttonRef.current, {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      }, "-=1.2");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen w-full flex flex-col justify-end overflow-hidden bg-[#E8D1C5]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          ref={imageRef}
          // Using a high-fashion night editorial shot to match the aesthetic
          src="https://images.unsplash.com/photo-1627446700465-38b8d2d3a77a?q=80&w=2670&auto=format&fit=crop" 
          alt="Luxury African Fashion Editorial Night" 
          className="w-full h-full object-cover opacity-100"
        />
        {/* Gradient Overlay: Beige to Transparent to ensure dark text legibility at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-[#E8D1C5] via-[#E8D1C5]/90 to-transparent pointer-events-none"></div>
      </div>

      {/* Content - Positioned Lower */}
      <div className="relative z-10 w-full px-6 pb-20 md:pb-32 max-w-4xl mx-auto text-center flex flex-col items-center">
        <p ref={textRef} className="text-base md:text-xl text-[#452829] font-inter font-medium tracking-wide leading-relaxed mx-auto max-w-xl mb-10">
          Enter into the mind of the Afri- a brand curated as a documentation of creative exploration.
        </p>
        
        <div ref={buttonRef}>
          <button 
            className="rounded-[3px] uppercase tracking-widest text-sm font-medium transition-all duration-500 border border-[#452829] bg-[#452829] text-[#E8D1C5] hover:bg-[#E8D1C5] hover:text-[#452829] hover:border-[#E8D1C5] px-12 py-4"
          >
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};