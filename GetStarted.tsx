import React, { useState } from 'react';
import { PageLayout } from '../components/PageLayout';
import { 
  Smartphone, 
  Shield, 
  AlertTriangle, 
  ExternalLink, 
  Users, 
  Share2,
  X,
  Send,
  Twitter,
  MessageCircle,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Radio,
  MessageSquare,
  Check,
  Award,
  Flame,
  Key,
  FileText,
  Copy
} from 'lucide-react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

const SelfCustodyQuiz: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const lessons = [
    {
      title: "The Seed Phrase",
      icon: FileText,
      content: "Your wallet creates 12 or 24 words. This is your master key. Anyone with these words can take all your money. Never type them into a computer, phone, or website. Never take a screenshot.",
      question: "Where is the safest place to store your seed phrase?",
      options: [
        "In a password manager",
        "Screenshot in iCloud",
        "Written on paper or metal",
        "Google Drive document"
      ],
      correctIndex: 2
    },
    {
      title: "Metal Backups",
      icon: Flame,
      content: "Paper burns. Ink fades. Water destroys pulp. For life savings, you need a backup that can survive a house fire or flood. Stamping your words into stainless steel or titanium ensures your legacy survives physical disasters.",
      question: "Why upgrade from paper to metal?",
      options: [
        "It looks cooler",
        "To survive fire and water",
        "It is cheaper",
        "Easier to write on"
      ],
      correctIndex: 1
    },
    {
      title: "Passphrases",
      icon: Key,
      content: "You can add a '13th word' (passphrase) to your seed. This creates a completely different wallet. If someone finds your 12 words, they still can't access your funds without the passphrase. It acts as a decoy or extra lock.",
      question: "What happens if you lose your passphrase?",
      options: [
        "You can reset it via email",
        "Nothing, the 12 words work",
        "You lose access to those funds",
        "Support can recover it"
      ],
      correctIndex: 2
    },
    {
      title: "Hardware Wallets",
      icon: Shield,
      content: "A hardware wallet (like Jade or Coldcard) keeps your keys on a separate device that never touches the internet. Even if your computer has a virus, your private keys remain safe inside the device.",
      question: "Why use a hardware wallet?",
      options: [
        "To keep keys offline",
        "To mine Bitcoin",
        "To trade faster",
        "It connects to wifi"
      ],
      correctIndex: 0
    }
  ];

  const handleOptionClick = (index: number) => {
    if (showFeedback) return; // Prevent changing after answer
    setSelectedOption(index);
    setShowFeedback(true);
    setIsCorrect(index === lessons[currentStep].correctIndex);
  };

  const nextLesson = () => {
    setSelectedOption(null);
    setShowFeedback(false);
    setIsCorrect(false);
    if (currentStep < lessons.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(lessons.length); // Completed state
    }
  };

  if (currentStep === lessons.length) {
    return (
      <div className="bg-green-50 border-4 border-green-500 rounded-3xl p-8 text-center flex flex-col items-center justify-center animate-in zoom-in">
        <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-6 shadow-hard">
          <Award className="text-white" size={48} />
        </div>
        <h3 className="text-2xl font-bold uppercase text-green-800 mb-2">Certified Sovereign</h3>
        <p className="text-green-700 font-medium mb-6">
          You understand the basics of self-custody. You are ready to be your own bank.
        </p>
        <button 
          onClick={() => setCurrentStep(0)}
          className="bg-white text-green-800 border-2 border-green-800 px-6 py-2 rounded-full font-bold uppercase hover:bg-green-100 transition-colors"
        >
          Review Course
        </button>
      </div>
    );
  }

  const lesson = lessons[currentStep];
  const Icon = lesson.icon;

  return (
    <div className="bg-white border-4 border-black rounded-3xl overflow-hidden shadow-hard flex flex-col">
      {/* Progress Bar */}
      <div className="bg-slate-100 h-2 w-full">
        <div 
          className="bg-[#F7931A] h-full transition-all duration-500 ease-out"
          style={{ width: `${((currentStep) / lessons.length) * 100}%` }}
        ></div>
      </div>

      <div className="p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center border-2 border-black">
            <Icon className="text-[#F7931A]" size={24} />
          </div>
          <div>
             <p className="text-xs font-bold uppercase text-slate-400">Lesson {currentStep + 1} of {lessons.length}</p>
             <h3 className="text-2xl font-bold uppercase">{lesson.title}</h3>
          </div>
        </div>

        <p className="text-lg text-slate-700 font-medium leading-relaxed mb-8 border-b-2 border-slate-100 pb-6">
          {lesson.content}
        </p>

        <div className="bg-slate-50 rounded-xl p-6 border-2 border-slate-200">
           <h4 className="font-bold uppercase text-slate-500 text-sm mb-4">Quiz: {lesson.question}</h4>
           <div className="grid grid-cols-1 gap-3">
             {lesson.options.map((option, idx) => (
               <button
                 key={idx}
                 onClick={() => handleOptionClick(idx)}
                 disabled={showFeedback}
                 className={`p-4 rounded-xl border-2 text-left font-bold transition-all flex justify-between items-center ${
                   showFeedback 
                     ? idx === lesson.correctIndex 
                        ? 'bg-green-100 border-green-500 text-green-800' 
                        : idx === selectedOption 
                          ? 'bg-red-100 border-red-500 text-red-800'
                          : 'bg-white border-slate-200 opacity-50'
                     : selectedOption === idx 
                        ? 'bg-slate-200 border-black' 
                        : 'bg-white border-slate-200 hover:border-[#F7931A] hover:bg-orange-50'
                 }`}
               >
                 {option}
                 {showFeedback && idx === lesson.correctIndex && <Check size={20} />}
                 {showFeedback && idx === selectedOption && idx !== lesson.correctIndex && <X size={20} />}
               </button>
             ))}
           </div>

           {showFeedback && (
             <div className={`mt-6 p-4 rounded-xl flex items-center justify-between animate-in fade-in ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
               <span className="font-bold uppercase text-sm">
                 {isCorrect ? "Correct! Well done." : "Incorrect. Review and try again."}
               </span>
               {isCorrect ? (
                 <button 
                    onClick={nextLesson}
                    className="bg-black text-white px-4 py-2 rounded-lg font-bold uppercase text-sm hover:bg-slate-800 transition-colors border-2 border-transparent"
                 >
                   Next Lesson
                 </button>
               ) : (
                 <button 
                    onClick={() => { setShowFeedback(false); setSelectedOption(null); }}
                    className="bg-white text-black border-2 border-black px-4 py-2 rounded-lg font-bold uppercase text-sm hover:bg-slate-100 transition-colors"
                 >
                   Try Again
                 </button>
               )}
             </div>
           )}
        </div>
      </div>
    </div>
  )
}

export const GetStarted: React.FC = () => {
  const [satsAmount, setSatsAmount] = useState('');
  const [showShare, setShowShare] = useState(false);

  const getOrderText = () => {
    const amount = satsAmount ? parseInt(satsAmount).toLocaleString() : '10,000';
    return `#keepspedn Hi, Bitcoin Nairobians I need ${amount} sats.`;
  };

  const handleShare = (platform: string) => {
    const text = getOrderText();
    // Copy to clipboard
    navigator.clipboard.writeText(text).then(() => {
      // Redirect logic
      let url = '';
      switch(platform) {
        case 'Telegram': 
          url = 'https://t.me/btcnairobi'; 
          break;
        case 'Nostr': 
          url = 'https://primal.net'; 
          break;
        case 'Twitter': 
          url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`; 
          break;
        case 'WhatsApp': 
          url = `https://wa.me/?text=${encodeURIComponent(text)}`; 
          break;
        case 'Signal': 
          url = 'https://signal.org'; 
          break;
        case 'Facebook': 
          url = 'https://www.facebook.com'; 
          break;
        case 'Instagram': 
          url = 'https://instagram.com'; 
          break;
        case 'LinkedIn': 
          url = 'https://www.linkedin.com'; 
          break;
        case 'Email': 
          url = `mailto:?subject=Bitcoin P2P Order&body=${encodeURIComponent(text)}`; 
          break;
        default: 
          break;
      }
      if (url) window.open(url, '_blank');
      setShowShare(false);
    });
  };

  const SocialButton: React.FC<{ icon: any, label: string, color: string, onClick: () => void }> = ({ icon: Icon, label, color, onClick }) => (
    <button 
      onClick={onClick}
      className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-slate-50 transition-colors group w-full"
    >
      <div className={`w-12 h-12 rounded-full ${color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
        <Icon size={24} />
      </div>
      <span className="text-[10px] font-bold uppercase text-slate-500">{label}</span>
    </button>
  );

  return (
    <PageLayout title="Start" subtitle="Become your own bank today">
      
      {/* Share Modal */}
      {showShare && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
           <div className="bg-white border-4 border-black rounded-3xl p-6 max-w-md w-full shadow-glow animate-in zoom-in-95 relative">
              <button 
                onClick={() => setShowShare(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-black transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-green-500">
                   <Copy className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-bold uppercase">Text Copied!</h3>
                <p className="text-sm text-slate-600 font-medium">Select where to post your order.</p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                 <SocialButton icon={Send} label="Telegram" color="bg-blue-500" onClick={() => handleShare('Telegram')} />
                 <SocialButton icon={Radio} label="Nostr" color="bg-purple-600" onClick={() => handleShare('Nostr')} />
                 <SocialButton icon={MessageCircle} label="WhatsApp" color="bg-green-500" onClick={() => handleShare('WhatsApp')} />
                 <SocialButton icon={Twitter} label="Twitter" color="bg-black" onClick={() => handleShare('Twitter')} />
                 <SocialButton icon={MessageSquare} label="Signal" color="bg-blue-600" onClick={() => handleShare('Signal')} />
                 <SocialButton icon={Facebook} label="Facebook" color="bg-blue-700" onClick={() => handleShare('Facebook')} />
                 <SocialButton icon={Instagram} label="Instagram" color="bg-pink-600" onClick={() => handleShare('Instagram')} />
                 <SocialButton icon={Linkedin} label="LinkedIn" color="bg-blue-800" onClick={() => handleShare('LinkedIn')} />
                 <SocialButton icon={Mail} label="Email" color="bg-slate-500" onClick={() => handleShare('Email')} />
              </div>
           </div>
        </div>
      )}

      <div className="space-y-12">
        
        {/* Disclaimer */}
        <div className="bg-red-50 border-l-8 border-red-500 p-6 rounded-r-xl flex gap-4 items-start">
           <AlertTriangle className="text-red-500 shrink-0" size={32} />
           <div>
             <h3 className="text-xl font-bold text-red-800 uppercase mb-1">Liability Disclaimer</h3>
             <p className="text-red-700 font-medium text-base leading-relaxed">
               Bitcoin Nairobi provides these recommendations for educational purposes only. 
               We are <strong>not responsible</strong> for any funds lost, stolen, or mishandled. 
               You are solely responsible for your own security. Verify everything.
             </p>
           </div>
        </div>

        {/* Step 1: Wallets */}
        <div className="flex gap-6 items-start">
          <div className="w-14 h-14 rounded-full bg-[#F7931A] text-white flex items-center justify-center font-bold text-2xl shrink-0 border-4 border-black shadow-hard-sm">1</div>
          <div className="w-full">
            <h3 className="text-3xl font-bold uppercase mb-4">Get a Wallet</h3>
            <p className="text-slate-600 mb-6 text-lg font-medium">
              We recommend three specific wallets for different needs. Choose the one that fits you best.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Wallet 1 */}
              <div className="bg-white border-4 border-black rounded-3xl p-6 shadow-sm hover:shadow-hard transition-all flex flex-col h-full">
                 <div className="mb-4 flex justify-between items-start">
                   <Smartphone size={32} className="text-blue-500" />
                   <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded uppercase">Web</span>
                 </div>
                 <h4 className="text-2xl font-bold uppercase mb-2">Coinos</h4>
                 <p className="text-sm text-slate-600 mb-6 font-medium flex-grow">Simple web wallet. No app store needed. Good for beginners.</p>
                 <div className="space-y-3 mt-auto">
                   <a href="https://coinos.io" target="_blank" rel="noreferrer" className="block w-full text-center bg-slate-100 hover:bg-slate-200 py-3 rounded-xl font-bold text-xs uppercase transition-colors">
                     Visit Site
                   </a>
                   <Link to="/education?learn=Is%20Coinos%20safe?" className="block w-full text-center border-2 border-black text-black hover:bg-black hover:text-white py-3 rounded-xl font-bold text-xs uppercase transition-colors">
                     Start Course
                   </Link>
                 </div>
              </div>

              {/* Wallet 2 */}
              <div className="bg-white border-4 border-black rounded-3xl p-6 shadow-sm hover:shadow-hard transition-all flex flex-col h-full">
                 <div className="mb-4 flex justify-between items-start">
                   <Smartphone size={32} className="text-[#F7931A]" />
                   <span className="bg-orange-100 text-orange-800 text-xs font-bold px-2 py-1 rounded uppercase">APK / App</span>
                 </div>
                 <h4 className="text-2xl font-bold uppercase mb-2">Blink</h4>
                 <p className="text-sm text-slate-600 mb-6 font-medium flex-grow">Fast Lightning wallet. Great for daily spending in Nairobi.</p>
                 <div className="space-y-3 mt-auto">
                   <a href="https://blink.sv" target="_blank" rel="noreferrer" className="block w-full text-center bg-slate-100 hover:bg-slate-200 py-3 rounded-xl font-bold text-xs uppercase transition-colors">
                     Download
                   </a>
                   <Link to="/education?learn=Is%20Blink%20fast?" className="block w-full text-center border-2 border-black text-black hover:bg-black hover:text-white py-3 rounded-xl font-bold text-xs uppercase transition-colors">
                     Start Course
                   </Link>
                 </div>
              </div>

              {/* Wallet 3 */}
              <div className="bg-white border-4 border-black rounded-3xl p-6 shadow-sm hover:shadow-hard transition-all flex flex-col h-full">
                 <div className="mb-4 flex justify-between items-start">
                   <Shield size={32} className="text-green-600" />
                   <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded uppercase">Hardware</span>
                 </div>
                 <h4 className="text-2xl font-bold uppercase mb-2">Jade</h4>
                 <p className="text-sm text-slate-600 mb-6 font-medium flex-grow">Blockstream Jade. Cold storage for your life savings.</p>
                 <div className="space-y-3 mt-auto">
                   <a href="https://blockstream.com/jade" target="_blank" rel="noreferrer" className="block w-full text-center bg-slate-100 hover:bg-slate-200 py-3 rounded-xl font-bold text-xs uppercase transition-colors">
                     Buy Device
                   </a>
                   <Link to="/education?learn=Why%20Jade?" className="block w-full text-center border-2 border-black text-black hover:bg-black hover:text-white py-3 rounded-xl font-bold text-xs uppercase transition-colors">
                     Start Course
                   </Link>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2: Buy Bitcoin (P2P Widget) */}
        <div className="flex gap-6 items-start">
          <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center font-bold text-2xl shrink-0 border-4 border-slate-300 shadow-hard-sm">2</div>
          <div className="w-full">
            <h3 className="text-3xl font-bold uppercase mb-4">Buy Bitcoin (P2P)</h3>
            <p className="text-slate-600 mb-6 text-lg font-medium">
              No banks. No fees. Just peer-to-peer. Enter the amount you want to buy, copy the order, and post it to the community.
            </p>
            
            <div className="bg-[#F7931A] p-8 rounded-3xl border-4 border-black shadow-hard">
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-black mb-6">
                 <div className="flex items-center gap-3 mb-4">
                    <Users size={24} className="text-[#F7931A]" />
                    <h4 className="font-bold uppercase text-lg">Create Buy Order</h4>
                 </div>
                 <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-400 mb-1">I want to buy (Sats)</label>
                      <input 
                        type="number" 
                        placeholder="10000" 
                        value={satsAmount}
                        onChange={(e) => setSatsAmount(e.target.value)}
                        className="w-full text-3xl font-bold font-mono border-b-2 border-slate-200 focus:border-[#F7931A] outline-none py-2"
                      />
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                       <p className="text-xs font-bold text-slate-400 uppercase mb-2">Preview Message:</p>
                       <p className="font-mono text-sm font-medium break-all">
                         {getOrderText()}
                       </p>
                    </div>
                 </div>
              </div>

              <button 
                onClick={() => setShowShare(true)}
                className="w-full bg-black text-white font-bold uppercase text-xl py-4 rounded-xl shadow-[4px_4px_0px_0px_#FFF] hover:shadow-none hover:translate-y-[2px] transition-all flex items-center justify-center gap-3 border-2 border-white"
              >
                <Share2 size={24} />
                Place Order
              </button>
            </div>
          </div>
        </div>

        {/* Step 3: Backup (Quiz) */}
        <div className="flex gap-6 items-start">
          <div className="w-14 h-14 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center font-bold text-2xl shrink-0 border-4 border-slate-300">3</div>
          <div className="w-full">
            <h3 className="text-3xl font-bold uppercase mb-4">Secure It</h3>
            <p className="text-slate-600 mb-6 text-lg font-medium">
              Take the self-custody course. Learn how to protect your keys from fire, water, and theft.
            </p>
            <SelfCustodyQuiz />
          </div>
        </div>

      </div>
    </PageLayout>
  );
};