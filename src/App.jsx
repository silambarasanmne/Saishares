import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import TrustedGrowth from './components/TrustedGrowth';
import ServiceCards from './components/ServiceCards';
import InvestorGuidance from './components/InvestorGuidance';
import SuperiorityBanner from './components/SuperiorityBanner';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import InvestModal from './components/InvestModal';
import BrochureModal from './components/BrochureModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('Home');
  const [isInvestModalOpen, setIsInvestModalOpen] = useState(false);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

  const handleOpenInvestModal = () => setIsInvestModalOpen(true);
  const handleCloseInvestModal = () => setIsInvestModalOpen(false);

  const handleOpenBrochureModal = () => setIsBrochureModalOpen(true);
  const handleCloseBrochureModal = () => setIsBrochureModalOpen(false);

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900 flex flex-col font-sans selection:bg-[#c68d37] selection:text-white relative overflow-x-hidden">
      {/* Header Navigation Bar */}
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenInvestModal={handleOpenInvestModal}
        onOpenBrochureModal={handleOpenBrochureModal}
      />

      {/* Main Page Content Sections */}
      <main className="flex-grow">
        {/* Hero Banner with Overlapping Stat Card */}
        <Hero 
          onOpenInvestModal={handleOpenInvestModal}
          onOpenBrochureModal={handleOpenBrochureModal}
        />

        {/* Key Metrics Stats (19.9% CAGR & 1,000+ Happy Clients) */}
        <StatsSection />

        {/* Trusted Growth Intro & Team Image */}
        <TrustedGrowth />

        {/* Service Cards (Strategic Investment & Expert Approach) */}
        <ServiceCards />

        {/* Investor Guidance Section & Candlestick Stock Chart */}
        <InvestorGuidance />

        {/* Superiority Grid Dark Banner */}
        <SuperiorityBanner onOpenInvestModal={handleOpenInvestModal} />
      </main>

      {/* Footer with Legal Disclaimers & Credentials */}
      <Footer
        setActiveSection={setActiveSection}
        onOpenInvestModal={handleOpenInvestModal}
        onOpenBrochureModal={handleOpenBrochureModal}
      />

      {/* Floating Action Buttons (Phone, WhatsApp, Mail - Vector Icons Only) */}
      <FloatingActions />

      {/* Interactive Consultation Inquiry Modal */}
      <InvestModal
        isOpen={isInvestModalOpen}
        onClose={handleCloseInvestModal}
      />

      {/* Brochure Download Modal (2 PDF Files) */}
      <BrochureModal
        isOpen={isBrochureModalOpen}
        onClose={handleCloseBrochureModal}
      />
    </div>
  );
}



