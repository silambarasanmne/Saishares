import React from 'react';
import SlideIn from './SlideIn';
import FlipCard from './FlipCard';

export default function TrustedGrowth() {
  return (
    <section id="who-we-are" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Section divider gradient */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Heading */}
        <SlideIn direction="up" delayMs={0}>
          <h2 className="text-3xl sm:text-4xl md:text-[3.25rem] font-extrabold tracking-tight text-gray-900 leading-[1.1]" style={{ letterSpacing: '-0.025em' }}>
            Trusted Investment{' '}
            <br className="hidden sm:block" />
            <span className="text-[#c68d37]">Strategies for Smart Growth</span>
          </h2>
        </SlideIn>

        {/* Section Description */}
        <SlideIn direction="up" delayMs={100}>
          <p className="mt-6 text-base sm:text-lg text-gray-500 leading-relaxed max-w-[58ch] mx-auto">
            We provide expert-driven investment solutions designed to deliver consistent returns with controlled risk. With a proven 19.9% CAGR, 4+ years of market experience, and the trust of 500+ clients, our strategies are built to help you grow your wealth confidently through research-based and performance-focused planning.
          </p>
        </SlideIn>

        {/* Corporate Team Image in 3D Flip Card — Double-Bezel treatment */}
        <SlideIn direction="up" delayMs={200}>
          <div className="mt-12 sm:mt-16">
            <FlipCard>
              <div className="card-bezel">
                <div className="card-bezel-inner overflow-hidden group">
                  <img
                    src="/images/team-meeting.png"
                    alt="Sai Shares Corporate Team presentation and strategy meeting"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-cover transform transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.03]"
                    style={{ borderRadius: 'calc(1.5rem - 6px)' }}
                  />
                </div>
              </div>
            </FlipCard>
          </div>
        </SlideIn>

      </div>
    </section>
  );
}
