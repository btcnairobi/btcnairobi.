import React from 'react';
import { PageLayout } from '../components/PageLayout';
import { ExternalLink } from 'lucide-react';

export const Merchants: React.FC = () => {
  return (
    <PageLayout title="Spend Bitcoin" subtitle="Support the Circular Economy">
      <div className="space-y-6">
        
        {/* Header CTA */}
        <div className="bg-[#F7931A] text-white p-8 rounded-3xl border-4 border-black shadow-hard flex flex-col md:flex-row items-center justify-between gap-6">
           <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold uppercase font-display text-black mb-2">Shop Local</h2>
              <p className="text-black font-bold text-lg max-w-lg">
                We track all Bitcoin-accepting merchants in Nairobi. Spend your sats to support the ecosystem and prove the utility of sound money.
              </p>
           </div>
           <a 
             href="mailto:btcnairobi@gmail.com?subject=Add%20My%20Business"
             className="bg-black text-white px-8 py-3 rounded-xl font-bold uppercase text-lg hover:bg-slate-900 transition-colors shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)] border-2 border-white inline-block text-center whitespace-nowrap"
           >
             Add Your Business
           </a>
        </div>

        {/* BTC Map Embed */}
        <div className="bg-white border-4 border-black rounded-3xl overflow-hidden shadow-hard flex flex-col h-[70vh] relative">
           <div className="bg-slate-100 border-b-2 border-slate-200 p-3 flex justify-between items-center shrink-0">
              <div className="flex items-center gap-2">
                 <div className="w-3 h-3 rounded-full bg-red-500"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                 <div className="w-3 h-3 rounded-full bg-green-500"></div>
                 <span className="ml-2 text-xs font-bold uppercase text-slate-500">BTC Map Community</span>
              </div>
              <a 
                href="https://btcmap.org/community/bitcoin-nairobi/merchants" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs font-bold uppercase text-blue-600 hover:underline"
              >
                Open Full Screen <ExternalLink size={14} />
              </a>
           </div>
           <iframe 
             src="https://btcmap.org/community/bitcoin-nairobi/merchants" 
             className="w-full h-full border-0"
             title="Bitcoin Nairobi Merchants"
             allow="geolocation"
           />
        </div>

        <div className="text-center">
           <p className="text-slate-500 font-bold text-sm">
             Data provided by <a href="https://btcmap.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#F7931A]">BTC Map</a>. Verified by the community.
           </p>
        </div>

      </div>
    </PageLayout>
  );
};