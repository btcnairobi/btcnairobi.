import React from 'react';
import { PageLayout } from '../components/PageLayout';
import { Link } from 'react-router-dom';
import { HelpCircle } from 'lucide-react';

export const Basics: React.FC = () => {
  const chapters = [
    {
      title: "1. Inflation",
      text: "Inflation is the hidden tax. When governments print more money, your money buys less. It steals your time and energy.",
      questions: ["Who prints money?", "Does cash gain value?", "Is inflation theft?"]
    },
    {
      title: "2. Fiat Money",
      text: "Fiat is currency by decree. It is not backed by gold or anything physical. It is backed only by faith in politicians.",
      questions: ["Is fiat finite?", "Can it be printed?", "Who controls it?"]
    },
    {
      title: "3. Scarcity",
      text: "Bitcoin is the first absolutely scarce object. There will only ever be 21 million. No one can make more.",
      questions: ["What is the cap?", "Can we print Bitcoin?", "Is gold infinite?"]
    },
    {
      title: "4. Central Banks",
      text: "Central banks control the money supply. They decide interest rates and winners and losers. Bitcoin has no central bank.",
      questions: ["Do we elect them?", "Do they make errors?", "Are they necessary?"]
    },
    {
      title: "5. History of Money",
      text: "We used shells, beads, and gold. Paper was a receipt for gold. Now paper is just paper. Bitcoin is digital gold.",
      questions: ["Was salt money?", "Is paper durable?", "Is Bitcoin digital?"]
    },
    {
      title: "6. Properties",
      text: "Good money must be durable, portable, divisible, and scarce. Bitcoin does this better than gold or cash.",
      questions: ["Can you send gold?", "Does paper rot?", "Is Bitcoin portable?"]
    },
    {
      title: "7. Control",
      text: "Your bank can freeze your account. The government can seize your cash. Bitcoin is uncensorable money.",
      questions: ["Is the bank yours?", "Can Bitcoin be frozen?", "Do you need permission?"]
    },
    {
      title: "8. Savings",
      text: "Saving in fiat is like trying to fill a bucket with a hole in it. Bitcoin fixes your ability to save for the future.",
      questions: ["Does fiat leak?", "Is Bitcoin savings?", "What is time preference?"]
    },
    {
      title: "9. Freedom",
      text: "Money is half of every transaction. If you don't control your money, you don't control your life. Bitcoin is freedom.",
      questions: ["Is money speech?", "Is Bitcoin for everyone?", "Can you opt out?"]
    }
  ];

  return (
    <PageLayout title="Money" subtitle="Why we need Bitcoin">
      <div className="space-y-8">
        {chapters.map((chapter, idx) => (
          <div key={idx} className="border-2 border-slate-100 rounded-2xl p-8 hover:border-black transition-colors bg-slate-50">
            <h3 className="text-3xl font-bold uppercase font-display mb-4 text-black">{chapter.title}</h3>
            <p className="text-slate-800 text-xl mb-6 leading-relaxed font-medium">
              {chapter.text}
            </p>
            <div className="bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-[#F7931A] transition-colors group">
              <div className="flex items-center gap-2 mb-4">
                <HelpCircle className="text-[#F7931A]" size={24} />
                <p className="text-sm font-bold uppercase text-slate-500 tracking-wider">Click to Learn</p>
              </div>
              <ul className="space-y-3">
                {chapter.questions.map((q, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-[#F7931A] transition-colors"></div>
                    <Link 
                      to={`/education?q=${encodeURIComponent(q)}`} 
                      className="text-lg font-bold text-slate-600 hover:text-[#F7931A] transition-colors hover:underline decoration-2 underline-offset-4"
                    >
                      {q}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};