import React from 'react';

export default function Logo({ className = '' }) {
  return (
    <a href="#" className={`inline-block cursor-pointer ${className}`}>
      <img
        src="/images/sai-shares-logo.png"
        alt="Sai Shares — WeGrowTogether"
        className="h-14 sm:h-16 w-auto object-contain"
      />
    </a>
  );
}
