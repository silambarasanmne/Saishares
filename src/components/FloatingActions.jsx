import React, { useState, useEffect } from 'react';
import { Phone, Mail } from 'lucide-react';

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside
      aria-label="Quick contact options"
      className="fixed bottom-6 right-5 z-40 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.9)',
        pointerEvents: isVisible ? 'auto' : 'none',
      }}
    >
      {/* Glassmorphic capsule container */}
      <div className="flex flex-col gap-3.5 items-center p-2.5 rounded-2xl bg-white/70 backdrop-blur-xl border border-gray-200/50 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)]">
        
        {/* Phone Call */}
        <a
          href="tel:+919710220107"
          aria-label="Call Sai Shares (+91 9710220107)"
          className="relative w-11 h-11 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-500 flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-110 active:scale-95 group cursor-pointer"
        >
          <Phone className="w-5 h-5 stroke-[2.2]" />
          
          {/* Hover Tooltip */}
          <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-gray-900/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-2 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap pointer-events-none z-50">
            Call +91 9710220107
          </span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919710220107?text=Hello%20Sai%20Shares,%20I%20would%20like%20to%20know%20more%20about%20your%20investment%20solutions."
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative w-11 h-11 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-[#25d366] flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-110 active:scale-95 group cursor-pointer"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.161 4.24 4.316-1.131zm10.745-6.721c-.244-.122-1.446-.713-1.67-.795-.224-.082-.387-.122-.55.122-.163.244-.632.795-.774.958-.143.163-.285.183-.529.061-.244-.122-1.033-.381-1.968-1.214-.726-.647-1.216-1.447-1.358-1.691-.143-.244-.015-.376.107-.497.109-.109.244-.285.366-.427.123-.143.163-.244.244-.407.082-.163.041-.305-.02-.427-.061-.122-.55-1.325-.753-1.813-.198-.476-.4-.412-.55-.42-.143-.008-.305-.01-.468-.01s-.428.061-.652.305c-.224.244-.856.835-.856 2.037 0 1.202.876 2.361.998 2.524.122.163 1.724 2.632 4.176 3.69 2.452 1.058 2.452.706 2.899.664.448-.042 1.446-.591 1.649-1.161.204-.57.204-1.059.143-1.161-.061-.102-.224-.163-.468-.285z"/>
          </svg>
          
          {/* Live Online Pulse Dot */}
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse shadow-sm ring-2 ring-white/80" />

          {/* Hover Tooltip */}
          <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-gray-900/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-2 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap pointer-events-none z-50">
            WhatsApp Us
          </span>
        </a>

        {/* Email */}
        <a
          href="mailto:Saisharestech@gmail.com?subject=Investment%20Inquiry%20-%20Sai%20Shares"
          aria-label="Send Email (Saisharestech@gmail.com)"
          className="relative w-11 h-11 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-500 flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-110 active:scale-95 group cursor-pointer"
        >
          <Mail className="w-5 h-5 stroke-[2.2]" />
          
          {/* Hover Tooltip */}
          <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-gray-900/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-2 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap pointer-events-none z-50">
            Email Us
          </span>
        </a>

      </div>
    </aside>
  );
}
