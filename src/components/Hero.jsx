import React from 'react';
import AnimatedCounter from './AnimatedCounter';
import SlideIn from './SlideIn';
import { FileDown } from 'lucide-react';

export default function Hero({ onOpenInvestModal, onOpenBrochureModal }) {
  return (
    <section id="home" className="relative bg-white pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
      {/* Subtle decorative background elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#c68d37]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight sm:leading-tight max-w-3xl">
          Every smart investment begins with the right guidance
        </h1>

        {/* Brand Accent Tagline */}
        <div className="mt-8 flex flex-col items-center justify-center">
          <div className="text-3xl sm:text-4xl font-serif-accent text-[#c68d37] font-medium tracking-wide">
            Sai Shares
          </div>
          <div className="relative mt-1">
            <span className="text-3xl sm:text-4xl font-serif-accent text-[#e05a2b] font-medium tracking-wide flex items-center gap-2">
              WeGrowTogether
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#e05a2b] inline-block -mt-2" viewBox="0 0 50 30" fill="none" stroke="currentColor">
                <path d="M5 25 L35 10 L45 15 M45 15 L45 5 L35 5" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#e05a2b] to-transparent mt-1" />
          </div>
        </div>

        {/* Paragraph Copy */}
        <p className="mt-8 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl font-normal">
          We help individuals and businesses grow their wealth through strategic share marketing and investment solutions. With market expertise and a customer-first approach, we guide you towards confident and informed financial decisions.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto items-center justify-center">
          <button
            onClick={onOpenInvestModal}
            className="w-full sm:w-auto px-7 py-4 bg-gradient-to-r from-[#c68d37] to-[#d4a054] hover:from-[#b8860b] hover:to-[#c68d37] text-white rounded-xl text-base font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            Consult Our Experts
          </button>
          
          <button
            onClick={onOpenBrochureModal}
            className="w-full sm:w-auto px-6 py-4 bg-amber-50 hover:bg-amber-100 border border-[#c68d37]/30 text-[#b07a2e] rounded-xl text-base font-semibold transition-all duration-300 shadow-md inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <FileDown className="w-5 h-5 text-[#c68d37]" />
            <span>Download Brochure</span>
          </button>

          <a
            href="#what-we-do"
            className="w-full sm:w-auto px-6 py-4 bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-800 rounded-xl text-base font-semibold transition-all duration-300 shadow-md"
          >
            Explore Services
          </a>
        </div>

        {/* Overlapping Stat Card */}
        <SlideIn direction="left" delayMs={200} className="w-full max-w-xs sm:max-w-md mt-14 transform translate-y-6 sm:translate-y-10">
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-200 glass-card-hover text-center">
            <div className="text-5xl sm:text-6xl font-extrabold text-[#c68d37] tracking-tight">
              <AnimatedCounter end={6} suffix="+" duration={1800} />
            </div>
            <div className="mt-2 text-lg sm:text-xl font-serif-body font-bold text-gray-900 tracking-wide">
              Years Experience
            </div>
          </div>
        </SlideIn>

      </div>
    </section>
  );
}




