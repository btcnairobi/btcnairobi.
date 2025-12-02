import React from 'react';
import { PageLayout } from '../components/PageLayout';
import { Link } from 'react-router-dom';
import { HelpCircle } from 'lucide-react';

export const System: React.FC = () => {
  const chapters = [
    {
      title: "1. Decentralized",
      text: "There is no CEO. There is no headquarters. Bitcoin is run by thousands of people all over the world.",
      questions: ["Who runs Bitcoin?", "Is there a boss?", "Can it be shut down?"]
    },
    {
      title: "2. The Blockchain",
      text: "A chain of digital boxes (blocks) containing transactions. Everyone has a copy. You cannot cheat the history.",
      questions: ["Is it public?", "Can you delete it?", "Does everyone see it?"]
    },
    {
      title: "3. Mining",
      text: "Miners use energy to secure the network. They guess a random number to add the next block. It is a digital lottery.",
      questions: ["Does it use energy?", "Is it a lottery?", "Do miners secure it?"]
    },
    {
      title: "4. Nodes",
      text: "A node is a computer that checks the rules. If a miner cheats, the nodes reject the block. You should run one.",
      questions: ["Do nodes verify?", "Can you run one?", "Do nodes trust miners?"]
    },
    {
      title: "5. Private Keys",
      text: "Your key is a secret number. It signs transactions. If you lose it, your money is gone. Not your keys, not your coins.",
      questions: ["Is it secret?", "Does it sign?", "Can you reset it?"]
    },
    {
      title: "6. Transactions",
      text: "Peer to peer. No middleman. You send value directly to another person, anywhere in the world, instantly.",
      questions: ["Is there a bank?", "Is it global?", "Is it peer-to-peer?"]
    },
    {
      title: "7. Difficulty",
      text: "Every 2 weeks, the network adjusts how hard it is to mine. This keeps the blocks coming every 10 minutes.",
      questions: ["Does it adjust?", "Is it 10 minutes?", "Is it automatic?"]
    },
    {
      title: "8. The Halving",
      text: "Every 4 years, the reward for miners is cut in half. This is how Bitcoin stays scarce forever.",
      questions: ["Is it 4 years?", "Does supply drop?", "Is it predictable?"]
    },
    {
      title: "9. Lightning",
      text: "A layer on top of Bitcoin for small, fast payments. It is instant and almost free. Perfect for coffee.",
      questions: ["Is it fast?", "Is it cheap?", "Is it for coffee?"]
    }
  ];

  return (
    <PageLayout title="System" subtitle="How it Works">
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