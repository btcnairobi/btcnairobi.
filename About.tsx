import React from 'react';
import { PageLayout } from '../components/PageLayout';
import { BlankaText } from '../components/BlankaText';
import {
  Users,
  Target,
  Heart,
  BookOpen,
  MapPin,
  Lightbulb,
  History,
  CheckCircle2,
  ShieldCheck,
  HeartHandshake,
  HandHelping,
  Scale
} from 'lucide-react';

export const About: React.FC = () => {
  
  const principles = [
    { label: 'Inclusion', icon: Users, color: 'bg-blue-100 text-blue-800 border-blue-300' },
    { label: 'Integrity', icon: ShieldCheck, color: 'bg-green-100 text-green-800 border-green-300' },
    { label: 'Respect', icon: HeartHandshake, color: 'bg-pink-100 text-pink-800 border-pink-300' },
    { label: 'Service', icon: HandHelping, color: 'bg-yellow-100 text-yellow-800 border-yellow-300' },
    { label: 'Social Justice', icon: Scale, color: 'bg-purple-100 text-purple-800 border-purple-300' },
  ];

  return (
    <PageLayout title="About Us" subtitle="Empowering Bitcoin Adoption">
      <div className="space-y-6">

        {/* --- MISSION / VISION / PHILOSOPHY GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* MISSION */}
            <div className="bg-white border-4 border-black rounded-3xl p-6 shadow-hard flex flex-col hover:-translate-y-1 transition-transform">
                <div className="flex items-center gap-3 mb-4">
                    <Target className="text-[#F7931A]" size={28} />
                    <BlankaText text="Mission" as="h3" className="text-2xl" />
                </div>
                <p className="text-xl font-bold text-slate-700 flex-grow">
                  Empowering Bitcoin Adoption
                </p>
            </div>

            {/* VISION */}
            <div className="bg-white border-4 border-black rounded-3xl p-6 shadow-hard flex flex-col hover:-translate-y-1 transition-transform">
                <div className="flex items-center gap-3 mb-4">
                    <Lightbulb className="text-[#F7931A]" size={28} />
                    <BlankaText text="Vision" as="h3" className="text-2xl" />
                </div>
                <p className="text-lg font-medium text-slate-700 flex-grow">
                  To empower a community where bitcoin is continuously used as a medium of exchange, a unit of account, and a store of value
                </p>
            </div>

            {/* PHILOSOPHY */}
            <div className="bg-white border-4 border-black rounded-3xl p-6 shadow-hard flex flex-col hover:-translate-y-1 transition-transform">
                <div className="flex items-center gap-3 mb-4">
                    <Heart className="text-[#F7931A]" size={28} />
                    <BlankaText text="Philosophy" as="h3" className="text-2xl" />
                </div>
                <p className="text-xl font-bold uppercase text-slate-800 tracking-widest flex-grow">
                  I am because we are
                </p>
            </div>
        </div>

        {/* --- PRINCIPLES --- */}
        <div className="bg-slate-900 text-white border-4 border-black rounded-3xl p-6 md:p-8 shadow-hard">
           <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 className="text-[#F7931A]" size={28} />
              <BlankaText text="Our Principles" as="h3" className="text-2xl text-white" />
           </div>
           <div className="flex flex-wrap gap-4">
              {principles.map((p, i) => (
                 <div key={i} className={`${p.color} border-2 rounded-xl px-5 py-3 font-bold uppercase tracking-wider flex items-center gap-3 hover:scale-105 transition-transform cursor-default shadow-sm`}>
                    <p.icon size={20} />
                    {p.label}
                 </div>
              ))}
           </div>
        </div>

        {/* --- WHO WE ARE --- */}
        <div className="bg-white border-4 border-black rounded-3xl p-6 md:p-8 shadow-hard">
           <div className="flex items-center gap-3 mb-4">
              <Users className="text-[#F7931A]" size={28} />
              <BlankaText text="Who We Are" as="h3" className="text-2xl" />
           </div>
           <p className="text-lg text-slate-700 leading-relaxed font-medium mb-4">
             Bitcoin Nairobi is a grassroots Bitcoin Circular Economy focused on education, adoption, and innovation. Our purpose is to make Bitcoin practical and usable for everyday people, not as speculation, but as real money that brings dignity, ownership, and financial freedom.
           </p>
           <p className="text-lg text-slate-700 leading-relaxed font-medium">
             We are building a community where Bitcoin is learned, earned, spent, and understood across Nairobi and beyond.
           </p>
        </div>

        {/* --- OUR STORY --- */}
        <div className="bg-[#F7931A] text-black border-4 border-black rounded-3xl p-6 md:p-8 shadow-hard relative overflow-hidden">
           <div className="relative z-10">
             <div className="flex items-center gap-3 mb-6">
                <History className="text-white" size={28} />
                <BlankaText text="Our Story" as="h3" className="text-2xl" />
             </div>
             
             <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl border-2 border-black font-medium text-slate-800 text-lg text-left">
                <p className="mb-4">
                  Bitcoin Nairobi began with the journey of its founder, <strong>Martin Mutonga</strong>. While working as a Data Analyst at <strong>Africa AI</strong>, Martin came across a crypto advertisement that sparked his curiosity. This moment pushed him into a deep exploration of Bitcoin. He read the <strong>Bitcoin Whitepaper repeatedly</strong>, day after day, trying to understand every detail. In February 2022, he joined <strong>X (Twitter)</strong> and connected with global Bitcoiners who strengthened his desire to build something meaningful.
                </p>
                <p className="mb-4">
                  Over time, he noticed a major problem across Kenya and Africa: <strong>people were not adopting Bitcoin because there was no proper Bitcoin education.</strong> Determined to change this, Martin set out to build a project that would make Bitcoin simple, local, and accessible. He named it <strong>Bitcoin Nairobi</strong> because Nairobi is the economic heart of East Africa, a symbolic capital of African innovation, and because the name resonated with locals who often believed Bitcoin was “for the West only.”
                </p>
                <p>
                  In February 2024 to 2025, he launched Bitcoin Nairobi with the goal of enabling people to truly adopt Bitcoin, not just hear about it. Today, with support from Bitcoiners around the world, Martin is living the mission and vision of Bitcoin Nairobi and hopes this movement will empower <strong>millions of Africans to become sovereign</strong>.
                </p>
             </div>
           </div>
           
           {/* Decorative */}
           <div className="absolute top-0 right-0 p-12 opacity-10">
              <BookOpen size={200} />
           </div>
        </div>

        {/* --- WHAT WE DO --- */}
        <div className="bg-white border-4 border-black rounded-3xl p-6 md:p-8 shadow-hard">
           <BlankaText text="What We Do" as="h3" className="text-2xl mb-6 block" />
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-6 hover:border-[#F7931A] transition-colors shadow-sm">
                 <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-black mb-4 shadow-sm">
                    <BookOpen className="text-[#F7931A]" size={24} />
                 </div>
                 <h4 className="font-bold uppercase text-lg mb-2">1. Bitcoin Education</h4>
                 <p className="text-sm font-medium text-slate-600">
                    We teach the fundamentals of Bitcoin, financial freedom, and digital sovereignty through structured workshops and community programs.
                 </p>
              </div>

              <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-6 hover:border-[#F7931A] transition-colors shadow-sm">
                 <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-black mb-4 shadow-sm">
                    <MapPin className="text-[#F7931A]" size={24} />
                 </div>
                 <h4 className="font-bold uppercase text-lg mb-2">2. Merchant Adoption</h4>
                 <p className="text-sm font-medium text-slate-600">
                    We help local businesses accept Bitcoin as a real medium of exchange, enabling fast, borderless, and secure transactions.
                 </p>
              </div>

              <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-6 hover:border-[#F7931A] transition-colors shadow-sm">
                 <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-black mb-4 shadow-sm">
                    <Users className="text-[#F7931A]" size={24} />
                 </div>
                 <h4 className="font-bold uppercase text-lg mb-2">3. Community & Innovation</h4>
                 <p className="text-sm font-medium text-slate-600">
                    We bring together builders, learners, and merchants to collaborate, innovate, and strengthen Kenya’s growing Bitcoin ecosystem.
                 </p>
              </div>
           </div>
        </div>

      </div>
    </PageLayout>
  );
};