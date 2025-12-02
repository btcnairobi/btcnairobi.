import React from 'react';
import { PageLayout } from '../components/PageLayout';
import { Radio, ExternalLink, Feather } from 'lucide-react';

export const Blog: React.FC = () => {
  return (
    <PageLayout title="Articles" subtitle="Uncensored Writing">
      <div className="space-y-6">
        
        <div className="bg-[#4b3068] text-white p-8 rounded-3xl border-4 border-black shadow-hard relative overflow-hidden flex flex-col items-center text-center">
           <div className="relative z-10 flex flex-col items-center">
             <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center border-2 border-white/20 mb-6">
                <Radio size={40} />
             </div>
             
             <h3 className="text-3xl font-bold uppercase font-display leading-none mb-2">We Moved to Nostr</h3>
             <p className="text-white/60 font-bold uppercase text-sm mb-6 tracking-widest">Decentralized & Uncensored</p>
             
             <p className="text-lg font-medium leading-relaxed mb-8 max-w-xl text-white/90">
               To support true freedom of speech and censorship resistance, Bitcoin Nairobi publishes all articles, notes, and updates exclusively on Nostr.
             </p>

             <a 
               href="https://nostr.com/npub1pw778uxwkky3xgq7w3anykdwdw9g46xy8de9mnau0kgwzz375zkq3udv57"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center gap-2 bg-white text-[#4b3068] px-8 py-4 rounded-xl font-bold uppercase text-xl hover:bg-slate-100 transition-colors shadow-lg"
             >
               Read on Nostr <ExternalLink size={20} />
             </a>
           </div>

           {/* Decor */}
           <div className="absolute -right-10 -bottom-10 opacity-10 rotate-12">
              <Feather size={240} />
           </div>
           <div className="absolute -left-10 -top-10 opacity-10 -rotate-12">
              <Radio size={240} />
           </div>
        </div>

      </div>
    </PageLayout>
  );
};