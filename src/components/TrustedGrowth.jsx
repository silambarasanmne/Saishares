import React from 'react';
import SlideIn from './SlideIn';
import FlipCard from './FlipCard';

export default function TrustedGrowth() {
  return (
    <section id="who-we-are" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Heading */}
        <SlideIn direction="left" delayMs={100}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Trusted Investment <br />
            <span className="text-[#c68d37]">Strategies for Smart Growth</span>
          </h2>

          {/* Section Description */}
          <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We provide expert-driven investment solutions designed to deliver consistent returns with controlled risk. With a proven 19.9% CAGR, 4+ years of market experience, and the trust of 500+ clients, our strategies are built to help you grow your wealth confidently through research-based and performance-focused planning.
          </p>
        </SlideIn>

        {/* Corporate Team Image in 3D Flip Card */}
        <div className="mt-10 sm:mt-12">
          <FlipCard>
            <div className="overflow-hidden rounded-2xl shadow-xl group border border-gray-100">
              <img
                src="/images/team-meeting.png"
                alt="Sai Shares Corporate Team presentation and strategy meeting"
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-102"
              />
            </div>
          </FlipCard>
        </div>

      </div>
    </section>
  );
}
