import React, { useEffect, useRef, useState } from 'react';

/**
 * FlipCard Component
 * Wraps photo cards. As the element scrolls into view,
 * it smoothly 3D-flips from back to front (revealing the photo/card).
 * When scrolled out of view, it resets to back so it re-triggers cleanly when returning.
 */
export default function FlipCard({ children, className = '' }) {
  const [isFlipped, setIsFlipped] = useState(true);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsFlipped(false);
          } else {
            setIsFlipped(true);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    const el = cardRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <div ref={cardRef} className={`flip-card ${className}`}>
      <div className={`flip-card-inner relative w-full h-full ${isFlipped ? 'flipped' : ''}`}>
        {/* Front side: The actual photo/content */}
        <div className="flip-card-front w-full h-full">
          {children}
        </div>
        {/* Back side: Sleek themed card back */}
        <div className="flip-card-back absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-br from-[#121418] via-[#0c0f14] to-[#1e232d] border border-[#c68d37]/30 flex flex-col items-center justify-center p-6 text-center shadow-2xl overflow-hidden pointer-events-none">
          <div className="w-14 h-14 rounded-full bg-[#c68d37]/10 border border-[#c68d37]/40 flex items-center justify-center mb-3">
            <span className="text-[#c68d37] font-extrabold text-2xl font-serif-accent">S</span>
          </div>
          <span className="text-sm font-bold text-gray-200 tracking-wider uppercase font-serif-accent">Sai Shares</span>
          <span className="text-xs text-[#c68d37]/80 mt-1">Smart Wealth Guidance</span>
        </div>
      </div>
    </div>
  );
}
