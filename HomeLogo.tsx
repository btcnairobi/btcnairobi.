import React from 'react';

export const HomeLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`${className} select-none flex justify-center`}>
      <svg 
        viewBox="0 0 300 110" 
        className="w-full h-auto max-w-[280px]" 
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Bitcoin Nairobi Logo"
      >
        {/* Top Text: Bitcoin */}
        <text 
          x="150" 
          y="45" 
          textAnchor="middle" 
          fontSize="48" 
          fontWeight="bold" 
          fontFamily="sans-serif" 
          fill="#F7931A"
          letterSpacing="-1"
        >
          Bitcoin
        </text>

        {/* Bottom Text: NAIROBI with Icon */}
        <g transform="translate(150, 90)" textAnchor="middle">
           {/* Left side: NA */}
           <text x="-25" y="0" fontSize="36" fontWeight="bold" fontFamily="sans-serif" fill="white" letterSpacing="4" textAnchor="end">NA</text>
           
           {/* Center Icon: KICC Tower (Replacing 'I') */}
           <g transform="translate(0, 0)">
              {/* Spire */}
              <rect x="-1" y="-42" width="2" height="12" fill="white" />
              {/* Saucer */}
              <path d="M-9 -30 L9 -30 L7 -24 L-7 -24 Z" fill="white" />
              {/* Tower Shaft */}
              <rect x="-4" y="-24" width="8" height="24" fill="white" />
              {/* Base lines to simulate podium */}
              <path d="M-10 0 L10 0" stroke="white" strokeWidth="3" />
           </g>

           {/* Right side: ROBI */}
           <text x="25" y="0" fontSize="36" fontWeight="bold" fontFamily="sans-serif" fill="white" letterSpacing="4" textAnchor="start">ROBI</text>
        </g>
      </svg>
    </div>
  );
};