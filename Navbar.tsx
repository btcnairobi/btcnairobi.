import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Bitcoin, 
  Menu, 
  X,
  Home,
  Info,
  Zap,
  ShoppingBag,
  Calendar,
  Users,
  BookOpen,
  Newspaper,
  Heart,
  Mail
} from 'lucide-react';
import { BlankaText } from './BlankaText';

// Custom Cross Icon for John 3:16 Page
const CrossIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 2v20" />
    <path d="M8 8h8" />
  </svg>
);

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'About', path: '/about', icon: Info },
    { label: 'Start', path: '/get-started', icon: Zap },
    { label: 'Spend', path: '/merchants', icon: ShoppingBag },
    { label: 'Events', path: '/events', icon: Calendar },
    { label: 'Community', path: '/community', icon: Users },
    { label: 'Study', path: '/education', icon: BookOpen },
    { label: 'Articles', path: '/articles', icon: Newspaper },
    { label: 'Give', path: '/give', icon: Heart },
    { label: 'Contact', path: '/contact', icon: Mail },
    { label: 'John 3:16', path: '/john316', icon: CrossIcon },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b-4 border-black py-3 px-4 shadow-sm">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 z-50 relative shrink-0">
          <div className="w-12 h-12 bg-[#F7931A] border-2 border-black rounded-full flex items-center justify-center shadow-[2px_2px_0px_0px_#000]">
            <Bitcoin className="text-white" size={28} strokeWidth={2.5} />
          </div>
          <BlankaText text="Bitcoin Nairobi" className="font-bold text-lg md:text-2xl block" />
        </Link>

        {/* Desktop Nav - Visible on XL screens and up */}
        <nav className="hidden xl:flex items-center gap-2 font-bold uppercase text-xs tracking-wide font-sans">
            {navLinks.filter(link => link.path !== '/').map((link) => {
               const Icon = link.icon;
               const isActive = location.pathname === link.path;
               return (
                 <Link 
                   key={link.path}
                   to={link.path} 
                   className={`flex items-center gap-2 px-3 py-2 rounded-lg border-2 transition-all duration-200 ${
                     isActive 
                       ? 'bg-black text-white border-black shadow-[2px_2px_0px_0px_#F7931A]' 
                       : 'border-transparent hover:bg-slate-100 hover:border-black text-slate-700'
                   }`}
                 >
                   <Icon size={16} strokeWidth={2.5} className={isActive ? 'text-[#F7931A]' : 'text-slate-500'} />
                   <span>{link.label}</span>
                 </Link>
               );
            })}
        </nav>

        {/* Mobile Toggle - Visible on screens smaller than XL */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden z-50 relative p-2 bg-white border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_#000] active:translate-y-[1px] active:shadow-none transition-all"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-[#F7931A] z-40 pt-32 px-4 pb-8 xl:hidden overflow-y-auto animate-in slide-in-from-top-5 duration-200">
            <nav className="flex flex-col gap-3 max-w-md mx-auto">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.path;
                return (
                  <Link 
                    key={link.path}
                    to={link.path} 
                    className={`bg-white border-4 border-black p-4 rounded-xl shadow-hard text-xl font-bold uppercase transition-all flex justify-between items-center group ${isActive ? 'bg-black text-white' : 'text-black hover:bg-black hover:text-white'}`}
                  >
                    <div className="flex items-center gap-4">
                      {/* @ts-ignore - Lucide icon compatibility */}
                      <Icon size={24} className={isActive ? 'text-[#F7931A]' : 'text-black group-hover:text-[#F7931A]'} />
                      <BlankaText text={link.label} />
                    </div>
                    <div className={`w-3 h-3 rounded-full border border-black ${isActive ? 'bg-[#F7931A] border-white' : 'bg-[#F7931A] group-hover:bg-white group-hover:border-white'}`}></div>
                  </Link>
                );
              })}
            </nav>
            
            <div className="mt-10 text-center">
               <p className="text-white font-bold text-base uppercase tracking-widest opacity-80">Don't Trust, Verify</p>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
