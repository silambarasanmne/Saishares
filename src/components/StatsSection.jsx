import React from 'react';
import AnimatedCounter from './AnimatedCounter';
import SlideIn from './SlideIn';

export default function StatsSection() {
  const stats = [
    {
      end: 19.9,
      decimals: 1,
      suffix: '%',
      label: 'CAGR Returns',
      sublabel: 'Proven track record',
    },
    {
      end: 1500,
      decimals: 0,
      suffix: '+',
      label: 'Happy Clients',
      sublabel: 'Trust built over years',
    },
  ];

  return (
    <section className="bg-white pt-20 pb-16 sm:py-24 relative">
      {/* Section divider gradient */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
          {stats.map((stat, idx) => (
            <SlideIn key={idx} direction="up" delayMs={idx * 120}>
              <div className="card-bezel">
                <div className="card-bezel-inner p-8 sm:p-10 text-center glass-card-hover group">
                  <div className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#c68d37] tracking-tight transition-transform duration-500 group-hover:scale-[1.03]" style={{ letterSpacing: '-0.03em' }}>
                    <AnimatedCounter
                      end={stat.end}
                      decimals={stat.decimals}
                      suffix={stat.suffix}
                      duration={2200}
                    />
                  </div>
                  <div className="mt-3 text-lg sm:text-xl font-serif-body font-bold text-gray-900 tracking-wide">
                    {stat.label}
                  </div>
                  <div className="mt-1 text-sm text-gray-400 font-medium">
                    {stat.sublabel}
                  </div>
                </div>
              </div>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}
