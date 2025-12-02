import React from 'react';
import { PageLayout } from '../components/PageLayout';
import { 
  Calendar, 
  ExternalLink, 
} from 'lucide-react';

export const Events: React.FC = () => {
  return (
    <PageLayout title="Events" subtitle="In Real Life">
      <div className="space-y-6">

        {/* --- LUMA INTEGRATION --- */}
        <div className="bg-[#F7931A] text-white p-6 rounded-2xl border-4 border-black shadow-hard flex flex-col md:flex-row items-center justify-between gap-6">
           <div className="flex-grow text-center md:text-left">
              <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
                 <Calendar className="text-black" size={32} />
                 <h3 className="font-display font-bold uppercase text-2xl text-black">Luma Calendar</h3>
              </div>
              <p className="text-black font-bold text-lg leading-tight">
                RSVP for all our upcoming events. Get reminders and tickets.
              </p>
           </div>
           <a 
             href="https://luma.com/btcnairobi" 
             target="_blank" 
             rel="noopener noreferrer"
             className="bg-black text-white px-8 py-4 rounded-xl font-bold uppercase text-xl border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)] hover:translate-y-[1px] hover:shadow-none transition-all flex items-center gap-2 whitespace-nowrap"
           >
             RSVP on Luma <ExternalLink size={20} />
           </a>
        </div>

      </div>
    </PageLayout>
  );
};