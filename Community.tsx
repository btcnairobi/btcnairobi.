import React from 'react';
import { PageLayout } from '../components/PageLayout';
import { 
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Github,
  Youtube,
  Send
} from 'lucide-react';

export const Community: React.FC = () => {
  const socials = [
    { name: "Twitter / X", icon: Twitter, color: "bg-black", url: "https://twitter.com/btcnairobi", handle: "@btcnairobi" },
    { name: "Telegram", icon: Send, color: "bg-blue-500", url: "https://t.me/btcnairobi", handle: "@btcnairobi" },
    { name: "Instagram", icon: Instagram, color: "bg-pink-600", url: "https://instagram.com/btcnairobi", handle: "@btcnairobi" },
    { name: "Facebook", icon: Facebook, color: "bg-blue-700", url: "https://facebook.com/btcnairobi", handle: "/btcnairobi" },
    { name: "LinkedIn", icon: Linkedin, color: "bg-blue-800", url: "https://linkedin.com/company/btcnairobi", handle: "/btcnairobi" },
    { name: "GitHub", icon: Github, color: "bg-slate-800", url: "https://github.com/btcnairobi", handle: "@btcnairobi" },
    { name: "YouTube", icon: Youtube, color: "bg-red-600", url: "https://youtube.com/@btcnairobi", handle: "@btcnairobi" },
  ];

  return (
    <PageLayout title="Community" subtitle="Strength in Numbers">
      <div className="space-y-6">

        {/* --- SOCIAL MEDIA GRID --- */}
        <div>
          <h3 className="font-display font-bold uppercase text-2xl text-center mb-6">Connect With Us</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {socials.map((social, i) => {
              const Icon = social.icon;
              return (
                <a 
                  key={i}
                  href={social.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white p-6 rounded-2xl border-4 border-black shadow-hard hover:-translate-y-1 hover:shadow-hard-sm transition-all group flex flex-col items-center text-center"
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 text-white border-2 border-black shadow-sm ${social.color}`}>
                    <Icon size={32} />
                  </div>
                  <h4 className="font-display font-bold uppercase text-xl mb-1">{social.name}</h4>
                  <p className="text-xs font-bold text-slate-400 font-sans group-hover:text-black transition-colors">
                    {social.handle}
                  </p>
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </PageLayout>
  );
};