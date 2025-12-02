import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  BookOpen, 
  ArrowLeft, 
  Check, 
  Star, 
  PlayCircle, 
  MapPin, 
  ExternalLink,
  Cross
} from 'lucide-react';

declare global {
  interface Window {
    confetti: any;
  }
}

export const John316: React.FC = () => {
  const [step, setStep] = useState<'WELCOME' | 'PRAYER' | 'CELEBRATE'>('WELCOME');
  
  useEffect(() => {
    // Override body background for this specific spiritual page
    document.body.style.backgroundColor = '#FDFBF7'; // Soft Cream color
    document.body.style.backgroundImage = 'none';
    
    // Scroll to top
    window.scrollTo(0, 0);

    return () => {
      // Revert to Bitcoin Orange
      document.body.style.backgroundColor = '#F7931A';
    };
  }, []);

  const handlePrayed = () => {
    setStep('CELEBRATE');
    if (window.confetti) {
      // Gold and Purple confetti for Royalty
      window.confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#4b3068', '#FFFFFF'] 
      });
      // Second burst
      setTimeout(() => {
        window.confetti({
          particleCount: 150,
          spread: 100,
          origin: { y: 0.6 },
          colors: ['#D4AF37', '#FF0000', '#FFFFFF'] 
        });
      }, 500);
    }
  };

  const verses = [
    { ref: "John 3:16", text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." },
    { ref: "Romans 10:9", text: "If you declare with your mouth, 'Jesus is Lord,' and believe in your heart that God raised him from the dead, you will be saved." },
    { ref: "2 Corinthians 5:17", text: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!" },
    { ref: "Matthew 11:28", text: "Come to me, all you who are weary and burdened, and I will give you rest." },
    { ref: "Jeremiah 29:11", text: "For I know the plans I have for you,” declares the Lord, “plans to prosper you and not to harm you, plans to give you hope and a future." },
    { ref: "Isaiah 41:10", text: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand." },
    { ref: "Psalm 23:1", text: "The Lord is my shepherd, I lack nothing." },
    { ref: "Philippians 4:13", text: "I can do all this through him who gives me strength." },
    { ref: "Revelation 3:20", text: "Here I am! I stand at the door and knock. If anyone hears my voice and opens the door, I will come in and eat with that person, and they with me." }
  ];

  return (
    <div className="min-h-screen pb-20 font-serif text-slate-800 animate-in fade-in duration-700">
      
      {/* Custom Navbar for this page */}
      <nav className="p-4 flex items-center gap-4 border-b border-[#D4AF37]/20 bg-white sticky top-0 z-50 shadow-sm">
         <Link to="/" className="w-10 h-10 rounded-full bg-[#F7931A] flex items-center justify-center text-white hover:bg-black transition-colors">
            <ArrowLeft size={20} />
         </Link>
         <div>
            <h1 className="text-xl font-bold text-[#4b3068] uppercase tracking-wider flex items-center gap-2">
               <Cross size={16} /> The Greatest Gift
            </h1>
         </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 pt-8">
        
        {/* HERO SECTION */}
        <div className="text-center mb-12">
           <div className="w-24 h-24 mx-auto bg-[#4b3068] rounded-full flex items-center justify-center mb-6 shadow-xl border-4 border-[#D4AF37]">
              <Heart className="text-[#D4AF37] fill-[#D4AF37]" size={48} />
           </div>
           <h2 className="text-4xl md:text-5xl font-bold text-[#4b3068] mb-4">Welcome Home, My Friend</h2>
           <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto italic">
             "I am so glad you are here. No matter what you have done, or how far you have wandered, 
             there is a Father who is waiting for you with open arms. Let me share some good news with you."
           </p>
        </div>

        {/* INTERACTIVE PRAYER SECTION */}
        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl border-2 border-[#D4AF37] overflow-hidden mb-16 relative">
           {/* Decorative Header */}
           <div className="bg-[#4b3068] p-6 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              <h3 className="text-2xl font-bold text-white uppercase tracking-widest relative z-10">The Prayer of Salvation</h3>
           </div>
           
           <div className="p-8 md:p-12 text-center">
              {step === 'WELCOME' && (
                 <div className="animate-in zoom-in">
                    <p className="text-xl text-slate-700 mb-8 leading-relaxed font-medium">
                       My dear child, salvation is a free gift. You do not need to earn it. 
                       You simply need to accept it. Are you ready to give your life to Jesus today?
                    </p>
                    <button 
                       onClick={() => setStep('PRAYER')}
                       className="bg-[#D4AF37] text-white text-xl px-10 py-4 rounded-full font-bold hover:bg-[#b59226] transition-all transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto border-4 border-[#fff5d6]"
                    >
                       Yes Bishop, I am Ready <ArrowLeft className="rotate-180" />
                    </button>
                 </div>
              )}

              {step === 'PRAYER' && (
                 <div className="animate-in slide-in-from-right text-left">
                    <p className="text-slate-500 font-bold uppercase text-xs mb-4 text-center">Read this out loud from your heart:</p>
                    <div className="bg-[#FDFBF7] p-6 rounded-xl border border-[#D4AF37]/30 mb-8 shadow-inner">
                       <p className="text-xl md:text-2xl font-serif text-[#4b3068] leading-loose text-center">
                          "Lord Jesus, I come to You today. I am a sinner. I cannot save myself. 
                          I believe You died on the cross for my sins and rose from the dead. 
                          Please forgive me. Wash me with Your blood. 
                          I open my heart and accept You as my Lord and Savior. 
                          Thank You, Jesus, for saving me. Amen."
                       </p>
                    </div>
                    <div className="text-center">
                       <button 
                          onClick={handlePrayed}
                          className="bg-[#4b3068] text-white text-xl px-12 py-4 rounded-full font-bold hover:bg-[#341f4a] transition-all transform hover:scale-105 shadow-lg flex items-center gap-3 mx-auto"
                       >
                          <Check size={28} /> I Have Prayed This Prayer
                       </button>
                    </div>
                 </div>
              )}

              {step === 'CELEBRATE' && (
                 <div className="animate-in zoom-in">
                    <div className="relative inline-block mb-4">
                       <Star size={80} className="text-[#D4AF37] fill-[#D4AF37] animate-spin-slow" />
                       <Star size={80} className="text-[#D4AF37] fill-[#D4AF37] absolute top-0 left-0 animate-ping opacity-50" />
                    </div>
                    <h3 className="text-3xl font-bold text-[#4b3068] mb-4">Welcome to the Family!</h3>
                    <p className="text-lg text-slate-600 mb-8 font-medium">
                       The angels in heaven are rejoicing right now because of YOU! 
                       You are now a new creation. The old is gone, the new has come.
                    </p>
                    <div className="p-4 bg-green-50 text-green-800 rounded-xl border border-green-200 inline-block font-bold shadow-sm">
                       Your name is written in the Book of Life.
                    </div>
                 </div>
              )}
           </div>
        </div>

        {/* GUIDANCE SECTION (DAG HEWARD-MILLS) */}
        {step === 'CELEBRATE' && (
           <div className="animate-in slide-in-from-bottom-8 duration-1000">
              <div className="text-center mb-8">
                 <h3 className="text-3xl font-bold text-[#4b3068] mb-2">What Do I Do Now?</h3>
                 <p className="text-slate-600 font-medium italic">"Walk with us. We have a place for you."</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                 
                 {/* CHURCH */}
                 <a 
                    href="https://firstlovecenter.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#D4AF37] hover:-translate-y-2 transition-transform group text-center"
                 >
                    <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#D4AF37] transition-colors">
                       <MapPin className="text-[#D4AF37] group-hover:text-white" size={32} />
                    </div>
                    <h4 className="text-xl font-bold text-[#4b3068] mb-3">Find a Home</h4>
                    <p className="text-sm text-slate-600 mb-6">
                       You cannot grow alone. Join the <strong>First Love Church</strong> family. We have branches all over Nairobi and the world.
                    </p>
                    <span className="text-[#D4AF37] font-bold uppercase text-xs flex items-center justify-center gap-1">
                       Find Nearest Church <ExternalLink size={14} />
                    </span>
                 </a>

                 {/* BOOKS */}
                 <a 
                    href="https://www.daghewardmills.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#4b3068] hover:-translate-y-2 transition-transform group text-center"
                 >
                    <div className="w-16 h-16 bg-[#4b3068]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#4b3068] transition-colors">
                       <BookOpen className="text-[#4b3068] group-hover:text-white" size={32} />
                    </div>
                    <h4 className="text-xl font-bold text-[#4b3068] mb-3">Feed Your Spirit</h4>
                    <p className="text-sm text-slate-600 mb-6">
                       Read the powerful books by <strong>Bishop Dag Heward-Mills</strong>. Start with "Born Again". It will change your life.
                    </p>
                    <span className="text-[#4b3068] font-bold uppercase text-xs flex items-center justify-center gap-1">
                       Get Books <ExternalLink size={14} />
                    </span>
                 </a>

                 {/* MUSIC / PODCAST */}
                 <a 
                    href="https://youtube.com/@daghewardmillsvideos?si=Bqx9GhqJB-Yu7OFC" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-red-500 hover:-translate-y-2 transition-transform group text-center"
                 >
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500 transition-colors">
                       <PlayCircle className="text-red-500 group-hover:text-white" size={32} />
                    </div>
                    <h4 className="text-xl font-bold text-[#4b3068] mb-3">Listen Daily</h4>
                    <p className="text-sm text-slate-600 mb-6">
                       Faith comes by hearing. Listen to messages that will build your faith and keep you strong in the Lord.
                    </p>
                    <span className="text-red-500 font-bold uppercase text-xs flex items-center justify-center gap-1">
                       Watch Sermons <ExternalLink size={14} />
                    </span>
                 </a>

              </div>
           </div>
        )}

        {/* VERSES SECTION */}
        <div className="mt-16 mb-12">
           <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px bg-[#D4AF37] w-12 md:w-24"></div>
              <h3 className="text-xl md:text-2xl font-bold uppercase text-[#4b3068] tracking-widest text-center">Promises of God</h3>
              <div className="h-px bg-[#D4AF37] w-12 md:w-24"></div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {verses.map((v, i) => (
                 <div key={i} className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#D4AF37] hover:bg-[#FDFBF7] transition-colors group">
                    <p className="text-lg font-serif text-[#4b3068] mb-3 leading-relaxed italic group-hover:text-black">"{v.text}"</p>
                    <p className="text-right text-xs font-bold text-[#D4AF37] uppercase tracking-wide">— {v.ref}</p>
                 </div>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
};