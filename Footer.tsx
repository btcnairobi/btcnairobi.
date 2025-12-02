import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronUp, 
  ChevronDown,
  Twitter, 
  Send, 
  Github, 
  Mail, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube
} from 'lucide-react';

export const Footer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const toggleFooter = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Spacer to ensure content isn't hidden behind the collapsed footer bar */}
      <div className="pb-24"></div>

      <footer 
        className={`fixed bottom-0 left-0 right-0 z-50 bg-black text-white border-t-4 border-white transition-all duration-500 ease-in-out shadow-[0_-5px_20px_rgba(0,0,0,0.5)] flex flex-col ${isOpen ? 'h-[85vh]' : 'h-16'}`}
      >
        {/* Top Bar (Always Visible Handle) */}
        <div 
          onClick={toggleFooter}
          className="h-16 flex items-center justify-between px-4 md:px-8 cursor-pointer hover:bg-slate-900 transition-colors shrink-0 relative group"
        >
           {/* Left: Branding / Copyright Preview */}
           <div className="flex items-center gap-4">
              {!isOpen && (
                <span className="text-xs font-bold text-slate-500 uppercase">
                  © {currentYear} • Circular Economy
                </span>
              )}
           </div>

           {/* Right: Toggle Arrow */}
           <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold uppercase text-[#F7931A] hidden sm:block animate-pulse">
                {isOpen ? 'Close' : 'Up'}
              </span>
              <button 
                className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center border-2 border-black hover:bg-[#F7931A] hover:border-white transition-all shadow-sm group-hover:scale-110"
              >
                {isOpen ? <ChevronDown size={24} /> : <ChevronUp size={24} />}
              </button>
           </div>
        </div>

        {/* Expanded Content Area */}
        <div className={`flex-grow overflow-y-auto bg-black border-t border-white/20 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
           <div className="max-w-[1400px] mx-auto p-6 md:p-12">
              
              {/* Grid Links */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
                
                {/* Col 1: General */}
                <div className="flex flex-col gap-4">
                    <h4 className="font-bold uppercase text-[#F7931A] text-xs tracking-widest border-b border-white/20 pb-2">General</h4>
                    <Link to="/" onClick={() => setIsOpen(false)} className="text-sm font-medium hover:text-[#F7931A] transition-colors w-fit">Home</Link>
                    <Link to="/about" onClick={() => setIsOpen(false)} className="text-sm font-medium hover:text-[#F7931A] transition-colors w-fit">About Us</Link>
                    <Link to="/contact" onClick={() => setIsOpen(false)} className="text-sm font-medium hover:text-[#F7931A] transition-colors w-fit">Contact</Link>
                    <Link to="/give" onClick={() => setIsOpen(false)} className="text-sm font-medium hover:text-[#F7931A] transition-colors w-fit">Donate</Link>
                </div>

                {/* Col 2: Education */}
                 <div className="flex flex-col gap-4">
                    <h4 className="font-bold uppercase text-[#F7931A] text-xs tracking-widest border-b border-white/20 pb-2">Education</h4>
                    <Link to="/education" onClick={() => setIsOpen(false)} className="text-sm font-medium hover:text-[#F7931A] transition-colors w-fit">Study Bitcoin</Link>
                    <Link to="/get-started" onClick={() => setIsOpen(false)} className="text-sm font-medium hover:text-[#F7931A] transition-colors w-fit">Get Started</Link>
                    <Link to="/merchant-academy" onClick={() => setIsOpen(false)} className="text-sm font-medium hover:text-[#F7931A] transition-colors w-fit">Merchant Academy</Link>
                    <Link to="/articles" onClick={() => setIsOpen(false)} className="text-sm font-medium hover:text-[#F7931A] transition-colors w-fit">Articles</Link>
                </div>

                {/* Col 3: Ecosystem */}
                <div className="flex flex-col gap-4">
                    <h4 className="font-bold uppercase text-[#F7931A] text-xs tracking-widest border-b border-white/20 pb-2">Ecosystem</h4>
                    <Link to="/merchants" onClick={() => setIsOpen(false)} className="text-sm font-medium hover:text-[#F7931A] transition-colors w-fit">Merchants (Spend)</Link>
                    <Link to="/events" onClick={() => setIsOpen(false)} className="text-sm font-medium hover:text-[#F7931A] transition-colors w-fit">Events</Link>
                    <Link to="/community" onClick={() => setIsOpen(false)} className="text-sm font-medium hover:text-[#F7931A] transition-colors w-fit">Community</Link>
                </div>

                {/* Col 4 & 5: Socials */}
                <div className="col-span-2">
                     <h4 className="font-bold uppercase text-[#F7931A] text-xs tracking-widest border-b border-white/20 pb-2 mb-4">Connect</h4>
                     <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        <a href="https://twitter.com/btcnairobi" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-[#F7931A] transition-colors group">
                          <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors"><Twitter size={16} /></div> Twitter
                        </a>
                        <a href="https://t.me/btcnairobi" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-[#F7931A] transition-colors group">
                          <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors"><Send size={16} /></div> Telegram
                        </a>
                        <a href="https://instagram.com/btcnairobi" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-[#F7931A] transition-colors group">
                          <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-pink-600 group-hover:text-white transition-colors"><Instagram size={16} /></div> Instagram
                        </a>
                        <a href="https://facebook.com/btcnairobi" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-[#F7931A] transition-colors group">
                           <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-blue-700 group-hover:text-white transition-colors"><Facebook size={16} /></div> Facebook
                        </a>
                        <a href="https://linkedin.com/company/btcnairobi" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-[#F7931A] transition-colors group">
                           <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-blue-800 group-hover:text-white transition-colors"><Linkedin size={16} /></div> LinkedIn
                        </a>
                        <a href="https://youtube.com/@btcnairobi" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-[#F7931A] transition-colors group">
                           <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors"><Youtube size={16} /></div> YouTube
                        </a>
                        <a href="https://github.com/btcnairobi" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-[#F7931A] transition-colors group">
                           <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors"><Github size={16} /></div> GitHub
                        </a>
                        <a href="mailto:btcnairobi@gmail.com" className="flex items-center gap-2 text-sm font-medium hover:text-[#F7931A] transition-colors group">
                           <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors"><Mail size={16} /></div> Email
                        </a>
                     </div>
                </div>
              </div>

              {/* Footer Bottom */}
              <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs font-bold uppercase tracking-widest">
                  <p>© {currentYear} Bitcoin Nairobi. All rights reserved.</p>
                  <p className="text-center md:text-right">Made in Nairobi • Bitcoin Only • Open Source</p>
              </div>

              {/* Decorative Background Elements inside expanded footer */}
              <div className="absolute bottom-0 left-0 w-full h-32 opacity-5 pointer-events-none overflow-hidden">
                 <div className="w-full h-full bg-[linear-gradient(transparent_50%,rgba(255,255,255,0.1)_50%)] bg-[length:10px_10px]"></div>
              </div>
           </div>
        </div>
      </footer>
    </>
  );
};