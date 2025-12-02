
import React, { useState } from 'react';
import { ChevronDown, LucideIcon, Brain } from 'lucide-react';
import { BlankaText } from './BlankaText';
import { useSearchParams } from 'react-router-dom';

export interface Chapter {
  id?: string;
  title: string;
  text?: string;
  questions?: string[];
}

interface TextFeatureProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  chapters: Chapter[];
  defaultOpen?: boolean;
}

export const TextFeature: React.FC<TextFeatureProps> = ({ title, subtitle, icon: Icon, chapters, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [_, setSearchParams] = useSearchParams();

  const handleChipClick = (id: string) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.set('learn', id);
      return newParams;
    });
  };

  return (
    <div className="bg-white border-4 border-black rounded-3xl p-6 md:p-8 shadow-hard overflow-hidden transition-all group/card">
      <div 
        className="flex items-center justify-between cursor-pointer select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-4 md:gap-6">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-slate-100 flex items-center justify-center border-2 border-black shrink-0 group-hover/card:bg-[#F7931A] transition-colors">
             <Icon className="text-[#F7931A] group-hover/card:text-white transition-colors" size={24} strokeWidth={2.5} />
          </div>
          <div>
            <BlankaText text={title} as="h3" className="font-bold text-xl md:text-3xl leading-none" />
            <p className="text-xs md:text-base font-bold uppercase text-slate-500 mt-1 md:mt-2 font-sans">{subtitle}</p>
          </div>
        </div>
        <div className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''} bg-slate-100 p-2 rounded-full hover:bg-black hover:text-white`}>
          <ChevronDown size={24} />
        </div>
      </div>
      
      {isOpen && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 border-t-2 border-slate-100 pt-8 animate-in slide-in-from-top-2 font-sans">
           {chapters.map((c, i) => (
             <div 
               key={i} 
               className="bg-slate-50 p-4 rounded-2xl border-2 border-slate-100 flex justify-between items-start group/topic hover:border-black hover:shadow-md transition-all h-full"
             >
               <div className="flex-grow">
                 {c.id && <span className="text-xs font-bold uppercase text-slate-400 block mb-1">Topic {c.id}</span>}
                 <h4 className="font-bold text-base uppercase text-black font-sans leading-tight mb-2">{c.title}</h4>
                 {c.text && (
                   <p className="text-sm text-slate-600 font-medium leading-relaxed">{c.text}</p>
                 )}
                 {c.questions && (
                   <div className="flex flex-wrap gap-2 mt-3">
                     {c.questions.map((q, j) => (
                       <span key={j} className="text-[10px] bg-white border border-slate-200 px-2 py-1 rounded-md font-bold text-slate-500">{q}</span>
                     ))}
                   </div>
                 )}
               </div>
               
               {c.id && (
                 <button
                    onClick={(e) => {
                      e.stopPropagation(); 
                      if (c.id) handleChipClick(c.id);
                    }}
                    className="w-10 h-10 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center text-slate-300 group-hover/topic:border-[#F7931A] group-hover/topic:bg-[#F7931A] group-hover/topic:text-white transition-all hover:scale-110 shrink-0 ml-2 mt-1"
                    title="Start Lesson"
                 >
                    <Brain size={20} />
                 </button>
               )}
             </div>
           ))}
        </div>
      )}
    </div>
  );
};
