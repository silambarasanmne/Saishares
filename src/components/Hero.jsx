import React, { useEffect, useState } from 'react';
import AnimatedCounter from './AnimatedCounter';
import SlideIn from './SlideIn';
import { FileDown, ArrowRight } from 'lucide-react';

export default function Hero({ onOpenInvestModal, onOpenBrochureModal }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="home" className="relative bg-white pt-12 pb-28 lg:pt-20 lg:pb-36 overflow-hidden min-h-[90dvh] flex items-center">
      {/* Subtle decorative background elements */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#c68d37]/6 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500/4 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c68d37]/3 rounded-full blur-[120px] pointer-events-none" />

      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c68d37]/20 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center w-full">
        
        {/* Eyebrow Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c68d37]/6 border border-[#c68d37]/15 text-[#b07a2e] text-[11px] font-bold tracking-[0.15em] uppercase mb-8 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#c68d37] animate-pulse" />
          Trusted since 2019
        </div>

        {/* Main Headline — staggered entry */}
        <h1
          className={`text-[2rem] sm:text-5xl md:text-[3.5rem] lg:text-[3.75rem] font-extrabold tracking-tight text-gray-900 leading-[1.1] max-w-[18ch] transition-all duration-700 delay-100 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)', letterSpacing: '-0.025em' }}
        >
          Every smart investment begins with the right guidance
        </h1>

        {/* Brand Logo Image — pixel-perfect from actual asset */}
        <div
          className={`mt-8 transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)' }}
        >
          <img
            src="/images/sai-shares-logo.png"
            alt="Sai Shares — WeGrowTogether"
            className="h-48 sm:h-56 md:h-64 w-auto object-contain mx-auto select-none"
            draggable="false"
          />
        </div>

        {/* Paragraph Copy */}
        <p
          className={`mt-8 text-base sm:text-lg text-gray-500 leading-relaxed max-w-[52ch] font-normal transition-all duration-700 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)' }}
        >
          We help individuals and businesses grow their wealth through strategic share marketing and investment solutions. With market expertise and a customer-first approach, we guide you towards confident and informed financial decisions.
        </p>

        {/* CTA Buttons — Premium pill style with trailing icon */}
        <div
          className={`mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center transition-all duration-700 delay-[400ms] ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)' }}
        >
          {/* Primary CTA — Button-in-Button Pattern */}
          <button
            onClick={onOpenInvestModal}
            className="btn-premium w-full sm:w-auto animate-gold-pulse"
          >
            <span>Consult Our Experts</span>
            <span className="btn-icon">
              <ArrowRight className="w-4 h-4" />
            </span>
          </button>
          
          {/* Secondary CTA */}
          <button
            onClick={onOpenBrochureModal}
            className="btn-secondary w-full sm:w-auto"
          >
            <FileDown className="w-4.5 h-4.5 text-[#c68d37]" />
            <span>Download Brochure</span>
          </button>

          {/* Tertiary text link CTA */}
          <a
            href="#what-we-do"
            className="text-sm font-semibold text-gray-500 hover:text-[#c68d37] transition-colors duration-300 hidden sm:inline-flex items-center gap-1.5 group"
          >
            Explore Services
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Overlapping Stat Card — Double-Bezel treatment */}
        <SlideIn direction="up" delayMs={200} className="w-full max-w-xs sm:max-w-sm mt-16 transform translate-y-6 sm:translate-y-10">
          <div className="card-bezel">
            <div className="card-bezel-inner p-6 sm:p-8 text-center glass-card-hover">
              <div className="text-5xl sm:text-6xl font-extrabold text-[#c68d37] tracking-tight">
                <AnimatedCounter end={6} suffix="+" duration={1800} />
              </div>
              <div className="mt-2 text-lg sm:text-xl font-serif-body font-bold text-gray-900 tracking-wide">
                Years Experience
              </div>
            </div>
          </div>
        </SlideIn>

      </div>
    </section>
  );
}
