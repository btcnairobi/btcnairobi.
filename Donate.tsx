import React, { useState } from 'react';
import { PageLayout } from '../components/PageLayout';
import { 
  Zap, 
  Bitcoin, 
  ExternalLink, 
  Copy,
  Check,
  Droplets,
  Heart,
  MessageSquare
} from 'lucide-react';

export const Donate: React.FC = () => {
  const [copiedOnchain, setCopiedOnchain] = useState(false);
  const [copiedLiquid, setCopiedLiquid] = useState(false);
  const [copiedLightning, setCopiedLightning] = useState(false);

  const handleCopy = (text: string, setFn: (val: boolean) => void) => {
    navigator.clipboard.writeText(text);
    setFn(true);
    setTimeout(() => setFn(false), 2000);
  };

  const addresses = {
    onchain: "bc1q692zlk5td9t7jx9uw3540sc5l5a8flddet6dzj",
    liquid: "lq1qqv5rfgxfpedt0acd7kgyp64gcklqxx203w4vaqc9kwtgu58n20vxm0fgpzvawpx5jkywygav5kdt5u97wlgrzjyj3zdnhehtm",
    lnurl: "btcnairobi@blink.sv",
    payLink: "https://coinos.io/btcnairobi"
  };

  return (
    <PageLayout title="Give" subtitle="Support the Mission">
      <div className="space-y-8">

        {/* --- EMOTIONAL STORY --- */}
        <div className="bg-white p-6 md:p-8 rounded-3xl border-4 border-black shadow-hard text-slate-800">
           <div className="flex items-center gap-3 mb-4">
              <Heart className="text-red-500" size={32} fill="currentColor" />
              <h3 className="font-display font-bold uppercase text-2xl">Fueling the Revolution</h3>
           </div>
           
           <div className="prose prose-lg text-slate-700 leading-relaxed font-medium">
             <p className="mb-6">
               Your donation bridges that gap for young builders who are cash-poor but hope-rich. We are committed to spreading truth: <strong>21% of all contributions are strictly allocated to printing Bitcoin Whitepapers</strong>, which we gift freely to community members, schools, and libraries across Nairobi.
             </p>
             <p className="text-black font-bold uppercase text-sm tracking-wide">
               Your support doesn't just pay bills; it plants the seeds of sovereignty in fertile minds.
             </p>

             <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-xl mt-6 not-prose flex gap-3 items-start">
                <MessageSquare className="text-blue-500 shrink-0 mt-1" size={20} />
                <p className="text-blue-800 font-bold text-sm leading-snug">
                  Recommended: Please add a description or note to your donation so we can recognize your contribution!
                </p>
             </div>
           </div>
        </div>

        {/* --- DONATION METHODS --- */}
        <div className="grid grid-cols-1 gap-6">

          {/* Lightning */}
          <div className="bg-[#F7931A] text-white p-6 rounded-2xl border-4 border-black shadow-hard">
             <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                   <Zap className="text-black" size={24} fill="black" />
                   <h3 className="font-display font-bold uppercase text-xl text-black">Lightning</h3>
                </div>
                <span className="bg-black text-white px-2 py-1 rounded text-[10px] font-bold uppercase border border-white/20">Fastest</span>
             </div>

             <div className="bg-white p-4 rounded-xl border-2 border-black mb-4 text-black">
               <p className="text-xs font-bold uppercase text-slate-400 mb-1">Lightning Address</p>
               <div className="flex items-center justify-between gap-2">
                 <p className="font-mono font-bold text-lg break-all">{addresses.lnurl}</p>
                 <button 
                   onClick={() => handleCopy(addresses.lnurl, setCopiedLightning)}
                   className="p-2 hover:bg-slate-100 rounded-lg transition-colors shrink-0"
                 >
                   {copiedLightning ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
                 </button>
               </div>
             </div>

             <a 
               href={addresses.payLink}
               target="_blank"
               rel="noopener noreferrer"
               className="w-full bg-black text-white font-bold uppercase py-3 rounded-xl hover:bg-slate-900 transition-colors flex items-center justify-center gap-2 border-2 border-transparent hover:border-white"
             >
               <ExternalLink size={16} />
               Pay via Coinos.io
             </a>
          </div>

          {/* On-Chain */}
          <div className="bg-slate-900 text-white p-6 rounded-2xl border-4 border-black shadow-hard">
             <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                   <Bitcoin className="text-[#F7931A]" size={24} />
                   <h3 className="font-display font-bold uppercase text-xl">On-Chain</h3>
                </div>
                <span className="bg-white/10 px-2 py-1 rounded text-[10px] font-bold uppercase text-[#F7931A] border border-[#F7931A]/30">Vault</span>
             </div>
             
             <div className="bg-black p-4 rounded-xl border border-white/20 mb-4 font-mono text-xs break-all text-slate-400">
               {addresses.onchain}
             </div>

             <button 
               onClick={() => handleCopy(addresses.onchain, setCopiedOnchain)}
               className="w-full bg-white text-black font-bold uppercase py-3 rounded-full hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
             >
               {copiedOnchain ? <Check size={16} /> : <Copy size={16} />}
               {copiedOnchain ? 'Address Copied' : 'Copy Address'}
             </button>
          </div>

          {/* Liquid */}
          <div className="bg-[#0099CC] text-white p-6 rounded-2xl border-4 border-black shadow-hard">
             <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                   <Droplets className="text-white" size={24} />
                   <h3 className="font-display font-bold uppercase text-xl">Liquid</h3>
                </div>
                <span className="bg-black/20 px-2 py-1 rounded text-[10px] font-bold uppercase text-white border border-white/30">L-BTC</span>
             </div>
             
             <div className="bg-black/40 p-4 rounded-xl border border-white/20 mb-4 font-mono text-xs break-all text-white/90">
               {addresses.liquid}
             </div>

             <button 
               onClick={() => handleCopy(addresses.liquid, setCopiedLiquid)}
               className="w-full bg-white text-[#0099CC] font-bold uppercase py-3 rounded-full hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 border-2 border-transparent"
             >
               {copiedLiquid ? <Check size={16} /> : <Copy size={16} />}
               {copiedLiquid ? 'Address Copied' : 'Copy Address'}
             </button>
          </div>

        </div>
      </div>
    </PageLayout>
  );
};