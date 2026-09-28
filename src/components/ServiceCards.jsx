import React, { useRef } from 'react';
import SlideIn from './SlideIn';

export default function ServiceCards() {
  const cards = [
    {
      title: 'Strategic Investment Solutions',
      description:
        'Our proprietary investment strategies are carefully built to deliver consistent growth while minimizing risk. We focus on smart market analysis, disciplined planning, and data-driven decision-making to help clients achieve long-term financial success with confidence.',
      image: '/images/strategy-solutions.png',
      tag: 'Core Strategy',
    },
    {
      title: 'Expert-Driven Approach',
      description:
        'Backed by 4+ years of market expertise, our team follows a research-based approach to identify high-potential opportunities. We combine technical insights, market trends, and risk management techniques to deliver results that consistently outperform traditional investment methods.',
      image: '/images/expert-approach.png',
      tag: 'Market Intelligence',
    },
  ];

  const handleMouseMove = (e, cardRef) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    cardRef.current.style.setProperty('--mouse-x', `${x}%`);
    cardRef.current.style.setProperty('--mouse-y', `${y}%`);
  };

  return (
    <section id="what-we-do" className="py-16 sm:py-28 relative overflow-hidden">
      {/* Section divider gradient */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
        {cards.map((card, idx) => {
          const cardRef = useRef(null);
          return (
            <SlideIn key={idx} direction={idx === 0 ? 'left' : 'right'} delayMs={idx * 150}>
              <div className="card-bezel-dark">
                <div
                  ref={cardRef}
                  onMouseMove={(e) => handleMouseMove(e, cardRef)}
                  className="card-bezel-dark-inner spotlight-card relative min-h-[300px] sm:min-h-[400px] overflow-hidden flex flex-col justify-end p-7 sm:p-10 group"
                >
                  {/* Background Image Layer */}
                  <div className="absolute inset-0 opacity-35">
                    <img
                      src={card.image}
                      alt={card.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-center transform transition-transform duration-[800ms] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0f14] via-[#0c0f14]/85 to-[#0c0f14]/30" />
                  </div>

                  {/* Content Overlay */}
                  <div className="relative z-10 text-white max-w-2xl space-y-3">
                    <span className="inline-block text-[10px] font-bold text-[#d4a054] tracking-[0.18em] uppercase mb-1">
                      {card.tag}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-[#d4a054] transition-colors duration-500" style={{ letterSpacing: '-0.02em' }}>
                      {card.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300/90 leading-relaxed font-normal max-w-[55ch]">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            </SlideIn>
          );
        })}
      </div>
    </section>
  );
}
