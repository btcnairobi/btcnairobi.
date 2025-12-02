import React from 'react';

interface BlankaTextProps {
  text: string;
  className?: string;
  as?: any;
  logoSize?: number;
}

export const BlankaText: React.FC<BlankaTextProps> = ({ text, className = "", as: Component = 'span' }) => {
  // Switched to Ubuntu font (via font-display/font-sans classes in main config)
  // We use uppercase and bold to maintain the impact of the original design without the custom font
  const combinedClass = `font-bold uppercase tracking-wide ${className}`;
  
  return (
    <Component className={combinedClass}>
      {text}
    </Component>
  );
};