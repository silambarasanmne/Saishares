import React from 'react';
import Logo from './Logo';
import { Mail, Phone } from 'lucide-react';

export default function Footer({ setActiveSection, onOpenInvestModal, onOpenBrochureModal }) {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Who We Are', href: '#who-we-are' },
    { name: 'What We Do', href: '#what-we-do' },
    { name: 'Investment Guide', href: '#investment-guide' },
    { name: 'Download Brochure', href: '#brochure', isBrochure: true },
    { name: 'To Invest', href: '#to-invest', isCta: true },
  ];

  const handleLinkClick = (e, link) => {
    if (link.isCta) {
      e.preventDefault();
      onOpenInvestModal();
      return;
    }
    if (link.isBrochure) {
      e.preventDefault();
      onOpenBrochureModal();
      return;
    }
    setActiveSection(link.name);
  };

  return (
    <footer className="bg-gradient-to-b from-[#1b191c] via-[#241f22] to-[#2d1e1c] text-white pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Info & Contact */}
          <div className="md:col-span-6 space-y-6">
            <div className="inline-block bg-white p-2.5 rounded-xl shadow-xs">
              <Logo />
            </div>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-md">
              At Sai Shares, we’re committed to helping investors achieve their financial goals through strategic and informed investment decisions.
            </p>

            <div className="space-y-2 text-sm text-gray-200 font-medium">
              <a 
                href="tel:+919710220107" 
                className="flex items-center gap-2 hover:text-[#c68d37] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#c68d37]" />
                <span>+91 9710220107</span>
              </a>
              <a 
                href="mailto:Saisharestech@gmail.com" 
                className="flex items-center gap-2 hover:text-[#c68d37] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#c68d37]" />
                <span>Saisharestech@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-lg font-bold text-white tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link)}
                    className="hover:text-[#c68d37] transition-colors block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Registered By */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-lg font-bold text-white tracking-wide">
              Registered by
            </h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div>
                <span className="block text-gray-400 text-xs uppercase tracking-wider font-semibold">AMFI Regn No :</span>
                <span className="font-semibold text-white">ARN-341781</span>
              </div>
              <div>
                <span className="block text-gray-400 text-xs uppercase tracking-wider font-semibold">MSME Registration:</span>
                <span className="font-semibold text-white">UDYAM-TN-02-0339397</span>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer Divider & Text */}
        <div className="pt-8 border-t border-gray-700/60 space-y-4">
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
            Investments are subject to market risks. Please read documents carefully before investing. Please consult a registered advisor or conduct personal research before making any investments. Past performance is not a guarantee of future return. The figures mentioned in the site must not be construed as guaranteed in nature.
          </p>
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
            The company is not responsible for any consequences arising out of the advice/decisions made using the data/insight/information available on the Sai Shares platform. All terms, conditions & privacy policies are applicable as mentioned in the namesake sections.
          </p>
        </div>

        {/* Bottom Bar Divider, Copyright & Social Icons */}
        <div className="pt-6 border-t border-gray-700/60 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
            © 2026 Sai Shares. All rights reserved | <span className="text-gray-300 font-medium">CloudHawk</span>
          </div>

          {/* Social Icon — Instagram Only */}
          <div className="flex items-center gap-3">
            <a 
              href="https://www.instagram.com/saishares_hedgefund" 
              target="_blank" 
              rel="noreferrer" 
              className="w-9 h-9 rounded-lg border border-white/40 flex items-center justify-center text-white hover:border-[#c68d37] hover:text-[#c68d37] transition-all"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
