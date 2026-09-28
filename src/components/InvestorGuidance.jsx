import React from 'react';
import SlideIn from './SlideIn';
import FlipCard from './FlipCard';

export default function InvestorGuidance() {
  return (
    <section id="investment-guide" className="py-16 sm:py-28 relative overflow-hidden">
      {/* Section divider gradient */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stock Chart Visual in 3D Flip Card — Double-Bezel */}
        <SlideIn direction="up" delayMs={0}>
          <div className="mb-10 sm:mb-14">
            <FlipCard>
              <div className="card-bezel">
                <div className="card-bezel-inner overflow-hidden group">
                  <img
                    src="/images/stock-chart.png"
                    alt="Stock market financial candlestick chart analysis"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-64 sm:h-96 object-cover object-center transform transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.03]"
                    style={{ borderRadius: 'calc(1.5rem - 6px)' }}
                  />
                </div>
              </div>
            </FlipCard>
          </div>
        </SlideIn>

        {/* Content */}
        <SlideIn direction="up" delayMs={150}>
          <div className="text-left space-y-5 max-w-[58ch]">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-[1.1]" style={{ letterSpacing: '-0.025em' }}>
              Guiding every investor with clarity and confidence
            </h2>
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed font-normal">
              We are known for our client-first approach, professional support, and performance-driven investment solutions. From beginners to experienced investors, we provide the right roadmap for everyone to grow their wealth confidently.
            </p>
          </div>
        </SlideIn>

      </div>
    </section>
  );
}
