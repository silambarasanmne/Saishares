import React from 'react';
import AnimatedCounter from './AnimatedCounter';

export default function StatsSection() {
  const stats = [
    {
      end: 19.9,
      decimals: 1,
      suffix: '%',
      label: 'CAGR Returns',
    },
    {
      end: 1500,
      decimals: 0,
      suffix: '+',
      label: 'Happy Clients',
    },
  ];

  return (
    <section className="bg-white pt-16 pb-12 sm:py-16 border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center p-4 group">
              <div className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#c68d37] tracking-tight transition-transform duration-300 group-hover:scale-105">
                <AnimatedCounter
                  end={stat.end}
                  decimals={stat.decimals}
                  suffix={stat.suffix}
                  duration={2200}
                />
              </div>
              <div className="mt-3 text-lg sm:text-xl font-serif-body font-bold text-gray-800 tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
