import React, { useRef } from 'react';
import { ShieldCheck, TrendingUp, Award, ArrowRight } from 'lucide-react';
import SlideIn from './SlideIn';

export default function SuperiorityBanner({ onOpenInvestModal }) {
  const highlights = [
    {
      icon: TrendingUp,
      title: 'Consistent CAGR',
      desc: 'Proven 19.9% track record in wealth appreciation.',
    },
    {
      icon: ShieldCheck,
      title: 'Risk Controlled',
      desc: 'Disciplined hedging & portfolio protection techniques.',
    },
    {
      icon: Award,
      title: 'AMFI Registered',
      desc: 'Certified professionals providing trusted market advice.',
    },
  ];

  const handleMouseMove = (e, ref) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    ref.current.style.setProperty('--mouse-x', `${x}%`);
    ref.current.style.setProperty('--mouse-y', `${y}%`);
  };

  return (
    <section className="relative bg-[#0c0f14] bg-grid-pattern text-white py-24 lg:py-36 overflow-hidden border-t border-b border-white/8">
      {/* Radial Glass Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#c68d37]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#e05a2b]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Title */}
        <SlideIn direction="up" delayMs={0}>
          <h2 className="text-3xl sm:text-[2.75rem] md:text-5xl font-extrabold tracking-tight text-white leading-[1.1]" style={{ letterSpacing: '-0.03em' }}>
            Proven Superiority
          </h2>
          <p className="mt-3 text-2xl sm:text-4xl font-extrabold text-[#c68d37] font-serif-accent tracking-wide">
            In Growth & Risk Control
          </p>
        </SlideIn>

        {/* Feature Glass Cards Grid — Double-Bezel Dark with Spotlight */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-7 text-left">
          {highlights.map((item, idx) => {
            const IconComp = item.icon;
            const cardRef = useRef(null);
            return (
              <SlideIn key={idx} direction="up" delayMs={idx * 120}>
                <div className="card-bezel-dark h-full">
                  <div
                    ref={cardRef}
                    onMouseMove={(e) => handleMouseMove(e, cardRef)}
                    className="card-bezel-dark-inner spotlight-card p-7 glass-card-hover group h-full"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#c68d37]/12 border border-[#c68d37]/25 flex items-center justify-center text-[#c68d37] mb-5 group-hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#c68d37] transition-colors duration-400">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </SlideIn>
            );
          })}
        </div>

        {/* CTA Button — Premium pill with trailing icon */}
        <SlideIn direction="up" delayMs={400}>
          <div className="mt-14">
            <button
              onClick={onOpenInvestModal}
              className="btn-premium"
            >
              <span>Start Building Wealth Today</span>
              <span className="btn-icon">
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </div>
        </SlideIn>

      </div>
    </section>
  );
}
