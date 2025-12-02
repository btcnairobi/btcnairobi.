
import React, { useEffect, useState, useRef } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { X, BookOpen, Zap, Brain, Trophy, ChevronRight, PenTool, Play, RotateCcw, CheckCircle2, AlertCircle, Calculator, Lock, Hash, Coins, Clock, Globe, Smartphone, HardDrive, Shield, Flame, Cloud, CloudOff, Hammer, Banknote, BarChart3, Users, Key, Percent, QrCode, ShoppingBag, RefreshCw, Truck, Scan, ShieldAlert, ArrowRightLeft, Repeat, Building, ArrowUpRight, ArrowDownLeft, TrendingUp, TrendingDown, Factory, Search, Siren, Network, FileText, Skull, Activity, Twitter, MessageCircle, Send, Linkedin, Facebook, Mail, Copy, Radio, MessageSquare, Share2, Heart, Star, MapPin } from 'lucide-react';
import { getKnowledge, Tool } from '../data/knowledge';
import { BlankaText } from './BlankaText';

// Confetti definition
declare global {
  interface Window {
    confetti: any;
  }
}

export const KnowledgeModal: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get('learn');
  const [mode, setMode] = useState<'LEARN' | 'TOOL' | 'QUIZ' | 'SUCCESS'>('LEARN');
  
  // Quiz State
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
  const [wrongShake, setWrongShake] = useState(false);
  const [score, setScore] = useState(0);
  const [hasAttemptedCurrent, setHasAttemptedCurrent] = useState(false);
  
  // Share State
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);
  
  // Tool States
  const [calcValue, setCalcValue] = useState({ amount: 1000, years: 5, inflation: 10 });
  const [hashInput, setHashInput] = useState('');
  const [hashOutput, setHashOutput] = useState('');
  const [seedPhrase, setSeedPhrase] = useState<string[]>([]);
  const [privateKeyHex, setPrivateKeyHex] = useState('');
  const [convertAmount, setConvertAmount] = useState(1000);
  const [privacyScore, setPrivacyScore] = useState(0);
  const [mapPings, setMapPings] = useState<{x: number, y: number}[]>([]);
  
  // BitMatch (Wallet Selector) State
  const [walletStep, setWalletStep] = useState(0);
  const [walletAnswers, setWalletAnswers] = useState<{device?: string, purpose?: string}>({});
  
  // BitPlate (Backup Visualizer) State
  const [plateMaterial, setPlateMaterial] = useState<'PAPER' | 'CLOUD' | 'STEEL' | null>(null);
  const [plateStatus, setPlateStatus] = useState<'INTACT' | 'DESTROYED' | 'HACKED' | null>(null);
  const [plateMessage, setPlateMessage] = useState('');

  // BitWage (Salary Calculator) State
  const [salary, setSalary] = useState(50000);
  const [allocation, setAllocation] = useState(10);
  const [dcaYears, setDcaYears] = useState(5);

  // BitEscrow (P2P Visualizer) State
  const [escrowStep, setEscrowStep] = useState(0);

  // BitPremium (Fee Calculator) State
  const [spotPrice, setSpotPrice] = useState(9500000);
  const [voucherCost, setVoucherCost] = useState(1000);
  const [voucherSats, setVoucherSats] = useState(9500);

  // BitSpedn (Velocity Visualizer) State
  const [spednStep, setSpednStep] = useState(0);
  const [merchantRevenue, setMerchantRevenue] = useState(0);

  // BitInvoice (Lightning Simulator) State
  const [invoiceAmount, setInvoiceAmount] = useState(2100);
  const [invoiceString, setInvoiceString] = useState('');
  const [invoiceStatus, setInvoiceStatus] = useState<'PENDING' | 'PAID'>('PENDING');

  // BitSwap (Spend & Replace) State
  const [spendAmount, setSpendAmount] = useState(500);
  const [exchangeFee, setExchangeFee] = useState(2);

  // BitPOS (Point of Sale) State
  const [posAmount, setPosAmount] = useState('');
  const [posState, setPosState] = useState<'ENTER' | 'QR' | 'PAID'>('ENTER');

  // BitUnit (Converter) State
  const [unitBtc, setUnitBtc] = useState(1);

  // BitStaff (Security Trainer) State
  const [staffScenario, setStaffScenario] = useState(0);
  const [staffResult, setStaffResult] = useState<'NONE' | 'CORRECT' | 'WRONG'>('NONE');

  // BitLoop (Visualizer) State
  const [loopMode, setLoopMode] = useState<'FIAT' | 'BTC'>('FIAT');

  // BitSupply (Checklist) State
  const [supplyChecks, setSupplyChecks] = useState<boolean[]>([false, false, false, false, false]);
  const [supplyScore, setSupplyScore] = useState(0);

  // BitCitadel (Simulator) State
  const [citadelResources, setCitadelResources] = useState({ sats: 50000, members: 5, rep: 10 });
  const [citadelLog, setCitadelLog] = useState<string[]>(["New Citadel Founded."]);

  // BitZoom (Visualizer) State
  const [zoomLevel, setZoomLevel] = useState<'SHORT' | 'LONG'>('SHORT');

  // BitEnergy (Visualizer) State
  const [energyComp, setEnergyComp] = useState<'BANK' | 'GOLD' | 'BTC'>('BTC');

  // BitTrace (Simulator) State
  const [traceStep, setTraceStep] = useState(0);

  // BitPill (Visualizer) State
  const [pillCount, setPillCount] = useState(1);

  // BitInheritance (Checklist) State
  const [inheritanceChecks, setInheritanceChecks] = useState<boolean[]>([false, false, false, false]);

  // BitHyper (Simulator) State
  const [hyperYear, setHyperYear] = useState(0);
  const [hyperFiatValue, setHyperFiatValue] = useState(100);
  const [hyperBtcValue, setHyperBtcValue] = useState(100);

  // BitATM (Simulator) State
  const [atmStep, setAtmStep] = useState(0);

  const item = query ? getKnowledge(query) : null;
  const scrollRef = useRef<HTMLDivElement>(null);

  // Reset state when modal opens
  useEffect(() => {
    if (query) {
      setMode('LEARN');
      setCurrentQIndex(0);
      setScore(0);
      setHasAttemptedCurrent(false);
      setHashInput('');
      setHashOutput('');
      setSeedPhrase([]);
      setPrivateKeyHex('');
      setPrivacyScore(0);
      setMapPings([]);
      setWalletStep(0);
      setWalletAnswers({});
      setPlateMaterial(null);
      setPlateStatus(null);
      setPlateMessage('');
      setEscrowStep(0);
      setSpednStep(0);
      setMerchantRevenue(0);
      setInvoiceString('');
      setInvoiceStatus('PENDING');
      setPosAmount('');
      setPosState('ENTER');
      setUnitBtc(1);
      setStaffScenario(0);
      setStaffResult('NONE');
      setLoopMode('FIAT');
      setSupplyChecks([false, false, false, false, false]);
      setSupplyScore(0);
      setCitadelResources({ sats: 50000, members: 5, rep: 10 });
      setCitadelLog(["New Citadel Founded."]);
      setZoomLevel('SHORT');
      setEnergyComp('BTC');
      setTraceStep(0);
      setPillCount(1);
      setInheritanceChecks([false, false, false, false]);
      setHyperYear(0);
      setHyperFiatValue(100);
      setHyperBtcValue(100);
      setAtmStep(0);
      setShowShareMenu(false);
      setCopiedShare(false);
    }
  }, [query]);

  // Reset scroll on mode change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [mode]);

  // Shuffle options
  useEffect(() => {
    if (mode === 'QUIZ' && item) {
      const currentQ = item.quiz[currentQIndex];
      if (currentQ) {
        shuffleAndSet(currentQ.options);
      }
    }
  }, [mode, currentQIndex, item]);

  const shuffleAndSet = (options: string[]) => {
    const shuffled = [...options].sort(() => Math.random() - 0.5);
    setShuffledOptions(shuffled);
  };

  const close = () => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete('learn');
    setSearchParams(newParams);
  };

  const handleDonateRedirect = () => {
    close();
    navigate('/donate');
  };

  const handleAnswer = (selected: string) => {
    if (!item) return;
    const currentQ = item.quiz[currentQIndex];
    const correctAnswer = currentQ.options[0]; 

    if (selected === correctAnswer) {
      // Correct Answer
      if (!hasAttemptedCurrent) {
         setScore(prev => prev + 1);
      }
      setHasAttemptedCurrent(false);

      if (currentQIndex < item.quiz.length - 1) {
        setCurrentQIndex(prev => prev + 1);
      } else {
        setMode('SUCCESS');
        setTimeout(triggerConfetti, 100);
      }
    } else {
      // Wrong Answer
      setHasAttemptedCurrent(true);
      setWrongShake(true);
      setTimeout(() => setWrongShake(false), 500);
      shuffleAndSet(currentQ.options); 
    }
  };

  const triggerConfetti = () => {
    if (window.confetti) {
      window.confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#F7931A', '#000000', '#FFFFFF']
      });
    }
  };

  const handleShare = (platform: string) => {
    if (!item) return;
    const url = "https://btcnairobi.org";
    const hashtags = "#btcnairobi #keepspedn #studybitcoin";
    const text = `I just mastered ${item.title} on Bitcoin Nairobi! 🧡 Learn with me: ${url} ${hashtags}`;
    const encodedText = encodeURIComponent(text);
    const encodedUrl = encodeURIComponent(url);

    let shareUrl = '';

    switch(platform) {
      case 'Twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodedText}`;
        break;
      case 'WhatsApp':
        shareUrl = `https://wa.me/?text=${encodedText}`;
        break;
      case 'Telegram':
        shareUrl = `https://t.me/share/url?url=${encodedUrl}&text=${encodeURIComponent(`I just mastered ${item.title}!`)}`;
        break;
      case 'LinkedIn':
        shareUrl = `https://www.linkedin.com/feed/?shareActive=true&text=${encodedText}`;
        break;
      case 'Facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`;
        break;
      case 'Reddit':
        shareUrl = `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedText}`;
        break;
      case 'Nostr':
        shareUrl = `https://primal.net/composer?content=${encodedText}`;
        break;
      case 'Email':
        shareUrl = `mailto:?subject=${encodeURIComponent(`I mastered ${item.title}!`)}&body=${encodedText}`;
        break;
      case 'Signal': // No direct web intent, fallback to copy
      case 'Copy':
        navigator.clipboard.writeText(text);
        setCopiedShare(true);
        setTimeout(() => setCopiedShare(false), 2000);
        if (platform === 'Copy') return;
        break;
    }
    
    if (shareUrl) window.open(shareUrl, '_blank');
  };

  // --- TOOL LOGIC ---
  const renderToolWidget = (tool: Tool) => {
    switch (tool.type) {
      case 'CALCULATOR':
        // Inflation Calculator
        if (tool.name === "BitCalc") {
          const futureVal = calcValue.amount / Math.pow(1 + calcValue.inflation/100, calcValue.years);
          const loss = calcValue.amount - futureVal;
          return (
            <div className="w-full max-w-md mx-auto bg-slate-800 p-6 rounded-xl border-2 border-black text-white shadow-hard">
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-bold uppercase text-slate-400">Initial Amount (KES)</label>
                  <input 
                    type="number" 
                    value={calcValue.amount}
                    onChange={(e) => setCalcValue({...calcValue, amount: Number(e.target.value)})}
                    className="w-full bg-slate-900 border border-slate-600 rounded p-2 font-mono text-xl text-[#F7931A]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                     <label className="text-xs font-bold uppercase text-slate-400">Years</label>
                     <input 
                        type="number" 
                        value={calcValue.years}
                        onChange={(e) => setCalcValue({...calcValue, years: Number(e.target.value)})}
                        className="w-full bg-slate-900 border border-slate-600 rounded p-2 font-mono"
                     />
                  </div>
                  <div>
                     <label className="text-xs font-bold uppercase text-slate-400">Inflation %</label>
                     <input 
                        type="number" 
                        value={calcValue.inflation}
                        onChange={(e) => setCalcValue({...calcValue, inflation: Number(e.target.value)})}
                        className="w-full bg-slate-900 border border-slate-600 rounded p-2 font-mono"
                     />
                  </div>
                </div>
                <div className="bg-black p-4 rounded-lg text-center border border-white/20 mt-4">
                   <p className="text-xs font-bold uppercase text-slate-500">Future Purchasing Power</p>
                   <p className="text-3xl font-bold text-red-500 font-mono">{futureVal.toFixed(0)} KES</p>
                   <p className="text-xs text-red-400 mt-1">You lost {loss.toFixed(0)} KES of value</p>
                </div>
              </div>
            </div>
          );
        }

        // BitWage Calculator
        if (tool.name === "BitWage") {
          const monthlyAllocation = salary * (allocation / 100);
          const yearlyAllocation = monthlyAllocation * 12;
          const totalFiatInvested = yearlyAllocation * dcaYears;
          // Simple simulation: Assuming Bitcoin doubles every 4 years (CAGR ~18%) conservatively
          const projectedValue = totalFiatInvested * Math.pow(1.18, dcaYears); 
          
          return (
             <div className="w-full max-w-md mx-auto bg-white p-6 rounded-xl border-2 border-black shadow-hard">
                <div className="space-y-4 mb-6">
                   <div>
                     <label className="text-xs font-bold uppercase text-slate-400">Monthly Salary (KES)</label>
                     <input type="number" value={salary} onChange={(e) => setSalary(Number(e.target.value))} className="w-full border-b-2 border-slate-200 focus:border-[#F7931A] outline-none text-2xl font-bold py-2" />
                   </div>
                   <div>
                     <label className="text-xs font-bold uppercase text-slate-400 mb-2 block">Allocation ({allocation}%)</label>
                     <input type="range" min="1" max="100" value={allocation} onChange={(e) => setAllocation(Number(e.target.value))} className="w-full accent-[#F7931A]" />
                     <p className="text-right font-mono text-xs text-[#F7931A] font-bold">{monthlyAllocation.toLocaleString()} KES / month</p>
                   </div>
                   <div>
                      <label className="text-xs font-bold uppercase text-slate-400">Timeframe (Years)</label>
                      <div className="flex gap-2 mt-1">
                        {[1, 3, 5, 10].map(y => (
                           <button key={y} onClick={() => setDcaYears(y)} className={`flex-1 py-2 rounded font-bold text-xs border ${dcaYears === y ? 'bg-black text-white border-black' : 'bg-white text-black border-slate-200'}`}>{y}Y</button>
                        ))}
                      </div>
                   </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-end justify-between h-32 relative overflow-hidden">
                   <div className="w-[45%] bg-slate-300 rounded-t-lg relative group">
                      <div className="absolute bottom-2 left-0 right-0 text-center text-[10px] font-bold">FIAT SAVED</div>
                      <div className="h-full flex items-end justify-center pb-6 font-bold text-slate-600 text-xs">{totalFiatInvested.toLocaleString()}</div>
                   </div>
                   <div className="w-[45%] bg-[#F7931A] rounded-t-lg relative group shadow-lg" style={{height: '120%'}}>
                      <div className="absolute bottom-2 left-0 right-0 text-center text-[10px] font-bold text-white">BTC VALUE</div>
                      <div className="h-full flex items-end justify-center pb-6 font-bold text-white text-sm">~{projectedValue.toLocaleString(undefined, {maximumFractionDigits:0})}</div>
                   </div>
                </div>
                <p className="text-center text-[10px] text-slate-400 mt-2 font-bold uppercase">Projected Value (Not Financial Advice)</p>
             </div>
          );
        }

        // BitPremium Calculator
        if (tool.name === "BitPremium") {
           const satPrice = spotPrice / 100000000;
           const marketSats = voucherCost / satPrice;
           const diff = marketSats - voucherSats;
           const premiumPercent = (diff / marketSats) * 100;
           
           return (
              <div className="w-full max-w-md mx-auto bg-slate-900 p-6 rounded-xl border-4 border-black shadow-hard text-white">
                 <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                       <div>
                          <label className="text-[10px] font-bold uppercase text-slate-500">Spot Price (KES)</label>
                          <input type="number" value={spotPrice} onChange={(e) => setSpotPrice(Number(e.target.value))} className="w-full bg-black border border-slate-700 rounded p-2 text-sm font-mono text-green-400" />
                       </div>
                       <div>
                          <label className="text-[10px] font-bold uppercase text-slate-500">Voucher Cost (KES)</label>
                          <input type="number" value={voucherCost} onChange={(e) => setVoucherCost(Number(e.target.value))} className="w-full bg-black border border-slate-700 rounded p-2 text-sm font-mono" />
                       </div>
                    </div>
                    <div>
                       <label className="text-[10px] font-bold uppercase text-slate-500">Sats Received</label>
                       <input type="number" value={voucherSats} onChange={(e) => setVoucherSats(Number(e.target.value))} className="w-full bg-black border border-slate-700 rounded p-2 text-xl font-bold font-mono text-[#F7931A]" />
                    </div>
                    
                    <div className="bg-white text-black p-4 rounded-xl mt-4 border-2 border-slate-500">
                       <div className="flex justify-between items-center mb-2">
                          <span className="text-xs font-bold uppercase">Market Value</span>
                          <span className="font-mono font-bold">{marketSats.toFixed(0)} Sats</span>
                       </div>
                       <div className="flex justify-between items-center mb-2 text-red-600">
                          <span className="text-xs font-bold uppercase">Fee / Spread</span>
                          <span className="font-mono font-bold">-{diff.toFixed(0)} Sats</span>
                       </div>
                       <div className="h-px bg-black/10 my-2"></div>
                       <div className="flex justify-between items-center">
                          <span className="text-sm font-bold uppercase">Privacy Premium</span>
                          <span className={`text-xl font-bold font-mono ${premiumPercent > 5 ? 'text-red-500' : 'text-green-600'}`}>{premiumPercent.toFixed(2)}%</span>
                       </div>
                    </div>
                 </div>
              </div>
           );
        }

        // BitSwap (Spend & Replace)
        if (tool.name === "BitSwap") {
           const btcAmount = spendAmount / (9500000 / 100000000); // Assuming 9.5M KES/BTC
           const buyBackCost = spendAmount * (1 + exchangeFee/100);
           
           return (
              <div className="w-full max-w-md mx-auto bg-white p-6 rounded-xl border-2 border-black shadow-hard">
                 <div className="flex items-center justify-center mb-6">
                    <RefreshCw size={32} className="text-[#F7931A] animate-spin-slow" />
                 </div>
                 <div className="space-y-4">
                    <div>
                       <label className="text-xs font-bold uppercase text-slate-400">I spent (KES)</label>
                       <input type="number" value={spendAmount} onChange={(e) => setSpendAmount(Number(e.target.value))} className="w-full border-b-2 border-black text-3xl font-bold py-2 outline-none" />
                    </div>
                    
                    <div className="flex items-center gap-2 bg-orange-50 p-3 rounded-lg border border-orange-200">
                       <Zap size={16} className="text-[#F7931A]" />
                       <span className="text-sm font-bold text-orange-800">{Math.floor(btcAmount).toLocaleString()} Sats spent</span>
                    </div>

                    <div>
                       <label className="text-xs font-bold uppercase text-slate-400">Exchange Fee %</label>
                       <input type="number" value={exchangeFee} onChange={(e) => setExchangeFee(Number(e.target.value))} className="w-full bg-slate-50 border border-slate-200 rounded p-2 font-mono" />
                    </div>

                    <div className="bg-slate-900 text-white p-4 rounded-xl mt-2">
                       <p className="text-xs font-bold uppercase text-slate-400 mb-1">Cost to Replace Stack</p>
                       <p className="text-3xl font-bold text-green-400">{buyBackCost.toFixed(0)} KES</p>
                       <p className="text-[10px] text-slate-500 mt-1">You pay { (buyBackCost - spendAmount).toFixed(0) } KES extra to stay net neutral.</p>
                    </div>
                 </div>
              </div>
           );
        }

        return null;

      case 'HASH':
        // SHA256 Simulator
        const simpleHash = (str: string) => {
          let hash = 0;
          if (str.length === 0) return "";
          for (let i = 0; i < str.length; i++) {
            hash = ((hash << 5) - hash) + str.charCodeAt(i);
            hash |= 0;
          }
          // Mocking a hex look
          return Math.abs(hash).toString(16).repeat(4).substring(0, 64);
        };
        
        const updateHash = (val: string) => {
            setHashInput(val);
            setHashOutput(simpleHash(val));
        }

        return (
          <div className="w-full max-w-md mx-auto bg-slate-100 p-6 rounded-xl border-2 border-black shadow-hard">
             <label className="text-xs font-bold uppercase text-slate-500 block mb-2">Input Data</label>
             <textarea 
               value={hashInput}
               onChange={(e) => updateHash(e.target.value)}
               placeholder="Type anything here (Mining)..."
               className="w-full p-3 border-2 border-slate-300 rounded-lg mb-4 focus:border-[#F7931A] outline-none font-mono text-sm"
             />
             <label className="text-xs font-bold uppercase text-slate-500 block mb-2">Output Hash (SHA-256)</label>
             <div className={`bg-black text-green-400 p-3 rounded-lg font-mono text-xs break-all min-h-[60px] border-2 border-slate-800 transition-colors duration-500 ${hashOutput.startsWith('00') ? 'border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)]' : ''}`}>
                {hashOutput || "Waiting for input..."}
             </div>
             {hashOutput.startsWith('00') && (
                <div className="mt-2 text-center bg-green-100 text-green-800 text-xs font-bold p-2 rounded animate-pulse uppercase">
                   Valid Block Found! (Mock)
                </div>
             )}
             <p className="text-xs text-slate-500 mt-2 font-bold">Try to find a hash starting with '00'.</p>
          </div>
        );

      case 'GENERATOR':
        const words = ["witch", "collapse", "practice", "feed", "shame", "open", "despair", "creek", "road", "again", "ice", "least", "orbit", "bread", "market", "fury", "icon", "glory"];
        const generate = () => {
           const newSeed = [];
           for(let i=0; i<12; i++) newSeed.push(words[Math.floor(Math.random() * words.length)]);
           setSeedPhrase(newSeed);
           setPrivateKeyHex(Array.from({length: 64}, () => Math.floor(Math.random()*16).toString(16)).join('').toUpperCase());
        };
        return (
           <div className="w-full max-w-md mx-auto bg-white p-6 rounded-xl border-2 border-black shadow-hard text-center">
              <button 
                onClick={generate}
                className="bg-[#F7931A] text-white px-6 py-2 rounded-full font-bold uppercase text-sm mb-6 hover:bg-black transition-colors border-2 border-transparent hover:border-white"
              >
                Generate Seed
              </button>
              
              {seedPhrase.length > 0 && (
                 <div className="mb-4 bg-black p-2 rounded text-[10px] font-mono text-green-500 break-all border border-slate-700">
                   <span className="text-slate-500 select-none mr-2">PRIVATE KEY (HEX):</span>
                   {privateKeyHex}
                 </div>
              )}

              <div className="grid grid-cols-3 gap-2">
                 {seedPhrase.length > 0 ? seedPhrase.map((w, i) => (
                    <div key={i} className="bg-slate-100 p-2 rounded border border-slate-200 text-xs font-bold animate-in zoom-in" style={{animationDelay: `${i*50}ms`}}>
                       <span className="text-slate-400 mr-1">{i+1}.</span>{w}
                    </div>
                 )) : (
                    <div className="col-span-3 py-8 text-slate-400 text-sm italic">Click generate to create a key</div>
                 )}
              </div>
              {seedPhrase.length > 0 && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded text-xs text-red-600 font-bold">
                   WARNING: Never share these words. This is your money.
                </div>
              )}
           </div>
        );

      case 'CONVERTER':
        // BitUnit Converter
        if (tool.name === "BitUnit") {
           const sats = unitBtc * 100000000;
           const mbtc = unitBtc * 1000;
           return (
              <div className="w-full max-w-md mx-auto bg-white p-6 rounded-xl border-2 border-black shadow-hard text-center">
                 <div className="mb-6">
                    <label className="text-xs font-bold uppercase text-slate-400 block mb-2">Bitcoin (BTC)</label>
                    <input 
                      type="number" 
                      value={unitBtc}
                      onChange={(e) => setUnitBtc(Number(e.target.value))}
                      className="w-full bg-slate-50 border-2 border-black rounded-xl p-3 text-3xl font-bold text-center outline-none focus:bg-orange-50"
                    />
                 </div>
                 <div className="flex justify-center mb-6">
                    <ArrowRightLeft className="text-slate-300 rotate-90" size={32} />
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                       <p className="text-xs font-bold uppercase text-slate-400">Sats</p>
                       <p className="text-xl font-mono font-bold text-[#F7931A]">{sats.toLocaleString()}</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                       <p className="text-xs font-bold uppercase text-slate-400">mBTC</p>
                       <p className="text-xl font-mono font-bold text-black">{mbtc.toLocaleString()}</p>
                    </div>
                 </div>
                 <div className="mt-4 bg-blue-50 p-3 rounded-lg text-xs text-blue-700 font-bold">
                    100,000,000 Sats = 1 BTC
                 </div>
              </div>
           );
        }
        // Default Converter
        const rate = 0.0016; // Mock rate 1 KES = 16 sats (approx)
        const satsCalc = Math.floor(convertAmount / rate);
        return (
           <div className="w-full max-w-md mx-auto bg-black p-6 rounded-xl border-4 border-[#F7931A] shadow-hard text-white text-center">
              <div className="mb-6">
                 <label className="text-xs font-bold uppercase text-slate-400 block mb-1">Amount in KES</label>
                 <input 
                   type="number" 
                   value={convertAmount}
                   onChange={(e) => setConvertAmount(Number(e.target.value))}
                   className="bg-transparent border-b-2 border-white text-4xl font-bold text-center w-full outline-none py-2 focus:border-[#F7931A]"
                 />
              </div>
              <div className="flex items-center justify-center gap-4 mb-6">
                 <div className="h-px bg-white/20 w-full"></div>
                 <Coins size={24} className="text-[#F7931A]" />
                 <div className="h-px bg-white/20 w-full"></div>
              </div>
              <div>
                 <p className="text-xs font-bold uppercase text-slate-400 block mb-1">Amount in Sats</p>
                 <p className="text-4xl font-mono font-bold text-[#F7931A]">{satsCalc.toLocaleString()}</p>
              </div>
           </div>
        );
      
      case 'CHECKLIST':
        // --- BITSUPPLY (Checklist) ---
        if (tool.name === "BitSupply") {
           const questions = ["Can you source inputs locally?", "Will supplier accept Bitcoin?", "Can you substitute imports?", "Is energy produced locally?", "Are tools open source?"];
           const toggleSupply = (index: number) => {
              const newChecks = [...supplyChecks];
              newChecks[index] = !newChecks[index];
              setSupplyChecks(newChecks);
              setSupplyScore(newChecks.filter(Boolean).length * 20);
           }
           
           return (
              <div className="w-full max-w-md mx-auto bg-white p-6 rounded-xl border-2 border-black shadow-hard">
                 <div className="flex justify-between items-center mb-6">
                    <h4 className="font-bold uppercase text-sm">Supply Chain Sovereignty</h4>
                    <span className={`text-xl font-bold ${supplyScore >= 80 ? 'text-green-500' : supplyScore >= 40 ? 'text-yellow-500' : 'text-red-500'}`}>{supplyScore}% Sovereign</span>
                 </div>
                 <div className="space-y-3">
                    {questions.map((q, i) => (
                       <label key={i} className={`flex items-center gap-3 p-4 rounded-xl cursor-pointer border-2 transition-all ${supplyChecks[i] ? 'bg-green-50 border-green-500' : 'bg-slate-50 border-transparent hover:bg-slate-100'}`}>
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${supplyChecks[i] ? 'bg-green-500 border-green-500 text-white' : 'border-slate-300'}`}>
                             {supplyChecks[i] && <CheckCircle2 size={16} />}
                          </div>
                          <input type="checkbox" checked={supplyChecks[i]} onChange={() => toggleSupply(i)} className="hidden" />
                          <span className="text-sm font-bold text-slate-700">{q}</span>
                       </label>
                    ))}
                 </div>
              </div>
           );
        }

        // --- BITINHERITANCE (Checklist) ---
        if (tool.name === "BitInheritance") {
           const checks = [
             "My family knows where my physical backups are.",
             "I have a 'Dead Man's Switch' protocol.",
             "My lawyer/executor has instructions (but not keys).",
             "I practice recovery once a year."
           ];
           const toggleInh = (index: number) => {
              const newChecks = [...inheritanceChecks];
              newChecks[index] = !newChecks[index];
              setInheritanceChecks(newChecks);
           }
           const inhScore = inheritanceChecks.filter(Boolean).length * 25;

           return (
              <div className="w-full max-w-md mx-auto bg-slate-900 p-6 rounded-xl border-4 border-black shadow-hard text-white">
                 <div className="flex justify-between items-center mb-6">
                    <h4 className="font-bold uppercase text-sm">Estate Plan Audit</h4>
                    <span className={`text-xl font-bold ${inhScore === 100 ? 'text-green-500' : 'text-red-500'}`}>{inhScore}% Ready</span>
                 </div>
                 <div className="space-y-3">
                    {checks.map((q, i) => (
                       <label key={i} className={`flex items-center gap-3 p-4 rounded-xl cursor-pointer border border-slate-700 transition-all ${inheritanceChecks[i] ? 'bg-slate-800 border-green-500' : 'bg-slate-800 hover:bg-slate-700'}`}>
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${inheritanceChecks[i] ? 'bg-green-500 border-green-500 text-white' : 'border-slate-500'}`}>
                             {inheritanceChecks[i] && <CheckCircle2 size={16} />}
                          </div>
                          <input type="checkbox" checked={inheritanceChecks[i]} onChange={() => toggleInh(i)} className="hidden" />
                          <span className="text-xs font-bold text-slate-300">{q}</span>
                       </label>
                    ))}
                 </div>
                 <div className="mt-6 p-3 bg-red-900/30 border border-red-500 rounded text-[10px] text-red-400 font-bold uppercase text-center">
                    Warning: Never give your seed words to a lawyer.
                 </div>
              </div>
           );
        }

        // --- BITWATCH (Default Checklist) ---
        const togglePrivacy = (idx: number) => {
            setPrivacyScore(prev => Math.min(100, prev + 20)); 
        }
        return (
           <div className="w-full max-w-md mx-auto bg-white p-6 rounded-xl border-2 border-black shadow-hard">
              <div className="flex justify-between items-center mb-4">
                 <h4 className="font-bold uppercase text-sm">Privacy Audit</h4>
                 <span className={`text-xl font-bold ${privacyScore >= 80 ? 'text-green-500' : privacyScore >= 40 ? 'text-yellow-500' : 'text-red-500'}`}>{privacyScore}% Safe</span>
              </div>
              <div className="space-y-3">
                 {["Used VPN?", "Avoided SMS verification?", "Generated new address?", "Used Tor?", "Avoided public Wi-Fi?"].map((q, i) => (
                    <label key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg cursor-pointer hover:bg-slate-100">
                       <input type="checkbox" onChange={() => togglePrivacy(i)} className="accent-[#F7931A] w-5 h-5" />
                       <span className="text-sm font-bold text-slate-700">{q}</span>
                    </label>
                 ))}
              </div>
           </div>
        );

      case 'VISUALIZER':
        // --- BITPILL (Visualizer) ---
        if (tool.name === "BitPill") {
           return (
              <div className="w-full max-w-md mx-auto bg-white p-6 rounded-xl border-2 border-black shadow-hard text-center">
                 <h4 className="font-bold uppercase text-lg mb-4">The Network Effect</h4>
                 
                 <div className="bg-slate-900 rounded-xl p-4 mb-4 relative overflow-hidden h-48 flex items-center justify-center">
                    <div className="absolute inset-0 flex flex-wrap content-center justify-center gap-1 p-2">
                       {Array(pillCount).fill(0).map((_, i) => (
                          <div key={i} className="w-3 h-3 bg-[#F7931A] rounded-full animate-in zoom-in duration-300"></div>
                       ))}
                    </div>
                 </div>

                 <p className="text-3xl font-bold font-mono text-[#F7931A] mb-2">{pillCount.toLocaleString()} Users</p>
                 <p className="text-xs font-bold uppercase text-slate-400 mb-6">Each person teaches 2 people...</p>

                 <button 
                   onClick={() => setPillCount(prev => Math.min(200, prev * 2))}
                   className="bg-black text-white px-8 py-3 rounded-full font-bold uppercase hover:scale-105 transition-transform"
                   disabled={pillCount >= 200}
                >
                   {pillCount >= 200 ? "Adoption Achieved" : "Orange Pill Next Wave"}
                </button>
              </div>
           );
        }

        // --- BITZOOM ---
        if (tool.name === "BitZoom") {
           return (
              <div className="w-full max-w-md mx-auto bg-white p-6 rounded-xl border-2 border-black shadow-hard relative overflow-hidden">
                 <div className="flex justify-center gap-4 mb-6 z-10 relative">
                    <button onClick={() => setZoomLevel('SHORT')} className={`px-4 py-2 rounded-full font-bold uppercase text-xs border-2 transition-all ${zoomLevel === 'SHORT' ? 'bg-red-500 border-red-500 text-white' : 'border-slate-200 text-slate-400'}`}>
                       1 Day
                    </button>
                    <button onClick={() => setZoomLevel('LONG')} className={`px-4 py-2 rounded-full font-bold uppercase text-xs border-2 transition-all ${zoomLevel === 'LONG' ? 'bg-green-500 border-green-500 text-white' : 'border-slate-200 text-slate-400'}`}>
                       4 Years
                    </button>
                 </div>

                 <div className="h-48 border-2 border-slate-100 rounded-xl bg-slate-50 relative flex items-center justify-center mb-4 overflow-hidden">
                    {/* Grid Lines */}
                    <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
                       <div className="border-r border-slate-200"></div><div className="border-r border-slate-200"></div><div className="border-r border-slate-200"></div>
                    </div>

                    {zoomLevel === 'SHORT' ? (
                       <div className="animate-in fade-in duration-300 w-full h-full relative">
                          {/* Jagged Red Line */}
                          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                             <path d="M0,50 L10,40 L20,60 L30,30 L40,70 L50,40 L60,80 L70,50 L80,90 L90,60 L100,80" fill="none" stroke="red" strokeWidth="2" />
                          </svg>
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-100 text-red-800 px-4 py-2 rounded-lg font-bold border border-red-300 shadow-sm animate-pulse">
                             <TrendingDown className="inline-block mr-2" size={16} />
                             -10% CRASH!
                          </div>
                       </div>
                    ) : (
                       <div className="animate-in fade-in duration-300 w-full h-full relative">
                          {/* Smooth Green Curve */}
                          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                             <path d="M0,90 Q50,90 100,10" fill="none" stroke="#22c55e" strokeWidth="4" />
                          </svg>
                          <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 bg-green-100 text-green-800 px-4 py-2 rounded-lg font-bold border border-green-300 shadow-sm">
                             <TrendingUp className="inline-block mr-2" size={16} />
                             +500% GAIN
                          </div>
                       </div>
                    )}
                 </div>

                 <p className="text-center text-xs font-bold uppercase text-slate-400">
                    {zoomLevel === 'SHORT' ? "Short term noise is scary." : "Long term signal is clear."}
                 </p>
              </div>
           );
        }

        // --- BITENERGY ---
        if (tool.name === "BitEnergy") {
           return (
              <div className="w-full max-w-md mx-auto bg-slate-900 p-6 rounded-xl border-4 border-black shadow-hard text-white">
                 <h4 className="text-center font-bold uppercase text-sm mb-6 text-slate-400">Annual Energy Consumption (TWh)</h4>
                 
                 <div className="space-y-6 mb-8">
                    {/* Banking */}
                    <div 
                      onClick={() => setEnergyComp('BANK')}
                      className={`relative cursor-pointer transition-all duration-300 ${energyComp === 'BANK' ? 'opacity-100' : 'opacity-50'}`}
                    >
                       <div className="flex justify-between text-xs font-bold uppercase mb-1">
                          <span>Banking System</span>
                          <span>~500 TWh</span>
                       </div>
                       <div className="h-8 bg-slate-700 rounded-r-full overflow-hidden relative">
                          <div className="h-full bg-slate-500 w-[90%]"></div>
                          <Building className="absolute right-2 top-1.5 text-slate-300" size={20} />
                       </div>
                    </div>

                    {/* Gold */}
                    <div 
                      onClick={() => setEnergyComp('GOLD')}
                      className={`relative cursor-pointer transition-all duration-300 ${energyComp === 'GOLD' ? 'opacity-100' : 'opacity-50'}`}
                    >
                       <div className="flex justify-between text-xs font-bold uppercase mb-1">
                          <span>Gold Mining</span>
                          <span>~265 TWh</span>
                       </div>
                       <div className="h-8 bg-slate-700 rounded-r-full overflow-hidden relative">
                          <div className="h-full bg-yellow-600 w-[50%]"></div>
                          <Factory className="absolute right-2 top-1.5 text-slate-300" size={20} />
                       </div>
                    </div>

                    {/* Bitcoin */}
                    <div 
                      onClick={() => setEnergyComp('BTC')}
                      className={`relative cursor-pointer transition-all duration-300 ${energyComp === 'BTC' ? 'opacity-100 scale-105' : 'opacity-50'}`}
                    >
                       <div className="flex justify-between text-xs font-bold uppercase mb-1">
                          <span className="text-[#F7931A]">Bitcoin</span>
                          <span className="text-[#F7931A]">~150 TWh</span>
                       </div>
                       <div className="h-8 bg-slate-700 rounded-r-full overflow-hidden relative">
                          <div className="h-full bg-[#F7931A] w-[30%]"></div>
                          <Zap className="absolute right-2 top-1.5 text-white" size={20} />
                       </div>
                       {energyComp === 'BTC' && (
                          <div className="absolute -bottom-6 left-0 text-[10px] text-green-400 font-bold uppercase flex gap-2">
                             <span>• 50% Sustainable</span>
                             <span>• Stabilizes Grid</span>
                          </div>
                       )}
                    </div>
                 </div>
              </div>
           );
        }

        // --- BITLOOP (Visualizer) ---
        if (tool.name === "BitLoop") {
           return (
              <div className="w-full max-w-md mx-auto bg-slate-900 p-6 rounded-xl border-4 border-black shadow-hard text-white text-center">
                 <div className="flex justify-center gap-4 mb-6">
                    <button onClick={() => setLoopMode('FIAT')} className={`px-4 py-2 rounded-full font-bold uppercase text-xs border-2 ${loopMode === 'FIAT' ? 'bg-red-500 border-red-500 text-white' : 'border-slate-600 text-slate-400'}`}>Fiat Mode</button>
                    <button onClick={() => setLoopMode('BTC')} className={`px-4 py-2 rounded-full font-bold uppercase text-xs border-2 ${loopMode === 'BTC' ? 'bg-[#F7931A] border-[#F7931A] text-white' : 'border-slate-600 text-slate-400'}`}>Bitcoin Mode</button>
                 </div>

                 <div className="relative h-64 border-2 border-slate-700 rounded-xl bg-black overflow-hidden flex items-center justify-center">
                    {/* Central Community Node */}
                    <div className="z-10 bg-slate-800 p-4 rounded-full border-2 border-white flex flex-col items-center">
                       <Users size={32} />
                       <span className="text-[10px] font-bold uppercase mt-1">Community</span>
                    </div>

                    {loopMode === 'FIAT' ? (
                       <>
                          {/* Leaking Arrows */}
                          <div className="absolute top-1/2 left-1/2 w-32 h-1 bg-red-500 origin-left rotate-45 animate-pulse"></div>
                          <div className="absolute top-1/2 left-1/2 w-32 h-1 bg-red-500 origin-left -rotate-45 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                          <div className="absolute top-1/2 left-1/2 w-32 h-1 bg-red-500 origin-left rotate-180 animate-pulse" style={{animationDelay: '1s'}}></div>
                          
                          <div className="absolute top-4 right-4 text-red-500 flex flex-col items-center animate-bounce">
                             <ArrowUpRight size={24} />
                             <span className="text-[8px] font-bold uppercase">Foreign Corp</span>
                          </div>
                          <div className="absolute bottom-4 right-4 text-red-500 flex flex-col items-center animate-bounce" style={{animationDelay: '0.5s'}}>
                             <ArrowDownLeft size={24} />
                             <span className="text-[8px] font-bold uppercase">Inflation</span>
                          </div>
                       </>
                    ) : (
                       <>
                          {/* Rotating Ring */}
                          <div className="absolute inset-0 flex items-center justify-center">
                             <div className="w-48 h-48 border-4 border-dashed border-[#F7931A] rounded-full animate-spin-slow opacity-50"></div>
                          </div>
                          {/* Satellites */}
                          <div className="absolute top-1/4 left-1/4 bg-[#F7931A] p-2 rounded-full text-black border border-white">
                             <ShoppingBag size={16} />
                          </div>
                          <div className="absolute bottom-1/4 right-1/4 bg-[#F7931A] p-2 rounded-full text-black border border-white">
                             <Truck size={16} />
                          </div>
                          <p className="absolute bottom-2 text-[#F7931A] text-xs font-bold uppercase animate-pulse">Value Retained</p>
                       </>
                    )}
                 </div>
                 <p className="mt-4 text-sm font-bold text-slate-400">
                    {loopMode === 'FIAT' ? "Wealth leaks out to banks and foreign corps." : "Wealth recirculates locally, building resilience."}
                 </p>
              </div>
           );
        }

        // --- BITCLOCK ---
        if (tool.name === "BitClock") {
          const currentBlock = 840210; 
          const halvingInterval = 210000;
          const nextHalvingBlock = Math.ceil(currentBlock / halvingInterval) * halvingInterval;
          const blocksLeft = nextHalvingBlock - currentBlock;
          const progress = ((currentBlock % halvingInterval) / halvingInterval) * 100;
          
          return (
            <div className="w-full max-w-md mx-auto bg-slate-900 p-6 rounded-xl border-4 border-white shadow-hard text-center text-white">
               <Clock size={48} className="mx-auto text-[#F7931A] mb-4" />
               <h4 className="text-3xl font-bold uppercase mb-2 font-display">Halving Clock</h4>
               <div className="relative h-6 bg-slate-700 rounded-full overflow-hidden mb-2 border border-slate-500">
                 <div className="absolute top-0 left-0 h-full bg-[#F7931A] transition-all duration-1000" style={{width: `${progress}%`}}></div>
               </div>
               <p className="text-xs font-mono text-slate-400 mb-6">{progress.toFixed(2)}% Complete</p>
               <div className="grid grid-cols-2 gap-4 text-left">
                  <div className="bg-black p-3 rounded border border-slate-700">
                     <p className="text-[10px] uppercase text-slate-500 font-bold">Current Block</p>
                     <p className="font-mono text-xl font-bold">{currentBlock.toLocaleString()}</p>
                  </div>
                  <div className="bg-black p-3 rounded border border-slate-700">
                     <p className="text-[10px] uppercase text-slate-500 font-bold">Blocks Left</p>
                     <p className="font-mono text-xl font-bold text-green-400">{blocksLeft.toLocaleString()}</p>
                  </div>
               </div>
            </div>
          );
        }

        // --- BITMAP ---
        if (tool.name === "BitMap") {
          const addPing = (e: React.MouseEvent<HTMLDivElement>) => {
             const rect = e.currentTarget.getBoundingClientRect();
             const x = e.clientX - rect.left;
             const y = e.clientY - rect.top;
             setMapPings([...mapPings, {x, y}]);
          };
          return (
             <div className="w-full max-w-lg mx-auto bg-slate-900 p-4 rounded-xl border-4 border-black shadow-hard relative">
                <div className="flex items-center gap-2 mb-2 text-white">
                   <Globe size={20} className="text-[#F7931A]" />
                   <h4 className="font-bold uppercase text-sm">Global Node Network</h4>
                </div>
                <div className="w-full aspect-video bg-[#1a1a1a] rounded-lg border border-slate-700 relative overflow-hidden cursor-crosshair group" onClick={addPing}>
                   <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 bg-slate-800 rounded opacity-50"></div>
                   <div className="absolute top-1/3 right-1/4 w-1/4 h-1/4 bg-slate-800 rounded opacity-50"></div>
                   <div className="absolute bottom-1/4 left-1/3 w-1/5 h-1/4 bg-slate-800 rounded opacity-50"></div>
                   <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                   {mapPings.map((ping, i) => (
                      <div key={i} className="absolute w-3 h-3 bg-[#F7931A] rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-ping" style={{left: ping.x, top: ping.y}}></div>
                   ))}
                   {mapPings.map((ping, i) => (
                      <div key={`dot-${i}`} className="absolute w-2 h-2 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2" style={{left: ping.x, top: ping.y}}></div>
                   ))}
                   <div className="absolute bottom-2 right-2 text-[10px] font-mono text-green-500">Active Nodes: {(15432 + mapPings.length).toLocaleString()}</div>
                </div>
             </div>
          );
        }

        // --- BITMATCH (Wallet Selector) ---
        if (tool.name === "BitMatch") {
           const results = {
             mobile: { name: "Phoenix Wallet", desc: "Non-custodial, Fast Lightning, Good UX", icon: Smartphone },
             hardware: { name: "Blockstream Jade", desc: "Affordable, Secure, Air-gapped", icon: HardDrive },
             desktop: { name: "Sparrow Wallet", desc: "Advanced, Privacy-focused, Coinjoin", icon: Cloud }
           };

           const select = (key: string, value: string) => {
             setWalletAnswers({...walletAnswers, [key]: value});
             setWalletStep(prev => prev + 1);
           };

           return (
              <div className="w-full max-w-md mx-auto bg-white p-6 rounded-xl border-2 border-black shadow-hard">
                 {walletStep === 0 && (
                    <div className="animate-in slide-in-from-right">
                       <h4 className="text-lg font-bold uppercase text-center mb-6">Which device will you use?</h4>
                       <div className="grid grid-cols-2 gap-4">
                          <button onClick={() => select('device', 'mobile')} className="p-6 rounded-xl border-2 border-slate-200 hover:border-[#F7931A] hover:bg-orange-50 flex flex-col items-center">
                             <Smartphone size={32} className="mb-2 text-slate-600" />
                             <span className="font-bold uppercase">Phone</span>
                          </button>
                          <button onClick={() => select('device', 'desktop')} className="p-6 rounded-xl border-2 border-slate-200 hover:border-[#F7931A] hover:bg-orange-50 flex flex-col items-center">
                             <HardDrive size={32} className="mb-2 text-slate-600" />
                             <span className="font-bold uppercase">Computer</span>
                          </button>
                       </div>
                    </div>
                 )}
                 {walletStep === 1 && (
                    <div className="animate-in slide-in-from-right">
                       <h4 className="text-lg font-bold uppercase text-center mb-6">Amount to secure?</h4>
                       <div className="grid grid-cols-2 gap-4">
                          <button onClick={() => select('purpose', 'spending')} className="p-6 rounded-xl border-2 border-slate-200 hover:border-[#F7931A] hover:bg-orange-50 flex flex-col items-center">
                             <Zap size={32} className="mb-2 text-yellow-500" />
                             <span className="font-bold uppercase">Spending</span>
                             <span className="text-[10px] text-slate-400">(Under $500)</span>
                          </button>
                          <button onClick={() => select('purpose', 'saving')} className="p-6 rounded-xl border-2 border-slate-200 hover:border-[#F7931A] hover:bg-orange-50 flex flex-col items-center">
                             <Shield size={32} className="mb-2 text-green-500" />
                             <span className="font-bold uppercase">Savings</span>
                             <span className="text-[10px] text-slate-400">(Life Savings)</span>
                          </button>
                       </div>
                    </div>
                 )}
                 {walletStep === 2 && (
                    <div className="animate-in zoom-in text-center">
                       <h4 className="text-sm font-bold uppercase text-slate-400 mb-4">We Recommend</h4>
                       <div className="bg-black text-white p-6 rounded-xl border-4 border-[#F7931A] mb-6">
                          {/* Recommendation Logic */}
                          {(() => {
                             let res = results.mobile;
                             if (walletAnswers.purpose === 'saving') res = results.hardware;
                             else if (walletAnswers.device === 'desktop' && walletAnswers.purpose === 'spending') res = results.desktop;
                             const Icon = res.icon;
                             return (
                                <>
                                  <Icon size={48} className="mx-auto mb-4 text-[#F7931A]" />
                                  <h3 className="text-2xl font-bold uppercase">{res.name}</h3>
                                  <p className="text-slate-400 text-sm mt-2">{res.desc}</p>
                                </>
                             );
                          })()}
                       </div>
                       <button onClick={() => setWalletStep(0)} className="text-xs font-bold uppercase underline">Start Over</button>
                    </div>
                 )}
              </div>
           );
        }

        // --- BITPLATE (Backup Visualizer) ---
        if (tool.name === "BitPlate") {
          const attack = (type: 'FIRE' | 'WATER' | 'HACKER') => {
             if (!plateMaterial) return;
             
             if (plateMaterial === 'PAPER') {
                if (type === 'FIRE') { setPlateStatus('DESTROYED'); setPlateMessage("Paper burned to ash instantly."); }
                if (type === 'WATER') { setPlateStatus('DESTROYED'); setPlateMessage("Ink blurred. Paper turned to mush."); }
                if (type === 'HACKER') { setPlateStatus('INTACT'); setPlateMessage("Paper is offline. Hacker failed."); }
             }
             if (plateMaterial === 'CLOUD') {
                if (type === 'FIRE') { setPlateStatus('INTACT'); setPlateMessage("Servers are redundant. Data safe."); }
                if (type === 'WATER') { setPlateStatus('INTACT'); setPlateMessage("Cloud is waterproof."); }
                if (type === 'HACKER') { setPlateStatus('HACKED'); setPlateMessage("Database breached. Funds stolen."); }
             }
             if (plateMaterial === 'STEEL') {
                if (type === 'FIRE') { setPlateStatus('INTACT'); setPlateMessage("Steel glows but survives. Words legible."); }
                if (type === 'WATER') { setPlateStatus('INTACT'); setPlateMessage("Steel does not rust. Words safe."); }
                if (type === 'HACKER') { setPlateStatus('INTACT'); setPlateMessage("Steel is offline. Hacker failed."); }
             }
          };

          return (
             <div className="w-full max-w-md mx-auto bg-slate-900 p-6 rounded-xl border-4 border-slate-700 shadow-hard text-white text-center">
                <h4 className="font-bold uppercase text-lg mb-4">Stress Test Laboratory</h4>
                
                {/* Material Selection */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                   <button onClick={() => { setPlateMaterial('PAPER'); setPlateStatus(null); }} className={`p-2 rounded border-2 ${plateMaterial === 'PAPER' ? 'bg-white text-black border-white' : 'border-slate-600 text-slate-400 hover:bg-slate-800'}`}>
                      <BookOpen className="mx-auto mb-1" size={20} />
                      <span className="text-[10px] font-bold uppercase block">Paper</span>
                   </button>
                   <button onClick={() => { setPlateMaterial('CLOUD'); setPlateStatus(null); }} className={`p-2 rounded border-2 ${plateMaterial === 'CLOUD' ? 'bg-blue-500 text-white border-blue-400' : 'border-slate-600 text-slate-400 hover:bg-slate-800'}`}>
                      <Cloud className="mx-auto mb-1" size={20} />
                      <span className="text-[10px] font-bold uppercase block">Cloud</span>
                   </button>
                   <button onClick={() => { setPlateMaterial('STEEL'); setPlateStatus(null); }} className={`p-2 rounded border-2 ${plateMaterial === 'STEEL' ? 'bg-slate-400 text-black border-slate-200' : 'border-slate-600 text-slate-400 hover:bg-slate-800'}`}>
                      <Shield className="mx-auto mb-1" size={20} />
                      <span className="text-[10px] font-bold uppercase block">Steel</span>
                   </button>
                </div>

                {/* Viewport */}
                <div className="bg-black h-40 rounded-xl border-2 border-slate-600 mb-6 flex items-center justify-center relative overflow-hidden">
                   {!plateMaterial && <p className="text-slate-600 text-xs font-bold uppercase">Select Material</p>}
                   
                   {plateMaterial === 'PAPER' && plateStatus !== 'DESTROYED' && <div className="w-20 h-24 bg-white text-black text-[8px] p-2 shadow-md">word1 word2...</div>}
                   {plateMaterial === 'CLOUD' && plateStatus !== 'HACKED' && <Cloud size={64} className="text-blue-500" />}
                   {plateMaterial === 'STEEL' && <div className="w-20 h-24 bg-slate-400 text-slate-800 text-[8px] p-2 border-2 border-slate-300 font-bold" style={{textShadow: '1px 1px 0 rgba(255,255,255,0.5)'}}>●●● ●●● ●●●</div>}

                   {plateStatus === 'DESTROYED' && <div className="absolute inset-0 flex items-center justify-center bg-black/80"><Flame size={48} className="text-red-500 animate-pulse" /></div>}
                   {plateStatus === 'HACKED' && <div className="absolute inset-0 flex items-center justify-center bg-green-900/90 font-mono text-green-500 font-bold text-xl">ACCESS GRANTED</div>}
                </div>
                
                {plateStatus && <p className={`text-xs font-bold mb-4 ${plateStatus === 'INTACT' ? 'text-green-400' : 'text-red-400'}`}>{plateMessage}</p>}

                {/* Attack Buttons */}
                <div className="grid grid-cols-3 gap-2">
                   <button onClick={() => attack('FIRE')} disabled={!plateMaterial} className="bg-red-900/50 border border-red-500 text-red-500 p-2 rounded hover:bg-red-900 disabled:opacity-50 transition-colors">
                      <Flame className="mx-auto" size={20} />
                   </button>
                   <button onClick={() => attack('WATER')} disabled={!plateMaterial} className="bg-blue-900/50 border border-blue-500 text-blue-500 p-2 rounded hover:bg-blue-900 disabled:opacity-50 transition-colors">
                      <CloudOff className="mx-auto" size={20} />
                   </button>
                   <button onClick={() => attack('HACKER')} disabled={!plateMaterial} className="bg-green-900/50 border border-green-500 text-green-500 p-2 rounded hover:bg-green-900 disabled:opacity-50 transition-colors">
                      <Hammer className="mx-auto" size={20} />
                   </button>
                </div>
             </div>
          );
        }

        // --- BITESCROW (P2P Visualizer) ---
        if (tool.name === "BitEscrow") {
           return (
              <div className="w-full max-w-md mx-auto bg-white p-6 rounded-xl border-2 border-black shadow-hard relative">
                 <h4 className="text-center font-bold uppercase text-lg mb-6">Multisig Escrow Process</h4>
                 
                 <div className="flex justify-between items-center mb-8 relative">
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -z-10"></div>
                    <div className={`absolute top-1/2 left-0 h-1 bg-[#F7931A] -z-10 transition-all duration-500`} style={{width: `${escrowStep * 33}%`}}></div>
                    
                    {[{i:0, l:'Lock'}, {i:1, l:'Fiat'}, {i:2, l:'Release'}, {i:3, l:'Done'}].map((s) => (
                       <div key={s.i} className={`w-8 h-8 rounded-full flex items-center justify-center border-2 font-bold text-xs transition-colors ${escrowStep >= s.i ? 'bg-[#F7931A] border-[#F7931A] text-white' : 'bg-white border-slate-300 text-slate-300'}`}>
                          {s.i + 1}
                       </div>
                    ))}
                 </div>

                 <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center min-h-[160px] flex flex-col justify-center items-center">
                    {escrowStep === 0 && (
                       <div className="animate-in zoom-in">
                          <Lock size={48} className="text-slate-400 mx-auto mb-4" />
                          <p className="font-bold text-slate-700 mb-4">Seller deposits BTC into Escrow.</p>
                          <button onClick={() => setEscrowStep(1)} className="bg-black text-white px-4 py-2 rounded-full text-xs font-bold uppercase">Confirm Lock</button>
                       </div>
                    )}
                    {escrowStep === 1 && (
                       <div className="animate-in zoom-in">
                          <Banknote size={48} className="text-green-500 mx-auto mb-4" />
                          <p className="font-bold text-slate-700 mb-4">Buyer sends Fiat to Seller.</p>
                          <button onClick={() => setEscrowStep(2)} className="bg-green-600 text-white px-4 py-2 rounded-full text-xs font-bold uppercase">Send Fiat</button>
                       </div>
                    )}
                    {escrowStep === 2 && (
                       <div className="animate-in zoom-in">
                          <Key size={48} className="text-blue-500 mx-auto mb-4" />
                          <p className="font-bold text-slate-700 mb-4">Seller releases keys to Buyer.</p>
                          <button onClick={() => setEscrowStep(3)} className="bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-bold uppercase">Claim BTC</button>
                       </div>
                    )}
                    {escrowStep === 3 && (
                       <div className="animate-in zoom-in">
                          <CheckCircle2 size={48} className="text-[#F7931A] mx-auto mb-4" />
                          <p className="font-bold text-slate-700 mb-4">Trade Complete. No KYC.</p>
                          <button onClick={() => setEscrowStep(0)} className="text-slate-400 text-xs font-bold uppercase underline">Reset</button>
                       </div>
                    )}
                 </div>
              </div>
           );
        }

        // --- BITSPEDN (Velocity Visualizer) ---
        if (tool.name === "BitSpedn") {
           const buyCoffee = () => {
             setSpednStep(1); // Sending
             setTimeout(() => {
               setMerchantRevenue(prev => prev + 300);
               setSpednStep(2); // Received
             }, 1000);
             setTimeout(() => {
               if (merchantRevenue >= 900) { // Every few coffees, merchant pays supplier
                  setSpednStep(3); // Pay Supplier
                  setTimeout(() => {
                     setSpednStep(0); // Reset
                     setMerchantRevenue(0);
                  }, 1500);
               } else {
                  setSpednStep(0); // Reset
               }
             }, 2000);
           }

           return (
              <div className="w-full max-w-md mx-auto bg-white p-6 rounded-xl border-2 border-black shadow-hard text-center">
                 <div className="flex justify-between items-center mb-8 px-4 relative h-32">
                    <div className="flex flex-col items-center relative z-10">
                       <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center border-2 border-slate-400">
                          <Users size={24} />
                       </div>
                       <span className="text-[10px] font-bold uppercase mt-2">You</span>
                    </div>

                    {/* Particle Animation */}
                    {spednStep === 1 && <div className="absolute left-[15%] top-[30%] w-4 h-4 bg-[#F7931A] rounded-full animate-ping z-20"></div>}
                    {spednStep === 1 && <div className="absolute left-[15%] top-[30%] w-4 h-4 bg-[#F7931A] rounded-full transition-all duration-1000 ease-in-out z-20" style={{left: '50%'}}></div>}

                    <div className="flex flex-col items-center relative z-10">
                       <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 transition-colors ${merchantRevenue > 0 ? 'bg-[#F7931A] border-black text-white' : 'bg-slate-100 border-slate-300 text-slate-400'}`}>
                          <ShoppingBag size={32} />
                       </div>
                       <span className="text-[10px] font-bold uppercase mt-2">Merchant</span>
                       <span className="text-[10px] font-mono font-bold text-green-600">+{merchantRevenue}</span>
                    </div>

                     {/* Particle Animation 2 */}
                    {spednStep === 3 && <div className="absolute left-[50%] top-[30%] w-4 h-4 bg-green-500 rounded-full transition-all duration-1000 ease-in-out z-20" style={{left: '85%'}}></div>}

                    <div className="flex flex-col items-center relative z-10">
                       <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center border-2 border-slate-400">
                          <Truck size={24} />
                       </div>
                       <span className="text-[10px] font-bold uppercase mt-2">Supplier</span>
                    </div>
                 </div>
                 
                 <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-4">
                    <p className="text-xs font-bold text-slate-500 mb-2">
                       {spednStep === 0 && "Ready to spend."}
                       {spednStep === 1 && "Sending transaction..."}
                       {spednStep === 2 && "Merchant received funds!"}
                       {spednStep === 3 && "Merchant paying supplier (Circular Economy)"}
                    </p>
                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                       <div className="bg-green-500 h-full transition-all duration-500" style={{width: `${Math.min(100, (merchantRevenue / 900) * 100)}%`}}></div>
                    </div>
                 </div>

                 <button onClick={buyCoffee} disabled={spednStep !== 0} className="bg-black text-white px-6 py-2 rounded-full font-bold uppercase text-sm hover:bg-slate-800 disabled:opacity-50 transition-colors">
                    Buy Coffee (300 Sats)
                 </button>
              </div>
           );
        }

        // --- BITATM (Simulator) ---
        if (tool.name === "BitATM") {
           return (
              <div className="w-full max-w-md mx-auto bg-slate-900 p-4 rounded-2xl border-4 border-slate-600 shadow-hard relative text-white">
                 <div className="bg-black rounded-lg p-2 mb-4 border-2 border-slate-700 min-h-[250px] flex flex-col relative overflow-hidden">
                    <div className="flex justify-between items-center mb-4 border-b border-slate-800 pb-2">
                       <span className="text-xs font-bold uppercase text-[#F7931A]">Bankless ATM</span>
                       <span className="text-[10px] text-slate-500">{new Date().toLocaleTimeString()}</span>
                    </div>

                    <div className="flex-grow flex flex-col items-center justify-center text-center">
                       {atmStep === 0 && (
                          <div className="animate-in zoom-in">
                             <h4 className="text-xl font-bold uppercase mb-4">Welcome</h4>
                             <p className="text-xs text-slate-400 mb-6">Buy/Sell Bitcoin Instantly</p>
                             <div className="space-y-2 w-full max-w-[200px]">
                                <button onClick={() => setAtmStep(1)} className="w-full bg-green-600 hover:bg-green-500 text-white py-2 rounded font-bold uppercase text-xs">Buy Bitcoin</button>
                                <button className="w-full bg-red-600 hover:bg-red-500 text-white py-2 rounded font-bold uppercase text-xs opacity-50 cursor-not-allowed">Sell Bitcoin (Maintainance)</button>
                             </div>
                          </div>
                       )}

                       {atmStep === 1 && (
                          <div className="animate-in slide-in-from-right w-full">
                             <h4 className="text-sm font-bold uppercase mb-2">Select Amount</h4>
                             <div className="grid grid-cols-2 gap-2">
                                <button onClick={() => setAtmStep(2)} className="bg-slate-800 hover:bg-slate-700 p-2 rounded border border-slate-600 text-xs">1000 KES</button>
                                <button onClick={() => setAtmStep(2)} className="bg-slate-800 hover:bg-slate-700 p-2 rounded border border-slate-600 text-xs">5000 KES</button>
                                <button onClick={() => setAtmStep(2)} className="bg-slate-800 hover:bg-slate-700 p-2 rounded border border-slate-600 text-xs">10,000 KES</button>
                                <button onClick={() => setAtmStep(2)} className="bg-slate-800 hover:bg-slate-700 p-2 rounded border border-slate-600 text-xs">Custom</button>
                             </div>
                             <button onClick={() => setAtmStep(0)} className="mt-4 text-xs text-red-500 underline">Cancel</button>
                          </div>
                       )}

                       {atmStep === 2 && (
                          <div className="animate-in zoom-in">
                             <h4 className="text-sm font-bold uppercase mb-4">Scan Wallet QR</h4>
                             <div className="w-32 h-32 border-2 border-dashed border-[#F7931A] rounded-lg mx-auto mb-4 flex items-center justify-center bg-black/50">
                                <QrCode className="text-slate-500 animate-pulse" size={48} />
                             </div>
                             <p className="text-[10px] text-slate-400 mb-4">Waiting for camera...</p>
                             <button onClick={() => setAtmStep(3)} className="bg-[#F7931A] text-black px-4 py-1 rounded font-bold text-xs">Simulate Scan</button>
                          </div>
                       )}

                       {atmStep === 3 && (
                          <div className="animate-in zoom-in w-full">
                             <h4 className="text-sm font-bold uppercase mb-2">Insert Cash</h4>
                             <div className="bg-slate-800 p-3 rounded mb-4 text-right font-mono text-xl text-green-400 border border-slate-600">
                                0 KES
                             </div>
                             <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden relative">
                                <div className="absolute inset-0 bg-green-500 w-1/2 animate-pulse"></div>
                             </div>
                             <p className="text-[10px] text-slate-400 mt-2 mb-4">Please insert notes one by one.</p>
                             <button onClick={() => setAtmStep(4)} className="bg-green-600 text-white px-4 py-2 rounded font-bold text-xs w-full">Insert 1000 KES</button>
                          </div>
                       )}

                       {atmStep === 4 && (
                          <div className="animate-in zoom-in">
                             <CheckCircle2 size={48} className="text-green-500 mb-2 mx-auto" />
                             <h4 className="text-lg font-bold uppercase text-green-500 mb-1">Success!</h4>
                             <p className="text-xs text-slate-300 mb-4">Bitcoin sent to wallet.</p>
                             <div className="bg-white text-black p-2 rounded text-[10px] font-mono text-left mb-4 w-full">
                                <p>RECEIPT #9923</p>
                                <p>AMT: 1000 KES</p>
                                <p>BTC: 0.00010500</p>
                                <p>ID: 8f3a...29b</p>
                             </div>
                             <button onClick={() => setAtmStep(0)} className="bg-slate-700 text-white px-4 py-2 rounded font-bold text-xs">Done</button>
                          </div>
                       )}
                    </div>
                 </div>

                 {/* Physical ATM details */}
                 <div className="bg-slate-800 p-2 rounded-lg text-center">
                    <div className="w-16 h-1 bg-black rounded-full mx-auto mb-1"></div>
                    <span className="text-[8px] font-bold uppercase text-slate-500">Cash Dispenser</span>
                 </div>
              </div>
           );
        }

        // --- BITTRACE (Simulator) ---
        if (tool.name === "BitTrace") {
           return (
              <div className="w-full max-w-md mx-auto bg-slate-900 p-6 rounded-xl border-4 border-black shadow-hard relative overflow-hidden text-white">
                 <h4 className="text-center font-bold uppercase text-lg mb-6 text-slate-300">Public Ledger Simulator</h4>
                 
                 <div className="h-48 border-2 border-slate-700 rounded-xl bg-black relative mb-4 p-4 overflow-hidden">
                    {/* Background Data Stream */}
                    <div className="absolute inset-0 opacity-20 font-mono text-[8px] text-green-500 p-2 overflow-hidden pointer-events-none">
                       {Array(200).fill(0).map((_, i) => <span key={i}>{Math.random() > 0.5 ? '1' : '0'} </span>)}
                    </div>

                    <div className="relative z-10 flex justify-between items-center h-full">
                       {/* Criminal */}
                       <div className={`flex flex-col items-center transition-all duration-500 ${traceStep > 0 ? 'opacity-100' : 'opacity-50'}`}>
                          <div className="bg-slate-800 p-2 rounded-full border border-red-500">
                             <Users size={24} className="text-red-500" />
                          </div>
                          <span className="text-[8px] uppercase mt-1 text-red-500 font-bold">Criminal</span>
                       </div>

                       {/* The Path */}
                       <div className="flex-grow mx-4 h-1 bg-slate-800 relative">
                          <div className={`h-full bg-red-500 transition-all duration-1000 ease-linear`} style={{width: traceStep >= 1 ? '100%' : '0%'}}></div>
                          
                          {/* Mixer Node */}
                          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-slate-800 rounded-full border border-slate-600 flex items-center justify-center transition-all duration-500 ${traceStep >= 1 ? 'scale-110 border-white' : ''}`}>
                             <RefreshCw size={12} className={traceStep >= 1 ? 'animate-spin' : ''} />
                          </div>
                       </div>

                       {/* Exchange/Police */}
                       <div className={`flex flex-col items-center transition-all duration-500 ${traceStep >= 2 ? 'opacity-100' : 'opacity-50'}`}>
                          <div className="bg-slate-800 p-2 rounded-full border border-blue-500">
                             <Siren size={24} className="text-blue-500" />
                          </div>
                          <span className="text-[8px] uppercase mt-1 text-blue-500 font-bold">Police</span>
                       </div>
                    </div>

                    {/* Overlay Messages */}
                    {traceStep === 1 && (
                       <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-xs font-mono text-white bg-black/80 px-2 rounded border border-slate-600">
                          Tx ID: 8f3a... recorded
                       </div>
                    )}
                    {traceStep === 3 && (
                       <div className="absolute inset-0 bg-red-900/80 flex items-center justify-center animate-in zoom-in">
                          <div className="border-4 border-white p-4 rounded-xl transform -rotate-12">
                             <h3 className="text-4xl font-bold uppercase text-white tracking-widest">BUSTED</h3>
                          </div>
                       </div>
                    )}
                 </div>

                 <div className="text-center">
                    {traceStep === 0 && (
                       <button onClick={() => setTraceStep(1)} className="bg-red-600 text-white px-6 py-2 rounded-full font-bold uppercase text-sm hover:bg-red-700">
                          Send "Dirty" Funds
                       </button>
                    )}
                    {traceStep === 1 && (
                       <button onClick={() => { setTraceStep(2); setTimeout(() => setTraceStep(3), 1500); }} className="bg-slate-700 text-white px-6 py-2 rounded-full font-bold uppercase text-sm hover:bg-slate-600">
                          Try to Hide
                       </button>
                    )}
                    {traceStep === 3 && (
                       <button onClick={() => setTraceStep(0)} className="bg-white text-black px-6 py-2 rounded-full font-bold uppercase text-sm hover:bg-slate-200">
                          Reset Simulation
                       </button>
                    )}
                    <p className="mt-4 text-xs font-bold text-slate-400">
                       {traceStep === 0 ? "Criminals think Bitcoin is anonymous." : 
                        traceStep === 1 ? "Transaction is public forever." :
                        traceStep === 2 ? "Police use software to trace hops." :
                        "Public Ledger = No Hiding Place."}
                    </p>
                 </div>
              </div>
           );
        }

        // --- BITHYPER (Simulator) ---
        if (tool.name === "BitHyper") {
           const advance = () => {
              setHyperYear(prev => prev + 1);
              setHyperFiatValue(prev => prev * 0.5); // 50% inflation
              setHyperBtcValue(prev => prev * 1.5); // 50% gain
           };
           
           return (
              <div className="w-full max-w-md mx-auto bg-slate-900 p-6 rounded-xl border-4 border-black shadow-hard text-white">
                 <h4 className="text-center font-bold uppercase text-lg mb-6">Currency Collapse Simulator</h4>
                 
                 <div className="bg-black border border-slate-700 rounded-xl p-4 mb-6">
                    <div className="flex justify-between items-center mb-4">
                       <span className="text-xs font-bold uppercase text-slate-500">Year {2024 + hyperYear}</span>
                       {hyperFiatValue < 1 && <span className="text-xs font-bold uppercase text-red-500 animate-pulse">Hyperinflation!</span>}
                    </div>

                    <div className="space-y-4">
                       <div className="relative h-8 bg-slate-800 rounded-full overflow-hidden">
                          <div className="absolute top-0 left-0 h-full bg-red-500 transition-all duration-500" style={{width: `${hyperFiatValue}%`}}></div>
                          <div className="absolute inset-0 flex items-center justify-between px-4 text-[10px] font-bold uppercase">
                             <span>Fiat Power</span>
                             <span>{hyperFiatValue.toFixed(1)}%</span>
                          </div>
                       </div>
                       <div className="relative h-8 bg-slate-800 rounded-full overflow-hidden">
                          <div className="absolute top-0 left-0 h-full bg-[#F7931A] transition-all duration-500" style={{width: `${Math.min(100, hyperBtcValue)}%`}}></div>
                          <div className="absolute inset-0 flex items-center justify-between px-4 text-[10px] font-bold uppercase">
                             <span>Bitcoin Power</span>
                             <span>{hyperBtcValue.toFixed(1)}%</span>
                          </div>
                       </div>
                    </div>
                 </div>

                 <div className="text-center">
                    {hyperFiatValue > 1 ? (
                       <button onClick={advance} className="bg-red-600 text-white px-8 py-3 rounded-full font-bold uppercase hover:bg-red-700 border-2 border-white shadow-lg">
                          Print More Money
                       </button>
                    ) : (
                       <div className="animate-in zoom-in">
                          <p className="text-[#F7931A] text-xl font-bold uppercase mb-4">Fiat has died.</p>
                          <button onClick={() => {setHyperYear(0); setHyperFiatValue(100); setHyperBtcValue(100);}} className="text-slate-400 text-xs font-bold uppercase underline">
                             Reset Simulation
                          </button>
                       </div>
                    )}
                 </div>
              </div>
           );
        }

        // --- BITINVOICE (Lightning Simulator) ---
        if (tool.name === "BitInvoice") {
           const generate = () => {
              setInvoiceString(`lnbc${invoiceAmount}0n1...` + Math.random().toString(36).substring(7));
              setInvoiceStatus('PENDING');
           };
           const pay = () => {
              setInvoiceStatus('PAID');
              triggerConfetti();
           };

           return (
              <div className="w-full max-w-md mx-auto bg-white p-6 rounded-xl border-2 border-black shadow-hard text-center">
                 {!invoiceString ? (
                    <div className="animate-in zoom-in">
                       <label className="text-xs font-bold uppercase text-slate-400 block mb-2">Amount (Sats)</label>
                       <input 
                         type="number" 
                         value={invoiceAmount} 
                         onChange={(e) => setInvoiceAmount(Number(e.target.value))} 
                         className="w-full text-3xl font-bold text-center border-b-2 border-slate-200 focus:border-[#F7931A] outline-none py-2 mb-6"
                       />
                       <button onClick={generate} className="bg-[#F7931A] text-white px-6 py-3 rounded-xl font-bold uppercase w-full hover:bg-black transition-colors">
                          Generate Invoice
                       </button>
                    </div>
                 ) : (
                    <div className="animate-in flip-in-y">
                       <div className="bg-white p-4 rounded-xl border-4 border-black inline-block mb-4 relative">
                          {invoiceStatus === 'PAID' && (
                             <div className="absolute inset-0 flex items-center justify-center bg-white/90 z-10 animate-in zoom-in">
                                <CheckCircle2 size={64} className="text-green-500" />
                             </div>
                          )}
                          <QrCode size={160} />
                       </div>
                       <p className="font-mono text-[10px] text-slate-400 break-all px-4 mb-6">{invoiceString}</p>
                       
                       {invoiceStatus === 'PENDING' ? (
                          <button onClick={pay} className="bg-black text-white px-6 py-3 rounded-xl font-bold uppercase w-full hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                             <Zap size={16} className="text-yellow-400" /> Simulate Payment
                          </button>
                       ) : (
                          <button onClick={() => setInvoiceString('')} className="bg-slate-100 text-black px-6 py-3 rounded-xl font-bold uppercase w-full hover:bg-slate-200 transition-colors">
                             Create New
                          </button>
                       )}
                    </div>
                 )}
              </div>
           );
        }

        // --- BITPOS (Simulator) ---
        if (tool.name === "BitPOS") {
           const addDigit = (d: string) => {
              if (posAmount.length < 8) setPosAmount(prev => prev + d);
           }
           const clear = () => setPosAmount('');
           const charge = () => setPosState('QR');
           const confirm = () => {
             setPosState('PAID');
             triggerConfetti();
             setTimeout(() => {
               setPosState('ENTER');
               setPosAmount('');
             }, 3000);
           }

           return (
             <div className="w-full max-w-[300px] mx-auto bg-black p-4 rounded-3xl border-4 border-slate-800 shadow-hard relative overflow-hidden">
                {/* Screen */}
                <div className="bg-white rounded-xl p-4 mb-4 min-h-[120px] flex flex-col items-center justify-center relative text-center">
                   {posState === 'ENTER' && (
                      <>
                        <span className="text-xs font-bold text-slate-400 uppercase mb-1">Total Due</span>
                        <span className="text-3xl font-bold">{posAmount ? parseInt(posAmount).toLocaleString() : '0'}</span>
                        <span className="text-xs font-bold text-slate-300 uppercase mt-1">KES</span>
                      </>
                   )}
                   {posState === 'QR' && (
                      <div className="animate-in zoom-in cursor-pointer" onClick={confirm}>
                         <QrCode size={100} />
                         <p className="text-[10px] font-bold mt-2 animate-pulse">Waiting for payment...</p>
                      </div>
                   )}
                   {posState === 'PAID' && (
                      <div className="animate-in zoom-in">
                         <CheckCircle2 size={64} className="text-green-500 mb-2" />
                         <span className="text-xl font-bold uppercase text-green-600">PAID</span>
                      </div>
                   )}
                </div>

                {/* Keypad */}
                <div className="grid grid-cols-3 gap-2">
                   {[1,2,3,4,5,6,7,8,9].map(n => (
                      <button key={n} onClick={() => addDigit(n.toString())} className="bg-slate-800 text-white p-3 rounded-lg font-bold text-lg hover:bg-slate-700 active:bg-slate-600">
                         {n}
                      </button>
                   ))}
                   <button onClick={clear} className="bg-red-900 text-white p-3 rounded-lg font-bold text-sm hover:bg-red-800">C</button>
                   <button onClick={() => addDigit('0')} className="bg-slate-800 text-white p-3 rounded-lg font-bold text-lg hover:bg-slate-700">0</button>
                   <button onClick={charge} className="bg-green-600 text-white p-3 rounded-lg font-bold text-sm hover:bg-green-500">OK</button>
                </div>
             </div>
           );
        }

        // --- BITSTAFF (Simulator) ---
        if (tool.name === "BitStaff") {
           const scenarios = [
             { type: 'FAKE', img: 'screenshot', desc: "Customer shows you a screenshot of a 'Sent' transaction on their phone." },
             { type: 'REAL', img: 'app', desc: "Your own POS tablet screen turns green and says 'Paid'." },
             { type: 'FAKE', img: 'pending', desc: "Customer says 'It's sending, just slow internet' and tries to leave with the goods." }
           ];
           
           const current = scenarios[staffScenario];

           const check = (decision: 'ACCEPT' | 'REJECT') => {
              const isCorrect = (current.type === 'REAL' && decision === 'ACCEPT') || (current.type === 'FAKE' && decision === 'REJECT');
              setStaffResult(isCorrect ? 'CORRECT' : 'WRONG');
              if (isCorrect) triggerConfetti();
              
              setTimeout(() => {
                 setStaffResult('NONE');
                 setStaffScenario(prev => (prev + 1) % scenarios.length);
              }, 2000);
           };

           return (
              <div className="w-full max-w-md mx-auto bg-slate-50 p-6 rounded-xl border-2 border-black shadow-hard text-center">
                 <div className="bg-white p-6 rounded-xl border border-slate-200 mb-6 min-h-[180px] flex flex-col items-center justify-center relative overflow-hidden">
                    {staffResult === 'NONE' ? (
                       <>
                         {current.img === 'screenshot' && <Smartphone size={64} className="text-slate-300 mb-4" />}
                         {current.img === 'app' && <CheckCircle2 size={64} className="text-green-500 mb-4" />}
                         {current.img === 'pending' && <Clock size={64} className="text-yellow-500 mb-4" />}
                         <p className="font-medium text-slate-800">{current.desc}</p>
                       </>
                    ) : (
                       <div className={`text-2xl font-bold uppercase ${staffResult === 'CORRECT' ? 'text-green-600' : 'text-red-600'} animate-in zoom-in`}>
                          {staffResult === 'CORRECT' ? 'Good Job!' : 'You got Scammed!'}
                       </div>
                    )}
                 </div>

                 <div className="grid grid-cols-2 gap-4">
                    <button onClick={() => check('REJECT')} disabled={staffResult !== 'NONE'} className="bg-red-100 text-red-800 font-bold uppercase py-3 rounded-xl border-2 border-red-200 hover:bg-red-200 hover:border-red-300 transition-colors">
                       Reject
                    </button>
                    <button onClick={() => check('ACCEPT')} disabled={staffResult !== 'NONE'} className="bg-green-100 text-green-800 font-bold uppercase py-3 rounded-xl border-2 border-green-200 hover:bg-green-200 hover:border-green-300 transition-colors">
                       Accept
                    </button>
                 </div>
              </div>
           );
        }

        // --- BITCITADEL (Simulator) ---
        if (tool.name === "BitCitadel") {
           const action = (type: 'MEETUP' | 'MARKET' | 'CLASS') => {
              let cost = 0;
              let mem = 0;
              let r = 0;
              let log = "";

              if (type === 'MEETUP') { cost = 10000; mem = 5; r = 2; log = "Hosted Meetup. +5 Members."; }
              if (type === 'MARKET') { cost = -5000; mem = 2; r = 5; log = "P2P Market Day. +2 Members. +5000 Sats."; }
              if (type === 'CLASS') { cost = 5000; mem = 0; r = 10; log = "Education Class. +10 Reputation."; }

              if (citadelResources.sats < cost) {
                 setCitadelLog(prev => ["Not enough sats!", ...prev]);
                 return;
              }

              setCitadelResources(prev => ({
                 sats: prev.sats - cost,
                 members: prev.members + mem,
                 rep: prev.rep + r
              }));
              setCitadelLog(prev => [log, ...prev].slice(0, 3));
           };

           return (
              <div className="w-full max-w-md mx-auto bg-slate-900 p-6 rounded-xl border-4 border-black shadow-hard text-white">
                 <div className="flex justify-between items-center mb-6 bg-black p-4 rounded-xl border border-slate-700">
                    <div className="text-center">
                       <span className="text-[10px] font-bold uppercase text-slate-500 block">Sats</span>
                       <span className="text-lg font-mono text-[#F7931A]">{citadelResources.sats.toLocaleString()}</span>
                    </div>
                    <div className="text-center">
                       <span className="text-[10px] font-bold uppercase text-slate-500 block">Members</span>
                       <span className="text-lg font-mono text-white">{citadelResources.members}</span>
                    </div>
                    <div className="text-center">
                       <span className="text-[10px] font-bold uppercase text-slate-500 block">Rep</span>
                       <span className="text-lg font-mono text-blue-400">{citadelResources.rep}</span>
                    </div>
                 </div>

                 <div className="grid grid-cols-1 gap-2 mb-6">
                    <button onClick={() => action('MEETUP')} className="bg-slate-800 hover:bg-slate-700 p-3 rounded-lg border border-slate-600 flex justify-between items-center">
                       <span className="font-bold uppercase text-xs">Host Meetup</span>
                       <span className="text-[10px] text-red-400 font-mono">-10k Sats</span>
                    </button>
                    <button onClick={() => action('MARKET')} className="bg-slate-800 hover:bg-slate-700 p-3 rounded-lg border border-slate-600 flex justify-between items-center">
                       <span className="font-bold uppercase text-xs">P2P Market</span>
                       <span className="text-[10px] text-green-400 font-mono">+5k Sats</span>
                    </button>
                    <button onClick={() => action('CLASS')} className="bg-slate-800 hover:bg-slate-700 p-3 rounded-lg border border-slate-600 flex justify-between items-center">
                       <span className="font-bold uppercase text-xs">Teach Class</span>
                       <span className="text-[10px] text-red-400 font-mono">-5k Sats</span>
                    </button>
                 </div>

                 <div className="bg-black p-3 rounded-lg h-24 overflow-hidden text-xs font-mono text-green-500 border border-slate-800">
                    {citadelLog.map((l, i) => (
                       <div key={i} className="mb-1">{l}</div>
                    ))}
                 </div>
              </div>
           );
        }

        return (
           <div className="w-full max-w-md mx-auto bg-slate-100 p-12 rounded-xl border-2 border-dashed border-slate-400 text-center">
              <Play size={48} className="mx-auto text-slate-300 mb-4" />
              <p className="text-slate-500 font-bold uppercase">Interactive Simulator Loaded</p>
           </div>
        );

      default:
        return null;
    }
  };

  if (!query || !item) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-4 bg-slate-900/95 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white border-4 border-black rounded-3xl max-w-3xl w-full shadow-glow relative animate-in zoom-in-95 duration-300 flex flex-col h-[90vh] md:h-[85vh] overflow-hidden">
        
        {/* Header */}
        <div className="p-4 md:p-6 border-b-4 border-black bg-[#F7931A] flex justify-between items-center shrink-0 z-10">
          <div className="flex items-center gap-3 text-white overflow-hidden">
             {mode === 'LEARN' && <BookOpen size={28} className="shrink-0" />}
             {mode === 'TOOL' && <PenTool size={28} className="shrink-0" />}
             {mode === 'QUIZ' && <Brain size={28} className="shrink-0" />}
             {mode === 'SUCCESS' && <Trophy size={28} className="shrink-0" />}
             <div className="overflow-hidden">
               <span className="text-[10px] font-bold uppercase text-black/60 block leading-none mb-1">
                 {item.id === 'atm-guide' ? 'User Manual' : `Chapter ${item.id}`}
               </span>
               <BlankaText text={item.title} as="h2" className="text-lg md:text-2xl leading-none text-white truncate" />
             </div>
          </div>
          <button 
            onClick={close}
            className="bg-black text-white p-2 rounded-full hover:bg-slate-800 transition-colors border-2 border-white shrink-0 shadow-hard-sm active:shadow-none active:translate-y-1"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div 
          ref={scrollRef}
          className="overflow-y-auto p-6 md:p-10 bg-white flex-grow custom-scrollbar relative"
        >
           
           {/* --- MODE: LEARN --- */}
           {mode === 'LEARN' && (
             <div className="max-w-2xl mx-auto animate-in slide-in-from-right-4 duration-300">
               {/* Long Form Content */}
               <div 
                  className="prose prose-slate prose-lg prose-headings:font-display prose-headings:text-black prose-p:font-sans prose-strong:text-[#F7931A] prose-strong:font-bold mb-12"
                  dangerouslySetInnerHTML={{ __html: item.content }}
               />

               <hr className="border-2 border-slate-100 my-8" />

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-black">
                    <p className="text-xs font-bold uppercase text-slate-400 mb-2">Satoshi Nakamoto</p>
                    <p className="font-bold font-display italic text-slate-800 text-lg">"{item.facts.satoshi}"</p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-[#F7931A]">
                    <p className="text-xs font-bold uppercase text-slate-400 mb-2">{item.facts.bitcoiner.name}</p>
                    <p className="font-bold font-display italic text-slate-800 text-lg">"{item.facts.bitcoiner.quote}"</p>
                  </div>
               </div>
             </div>
           )}

           {/* --- MODE: TOOL --- */}
           {mode === 'TOOL' && (
             <div className="h-full flex flex-col animate-in zoom-in duration-300">
               <div className="text-center mb-8">
                 <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black text-white mb-4 shadow-hard border-2 border-white">
                   {item.tool.type === 'CALCULATOR' && <Calculator size={32} />}
                   {item.tool.type === 'HASH' && <Hash size={32} />}
                   {item.tool.type === 'GENERATOR' && <Lock size={32} />}
                   {item.tool.type === 'CONVERTER' && <ArrowRightLeft size={32} />}
                   {item.tool.type === 'SIMULATOR' && item.tool.name === 'BitPOS' && <Calculator size={32} />}
                   {item.tool.type === 'SIMULATOR' && item.tool.name === 'BitStaff' && <ShieldAlert size={32} />}
                   {item.tool.type === 'SIMULATOR' && item.tool.name === 'BitCitadel' && <Building size={32} />}
                   {item.tool.type === 'SIMULATOR' && item.tool.name === 'BitTrace' && <Siren size={32} />}
                   {item.tool.type === 'SIMULATOR' && item.tool.name === 'BitHyper' && <Activity size={32} />}
                   {item.tool.type === 'SIMULATOR' && item.tool.name === 'BitATM' && <Banknote size={32} />}
                   {item.tool.type === 'VISUALIZER' && item.tool.name === 'BitClock' && <Clock size={32} />}
                   {item.tool.type === 'VISUALIZER' && item.tool.name === 'BitMap' && <Globe size={32} />}
                   {item.tool.type === 'VISUALIZER' && item.tool.name === 'BitMatch' && <Smartphone size={32} />}
                   {item.tool.type === 'VISUALIZER' && item.tool.name === 'BitPlate' && <Flame size={32} />}
                   {item.tool.type === 'VISUALIZER' && item.tool.name === 'BitEscrow' && <Users size={32} />}
                   {item.tool.type === 'VISUALIZER' && item.tool.name === 'BitSpedn' && <ShoppingBag size={32} />}
                   {item.tool.type === 'VISUALIZER' && item.tool.name === 'BitLoop' && <RefreshCw size={32} />}
                   {item.tool.type === 'VISUALIZER' && item.tool.name === 'BitZoom' && <TrendingUp size={32} />}
                   {item.tool.type === 'VISUALIZER' && item.tool.name === 'BitEnergy' && <Zap size={32} />}
                   {item.tool.type === 'VISUALIZER' && item.tool.name === 'BitPill' && <Network size={32} />}
                   {item.tool.type === 'SIMULATOR' && item.tool.name === 'BitInvoice' && <Zap size={32} />}
                   {item.tool.type === 'CHECKLIST' && item.tool.name === 'BitSupply' && <CheckCircle2 size={32} />}
                   {item.tool.type === 'CHECKLIST' && item.tool.name === 'BitInheritance' && <Skull size={32} />}
                   {(item.tool.type !== 'CALCULATOR' && item.tool.type !== 'HASH' && item.tool.type !== 'GENERATOR' && item.tool.type !== 'CONVERTER' && item.tool.type !== 'SIMULATOR' && item.tool.type !== 'CHECKLIST' && !(item.tool.type === 'VISUALIZER')) && <PenTool size={32} />}
                 </div>
                 <h3 className="text-3xl font-bold uppercase mb-2">{item.tool.name}</h3>
                 <p className="text-slate-600 font-medium max-w-md mx-auto">{item.tool.description}</p>
               </div>

               {/* Dynamic Tool Widget */}
               <div className="flex-grow flex items-center justify-center mb-8">
                 {renderToolWidget(item.tool)}
               </div>

               {/* Troubleshooting */}
               <div className="max-w-md mx-auto w-full bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                 <div className="flex items-center gap-2 mb-2 text-yellow-800">
                    <AlertCircle size={16} />
                    <h4 className="font-bold uppercase text-xs">How to use</h4>
                 </div>
                 <ul className="list-disc list-inside text-xs font-bold text-yellow-700/80 space-y-1">
                   {item.tool.troubleshoot.map((step, i) => (
                     <li key={i}>{step}</li>
                   ))}
                 </ul>
               </div>
             </div>
           )}

           {/* --- MODE: QUIZ --- */}
           {mode === 'QUIZ' && (
             <div className="flex flex-col h-full justify-center max-w-xl mx-auto animate-in fade-in duration-500">
               <div className="mb-8 text-center">
                 <div className="inline-block bg-black text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-hard-sm">
                    Question {currentQIndex + 1} / {item.quiz.length}
                 </div>
                 <h3 className="text-2xl md:text-3xl font-bold leading-tight text-slate-900">
                   {item.quiz[currentQIndex].question}
                 </h3>
               </div>

               <div className={`space-y-4 ${wrongShake ? 'animate-shake' : ''}`}>
                 {shuffledOptions.map((opt, idx) => (
                   <button
                     key={idx}
                     onClick={() => handleAnswer(opt)}
                     className="w-full p-5 rounded-xl border-4 border-slate-200 bg-white text-lg font-bold text-left hover:border-[#F7931A] hover:bg-orange-50 hover:shadow-hard-sm hover:-translate-y-1 active:translate-y-0 active:shadow-none transition-all flex items-center justify-between group"
                   >
                     {opt}
                     <div className="w-6 h-6 rounded-full border-2 border-slate-300 group-hover:border-[#F7931A] flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-[#F7931A] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                     </div>
                   </button>
                 ))}
               </div>
             </div>
           )}

           {/* --- MODE: SUCCESS --- */}
           {mode === 'SUCCESS' && (
             <div className="text-center flex flex-col items-center justify-center py-8 animate-in zoom-in relative">
                <div className="w-32 h-32 bg-green-500 rounded-full flex items-center justify-center border-[6px] border-black shadow-hard mb-6 animate-bounce">
                  <Trophy className="text-white" size={64} />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold uppercase mb-2 font-display">Certified!</h3>
                <p className="text-xl text-slate-600 max-w-md mx-auto mb-6 font-medium">
                  You have mastered <strong>{item.title}</strong>.
                </p>

                {/* Score & Proof */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <div className="bg-slate-100 px-6 py-3 rounded-xl border-2 border-slate-200">
                     <p className="text-xs font-bold uppercase text-slate-400 mb-1">First Attempt Score</p>
                     <div className="flex items-center justify-center gap-2 text-2xl font-bold text-black">
                        <Star className={score === item.quiz.length ? "text-[#F7931A] fill-[#F7931A]" : "text-black"} size={24} />
                        {score} / {item.quiz.length}
                     </div>
                  </div>
                  <div className="bg-slate-100 px-6 py-3 rounded-xl border-2 border-slate-200">
                     <p className="text-xs font-bold uppercase text-slate-400 mb-1">Proof of Work</p>
                     <div className="flex gap-1 mt-2 justify-center h-8 items-center">
                        {Array(3).fill(0).map((_, i) => <div key={i} className="w-8 h-2 bg-[#F7931A] rounded-full"></div>)}
                     </div>
                  </div>
                </div>

                {/* Primary Actions */}
                <div className="grid grid-cols-2 gap-4 w-full max-w-md mb-8">
                   <button 
                      onClick={handleDonateRedirect}
                      className="bg-red-500 text-white p-4 rounded-2xl font-bold uppercase border-4 border-black shadow-hard hover:translate-y-[2px] hover:shadow-hard-sm transition-all flex flex-col items-center gap-2"
                   >
                      <Heart size={32} className="fill-white" />
                      Donate
                   </button>
                   <button 
                      onClick={() => setShowShareMenu(true)}
                      className="bg-[#1DA1F2] text-white p-4 rounded-2xl font-bold uppercase border-4 border-black shadow-hard hover:translate-y-[2px] hover:shadow-hard-sm transition-all flex flex-col items-center gap-2"
                   >
                      <Share2 size={32} />
                      Share
                   </button>
                </div>

                {/* Share Menu Overlay */}
                {showShareMenu && (
                   <div className="absolute inset-0 bg-white/95 backdrop-blur z-50 flex flex-col items-center justify-center rounded-3xl animate-in zoom-in-95">
                      <button onClick={() => setShowShareMenu(false)} className="absolute top-4 right-4 p-2 bg-slate-100 rounded-full hover:bg-slate-200">
                         <X size={24} />
                      </button>
                      
                      <h4 className="text-2xl font-bold uppercase mb-6">Select Platform</h4>
                      <div className="grid grid-cols-4 gap-4 px-4">
                        <button onClick={() => handleShare('Twitter')} className="bg-black text-white w-14 h-14 rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-md hover:shadow-lg" title="X / Twitter">
                          <Twitter size={24} />
                        </button>
                        
                        <button onClick={() => handleShare('WhatsApp')} className="bg-green-500 text-white w-14 h-14 rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-md hover:shadow-lg" title="WhatsApp">
                          <MessageCircle size={24} />
                        </button>

                        <button onClick={() => handleShare('Telegram')} className="bg-blue-500 text-white w-14 h-14 rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-md hover:shadow-lg" title="Telegram">
                          <Send size={24} />
                        </button>

                        <button onClick={() => handleShare('Nostr')} className="bg-purple-700 text-white w-14 h-14 rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-md hover:shadow-lg" title="Nostr">
                          <Radio size={24} />
                        </button>

                        <button onClick={() => handleShare('LinkedIn')} className="bg-blue-700 text-white w-14 h-14 rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-md hover:shadow-lg" title="LinkedIn">
                          <Linkedin size={24} />
                        </button>

                        <button onClick={() => handleShare('Facebook')} className="bg-blue-800 text-white w-14 h-14 rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-md hover:shadow-lg" title="Facebook">
                          <Facebook size={24} />
                        </button>

                        <button onClick={() => handleShare('Signal')} className="bg-blue-600 text-white w-14 h-14 rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-md hover:shadow-lg" title="Signal (Copy)">
                           <Share2 size={24} />
                        </button>

                        <button onClick={() => handleShare('Copy')} className={`${copiedShare ? 'bg-green-500' : 'bg-slate-400'} text-white w-14 h-14 rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-md hover:shadow-lg`} title="Copy Link">
                          {copiedShare ? <CheckCircle2 size={24} /> : <Copy size={24} />}
                        </button>
                     </div>
                     {copiedShare && <p className="text-sm text-green-600 font-bold mt-4 animate-in fade-in">Link Copied!</p>}
                   </div>
                )}
             </div>
           )}

        </div>

        {/* Footer Actions */}
        <div className="p-4 md:p-6 border-t-4 border-black bg-slate-50 shrink-0 z-20">
          {mode === 'LEARN' && (
            <button 
              onClick={() => setMode('TOOL')}
              className="w-full bg-white text-black border-4 border-black font-bold uppercase py-4 rounded-2xl text-xl hover:bg-black hover:text-white transition-all shadow-hard active:shadow-none active:translate-x-[4px] active:translate-y-[4px] flex items-center justify-center gap-3"
            >
              Open {item.tool.name} <PenTool size={24} />
            </button>
          )}

          {mode === 'TOOL' && (
             <button 
               onClick={() => setMode('QUIZ')}
               className="w-full bg-black text-white font-bold uppercase py-4 rounded-2xl text-xl hover:bg-slate-800 transition-all shadow-hard active:shadow-none active:translate-x-[4px] active:translate-y-[4px] flex items-center justify-center gap-3"
             >
               Start Quiz <ChevronRight size={24} />
             </button>
          )}
          
          {mode === 'QUIZ' && (
            <div className="text-center text-xs font-bold uppercase text-slate-400 py-4">
              Select the correct answer to proceed
            </div>
          )}

          {mode === 'SUCCESS' && (
            <button 
              onClick={close}
              className="w-full bg-[#F7931A] text-black font-bold uppercase py-4 rounded-2xl text-xl hover:bg-[#d87e12] transition-all shadow-hard active:shadow-none active:translate-x-[4px] active:translate-y-[4px] flex items-center justify-center gap-3"
            >
              Complete Lesson <CheckCircle2 size={24} />
            </button>
          )}
        </div>

      </div>
    </div>
  );
};

// Animation styles
const style = document.createElement('style');
style.innerHTML = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
  }
  .animate-shake {
    animation: shake 0.4s ease-in-out;
  }
  .custom-scrollbar::-webkit-scrollbar {
    width: 8px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: #f1f5f9;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 4px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
  }
`;
document.head.appendChild(style);
