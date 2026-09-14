import React from 'react';
import { ShieldCheck, TrendingUp, Award, CheckCircle2 } from 'lucide-react';
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

  return (
    <section className="relative bg-[#0c0f14] bg-grid-pattern text-white py-20 lg:py-28 overflow-hidden border-t border-b border-white/10">
      {/* Radial Glass Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#c68d37]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Title */}
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Proven Superiority
        </h2>
        <p className="mt-2 text-2xl sm:text-4xl font-extrabold text-[#c68d37] font-serif-accent tracking-wide">
          In Growth & Risk Control
        </p>

        {/* Feature Glass Cards Grid (Slides in from Left to Center) */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {highlights.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <SlideIn key={idx} direction="left" delayMs={idx * 120}>
                <div className="glass-panel-dark border border-white/10 rounded-2xl p-6 glass-card-hover group shadow-xl h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#c68d37]/15 border border-[#c68d37]/30 flex items-center justify-center text-[#c68d37] mb-4 group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#c68d37] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </SlideIn>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <button
            onClick={onOpenInvestModal}
            className="px-8 py-4 bg-gradient-to-r from-[#c68d37] to-[#d4a054] hover:from-[#b8860b] hover:to-[#c68d37] text-white rounded-xl text-base font-semibold shadow-lg hover:shadow-xl transition-all cursor-pointer inline-flex items-center gap-2 transform hover:-translate-y-0.5"
          >
            <CheckCircle2 className="w-5 h-5" />
            <span>Start Building Wealth Today</span>
          </button>
        </div>

      </div>
    </section>
  );
}


