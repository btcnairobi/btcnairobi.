
import React from 'react';
import { PageLayout } from '../components/PageLayout';
import { TextFeature } from '../components/TextFeature';
import { Link } from 'react-router-dom';
import { 
  Banknote, 
  Bitcoin, 
  Wallet, 
  Download, 
  ShoppingBag, 
  Store, 
  Repeat, 
  ShieldCheck, 
  Globe,
  ChevronRight,
  MapPin
} from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <PageLayout title="Study Bitcoin" subtitle="The Rabbit Hole">
      <div className="space-y-6">
        
        {/* SPECIALIZED COURSES GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 animate-in slide-in-from-bottom-4">
          
          {/* Merchant Academy */}
          <Link to="/merchant-academy" className="block bg-[#F7931A] text-white p-6 md:p-8 rounded-3xl border-4 border-black shadow-hard hover:-translate-y-1 hover:shadow-hard-sm transition-all group relative overflow-hidden">
             <div className="relative z-10 flex justify-between items-start h-full flex-col">
                <div className="max-w-xl mb-4">
                   <div className="flex items-center gap-3 mb-3">
                      <Store size={24} className="text-black" />
                      <span className="bg-black text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-white/20 shadow-sm">Business Course</span>
                   </div>
                   <h2 className="text-2xl md:text-3xl font-bold uppercase font-display leading-none mb-2 text-black">Merchant Academy</h2>
                   <p className="font-medium text-black/80 text-sm leading-relaxed">
                     Masterclass on running a sovereign business. Accept payments, manage treasury, and avoid scams.
                   </p>
                </div>
                <div className="w-full flex justify-end mt-auto">
                   <div className="bg-black w-10 h-10 rounded-full flex items-center justify-center border-2 border-white group-hover:scale-110 transition-transform shadow-lg">
                      <ChevronRight size={20} className="text-white" />
                   </div>
                </div>
             </div>
             {/* Decor */}
             <div className="absolute -bottom-10 -right-10 opacity-10 rotate-12">
                <Store size={180} className="text-black" />
             </div>
          </Link>

          {/* Bankless ATM Guide */}
          <Link to="/education?learn=atm-guide" className="block bg-blue-600 text-white p-6 md:p-8 rounded-3xl border-4 border-black shadow-hard hover:-translate-y-1 hover:shadow-hard-sm transition-all group relative overflow-hidden">
             <div className="relative z-10 flex justify-between items-start h-full flex-col">
                <div className="max-w-xl mb-4">
                   <div className="flex items-center gap-3 mb-3">
                      <MapPin size={24} className="text-white" />
                      <span className="bg-black/20 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-white/20 shadow-sm">User Manual</span>
                   </div>
                   <h2 className="text-2xl md:text-3xl font-bold uppercase font-display leading-none mb-2 text-white">Bitcoin ATM Guide</h2>
                   <p className="font-medium text-blue-100 text-sm leading-relaxed">
                     Sponsored by Bankless Bitcoin. Learn how to buy and sell safely at ATMs in Nairobi without a bank account.
                   </p>
                </div>
                <div className="w-full flex justify-end mt-auto">
                   <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center border-2 border-blue-900 group-hover:scale-110 transition-transform shadow-lg text-blue-900">
                      <ChevronRight size={20} />
                   </div>
                </div>
             </div>
             {/* Decor */}
             <div className="absolute -bottom-6 -right-6 opacity-20 rotate-0">
                <Banknote size={160} className="text-white" />
             </div>
          </Link>

        </div>

        <div className="flex items-center gap-2 mb-4 px-2">
           <div className="w-2 h-2 rounded-full bg-black"></div>
           <h3 className="font-bold uppercase text-sm tracking-widest text-slate-400">Core Curriculum</h3>
        </div>

        {/* Chapter 1 */}
        <TextFeature 
          title="Broken Money" 
          subtitle="Why we need a fix"
          icon={Banknote}
          chapters={[
            { id: "1.1", title: "The Inflation Problem", text: "Why prices go up and your savings go down.", questions: ["Inflation", "Hidden Tax", "Purchasing Power"] },
            { id: "1.2", title: "Surveillance & Control", text: "Banks track everything. Cash is disappearing.", questions: ["Privacy", "Censorship", "CBDCs"] },
            { id: "1.3", title: "The Debt Trap", text: "Money is created as debt. The system requires endless growth.", questions: ["Fiat", "Debt Spiral", "Usury"] }
          ]}
          defaultOpen={true}
        />

        {/* Chapter 2 */}
        <TextFeature 
          title="Enter Bitcoin" 
          subtitle="A New Discovery"
          icon={Bitcoin}
          chapters={[
            { id: "2.1", title: "Digital Scarcity", text: "For the first time, a digital object cannot be copied.", questions: ["21 Million", "Supply Cap", "Inelastic"] },
            { id: "2.2", title: "Decentralization", text: "No CEO. No HQ. Unstoppable code.", questions: ["Nodes", "Consensus", "Resilience"] },
            { id: "2.3", title: "Proof of Work", text: "Turning energy into truth. The security wall.", questions: ["Mining", "Energy", "Security"] }
          ]}
        />

        {/* Chapter 3 */}
        <TextFeature 
          title="Self Custody" 
          subtitle="Be Your Own Bank"
          icon={Wallet}
          chapters={[
            { id: "3.1", title: "Private Keys", text: "Not your keys, not your coins.", questions: ["Seed Phrase", "12 Words", "Ownership"] },
            { id: "3.2", title: "Wallets", text: "Hot vs Cold storage. Choosing the right tool.", questions: ["Hardware", "Software", "Airgapped"] },
            { id: "3.3", title: "Backups", text: "Steel beats paper. Protecting your legacy.", questions: ["Fireproof", "Recovery", "3-2-1 Rule"] }
          ]}
        />

         {/* Chapter 4 */}
         <TextFeature 
          title="Getting Sats" 
          subtitle="Accumulation Strategies"
          icon={Download}
          chapters={[
            { id: "4.1", title: "Earning Bitcoin", text: "Work for money that holds value.", questions: ["Freelance", "Salary", "Circular Economy"] },
            { id: "4.2", title: "Buying P2P", text: "No KYC. No data leaks. Just trade.", questions: ["Peer-to-Peer", "No KYC", "Privacy"] },
            { id: "4.3", title: "Vouchers & ATMs", text: "Cash to crypto instantly.", questions: ["Azteco", "Vouchers", "Premium"] }
          ]}
        />

        {/* Chapter 5 */}
        <TextFeature 
          title="#KeepSpedn" 
          subtitle="Velocity of Money"
          icon={ShoppingBag}
          chapters={[
            { id: "5.1", title: "Why Spend?", text: "Spending drives adoption. Hoarding creates nothing.", questions: ["Adoption", "Utility", "Network Effect"] },
            { id: "5.2", title: "Lightning Network", text: "Instant, cheap payments for coffee.", questions: ["Layer 2", "Speed", "Micropayments"] },
            { id: "5.3", title: "Spend & Replace", text: "Support merchants without losing your stack.", questions: ["Net Neutral", "Strategy", "Support"] }
          ]}
        />

        {/* Chapter 6 */}
        <TextFeature 
          title="The Merchant" 
          subtitle="Accepting Payments"
          icon={Store}
          chapters={[
            { id: "6.1", title: "Accepting Bitcoin", text: "No chargebacks. No 3% fees.", questions: ["POS", "Fees", "Settlement"] },
            { id: "6.2", title: "Pricing in Sats", text: "Overcoming unit bias.", questions: ["Satoshis", "Units", "Math"] },
            { id: "6.3", title: "Employee Training", text: "Don't get scammed by screenshots.", questions: ["Security", "Verification", "Process"] }
          ]}
        />

        {/* Chapter 7 */}
        <TextFeature 
          title="Circular Economy" 
          subtitle="Closing the Loop"
          icon={Repeat}
          chapters={[
            { id: "7.1", title: "Closing the Loop", text: "Stop the value leak to fiat.", questions: ["Retention", "Local Trade", "Resilience"] },
            { id: "7.2", title: "Local Supply Chains", text: "Import substitution with sound money.", questions: ["Supply Chain", "Local", "Sovereign"] },
            { id: "7.3", title: "Community Hubs", text: "Building physical citadels.", questions: ["Citadel", "Meetups", "Education"] }
          ]}
        />

        {/* Chapter 8 */}
        <TextFeature 
          title="Myth Busting" 
          subtitle="Debunking FUD"
          icon={ShieldCheck}
          chapters={[
            { id: "8.1", title: "Volatility Myth", text: "Zoom out. 1 BTC = 1 BTC.", questions: ["Volatility", "Time Preference", "Zoom Out"] },
            { id: "8.2", title: "Energy Myth", text: "Bitcoin uses wasted energy.", questions: ["Environment", "Renewables", "Stranded Energy"] },
            { id: "8.3", title: "Crime Myth", text: "Bitcoin is a public ledger.", questions: ["Traceable", "Transparent", "Clean"] }
          ]}
        />

        {/* Chapter 9 */}
        <TextFeature 
          title="Sovereign Future" 
          subtitle="What comes next"
          icon={Globe}
          chapters={[
            { id: "9.1", title: "Orange Pilling", text: "How to teach others effectively.", questions: ["Education", "Onboarding", "Growth"] },
            { id: "9.2", title: "Generational Wealth", text: "Don't lose your coins when you die.", questions: ["Inheritance", "Planning", "Legacy"] },
            { id: "9.3", title: "Hyperbitcoinization", text: "Gradually, then suddenly.", questions: ["End Game", "Demonetization", "Future"] }
          ]}
        />

      </div>
    </PageLayout>
  );
};
