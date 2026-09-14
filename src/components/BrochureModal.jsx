import React from 'react';
import { X, FileText, Download, ShieldCheck, ExternalLink } from 'lucide-react';
import Logo from './Logo';

export default function BrochureModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const brochures = [
    {
      id: 'sai-shares-hfm',
      title: 'Sai Shares HFM Brochure',
      description: 'Comprehensive HFM (Hybrid Fund Management) guide — learn about Sai Shares investment philosophy, fund strategies, and performance insights.',
      fileName: 'Sai_Shares_HFM.pdf',
      filePath: '/brochures/Sai_Shares_HFM.pdf',
      fileSize: '38.7 MB',
      badge: 'HFM Brochure',
    },
    {
      id: 'sai-shares-sip',
      title: 'Sai Shares SIP Brochure',
      description: 'Detailed SIP (Systematic Investment Plan) documentation — structured wealth-building roadmap with expert market analysis and growth projections.',
      fileName: 'Sai_Shares_SIP.pdf',
      filePath: '/brochures/Sai_Shares_SIP.pdf',
      fileSize: '20.5 MB',
      badge: 'SIP Brochure',
    },
  ];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg glass-panel-light rounded-3xl shadow-2xl border border-white/60 max-h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200/60 bg-white/70 sticky top-0 z-10 backdrop-blur-sm">
          <div className="scale-90 origin-left">
            <Logo />
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-gray-200/80 hover:bg-gray-300 text-gray-700 flex items-center justify-center transition-colors cursor-pointer focus:outline-hidden"
            aria-label="Close brochure modal"
          >
            <X className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          <div className="text-left space-y-1">
            <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 leading-tight">
              Download Official Brochures
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Access comprehensive PDF documentation on Sai Shares investment strategies, market research, and wealth growth plans.
            </p>
          </div>

          {/* List of 2 PDF Brochures */}
          <div className="space-y-4">
            {brochures.map((item) => (
              <div 
                key={item.id}
                className="bg-white/80 border border-gray-200/80 hover:border-[#c68d37]/40 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all space-y-3 group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#c68d37]/10 text-[#c68d37] border border-[#c68d37]/20 flex items-center justify-center shrink-0">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="inline-block text-[10px] font-bold text-[#c68d37] uppercase tracking-wider bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/60 mb-1">
                        {item.badge}
                      </span>
                      <h4 className="text-base font-bold text-gray-900 leading-snug group-hover:text-[#c68d37] transition-colors">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-gray-600 leading-relaxed pl-13">
                  {item.description}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-gray-100 pl-13">
                  <span className="text-[11px] font-semibold text-gray-500">
                    PDF • {item.fileSize}
                  </span>
                  
                  <a
                    href={item.filePath}
                    download={item.fileName}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-[#c68d37] to-[#d4a054] hover:from-[#b8860b] hover:to-[#c68d37] text-white text-xs font-bold rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-500 pt-2 border-t border-gray-200/60">
            <ShieldCheck className="w-3.5 h-3.5 text-[#c68d37]" />
            <span>AMFI ARN-341781 | Verified Investment Documentation</span>
          </div>

        </div>
      </div>
    </div>
  );
}
