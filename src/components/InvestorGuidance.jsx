import React from 'react';
import SlideIn from './SlideIn';
import FlipCard from './FlipCard';

export default function InvestorGuidance() {
  return (
    <section id="investment-guide" className="py-12 sm:py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stock Chart Visual in 3D Flip Card */}
        <div className="mb-8 sm:mb-10">
          <FlipCard>
            <div className="overflow-hidden rounded-2xl shadow-xl group border border-gray-100">
              <img
                src="/images/stock-chart.png"
                alt="Stock market financial candlestick chart analysis"
                loading="lazy"
                decoding="async"
                className="w-full h-64 sm:h-96 object-cover object-center transform transition-transform duration-700 group-hover:scale-102"
              />
            </div>
          </FlipCard>
        </div>

        {/* Content */}
        <SlideIn direction="left" delayMs={150}>
          <div className="text-left space-y-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Guiding every investor with clarity and confidence
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
              We are known for our client-first approach, professional support, and performance-driven investment solutions. From beginners to experienced investors, we provide the right roadmap for everyone to grow their wealth confidently.
            </p>
          </div>
        </SlideIn>

      </div>
    </section>
  );
}
