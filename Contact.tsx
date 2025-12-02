import React from 'react';
import { PageLayout } from '../components/PageLayout';
import { Link } from 'react-router-dom';
import { BlankaText } from '../components/BlankaText';
import { 
  Lock, 
  Radio, 
  ExternalLink,
  AlertTriangle,
  Mail,
  Send,
  ShieldAlert,
  HelpCircle
} from 'lucide-react';

export const Contact: React.FC = () => {
  const guidelines = [
    {
      id: "guideline-opsec",
      title: "1. Operational Security (OpSec)",
      text: "Never reveal your real name, home address, or net worth in public channels. Physical attacks are a real threat. By remaining pseudonymous, you protect your physical safety. If criminals do not know who you are, they cannot target you.",
    },
    {
      id: "guideline-phishing",
      title: "2. Seed Phrase Phishing",
      text: "Your 12 or 24 words ARE your money. Admin will NEVER ask for them. Wallet support will NEVER ask for them. The only place to enter them is a hardware device. If you type them into a website, you will lose everything instantly.",
    },
    {
      id: "guideline-verify",
      title: "3. Verify Identities",
      text: "Scammers clone admin profiles to steal funds. Always check the exact username. Never trust a DM offering you a deal. Ask them to sign a message with their PGP key to prove who they are. Trust no one, verify everything.",
    },
    {
      id: "guideline-custody",
      title: "4. No Custody",
      text: "We are educators, not a bank. We will never hold your funds. Anyone offering you 'yield' or 'interest' is running a Ponzi scheme. Withdraw your coins to your own wallet immediately. Not your keys, not your coins.",
    },
    {
      id: "guideline-comms",
      title: "5. Secure Comms",
      text: "SMS and standard calls are not secure. Metadata tracks your location and social graph. Use Signal for sensitive chats. Use Nostr for uncensorable public speech. Assume everything you say on a standard phone line is being recorded.",
    }
  ];

  const faqs = [
    {
      q: "How do I join the community?",
      a: "Joining is as simple as showing up! We are an open community of learners and builders. You can join our Telegram group to chat online, or come to one of our monthly meetups in Nairobi. There is no membership fee, no registration form, and no permission needed. Just bring your curiosity."
    },
    {
      q: "Is Bitcoin safe to use?",
      a: "Bitcoin itself has never been hacked since its inception in 2009. However, the safety of your funds depends entirely on how you secure them. If you follow best practices like self-custody and keeping your seed phrase offline, it is the most secure money in the world. We are here to teach you how to be safe."
    },
    {
      q: "Do I need to buy a whole Bitcoin?",
      a: "Absolutely not! This is a common myth. Bitcoin is divisible into 100 million smaller units called Satoshis (or Sats). You can buy as little as 100 Shillings worth of Bitcoin. Start small and stack sats over time."
    },
    {
       q: "Who runs Bitcoin Nairobi?",
       a: "We are a decentralized community of volunteers. There is no CEO or owner. The community is maintained by passionate Bitcoiners who contribute their time and skills to educate others. Anyone can contribute."
    }
  ];

  return (
    <PageLayout title="Contact" subtitle="Secure Comms">
      <div className="space-y-12">

        {/* --- TOOL 1: ENCRYPTED MESSAGE (NOSTR REDIRECT) --- */}
        <div className="bg-slate-900 p-8 rounded-2xl border-4 border-black shadow-hard text-white flex flex-col items-center text-center">
           <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-4 border-2 border-slate-700">
              <Lock className="text-[#F7931A]" size={32} />
           </div>
           
           <h3 className="font-display font-bold uppercase text-2xl mb-2">Encrypted Message</h3>
           
           <div className="bg-red-500/10 border border-red-500/50 p-4 rounded-xl mb-6 max-w-lg">
              <p className="text-red-400 font-bold text-xs uppercase mb-1 flex items-center justify-center gap-2">
                 <AlertTriangle size={12} /> OpSec Warning
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                For true security, we do not use web forms. Web forms can be intercepted. 
                Please use <strong>Nostr</strong> for End-to-End Encrypted (E2EE) Direct Messages.
              </p>
           </div>

           <a 
             href="https://primal.net/p/npub1pw778uxwkky3xgq7w3anykdwdw9g46xy8de9mnau0kgwzz375zkq3udv57"
             target="_blank"
             rel="noopener noreferrer"
             className="bg-[#F7931A] text-black px-8 py-4 rounded-xl font-bold uppercase text-lg hover:bg-white transition-colors flex items-center gap-3 shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-y-[2px]"
           >
             <Radio size={20} />
             Inbox on Nostr
           </a>
        </div>

        {/* --- TOOL 2: EMAIL (Standalone now) --- */}
        <div className="bg-white p-6 rounded-2xl border-4 border-black shadow-hard flex flex-col items-center text-center">
           <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-3 border-2 border-black">
             <Mail className="text-black" size={32} />
           </div>
           <h3 className="font-display font-bold uppercase text-lg mb-1">Email</h3>
           <p className="text-xs font-bold text-slate-400 mb-4">btcnairobi@gmail.com</p>
           <a href="mailto:btcnairobi@gmail.com" className="text-[10px] font-bold uppercase bg-black text-white px-4 py-2 rounded-full hover:bg-slate-800 transition-colors">
             Send Email
           </a>
        </div>
        
        {/* NOSTR CARD */}
        <a 
          href="https://nostr.com/npub1pw778uxwkky3xgq7w3anykdwdw9g46xy8de9mnau0kgwzz375zkq3udv57" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#4b3068] text-white p-6 rounded-2xl border-4 border-black shadow-hard flex items-center justify-between hover:bg-[#3d2656] transition-colors group"
        >
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                 <Radio size={24} className="text-white" />
              </div>
              <div className="overflow-hidden">
                 <h3 className="font-display font-bold uppercase text-lg group-hover:underline decoration-2 underline-offset-2">Nostr</h3>
                 <p className="text-xs text-white/60 font-mono truncate max-w-[180px] md:max-w-[200px]">npub1pw778uxwkky3xgq7w3anykdwdw9g46xy8de9mnau0kgwzz375zkq3udv57</p>
              </div>
           </div>
           <ExternalLink className="text-white/40 group-hover:text-white" size={20} />
        </a>

        {/* --- SECTION: SAFETY GUIDELINES --- */}
        <div className="bg-red-50 border-4 border-red-500 rounded-3xl p-6 md:p-8 shadow-hard">
            <div className="flex items-center gap-4 mb-6">
                <ShieldAlert className="text-red-600" size={32} />
                <BlankaText text="Safety Guidelines" as="h2" className="text-2xl md:text-3xl text-red-700" />
            </div>
            <p className="text-red-800 font-bold mb-8 text-lg border-l-4 border-red-500 pl-4 py-2 bg-red-100">
                CRITICAL WARNING: The Bitcoin space is adversarial. You are responsible for your own security. Read these rules carefully before interacting with anyone.
            </p>
            
            <div className="space-y-4">
                {guidelines.map((rule) => (
                    <div key={rule.id} className="bg-white p-6 rounded-2xl border-l-8 border-red-500 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="font-bold uppercase text-xl mb-2 text-black">{rule.title}</h3>
                        <p className="text-slate-700 leading-relaxed font-medium mb-4">
                            {rule.text}
                        </p>
                        <Link 
                            to={`/contact?learn=${rule.id}`} 
                            className="inline-flex items-center gap-2 text-white bg-red-600 px-4 py-2 rounded-lg font-bold uppercase text-xs hover:bg-red-700 transition-colors"
                        >
                            <AlertTriangle size={14} /> Verify Knowledge (Quiz)
                        </Link>
                    </div>
                ))}
            </div>
        </div>

        {/* --- SECTION: FAQ --- */}
        <div className="bg-blue-50 border-4 border-blue-500 rounded-3xl p-6 md:p-8 shadow-hard">
            <div className="flex items-center gap-4 mb-6">
                <HelpCircle className="text-blue-600" size={32} />
                <BlankaText text="F.A.Q." as="h2" className="text-2xl md:text-3xl text-blue-700" />
            </div>
            
            <div className="space-y-6">
                {faqs.map((item, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl border-2 border-blue-200">
                        <h3 className="font-bold uppercase text-lg text-blue-800 mb-3 flex items-start gap-2">
                           <span className="text-blue-300">Q.</span> {item.q}
                        </h3>
                        <p className="text-slate-600 font-medium leading-relaxed">
                            {item.a}
                        </p>
                    </div>
                ))}
            </div>
        </div>

        {/* TELEGRAM */}
        <a 
          href="https://t.me/btcnairobi" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-500 p-6 rounded-2xl border-4 border-black shadow-hard hover:bg-blue-600 transition-colors group block"
        >
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <Send className="text-white" size={24} />
              <div>
                <h3 className="font-display font-bold uppercase text-lg group-hover:underline decoration-2 underline-offset-2">Join Telegram</h3>
                <p className="text-xs font-bold text-white/80">@btcnairobi</p>
              </div>
            </div>
            <ExternalLink className="text-white/60 group-hover:text-white" size={20} />
          </div>
        </a>

      </div>
    </PageLayout>
  );
};