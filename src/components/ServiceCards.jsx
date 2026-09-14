import React from 'react';
import SlideIn from './SlideIn';

export default function ServiceCards() {
  const cards = [
    {
      title: 'Strategic Investment Solutions',
      description:
        'Our proprietary investment strategies are carefully built to deliver consistent growth while minimizing risk. We focus on smart market analysis, disciplined planning, and data-driven decision-making to help clients achieve long-term financial success with confidence.',
      image: '/images/strategy-solutions.png',
    },
    {
      title: 'Expert-Driven Approach',
      description:
        'Backed by 4+ years of market expertise, our team follows a research-based approach to identify high-potential opportunities. We combine technical insights, market trends, and risk management techniques to deliver results that consistently outperform traditional investment methods.',
      image: '/images/expert-approach.png',
    },
  ];

  return (
    <section id="what-we-do" className="py-12 sm:py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        {cards.map((card, idx) => (
          <SlideIn key={idx} direction="left" delayMs={idx * 150}>
            <div className="relative min-h-[300px] sm:min-h-[380px] rounded-3xl overflow-hidden glass-panel-dark glass-card-hover border border-white/10 flex flex-col justify-end p-6 sm:p-10 shadow-2xl group">
              {/* Background Image Layer */}
              <div className="absolute inset-0 opacity-40">
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0f14] via-[#0c0f14]/80 to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 text-white max-w-2xl space-y-3">
                <span className="inline-block text-xs font-bold text-[#d4a054] tracking-widest uppercase mb-1">
                  {idx === 0 ? 'Core Strategy' : 'Market Intelligence'}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-[#d4a054] transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal opacity-95">
                  {card.description}
                </p>
              </div>
            </div>
          </SlideIn>
        ))}
      </div>
    </section>
  );
}
