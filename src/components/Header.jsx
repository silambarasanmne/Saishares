import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, ChevronRight, PhoneCall, ShieldCheck, FileDown } from 'lucide-react';

export default function Header({
  activeSection,
  setActiveSection,
  onOpenInvestModal,
  onOpenBrochureModal
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Who We Are', href: '#who-we-are' },
    { name: 'What We Do', href: '#what-we-do' },
    { name: 'Investment Guide', href: '#investment-guide' },
    { name: 'Brochure', href: '#brochure', isBrochure: true },
    { name: 'To Invest', href: '#to-invest', isCta: true },
  ];

  // Prevent background body scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e, item) => {
    if (item.isCta) {
      e.preventDefault();
      onOpenInvestModal();
      setMobileMenuOpen(false);
      return;
    }
    if (item.isBrochure) {
      e.preventDefault();
      onOpenBrochureModal();
      setMobileMenuOpen(false);
      return;
    }
    setActiveSection(item.name);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 glass-header shadow-xs transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <div className="flex-shrink-0 py-1">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-5 lg:space-x-7">
            {navLinks.map((item) => {
              if (item.isBrochure) {
                return (
                  <button
                    key={item.name}
                    onClick={() => onOpenBrochureModal()}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold border border-amber-500/30 bg-amber-500/10 text-[#c68d37] hover:bg-amber-500/20 transition-all cursor-pointer"
                  >
                    <FileDown className="w-4 h-4" />
                    <span>Download Brochure</span>
                  </button>
                );
              }
              if (item.isCta) {
                return (
                  <button
                    key={item.name}
                    onClick={() => onOpenInvestModal()}
                    className="bg-gradient-to-r from-[#c68d37] to-[#d4a054] hover:from-[#b8860b] hover:to-[#c68d37] text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5"
                  >
                    {item.name}
                  </button>
                );
              }
              const isActive = activeSection === item.name;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`text-sm font-semibold transition-colors duration-200 relative py-1 ${
                    isActive ? 'text-[#c68d37]' : 'text-gray-700 hover:text-[#c68d37]'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#c68d37] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 hover:bg-gray-100 hover:text-[#c68d37] focus:outline-hidden transition-all shadow-xs cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 stroke-[2.5]" />
              ) : (
                <Menu className="w-6 h-6 stroke-[2.5]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Backdrop Overlay & Drawer Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex justify-end">
          
          {/* Dark Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity animate-fade-in"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Side Drawer Panel — Solid white for maximum readability */}
          <div
            className="relative w-[85%] max-w-xs h-[100dvh] bg-white shadow-2xl flex flex-col overflow-y-auto z-10 animate-slide-left"
            style={{ fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" }}
          >
            
            {/* Drawer Top Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 bg-gray-50/80">
              <Logo />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-9 h-9 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>

            {/* Drawer Navigation Links */}
            <div className="px-5 py-6 space-y-1.5 flex-1">
              <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4 px-3">
                Menu
              </div>

              {navLinks.map((item) => {
                const isActive = activeSection === item.name;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-[15px] font-semibold transition-all ${
                      item.isCta
                        ? 'bg-gradient-to-r from-[#c68d37] to-[#d4a054] text-white shadow-md mt-3 hover:shadow-lg'
                        : item.isBrochure
                        ? 'bg-amber-50 text-[#b07a2e] border border-amber-200 mt-2 hover:bg-amber-100'
                        : isActive
                        ? 'bg-[#c68d37]/10 text-[#b07a2e] font-bold'
                        : 'text-gray-800 hover:bg-gray-100 hover:text-[#c68d37]'
                    }`}
                  >
                    <span>{item.isBrochure ? '📄 Download Brochure' : item.name}</span>
                    <ChevronRight className={`w-4 h-4 ${item.isCta ? 'text-white/80' : 'text-gray-400'}`} />
                  </a>
                );
              })}
            </div>

            {/* Drawer Bottom Footer Contact & Credentials */}
            <div className="px-5 py-5 border-t border-gray-200 bg-gray-50 space-y-3 mt-auto">
              <a
                href="tel:+919710220107"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gray-900 text-white font-bold text-sm shadow-sm hover:bg-gray-800 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-[#c68d37]" />
                <span>Call +91 9710220107</span>
              </a>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-500 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-[#c68d37] shrink-0" />
                <span>AMFI ARN-341781 | MSME UDYAM-TN-02-0339397</span>
              </div>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}



