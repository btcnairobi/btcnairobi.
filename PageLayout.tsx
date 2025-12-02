import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BlankaText } from './BlankaText';

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ title, subtitle, children }) => {
  return (
    <div className="max-w-3xl mx-auto pb-20 animate-in slide-in-from-bottom-4 duration-300">
      {/* Header Area */}
      <div className="flex items-center gap-4 mb-6 pt-4 px-2">
        <Link 
          to="/" 
          className="bg-white border-2 border-black w-12 h-12 rounded-full flex items-center justify-center shadow-hard hover:translate-y-[2px] hover:shadow-hard-sm transition-all"
        >
          <ArrowLeft className="text-black" size={24} />
        </Link>
        <div className="text-white">
          <BlankaText text={title} as="h1" className="text-3xl font-bold leading-none text-white" />
          {subtitle && <p className="text-white/80 font-medium text-sm mt-1 font-sans">{subtitle}</p>}
        </div>
      </div>

      {/* Content Card */}
      <div className="bg-white border-4 border-black rounded-[2rem] p-6 md:p-10 shadow-hard min-h-[50vh]">
        {children}
      </div>
    </div>
  );
};