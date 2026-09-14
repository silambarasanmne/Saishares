import React, { useState } from 'react';
import { X, CheckCircle, TrendingUp, ShieldCheck } from 'lucide-react';
import Logo from './Logo';

export default function InvestModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    investmentAmount: '₹50,000 - ₹2,00,000',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-md glass-panel-light rounded-3xl shadow-2xl border border-white/60 max-h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header with Sticky Close Button */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200/60 bg-white/70 sticky top-0 z-10 backdrop-blur-sm">
          <div className="scale-90 origin-left">
            <Logo />
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-gray-200/80 hover:bg-gray-300 text-gray-700 flex items-center justify-center transition-colors cursor-pointer focus:outline-hidden"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        {/* Scrollable Body Container */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-[#25d366]/15 text-[#25d366] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10 stroke-[2.5]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Inquiry Submitted!
              </h3>
              <p className="text-sm text-gray-600 max-w-xs mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-gray-800">{formData.name}</span>. Our expert advisor will reach out to you shortly at <span className="font-semibold text-gray-800">{formData.phone}</span>.
              </p>
              <button
                onClick={handleReset}
                className="mt-4 w-full py-3 bg-[#c68d37] hover:bg-[#b8860b] text-white rounded-xl font-bold shadow-md transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="text-left space-y-1">
                <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 leading-tight">
                  Start Your Investment Journey
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-normal">
                  Partner with Sai Shares for research-driven share marketing and 19.9% CAGR growth strategies.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300/80 focus:ring-2 focus:ring-[#c68d37] focus:border-[#c68d37] outline-hidden text-sm bg-white/70"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300/80 focus:ring-2 focus:ring-[#c68d37] focus:border-[#c68d37] outline-hidden text-sm bg-white/70"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300/80 focus:ring-2 focus:ring-[#c68d37] focus:border-[#c68d37] outline-hidden text-sm bg-white/70"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Target Investment Range
                  </label>
                  <select
                    value={formData.investmentAmount}
                    onChange={(e) => setFormData({ ...formData, investmentAmount: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300/80 focus:ring-2 focus:ring-[#c68d37] focus:border-[#c68d37] outline-hidden text-sm bg-white/80"
                  >
                    <option value="₹10,000 - ₹50,000">₹10,000 - ₹50,000</option>
                    <option value="₹50,000 - ₹2,00,000">₹50,000 - ₹2,00,000</option>
                    <option value="₹2,00,000 - ₹10,00,000">₹2,00,000 - ₹10,00,000</option>
                    <option value="Above ₹10,00,000">Above ₹10,00,000</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-[#c68d37] to-[#d4a054] hover:from-[#b8860b] hover:to-[#c68d37] text-white rounded-xl font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  <span>Request Free Advisory Call</span>
                  <TrendingUp className="w-4 h-4" />
                </button>
              </form>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-500 pt-2 border-t border-gray-200/60">
                <ShieldCheck className="w-3.5 h-3.5 text-[#c68d37]" />
                <span>AMFI Regn: ARN-341781 | 100% Confidential</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

