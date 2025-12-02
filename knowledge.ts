
import { 
  Calculator, 
  Hash, 
  Lock, 
  ArrowRightLeft, 
  Globe, 
  Smartphone, 
  Flame, 
  Users, 
  ShoppingBag, 
  RefreshCw, 
  TrendingUp, 
  Zap, 
  Network, 
  Clock, 
  ShieldAlert, 
  Building, 
  Siren, 
  Activity, 
  CheckCircle2, 
  Skull,
  MapPin,
  Banknote
} from 'lucide-react';

export interface QuizQuestion {
  question: string;
  options: string[]; // The correct answer should be the first option in this list (we shuffle later)
}

export interface Tool {
  name: string;
  type: 'CALCULATOR' | 'HASH' | 'GENERATOR' | 'CONVERTER' | 'CHECKLIST' | 'VISUALIZER' | 'SIMULATOR';
  description: string;
  troubleshoot: string[];
}

export interface KnowledgeItem {
  id: string;
  title: string;
  content: string; // Long form educational text
  facts: {
    satoshi: string;
    bitcoiner: { name: string; quote: string };
    random: string;
  };
  tool: Tool;
  quiz: QuizQuestion[];
}

export const knowledgeBase: KnowledgeItem[] = [
  // --- SPECIAL: ATM GUIDE ---
  {
    id: "atm-guide",
    title: "Bankless Bitcoin ATM User Manual",
    content: `
      <div class="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl mb-8 shadow-sm">
         <h4 class="font-bold uppercase text-blue-900 mb-2">Sponsored by Bankless Bitcoin</h4>
         <p class="text-sm font-medium text-blue-800 mb-1">Support Contact: <strong>+254 726 467927</strong></p>
         <p class="text-xs font-bold uppercase text-blue-600">Available 24/7 • WhatsApp & Phone</p>
      </div>

      <h3 class="text-2xl font-bold uppercase mb-4 text-black">1. Introduction</h3>
      <p class="mb-6 leading-relaxed text-slate-700 font-medium text-lg">
        Welcome to the Bankless Bitcoin ATM! This machine allows you to buy and sell Bitcoin quickly and securely. Transactions are processed directly on the blockchain, providing privacy, convenience, and control over your funds.
      </p>

      <hr class="border-slate-100 my-8" />

      <h3 class="text-2xl font-bold uppercase mb-4 text-black">2. General Safety & Tips</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div class="bg-white border-2 border-slate-100 p-4 rounded-xl">
           <h4 class="font-bold uppercase text-sm mb-2 text-[#F7931A]">Privacy Limits</h4>
           <p class="text-sm text-slate-600">Transactions under <strong>KES 10,000</strong> do not require verification. Larger amounts may require ID/Phone verification.</p>
        </div>
        <div class="bg-white border-2 border-slate-100 p-4 rounded-xl">
           <h4 class="font-bold uppercase text-sm mb-2 text-[#F7931A]">Network</h4>
           <p class="text-sm text-slate-600">Ensure your mobile wallet is connected to the internet before approaching the machine.</p>
        </div>
        <div class="bg-white border-2 border-slate-100 p-4 rounded-xl">
           <h4 class="font-bold uppercase text-sm mb-2 text-red-500">Irreversible</h4>
           <p class="text-sm text-slate-600">Blockchain transactions cannot be reversed. Always double-check the address you are sending to.</p>
        </div>
        <div class="bg-white border-2 border-slate-100 p-4 rounded-xl">
           <h4 class="font-bold uppercase text-sm mb-2 text-green-600">Receipts</h4>
           <p class="text-sm text-slate-600">Always keep your printed receipt until the transaction is fully confirmed on your phone.</p>
        </div>
      </div>

      <hr class="border-slate-100 my-8" />

      <h3 class="text-2xl font-bold uppercase mb-6 text-black">3. Buying Bitcoin</h3>
      <div class="space-y-6 mb-8 relative border-l-4 border-slate-200 ml-4 pl-8 pb-4">
        <div class="relative">
           <div class="absolute -left-[42px] top-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">1</div>
           <h4 class="font-bold uppercase text-lg mb-2">Start Transaction</h4>
           <p class="text-slate-600">Tap "Buy Bitcoin" on the screen. Select the amount tier (e.g., &lt; 10,000 KES).</p>
        </div>
        <div class="relative">
           <div class="absolute -left-[42px] top-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">2</div>
           <h4 class="font-bold uppercase text-lg mb-2">Scan Wallet</h4>
           <p class="text-slate-600">Open your wallet app (e.g., BlueWallet, Trust) and show your <strong>Receive QR Code</strong> to the ATM's camera.</p>
        </div>
        <div class="relative">
           <div class="absolute -left-[42px] top-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">3</div>
           <h4 class="font-bold uppercase text-lg mb-2">Insert Cash</h4>
           <p class="text-slate-600">Insert notes one by one. The screen will update with the BTC amount. <em>Note: Damaged bills may be rejected.</em></p>
        </div>
        <div class="relative">
           <div class="absolute -left-[42px] top-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">4</div>
           <h4 class="font-bold uppercase text-lg mb-2">Confirm & Receipt</h4>
           <p class="text-slate-600">Tap "Buy". The machine prints a receipt. Your bitcoin is now on its way to your wallet!</p>
        </div>
      </div>

      <h3 class="text-2xl font-bold uppercase mb-6 text-black">4. Selling Bitcoin</h3>
      <div class="bg-slate-50 p-6 rounded-2xl border-2 border-slate-200 mb-8">
         <ol class="list-decimal list-inside space-y-4 font-medium text-slate-700">
           <li>Tap <strong>"Sell Bitcoin"</strong> and choose amount.</li>
           <li>The ATM will print a ticket with a QR code (The ATM's address).</li>
           <li>Send the exact amount of BTC from your wallet to that QR code.</li>
           <li>Wait for <strong>1 confirmation</strong> (usually ~10 mins).</li>
           <li>Tap "Redeem Ticket" and scan your receipt to dispense cash.</li>
         </ol>
      </div>

      <hr class="border-slate-100 my-8" />

      <h3 class="text-2xl font-bold uppercase mb-4 text-black">5. Troubleshooting</h3>
      <div class="space-y-4">
         <details class="group bg-white border-2 border-slate-100 rounded-xl overflow-hidden">
            <summary class="p-4 font-bold uppercase cursor-pointer hover:bg-slate-50 flex justify-between items-center">
               Transaction Not Received?
               <span class="text-[#F7931A]">+</span>
            </summary>
            <div class="p-4 border-t border-slate-100 text-slate-600 text-sm">
               Check the blockchain using the Transaction ID on your receipt. If the network is busy, it might take longer than usual.
            </div>
         </details>
         <details class="group bg-white border-2 border-slate-100 rounded-xl overflow-hidden">
            <summary class="p-4 font-bold uppercase cursor-pointer hover:bg-slate-50 flex justify-between items-center">
               Cash Not Dispensed?
               <span class="text-[#F7931A]">+</span>
            </summary>
            <div class="p-4 border-t border-slate-100 text-slate-600 text-sm">
               Contact Support immediately at <strong>+254 726 467927</strong>. Keep your receipt safe.
            </div>
         </details>
         <details class="group bg-white border-2 border-slate-100 rounded-xl overflow-hidden">
            <summary class="p-4 font-bold uppercase cursor-pointer hover:bg-slate-50 flex justify-between items-center">
               Fees?
               <span class="text-[#F7931A]">+</span>
            </summary>
            <div class="p-4 border-t border-slate-100 text-slate-600 text-sm">
               Fees cover miner costs and ATM service. They are calculated automatically and shown on screen before you confirm.
            </div>
         </details>
      </div>

      <div class="mt-8 bg-black text-white p-6 rounded-2xl text-center">
         <h4 class="font-bold uppercase text-lg mb-2">Need Help?</h4>
         <p class="mb-4">Our team is ready to assist you.</p>
         <a href="tel:+254726467927" class="inline-block bg-[#F7931A] text-black px-6 py-3 rounded-xl font-bold uppercase hover:bg-white transition-colors">
            Call Support
         </a>
      </div>
    `,
    facts: {
      satoshi: "Bitcoin ATMs are portals between the old world and the new.",
      bitcoiner: { name: "Bankless Bitcoin", quote: "Privacy is a human right." },
      random: "The first Bitcoin ATM was installed in a coffee shop in Vancouver in 2013."
    },
    tool: {
      name: "BitATM",
      type: "SIMULATOR",
      description: "Practice using a Bitcoin ATM interface safely before you go to the physical machine.",
      troubleshoot: [
        "Tap 'Buy' to start.",
        "Allow camera access to scan (simulated).",
        "Insert cash by clicking the bill."
      ]
    },
    quiz: [
      {
        question: "What is the transaction limit for 'No Verification' (KYC-free) buys?",
        options: ["KES 10,000", "KES 50,000", "KES 1,000", "No Limit"]
      },
      {
        question: "What should you always keep after a transaction?",
        options: ["The Receipt", "The Cash", "Nothing", "The ATM Machine"]
      },
      {
        question: "If selling Bitcoin, what must you wait for before cash dispenses?",
        options: ["1 Blockchain Confirmation", "Instant dispensing", "Email approval", "Bank authorization"]
      },
      {
        question: "Who do you contact if cash does not dispense?",
        options: ["Bankless Bitcoin Support", "The Police", "Satoshi Nakamoto", "The Shop Owner"]
      }
    ]
  }
];

// Helper to get knowledge item or return a fallback for curriculum items
export const getKnowledge = (id: string): KnowledgeItem | null => {
  const found = knowledgeBase.find(k => k.id === id);
  if (found) return found;

  // Fallback for standard curriculum items if they are not explicitly defined in the array above
  // This ensures the app doesn't crash when clicking "Start Lesson" on the Education page
  if (id.match(/^\d\.\d$/)) {
    return {
      id,
      title: "Lesson " + id,
      content: `
        <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl mb-8">
           <h4 class="font-bold uppercase text-yellow-800 mb-2">Coming Soon</h4>
           <p class="text-sm font-medium text-yellow-700">This lesson is currently being written by our educators. Check back later!</p>
        </div>
        <h3 class="text-2xl font-bold uppercase mb-4">Summary</h3>
        <p class="mb-4 text-lg text-slate-700">This topic covers essential Bitcoin concepts relevant to Chapter ${id.split('.')[0]}.</p>
        <p class="text-slate-600">Please visit our community group or the Bankless Bitcoin ATM guide for active content.</p>
      `,
      facts: {
        satoshi: "We are building this.",
        bitcoiner: { name: "Bitcoin Nairobi", quote: "Vires in Numeris" },
        random: "Bitcoin blocks are found every ~10 minutes."
      },
      tool: {
        name: "BitLearn",
        type: "VISUALIZER",
        description: "Interactive learning tool coming soon.",
        troubleshoot: ["Check back later."]
      },
      quiz: [
        {
          question: "Is this lesson ready?",
          options: ["Not yet", "Yes", "Maybe"]
        }
      ]
    };
  }

  return null;
};
