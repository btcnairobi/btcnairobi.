import React, { useEffect } from 'react';
import { Tile } from '../components/Tile';
import { 
  Zap, 
  MapPin, 
  Newspaper, 
  HandHeart, 
  Mail, 
  Users
} from 'lucide-react';

export const Home: React.FC = () => {
  
  useEffect(() => {
    // Set background to black when on Home
    document.body.style.backgroundColor = '#000000';
    
    // Revert to orange when leaving Home
    return () => {
      document.body.style.backgroundColor = '#F7931A';
    };
  }, []);

  const tileStyle = "border-[#F7931A] shadow-[4px_4px_0px_0px_#F7931A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#F7931A]";

  return (
    <div className="max-w-6xl mx-auto pb-12">
      {/* Hero / Welcome */}
      <div className="py-12 px-4 text-center md:text-left md:flex md:items-end md:justify-between mb-6">
        <div>
          <p className="text-white font-bold text-[21px] max-w-lg font-sans tracking-wide drop-shadow-sm opacity-90 mx-auto md:mx-0 italic">
            #keepspedn
          </p>
        </div>
        <div className="hidden md:block">
           <div className="bg-black text-white px-6 py-3 rounded-xl font-bold uppercase text-sm -rotate-2 font-sans shadow-[4px_4px_0px_0px_#F7931A] border-2 border-[#F7931A]">
             1 BTC = 1 BTC
           </div>
        </div>
      </div>

      {/* App Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        
        {/* Tool 1 */}
        <Tile 
          title="Start" 
          subtitle="Get a Wallet" 
          description="Download a wallet. Secure your seed. Receive your first sats." 
          to="/get-started" 
          icon={Zap}
          className={tileStyle} 
        />
        
        {/* Tool 2 */}
        <Tile 
          title="Spend" 
          subtitle="Shop Local" 
          description="Find merchants in Nairobi who accept Bitcoin." 
          to="/merchants" 
          icon={MapPin}
          className={tileStyle}  
        />

        {/* Tool 3 */}
        <Tile 
          title="Community" 
          subtitle="Join the Tribe" 
          description="Meetups, projects, and local builders." 
          to="/community" 
          icon={Users}
          className={tileStyle}  
        />

        {/* Tool 4 */}
        <Tile 
          title="Articles" 
          subtitle="Latest Updates" 
          description="Uncensored thoughts and stories from the Nairobi community." 
          to="/articles" 
          icon={Newspaper}
          className={tileStyle}  
        />

        {/* Tool 5 */}
        <Tile 
          title="Give" 
          subtitle="Support Us" 
          description="Support our open-source projects and educational events." 
          to="/give" 
          icon={HandHeart}
          iconClassName="text-red-500"
          className={tileStyle}  
        />

        {/* Tool 6 */}
        <Tile 
          title="Contact" 
          subtitle="Get in Touch" 
          description="Questions about the community? Send us a message." 
          to="/contact" 
          icon={Mail}
          className={tileStyle}  
        />

      </div>
    </div>
  );
};