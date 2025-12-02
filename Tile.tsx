import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { BlankaText } from './BlankaText';

interface TileProps {
  title: string;
  subtitle: string;
  description: string;
  to: string;
  icon: LucideIcon;
  iconClassName?: string;
  className?: string;
}

export const Tile: React.FC<TileProps> = ({ title, subtitle, description, to, icon: Icon, iconClassName, className }) => {
  const isExternal = to.startsWith('http');
  const Wrapper = isExternal ? 'a' : Link;
  const props = isExternal ? { href: to, target: "_blank", rel: "noopener noreferrer" } : { to };

  // Default styling for border and shadow if no className is provided
  const styleClasses = className || "border-black shadow-hard hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-hard-sm";

  return (
    // @ts-ignore
    <Wrapper 
      {...props}
      className={`bg-white border-4 rounded-3xl p-8 flex flex-col gap-5 transition-all duration-200 group h-full relative overflow-hidden ${styleClasses}`}
    >
      <div className="flex justify-between items-start">
        <div className="w-20 h-20 rounded-full bg-white border-2 border-black flex items-center justify-center shrink-0">
          <Icon className={iconClassName || "text-[#F7931A]"} size={40} strokeWidth={2} />
        </div>
        <div className="bg-[#F7931A] w-5 h-5 rounded-full border border-black opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      
      <div>
        <BlankaText text={title} as="h3" className="text-4xl font-bold tracking-tight text-black mb-2" />
        <p className="text-[#F7931A] font-bold text-lg uppercase tracking-wide mb-4 font-sans">
          {subtitle}
        </p>
        <p className="text-slate-700 text-lg font-medium leading-relaxed border-t-2 border-slate-100 pt-4 font-sans">
          {description}
        </p>
      </div>
    </Wrapper>
  );
};