import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  pattern?: boolean;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  pattern = false,
  dark = false 
}) => {
  const bgClass = dark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900';
  const patternClass = pattern ? 'bg-pattern-tribal' : '';
  
  return (
    <section className={`py-16 md:py-24 relative overflow-hidden ${bgClass} ${patternClass} ${className}`}>
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        {children}
      </div>
    </section>
  );
};