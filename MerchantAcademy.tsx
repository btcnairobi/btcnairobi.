import React, { useState, useEffect } from 'react';
import { PageLayout } from '../components/PageLayout';
import { useNavigate } from 'react-router-dom';
import { 
  Store, 
  Calculator, 
  Smartphone, 
  ChevronRight, 
  BookOpen, 
  CheckCircle2, 
  X,
  Play,
  Lightbulb,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Users,
  Briefcase,
  Coins,
  Globe,
  Bookmark,
  Share2,
  Copy,
  ChevronLeft,
  Check,
  Trophy,
  Heart,
  FastForward,
  Twitter,
  MessageCircle,
  Send,
  Linkedin,
  Facebook,
  Mail,
  Radio
} from 'lucide-react';

// --- TYPES ---
interface SubTopic {
  title: string;
  content: string[]; // Array of paragraphs
}

interface Topic {
  title: string;
  description: string; // Max 3 sentences
  subtopics: SubTopic[];
}

interface Chapter {
  id: number;
  title: string;
  icon: any;
  color: string;
  topics: Topic[];
  activity: string;
}

// --- DATA: MERCHANT ACADEMY ---
const merchantCourseData: Chapter[] = [
  {
    id: 1,
    title: "Understanding Why Money Is Broken For Your Small Business",
    icon: TrendingUp,
    color: "bg-red-500",
    activity: "Calculate your total monthly fees from last month's bank statement.",
    topics: [
      {
        title: "How Inflation Is Stealing The Profit Margins Of Your Business",
        description: "Inflation is not just a news headline; it is a hidden tax on your inventory. When the currency loses value, you have to work twice as hard to buy the same amount of stock.",
        subtopics: [
          {
            title: "The Silent Thief That Takes Your Inventory Value Away",
            content: [
              "Every single year, the cost of restocking your shop gets higher, but your customers complain if you raise prices. This is the direct result of inflation, where the money you earned yesterday buys less today. As a merchant, you are running on a treadmill that keeps speeding up, forcing you to sell more units just to stay in the same financial position you were in last year.",
              "Consider the cash you keep in your register or business savings account for emergencies. If inflation is at 15%, that money is literally rotting away, losing a significant portion of its purchasing power. It is like storing your wealth in a bucket with a hole in the bottom; no matter how hard you work to fill it, value is constantly leaking out.",
              "This phenomenon destroys the ability of small businesses to plan for the long term or expand their operations. Instead of saving profits to open a new branch in five years, you are forced to spend everything immediately on stock before the money loses value. This trap keeps you in survival mode forever."
            ]
          },
          {
            title: "Why Raising Prices Does Not Actually Solve The Problem",
            content: [
              "Many merchants believe the solution to inflation is simply to increase the price tags on their shelves. However, this often leads to a loss of loyal customers who are also suffering from the same economic pressure. When you raise prices, you are not actually making more profit; you are simply adjusting for the devalued currency.",
              "Furthermore, there is a delay between when your suppliers raise their costs and when you can safely raise yours. During this lag period, your business eats the loss, shrinking your margins significantly. You are effectively subsidizing the inflation for your customers out of your own pocket.",
              "The real issue is not the price of the goods, but the measuring stick (the currency) you are using. If you measure your effort in a currency that is constantly shrinking, you will always feel like you are underpricing your hard work."
            ]
          },
          {
            title: "How Supply Chain Costs Increase Faster Than Revenue",
            content: [
              "Your suppliers are smart; they anticipate inflation and raise their prices preemptively. This means your cost of goods sold (COGS) often rises faster than the general inflation rate. By the time the goods reach your shelf, the profit margin has already been squeezed.",
              "Transportation costs are a major factor here, as fuel prices are extremely sensitive to currency weakness. When the local shilling drops, fuel goes up, transport goes up, and suddenly your delivery fees have doubled. These logistical costs eat directly into the profit you thought you were making.",
              "This creates a chaotic business environment where you can never be sure what your replacement cost will be. You might sell an item for 1000 KES today, only to find out tomorrow that buying it back from the supplier costs 1100 KES. You have effectively paid the customer to take the item away."
            ]
          },
          {
            title: "The Impact Of Currency Devaluation On Imported Goods",
            content: [
              "If your business relies on anything imported from abroad, you are at the mercy of the foreign exchange rate. When your local currency crashes against the dollar, your import costs skyrocket overnight. This is completely outside of your control, yet it can destroy your business model in a single week.",
              "Small merchants often cannot access favorable hedging instruments that big corporations use. You are forced to pay the spot rate at the forex bureau, often with high fees and bad spreads. This puts you at a massive competitive disadvantage.",
              "Bitcoin offers a potential exit from this forex nightmare by providing a neutral, global money. Instead of scrambling for dollars that are hard to find, a Bitcoin standard allows for peer-to-peer settlement that bypasses the broken local banking rails."
            ]
          },
          {
            title: "Why Saving In Fiat Currency Is A Losing Strategy",
            content: [
              "Traditional business advice tells you to save cash for a rainy day, but in a high-inflation environment, this is bad advice. Cash savings are a melting ice cube; the longer you hold them, the smaller they get. This forces merchants to make risky investments just to beat inflation.",
              "You might be tempted to buy excess stock just to get rid of cash, but this ties up your capital in illiquid assets that might spoil or go out of fashion. You lose the flexibility to pivot your business because your wealth is trapped in physical boxes rather than a liquid store of value.",
              "True savings should require no risk to maintain their purchasing power. You should be able to work hard, park your wealth, and come back ten years later to find it buys the same amount or more. Fiat currency has fundamentally broken this essential function of money."
            ]
          },
          {
            title: "The Psychological Toll Of Constant Financial Uncertainty",
            content: [
              "Beyond the math, there is a heavy mental tax on merchants operating in a broken monetary system. The constant stress of repricing goods, negotiating with suppliers, and worrying about the exchange rate leads to burnout. You spend more time managing money than managing your business.",
              "This uncertainty prevents you from hiring new staff or investing in better equipment. You become paralyzed by the fear that the money you spend today won't be recoverable tomorrow. It stifles innovation and keeps your business small and defensive.",
              "Adopting a hard money standard like Bitcoin changes your time preference. When you know your savings are secure from debasement, you can start thinking years into the future. You can build a business that lasts for generations."
            ]
          }
        ]
      },
      {
        title: "The High Cost Of Accepting Digital Card Payments",
        description: "Credit card companies and mobile money providers take a huge cut of your hard-earned revenue. These fees might look small, but they compound over time.",
        subtopics: [
          {
            title: "Understanding The Hidden Fees In Every Transaction",
            content: [
              "When you see a 3% fee, it doesn't sound like much, but that is 3% of your revenue, not your profit. If your profit margin is only 10%, a 3% transaction fee is actually taking 30% of your take-home pay. You are effectively sharing a third of your hard work with a bank that did nothing but move digits.",
              "Beyond the percentage rate, there are often fixed fees, monthly terminal rentals, and statement charges. These fixed costs hurt small transactions the most. If you sell low-cost items like coffee or bread, the transaction fees can eat up almost the entire profit margin.",
              "The payment processing industry is designed to extract maximum value from merchants while providing the bare minimum service required to keep the system running."
            ]
          },
          {
            title: "The Danger Of Chargebacks And Payment Reversals",
            content: [
              "One of the biggest risks with cards is the chargeback. A customer can buy an item, leave your store, and then call their bank to claim they never made the purchase. The bank almost always sides with the customer, forcibly taking the money back from your account.",
              "Not only do you lose the money from the sale, but you also lose the item you sold, and you are slapped with a 'chargeback fee' by the processor. It is a triple loss that can devastate small businesses.",
              "Bitcoin transactions are final and irreversible. Once the money is in your wallet, it is yours. There is no central authority that can reach into your pocket and reverse a payment because a customer decided to lie."
            ]
          },
          {
            title: "Why Settlement Delays Hurt Your Cash Flow",
            content: [
              "When a customer pays by card, that money does not land in your bank account immediately. It can take 2 to 3 business days. This 'float' period creates a cash flow gap where you have sold the goods but cannot yet use the money to restock.",
              "Banks profit from this delay by holding your money and earning interest on it. For a business that operates on tight margins, waiting three days for funds can mean missing a bill payment.",
              "With Bitcoin Lightning Network, settlement is instant. The moment the customer scans your QR code, the value is in your possession. You can immediately use those funds to pay a supplier."
            ]
          },
          {
            title: "The Problem With Renting Your Payment Hardware",
            content: [
              "Payment terminals (POS machines) are often rented, not owned. You pay a monthly fee just to have the privilege of accepting money. If you stop paying the rent, they come and take the machine away.",
              "These machines are clunky, require specialized paper rolls, and rely on phone lines. When the machine breaks, you are stuck waiting for a technician while losing sales.",
              "Bitcoin requires no specialized hardware. You can use any smartphone, tablet, or old laptop you already own. There is no rent, no permission needed, and no proprietary device to return."
            ]
          },
          {
            title: "How Middlemen Can Freeze Your Business Accounts",
            content: [
              "When you use a third-party processor, you are operating on their permission. If their algorithm flags your business as 'high risk', they can freeze your entire account instantly. Your money is held hostage.",
              "A sudden freeze can mean you cannot pay rent or staff, leading to closure. You have to beg a customer support agent to release your own money.",
              "Bitcoin is censorship-resistant. No one can freeze your wallet or stop you from receiving a payment. As long as you have your private keys, you are the bank."
            ]
          },
          {
            title: "Data Privacy And Selling Customer Information",
            content: [
              "Payment processors track exactly what your customers buy, when they buy it, and for how much. This data is often sold to advertisers or competitors without your consent.",
              "Your business trends and sales volume are visible to the bank. You are leaking competitive intelligence with every swipe.",
              "Bitcoin is peer-to-peer and pseudonymous. The transaction happens strictly between you and the customer. There is no third-party data broker spying on the transaction."
            ]
          }
        ]
      },
      {
        title: "Navigating The Complex World Of Business Banking",
        description: "Banks are not your friends; they are businesses designed to profit from your deposits. The requirements for opening and maintaining accounts exclude many entrepreneurs.",
        subtopics: [
          {
            title: "The Difficulty Of Opening A Merchant Account",
            content: [
              "For many young entrepreneurs in Nairobi, just opening a business bank account is a hurdle. The paperwork requirements, minimum deposits, and KYC laws act as a barrier to entry.",
              "This exclusion forces people to operate entirely in cash, which is risky and limits growth. You cannot accept digital payments or access broader markets without that bank account ticket.",
              "Bitcoin is open to everyone. It does not care about your age, gender, race, or social status. You can download a wallet app in seconds and start accepting global payments immediately."
            ]
          },
          {
            title: "Why Bank Loans Are Often A Trap",
            content: [
              "Banks lend you money created out of thin air, but demand you pay it back with real labor plus interest. This debt trap is how wealth is transferred from the poor to the rich.",
              "If your business has a bad month, the bank doesn't care. They will compound penalties and interest, potentially seizing your assets. The risk is entirely on you.",
              "Bootstrapping your business with hard money (savings) is slower but much safer. When you grow organically without debt, you own 100% of your business and are resilient to shocks."
            ]
          },
          {
            title: "The Risk Of Custodial Account Seizures",
            content: [
              "Money in a bank is not legally yours; it is a loan you have made to the bank. In the event of a banking crisis, the bank can legally take your deposits to save themselves.",
              "Furthermore, tax authorities can order banks to seize your accounts without a trial. You wake up one morning to find your balance at zero.",
              "Self-custody of Bitcoin means you hold the physical bearer asset. It cannot be bailed-in, garnished, or seized remotely. It shifts the power dynamic back to the individual."
            ]
          },
          {
            title: "Limited Operating Hours And Weekend Delays",
            content: [
              "Banks operate on 'banker's hours'. Business doesn't stop on weekends, but the legacy financial system does. If you need to make an urgent payment on Sunday, you simply can't.",
              "This friction slows down commerce. You have to wait, and that waiting costs you money and opportunity.",
              "The Bitcoin network has never slept. It has run 24/7/365 with 99.98% uptime since 2009. You can send or receive billions of dollars at 3 AM on Christmas Day instantly."
            ]
          },
          {
            title: "High Costs Of International Wire Transfers",
            content: [
              "If you need to pay a supplier in China or receive money from a partner in Europe, the banking system is a nightmare. Swift transfers take days, cost huge fees, and offer terrible exchange rates.",
              "Sometimes wires get lost, requiring weeks of investigation. This creates massive friction for international trade, cutting small merchants off from the global market.",
              "Bitcoin is natively global. Sending money to Beijing is exactly the same as sending it to your neighbor. It takes the same time and costs the same tiny fee."
            ]
          },
          {
            title: "The Lack Of Transparency In Banking Fees",
            content: [
              "Bank statements are often intentionally confusing. They hide fees in complex structures and use vague terminology. You often don't know what a service truly costs until after you have been charged.",
              "This opacity prevents free market competition. It is hard to shop around when you can't even figure out what you are currently paying.",
              "Bitcoin is open source and transparent. The fee market is public. You can calculate the exact cost of a transaction before you send it. You see exactly what is happening with your money."
            ]
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Discovering Bitcoin As A Better Way To Get Paid",
    icon: Coins,
    color: "bg-[#F7931A]",
    activity: "Install a wallet on your phone and back up the seed phrase.",
    topics: [
      {
        title: "Why Bitcoin Is Digital Cash And Not Just Tech",
        description: "Forget the technology hype. Bitcoin is simply digital cash. It works like a physical coin but moves over the internet.",
        subtopics: [
          {
            title: "Peer To Peer Means Person To Person Payments",
            content: [
              "When you hand someone a 100 shilling note, there is no bank between you. You hand it over, they take it, and the deal is done. This is 'Peer-to-Peer'. Digital payments like M-Pesa or Visa put a middleman in that handshake.",
              "Bitcoin removes the middleman. When a customer sends you Bitcoin, it goes directly from their wallet to yours. It is like teleporting a gold coin into your pocket. There is no server at a headquarters authorizing the deal.",
              "This direct connection builds community. It makes commerce personal again. You are not transacting through a faceless corporation; you are transacting human to human."
            ]
          },
          {
            title: "No Middlemen Taking A Cut Of Your Work",
            content: [
              "In a traditional digital payment, up to 7 intermediaries can touch your money before it reaches you (Gateway, Processor, Card Network, Issuing Bank, Acquiring Bank, etc). Each one takes a tiny fee.",
              "With Bitcoin, there are only two parties: the sender and the receiver. The 'fee' goes to the miners or node operators who secure the network, but this fee is often negligible compared to banking fees, especially on the Lightning Network.",
              "Keeping 100% of your sale price means you can offer better prices to customers or improve your own profit margins. It is efficient economics."
            ]
          },
          {
            title: "Money That Cannot Be Reversed Or Charged Back",
            content: [
              "Cash is bearer instrument; once you hand it over, you can't magically call it back. Bitcoin replicates this property digitally.",
              "This protects merchants from 'friendly fraud' where customers dispute legitimate charges. It simplifies your accounting because you know that 'Received' truly means 'Received'.",
              "For high-value items, this certainty is invaluable. You can hand over the goods with zero anxiety about the payment being clawed back weeks later."
            ]
          },
          {
            title: "Settlement Speed That Beats The Banks",
            content: [
              "Bank transfers settle in T+2 days. Bitcoin on-chain settles in ~10-60 minutes. Bitcoin Lightning settles in milliseconds.",
              "This velocity of money allows you to turn over your inventory faster. You sell, you get paid, you restock. No waiting for funds to clear.",
              "Faster settlement means you need less working capital floating in the system, making your business leaner and more efficient."
            ]
          },
          {
            title: "A Universal Standard For Value",
            content: [
              "Bitcoin is the same in Kenya as it is in Japan, Brazil, or the US. It is the world's first global currency protocol.",
              "By accepting Bitcoin, you are speaking a global financial language. You don't need to worry about exchange rates if you price in sats and keep in sats.",
              "It connects your local Duka simply and directly to the global economy without needing permission from a forex bureau."
            ]
          },
          {
            title: "Digital Cash For A Digital World",
            content: [
              "As the world moves online, cash is disappearing. But digital fiat is surveillance money. Bitcoin preserves the privacy and freedom of cash in the digital realm.",
              "It allows you to sell goods online or over WhatsApp/Telegram with the same ease and privacy as a face-to-face cash deal.",
              "You can export your local crafts to the world and get paid instantly, something that was nearly impossible with cash."
            ]
          }
        ]
      },
      {
        title: "The Hardest Money Ever Created In Human History",
        description: "Bitcoin cannot be printed. It has a strictly fixed supply, making it the best store of value for your business savings.",
        subtopics: [
          {
            title: "The 21 Million Hard Cap",
            content: [
              "There will only ever be 21 million Bitcoin. This number is hard-coded into the protocol and enforced by thousands of independent nodes.",
              "This is the opposite of fiat currency, which can be printed in infinite amounts by politicians. Infinite supply leads to zero value.",
              "Owning 1 Bitcoin means you own 1/21-millionth of the entire network forever. Your share can never be diluted."
            ]
          },
          {
            title: "Unforgeable Costliness (Proof of Work)",
            content: [
              "Bitcoin is backed by real-world energy. Miners must expend electricity to write transactions. This makes it incredibly expensive to attack or fake.",
              "You cannot 'fake' a Bitcoin. You either have the work to prove it, or you don't. This creates absolute truth in the ledger.",
              "This energy wall protects your savings from hackers and state-level attacks, making it the most secure financial network on earth."
            ]
          },
          {
            title: "Decentralization As Security",
            content: [
              "There is no CEO of Bitcoin. There is no headquarters. No one person controls the code. It is run by the consensus of its users.",
              "This means no one can corrupt it or change the rules to benefit themselves. The rules apply equally to everyone.",
              "For a merchant, this means the money you earn today won't be changed or devalued by a policy decision made in a boardroom far away."
            ]
          },
          {
            title: "Why It Cannot Be Debased",
            content: [
              "Throughout history, emperors and governments have shaved coins or printed paper to steal value from the people. This is debasement.",
              "Bitcoin fixes this. The issuance schedule (inflation rate) is fixed and decreases over time (The Halving). It is predictable math, not unpredictable politics.",
              "Your hard work is stored in a vessel that cannot leak."
            ]
          },
          {
            title: "Auditable By Anyone",
            content: [
              "You don't have to trust a bank's monthly statement. You can run your own node and verify the entire history of Bitcoin yourself.",
              "Every single transaction since 2009 is public. You can verify that the supply is exactly what it claims to be.",
              "This radical transparency eliminates the need for trust. 'Don't Trust, Verify' is the motto."
            ]
          },
          {
            title: "Long Term Store of Value",
            content: [
              "Because it is scarce and secure, Bitcoin has historically appreciated in value against all fiat currencies over 4-year cycles.",
              "It is the best technology we have for sending value across time. Saving in Bitcoin allows you to transport your purchasing power into the future.",
              "It protects the time and energy you spent building your business."
            ]
          }
        ]
      },
      {
        title: "A Global Network That Never Sleeps Or Closes",
        description: "Business is global and 24/7. Your money should be too. Bitcoin has no banking hours.",
        subtopics: [
          {
            title: "24/7/365 Uptime",
            content: [
              "The Bitcoin network has been running for over 99.98% of the time since Jan 3, 2009. It does not close for holidays, weekends, or maintenance.",
              "You can do business at 3 AM on a Sunday. You are never restricted by arbitrary opening hours.",
              "This reliability is crucial for a modern, always-on economy."
            ]
          },
          {
            title: "No Borders For Commerce",
            content: [
              "The Bitcoin network does not know what a country is. It does not know borders. Sending sats to your neighbor is the same code as sending them to Antarctica.",
              "This erases the friction of international trade. You can sell your goods to anyone on earth with an internet connection.",
              "It is the first truly native currency of the internet."
            ]
          },
          {
            title: "Permissionless Innovation",
            content: [
              "You don't need to ask Visa or a Bank for permission to build a Bitcoin app or accept payments. It is open permissionless infrastructure.",
              "This allows developers to build amazing tools (like Lightning POS apps) that compete to serve you better.",
              "The ecosystem evolves rapidly because anyone can contribute to it."
            ]
          },
          {
            title: "Reliable Infrastructure",
            content: [
              "Bitcoin nodes are distributed all over the world. Even if the internet goes down in an entire continent, the network survives elsewhere.",
              "You can even transact via satellite or ham radio if the internet is blocked. It is the most robust network humanity has built.",
              "Your business is not dependent on a single local server farm."
            ]
          },
          {
            title: "Global Liquidity",
            content: [
              "Bitcoin is traded 24/7 in every country. There is massive liquidity, meaning you can always find a buyer or seller.",
              "You are never 'stuck' with Bitcoin. It is arguably the most liquid asset on the planet after the US Dollar.",
              "This makes it a safe asset to hold on your balance sheet."
            ]
          },
          {
            title: "Always Open For Business",
            content: [
              "In a world where speed matters, waiting for 'Monday morning' to settle a deal is archaic. Bitcoin moves at the speed of information.",
              "This aligns money with the reality of the internet age.",
              "Your business can operate at full speed, all the time."
            ]
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Setting Up Your Business To Accept Digital Payments Securely",
    icon: Smartphone,
    color: "bg-blue-500",
    activity: "Perform a test transaction of 100 sats with a friend.",
    topics: [
      {
        title: "Choosing The Right Wallet For Your Daily Operations",
        description: "Not all wallets are equal. For a business, you need reliability, speed, and specific merchant features.",
        subtopics: [
          {
            title: "Custodial vs Non-Custodial Wallets",
            content: [
              "A custodial wallet (like an exchange) holds keys for you. It's easy but risky. A non-custodial wallet gives you full control. For merchants, we recommend non-custodial (or self-custodial) to ensure you own your revenue.",
              "However, for small daily petty cash, a custodial Lightning wallet (like Wallet of Satoshi) can be convenient. Just sweep funds to cold storage often.",
              "The goal is always to move towards full self-custody where you are the bank."
            ]
          },
          {
            title: "Lightning Wallets for Speed",
            content: [
              "For retail, you need speed. Customers won't wait 10 minutes. You must use a Lightning Network enabled wallet.",
              "Top recommendations for Nairobi: Blink (great for stables/speed), Phoenix (self-custodial), or Breez (POS features).",
              "These apps settle payments instantly, making the checkout experience faster than a credit card."
            ]
          },
          {
            title: "On-Chain Wallets for Treasury",
            content: [
              "Do not keep your life savings in a Lightning spending wallet. Move large profits to an On-Chain wallet.",
              "Think of Lightning as your cash register (quick access) and On-Chain as your vault (secure storage).",
              "Good on-chain wallets include BlueWallet, Sparrow (Desktop), or Green."
            ]
          },
          {
            title: "Dedicated POS Modes",
            content: [
              "Some wallets have a specific 'Merchant Mode' or 'POS Mode'. This creates a clean keypad interface for staff to just type numbers and show a QR code.",
              "It hides your total balance from staff and customers, protecting your privacy and security.",
              "Breez and Blink both offer excellent POS interfaces."
            ]
          },
          {
            title: "User Interface and Staff Ease",
            content: [
              "Choose a wallet that is simple. If it's too complex, your staff will make mistakes.",
              "Look for big buttons, clear confirmation screens, and local currency conversion (KES display).",
              "Test the app yourself for a week before deploying it to the shop floor."
            ]
          },
          {
            title: "Backup Features",
            content: [
              "Ensure the wallet prompts you to back up your seed phrase. If a wallet doesn't give you backup words, avoid it for large amounts.",
              "Some wallets offer cloud backups. While convenient, manual paper/steel backups are safer from hackers.",
              "Make sure you understand the recovery process before you put real money in."
            ]
          }
        ]
      },
      {
        title: "Backing Up Your Money So You Never Lose It",
        description: "Your phone can be stolen or broken. Your backup ensures your money survives the hardware destruction.",
        subtopics: [
          {
            title: "The Seed Phrase (12/24 Words)",
            content: [
              "Most wallets generate a 12-word recovery phrase. These words ARE your money. Anyone who has them can take your funds.",
              "Write them down on paper immediately. Number them 1-12. Check spelling carefully.",
              "Do not just save them in a notes app. Malware can read your clipboard and notes."
            ]
          },
          {
            title: "Physical Security: Paper vs Steel",
            content: [
              "Paper is good for starting, but it burns and rots. For business treasury, upgrade to a steel backup (stamped metal).",
              "Steel survives house fires, floods, and termites. It ensures your legacy lasts.",
              "You can buy steel plates or make DIY ones with washers and a stamp kit."
            ]
          },
          {
            title: "The No-Screenshot Rule",
            content: [
              "NEVER take a screenshot of your seed words. Photos are uploaded to Google Photos/iCloud automatically.",
              "If your cloud account is hacked, the hacker runs a script to find text images containing seed words. Your money will be drained instantly.",
              "Keep the words strictly in the physical world (Analog)."
            ]
          },
          {
            title: "Inheritance Planning",
            content: [
              "If you are the only one who knows the words and you die, the money is lost forever. This is irresponsible for a business owner.",
              "Create a plan. Seal a copy of the words in a tamper-evident bag and give it to a trusted executor, or use a multisig setup.",
              "Ensure your family knows what Bitcoin is and how to find the backup if you are gone."
            ]
          },
          {
            title: "Testing Your Backups",
            content: [
              "A backup is not a backup until it is tested. Wipe a spare phone and try to restore your wallet using your words.",
              "If it works, your backup is valid. If it fails, you made a typo. Better to find out now than during a crisis.",
              "Do this drill once a year."
            ]
          },
          {
            title: "Secrecy and Staff",
            content: [
              "Your staff should NEVER see the seed phrase of the business wallet. Only the owner should have this.",
              "Staff should ideally use 'watch-only' wallets or wallets with limited funds that are topped up daily.",
              "Loose lips sink ships. Don't brag about where you hide your backup."
            ]
          }
        ]
      },
      {
        title: "Creating A Point Of Sale With Zero Cost",
        description: "You don't need to buy a $500 machine. You already have a supercomputer in your pocket.",
        subtopics: [
          {
            title: "Utilizing Your Existing Smartphone",
            content: [
              "Any Android or iPhone can be a terminal. You don't need a new device.",
              "You can repurpose an old phone as a dedicated shop terminal. Just connect it to Wi-Fi.",
              "This lowers the barrier to entry to zero."
            ]
          },
          {
            title: "Free Open Source Software",
            content: [
              "The best POS software is free. BTCPay Server, Blink, and others charge no monthly license fees.",
              "You are not locked into a contract. You can delete the app and switch to a competitor instantly.",
              "This forces wallet developers to stay honest and competitive."
            ]
          },
          {
            title: "Saving on Terminal Rental Fees",
            content: [
              "Traditional banks charge KES 3000+ per month just to rent a card machine. That's KES 36,000 a year wasted.",
              "By using your phone, that money stays in your pocket.",
              "Over 5 years, the savings alone could buy you a nice amount of Bitcoin."
            ]
          },
          {
            title: "Portability for Markets",
            content: [
              "Since it's on your phone, your POS goes where you go. Perfect for pop-up markets, delivery drivers, or tableside service.",
              "You are not tethered to a power outlet or a phone line.",
              "Accept payments in the field, in a taxi, or at a conference."
            ]
          },
          {
            title: "The Universal QR Code",
            content: [
              "The QR code is the universal interface. Any customer wallet can scan it. You don't need to ask 'do you take Visa or Mastercard?'.",
              "It is touchless and hygienic.",
              "It bridges the gap between different wallet apps seamlessly."
            ]
          },
          {
            title: "Multiple Devices for Staff",
            content: [
              "You can log into the same wallet on multiple devices (if supported) or set up individual staff wallets.",
              "This allows multiple cashiers to ring up sales simultaneously without buying extra hardware.",
              "Scale your checkout lanes instantly during rush hour."
            ]
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "How To Pricing Your Goods And Services In Satoshis",
    icon: Calculator,
    color: "bg-green-500",
    activity: "Create a price tag for one item in your shop in Sats.",
    topics: [
      {
        title: "Understanding The Difference Between Bitcoin And Satoshis",
        description: "Bitcoin is the network. Sats are the currency units you will use daily.",
        subtopics: [
          {
            title: "Divisibility: 100 Million Sats",
            content: [
              "1 Bitcoin is divisible into 100,000,000 units called Satoshis (sats). Just like 100 cents make a dollar.",
              "You don't need to buy a whole Bitcoin. You can buy or earn 500 sats.",
              "This high divisibility makes it perfect for micropayments."
            ]
          },
          {
            title: "Overcoming Unit Bias",
            content: [
              "Customers see '1 Bitcoin = $95,000' and think 'I can't afford that'. This is unit bias.",
              "When you price in sats (e.g., Coffee = 3000 sats), it feels affordable and normal.",
              "Psychologically, people prefer owning 'whole numbers' (3000 sats) rather than decimals (0.00003 BTC)."
            ]
          },
          {
            title: "The Sats Standard",
            content: [
              "We encourage merchants to think in sats. 'I earned 50k sats today' is a better metric than fiat value which fluctuates.",
              "Adopting a 'Sats Standard' mentally prepares you for a hyperbitcoinized future.",
              "It simplifies the math once you get used to it."
            ]
          },
          {
            title: "Conversion Tools",
            content: [
              "Use apps or widgets to quickly convert KES to Sats. You don't need to do mental math.",
              "Most POS apps let you type in KES (e.g., 500) and they auto-generate the QR code for the correct amount of sats.",
              "This makes the transition seamless for staff."
            ]
          },
          {
            title: "Wallet Settings",
            content: [
              "Go into your wallet settings and change the display unit from BTC to Sats.",
              "It is much easier to read '50,000 sats' than '0.00050000 BTC'.",
              "Reducing decimal errors prevents costly mistakes."
            ]
          },
          {
            title: "Terminology",
            content: [
              "Teach your staff the lingo. 'Stacking sats', 'Lightning invoice', 'On-chain'.",
              "Clear communication helps customers feel confident.",
              "Using the right terms signals you are part of the tribe."
            ]
          }
        ]
      },
      {
        title: "Strategies For Displaying Prices To Avoid Confusion",
        description: "Clear pricing prevents customer friction at checkout.",
        subtopics: [
          {
            title: "Dual Pricing",
            content: [
              "Display both KES and Sats on your tags if possible, or just KES with a 'Bitcoin Accepted' sign.",
              "Since Bitcoin price moves, printed sat prices might expire quickly. Digital displays or KES-pegged pricing is usually best.",
              "Example: 'Cappuccino: 300 KES (or market rate in BTC)'."
            ]
          },
          {
            title: "Dynamic Pricing Screens",
            content: [
              "If you have a digital screen, you can show a live ticker of prices in sats.",
              "This looks futuristic and cool, attracting Bitcoiners.",
              "Tools like 'LaMetric' clocks or simple tablets can display this."
            ]
          },
          {
            title: "Rounding for Simplicity",
            content: [
              "Don't charge 3241 sats. Round it to 3250 or 3200.",
              "Clean numbers are easier to read and verify.",
              "The minor difference is worth the user experience improvement."
            ]
          },
          {
            title: "Verbal Pricing",
            content: [
              "Train staff to say 'That will be 3000 sats' confidently.",
              "Confidence reduces customer confusion.",
              "Treat it as normal money, not a weird experiment."
            ]
          },
          {
            title: "Receipt Details",
            content: [
              "Ensure your digital receipt or POS screen shows the exchange rate used.",
              "Transparency builds trust.",
              "Customers can verify they aren't being gouged on the spread."
            ]
          },
          {
            title: "The 'Bitcoin Accepted Here' Sign",
            content: [
              "This is your most important price tag. Put it on the door.",
              "It filters for your target niche market.",
              "It signals innovation and freedom."
            ]
          }
        ]
      },
      {
        title: "Handling Volatility When Pricing Your Inventory Items",
        description: "Price fluctuates. Here is how to manage the risk while keeping the upside.",
        subtopics: [
          {
            title: "Instant Conversion (Stablecoins)",
            content: [
              "If you have tight margins, use a feature like Blink's 'Stables'.",
              "Receive BTC -> Auto-convert to USD equivalent instantly. No volatility risk.",
              "You hold stable value but transact over the Bitcoin network."
            ]
          },
          {
            title: "The 90/10 Split",
            content: [
              "Keep 10% of revenue in BTC for long-term savings. Convert 90% to fiat to pay bills.",
              "This balances risk with the potential for appreciation.",
              "Adjust the percentage based on your risk tolerance."
            ]
          },
          {
            title: "The Long Term View",
            content: [
              "Volatility is the price you pay for performance. Over 4 years, BTC usually goes up massively.",
              "If you can afford to hold the sats for 2-4 years, volatility is your friend.",
              "Treat received sats as long-term treasury reserves, not operating cash."
            ]
          },
          {
            title: "Auto-Conversion Tools",
            content: [
              "Wallets like Blink or Strike allow auto-conversion rules.",
              "Set it and forget it. Remove the emotion from the decision.",
              "Focus on your business, let the software handle the treasury."
            ]
          },
          {
            title: "Cost Averaging In Reverse",
            content: [
              "By earning Bitcoin daily, you are effectively Dollar Cost Averaging (DCA) into the asset.",
              "You capture the average price over the year, smoothing out the peaks and troughs.",
              "This is safer than buying a lump sum once a year."
            ]
          },
          {
            title: "Mental Accounting",
            content: [
              "Separate your 'Business Operations' bucket from your 'Long Term Wealth' bucket.",
              "Don't stress if the Wealth bucket dips this week. It's for 5 years from now.",
              "Clarity of purpose reduces anxiety."
            ]
          }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Training Your Staff To Handle Bitcoin Transactions Without Errors",
    icon: Users,
    color: "bg-purple-600",
    activity: "Roleplay a transaction with your staff where you act as a difficult customer.",
    topics: [
      {
        title: "Verifying Payments On Your Own Device Screen",
        description: "The golden rule of accepting Bitcoin. Never trust; verify.",
        subtopics: [
          {
            title: "The Golden Rule",
            content: [
              "NEVER trust the customer's phone screen. They can show a fake app or a screenshot.",
              "ONLY consider the bill paid when YOUR tablet/phone shows the green checkmark.",
              "Drill this into every staff member. It is the #1 security hole."
            ]
          },
          {
            title: "Visual Confirmation",
            content: [
              "Wait for the animation. A static image is a screenshot.",
              "POS apps usually have a distinct 'Success' animation.",
              "If in doubt, tap the screen to see if it's responsive."
            ]
          },
          {
            title: "NFC Cards (Bolt Cards)",
            content: [
              "Some customers pay by tapping a card. This is valid.",
              "But the rule remains: wait for YOUR device to confirm the tap worked.",
              "Don't just hear the 'beep' and assume success."
            ]
          },
          {
            title: "Pending Status",
            content: [
              "Sometimes a Lightning payment hangs for a few seconds.",
              "Do not let the customer leave until it changes from 'Pending' to 'Paid'.",
              "Politely ask them to wait. 'Just waiting for the network to confirm...'."
            ]
          },
          {
            title: "Audio Cues",
            content: [
              "Turn the volume up. Most wallets make a 'Ka-ching' sound.",
              "This allows staff to hear success even if they are busy packing bags.",
              "Sound + Visual = Double Verification."
            ]
          },
          {
            title: "Transaction History",
            content: [
              "If you missed the screen, check the 'History' or 'Activity' tab.",
              "Ensure the timestamp matches 'Just now'.",
              "Verify the amount matches the bill exactly."
            ]
          }
        ]
      },
      {
        title: "Setting Up Staff Wallets With Limited Permissions",
        description: "Limit your risk exposure by restricting what staff can do.",
        subtopics: [
          {
            title: "Watch-Only Wallets",
            content: [
              "You can set up a wallet that can ONLY receive and view, but NOT spend.",
              "This is perfect for staff devices. They can accept payments but can't steal funds.",
              "BlueWallet allows importing 'xpub' keys to create watch-only wallets."
            ]
          },
          {
            title: "Employee Limits",
            content: [
              "If they must spend (e.g., for supplies), keep only small amounts on their device.",
              "Sweep the main profits to your owner wallet daily.",
              "Limit the blast radius of a mistake or theft."
            ]
          },
          {
            title: "Training Drills",
            content: [
              "Roleplay with your staff. You act as a scammer trying to trick them.",
              "See if they catch the fake screenshot.",
              "Make it fun, but educational. Reward them for catching you."
            ]
          },
          {
            title: "Shift Handovers",
            content: [
              "Balance the Bitcoin book just like the cash drawer.",
              "Total sales on POS should match wallet inflow.",
              "Discrepancies must be investigated immediately."
            ]
          },
          {
            title: "Tipping",
            content: [
              "Allow staff to keep Bitcoin tips. Set up their own personal wallets.",
              "This incentivizes them to promote Bitcoin payments.",
              "If they own sats, they will care about learning."
            ]
          },
          {
            title: "Security Culture",
            content: [
              "Teach staff not to share PINs or passwords.",
              "Explain WHY security matters (irreversible transactions).",
              "Build a culture of sovereignty."
            ]
          }
        ]
      },
      {
        title: "Handling Refunds And Customer Service In Bitcoin",
        description: "Bitcoin has no chargebacks, but you still need a refund policy.",
        subtopics: [
          {
            title: "No Chargebacks = Merchant Power",
            content: [
              "You have the power. A customer cannot force a refund via a bank.",
              "This prevents fraud, but implies a responsibility to be fair.",
              "Be generous with legitimate refunds to build trust."
            ]
          },
          {
            title: "Generating Refund Invoices",
            content: [
              "To refund, the CUSTOMER must generate an invoice (request), and YOU pay it.",
              "This is the reverse of a normal sale.",
              "Staff need to know how to 'Send' as well as 'Receive' for this."
            ]
          },
          {
            title: "Customer Errors",
            content: [
              "If a customer sends the wrong amount, you can verify it on-chain.",
              "Don't panic. Everything is on the ledger.",
              "Help them trace it if they are confused. Be the expert."
            ]
          },
          {
            title: "Tech Support",
            content: [
              "New bitcoiners will be clumsy. Help them.",
              "Your patience creates a loyal customer for life.",
              "View troubleshooting as a relationship-building moment."
            ]
          },
          {
            title: "Building Rapport",
            content: [
              "Bitcoiners love chatting about Bitcoin. Engage them.",
              "Ask what wallet they use. Share news.",
              "Community connection is your competitive advantage over Amazon."
            ]
          },
          {
            title: "Conflict Resolution",
            content: [
              "Have a clear written policy. 'Refunds in KES value at time of return' or 'Refunds in Sats'.",
              "Usually, refunding the Fiat value is standard if price moved significantly.",
              "State this clearly on the receipt."
            ]
          }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Building A Loyal Customer Base Using The Bitcoin Network",
    icon: Globe,
    color: "bg-orange-500",
    activity: "Add your business to an open source map like OpenStreetMap or BTC Map.",
    topics: [
      {
        title: "Attracting The Passionate Global Bitcoin Community Travelers",
        description: "Bitcoiners go out of their way to support merchants who accept sats.",
        subtopics: [
          {
            title: "The Bitcoin Niche",
            content: [
              "Bitcoiners are a passionate tribe. They will drive across town just to buy a coffee with sats.",
              "By accepting Bitcoin, you unlock this loyal, high-value demographic.",
              "They are essentially free marketing ambassadors for you."
            ]
          },
          {
            title: "Global Travelers",
            content: [
              "Tourists holding Bitcoin look for safety and convenience.",
              "They prefer spending sats to changing cash at a shady forex booth.",
              "Position yourself as the 'Bitcoin Safe Haven' for tourists."
            ]
          },
          {
            title: "Social Proof",
            content: [
              "Bitcoiners love taking photos of paying with Lightning.",
              "They will tweet it, tag you, and share it with thousands.",
              "Encourage this. Put a 'Tag us' sticker near the QR code."
            ]
          },
          {
            title: "Word of Mouth",
            content: [
              "The Bitcoin community is tight-knit (Telegram groups, Nostr).",
              "Good news travels fast. If you offer a good experience, the whole group will know.",
              "Bad news travels faster. Don't scam them."
            ]
          },
          {
            title: "Hosting Meetups",
            content: [
              "Offer your space for the monthly Bitcoin Nairobi meetup.",
              "You get 20-50 people buying food/drinks on a Tuesday night.",
              "It establishes you as a pillar of the community."
            ]
          },
          {
            title: "Reviews",
            content: [
              "Ask for reviews on BTC Map.",
              "Positive reviews signal trust to other bitcoiner travelers.",
              "Respond to reviews to show you are active."
            ]
          }
        ]
      },
      {
        title: "Creating Discounts And Rewards For Paying In Bitcoin",
        description: "Incentivize the behavior you want to see.",
        subtopics: [
          {
            title: "Sharing the Savings",
            content: [
              "You save ~3% on credit card fees when paid in BTC.",
              "Pass this saving to the customer. Offer a 3-5% discount for Bitcoin payments.",
              "It costs you nothing, but customers love it."
            ]
          },
          {
            title: "Loyalty Programs",
            content: [
              "Use apps that offer 'Sats Back' rewards.",
              "Instead of points that expire, give them hard money.",
              "This is the most addictive loyalty program ever invented."
            ]
          },
          {
            title: "Orange Pilling Promo",
            content: [
              "Offer a deeper discount for a customer's FIRST Bitcoin purchase.",
              "Help them set up a wallet and give them 10% off.",
              "You just created a new customer for life."
            ]
          },
          {
            title: "Gamification",
            content: [
              "Have a 'Spin the Wheel' for Bitcoin payers.",
              "Win 1000 sats or a free cookie.",
              "Make the payment experience fun and memorable."
            ]
          },
          {
            title: "Sats Back Apps",
            content: [
              "Integrate with platforms like Oshi or local equivalents.",
              "They drive traffic to you in exchange for rewards.",
              "It's performance-based marketing."
            ]
          },
          {
            title: "Membership Clubs",
            content: [
              "Create a 'Bitcoin Club' mug. Buy the mug, get cheap refills.",
              "Build a sense of belonging.",
              "Regulars are the lifeblood of retail."
            ]
          }
        ]
      },
      {
        title: "Getting Listed On Maps And Directories For Free",
        description: "If you aren't on the map, you don't exist.",
        subtopics: [
          {
            title: "BTC Map",
            content: [
              "This is the gold standard map for Bitcoiners.",
              "Add your business details, photos, and tags.",
              "Verify your listing to get a green checkmark."
            ]
          },
          {
            title: "OpenStreetMap",
            content: [
              "BTC Map pulls data from OpenStreetMap (OSM).",
              "Tag your business with 'currency:XBT=yes' and 'payment:lightning=yes'.",
              "This pushes your info to hundreds of other map apps."
            ]
          },
          {
            title: "Google Maps",
            content: [
              "Mention 'Bitcoin Accepted' in your description.",
              "Upload photos of the Bitcoin Accepted sticker on your door.",
              "It helps SEO when people search 'crypto payment near me'."
            ]
          },
          {
            title: "Local Directories",
            content: [
              "Get listed on the Bitcoin Nairobi website merchants page.",
              "Contact local admins to be featured.",
              "Local directories are trusted more than global ones."
            ]
          },
          {
            title: "Signage",
            content: [
              "Physical signals matter. Put a sticker on the door and the register.",
              "It sparks curiosity from non-coiners too ('What is that B?').",
              "It saves the awkward 'Do you take Bitcoin?' question."
            ]
          },
          {
            title: "Social Media Bios",
            content: [
              "Add ⚡ (Lightning bolt) to your Twitter/Instagram bio.",
              "Signal to the digital world that you are open for business.",
              "Post about your Bitcoin journey."
            ]
          }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Managing Your Business Treasury And Saving For The Future",
    icon: Briefcase,
    color: "bg-teal-600",
    activity: "Set up a recurring weekly transfer to your cold storage.",
    topics: [
      {
        title: "Moving Excess Funds To Cold Storage Securely",
        description: "Don't leave profits in a hot wallet. Sweep them to safety.",
        subtopics: [
          {
            title: "Sweep Protocols",
            content: [
              "Set a limit (e.g., 100k sats). Once your POS wallet hits this, sweep it to cold storage.",
              "Do this daily or weekly depending on volume.",
              "This minimizes the loss if a shop phone is stolen."
            ]
          },
          {
            title: "Hardware Wallets",
            content: [
              "Invest in a dedicated hardware device (Jade, Coldcard, Trezor) for the business treasury.",
              "Keep this device in a safe, off-site.",
              "It is the digital equivalent of an armored truck pickup."
            ]
          },
          {
            title: "Multi-Sig",
            content: [
              "For larger businesses, use a 2-of-3 multisig.",
              "You hold one key, a partner holds one, a lawyer holds one.",
              "Prevents a single rogue partner from draining the account."
            ]
          },
          {
            title: "Separation of Funds",
            content: [
              "Keep Operating Expenses (OpEx) separate from Treasury.",
              "OpEx stays in fiat/stablecoins to pay rent.",
              "Treasury stays in BTC for long-term growth."
            ]
          },
          {
            title: "Physical Security",
            content: [
              "Treat your seed words like gold bars.",
              "Fireproof safe, hidden location.",
              "Don't leave the backup in the shop drawer."
            ]
          },
          {
            title: "Privacy (Coinjoin)",
            content: [
              "When moving funds to cold storage, consider using privacy tools (Coinjoin).",
              "This breaks the link between your shop's public activity and your savings.",
              "Protects you from supply chain analysis spying."
            ]
          }
        ]
      },
      {
        title: "Why You Should Keep Bitcoin On Your Balance Sheet",
        description: "Bitcoin is a superior reserve asset compared to melting fiat cash.",
        subtopics: [
          {
            title: "Reserve Asset",
            content: [
              "Cash loses 10-20% purchasing power per year. Bitcoin averages >50% gains.",
              "Holding BTC protects your retained earnings from inflation.",
              "It turns your treasury into a profit center."
            ]
          },
          {
            title: "Borrowing Collateral",
            content: [
              "In the future, you can borrow against your Bitcoin without selling it.",
              "Get a fiat loan for expansion while keeping the asset.",
              "This is how the rich get richer (Buy, Borrow, Die)."
            ]
          },
          {
            title: "Creditworthiness",
            content: [
              "Proof of Reserves allows you to cryptographically prove your solvency.",
              "Far more transparent than a bank letter.",
              "Builds trust with partners who understand the tech."
            ]
          },
          {
            title: "Solvency",
            content: [
              "Bitcoin is an unseizable asset (if secured properly).",
              "It protects your business from arbitrary account freezes or bail-ins.",
              "It is your insurance policy against systemic failure."
            ]
          },
          {
            title: "Diversification",
            content: [
              "Don't have 100% of your net worth in local currency.",
              "Bitcoin is non-correlated to the Kenyan economy.",
              "It hedges your local political and economic risk."
            ]
          },
          {
            title: "Long Time Preference",
            content: [
              "Holding an appreciating asset changes your mindset.",
              "You start planning for 10 years out, not 10 days.",
              "This creates a stronger, more sustainable business strategy."
            ]
          }
        ]
      },
      {
        title: "Dollar Cost Averaging Your Profits Into Hard Money",
        description: "Automate your savings to remove emotion and timing risk.",
        subtopics: [
          {
            title: "Automated Buys",
            content: [
              "Set up an auto-buy. Every Monday, convert KES 5000 to BTC.",
              "Don't look at the price. Just stack.",
              "This removes the stress of 'timing the market'."
            ]
          },
          {
            title: "Smoothing Volatility",
            content: [
              "DCA buys the tops and the bottoms.",
              "Over time, your average entry price will be lower than the FOMO buyers.",
              "It turns volatility into noise."
            ]
          },
          {
            title: "Profit Allocation",
            content: [
              "Decide a fixed percentage (e.g., 5% of net profit).",
              "Treat it as a mandatory expense, like a tax.",
              "Pay your future self first."
            ]
          },
          {
            title: "Discipline",
            content: [
              "The hardest part is sticking to it when price crashes.",
              "Automated tools force discipline.",
              "Emotionless investing wins in the long run."
            ]
          },
          {
            title: "Tools",
            content: [
              "Use apps like BitNob or strike for recurring buys.",
              "Low fees for recurring orders matter.",
              "Check the spread."
            ]
          },
          {
            title: "Reviewing Performance",
            content: [
              "Check your stack size once a year, not once a day.",
              "Measure performance in purchasing power, not just fiat price.",
              "Are you closer to your goals?"
            ]
          }
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Avoiding Common Scams And Protecting Your Hard Earned Money",
    icon: ShieldCheck,
    color: "bg-indigo-600",
    activity: "Perform a security audit of your current password practices.",
    topics: [
      {
        title: "Recognizing Fake Wallets And Screenshot Payment Frauds",
        description: "Scammers prey on new merchants. Know their tricks.",
        subtopics: [
          {
            title: "Fake Screenshots",
            content: [
              "The #1 attack. Customer shows a static image of 'Sent'.",
              "Counter: Always verify on YOUR device.",
              "If it didn't beep on your end, it didn't happen."
            ]
          },
          {
            title: "Fake Apps",
            content: [
              "Scammers use fake wallet apps that simulate sending.",
              "They look exactly like real apps.",
              "Blockchain verification is the only truth."
            ]
          },
          {
            title: "Send to Receive (Doubling Scams)",
            content: [
              "Scammers promise to double your money if you send first.",
              "This is always a lie. No one gives money for free.",
              "Block and report immediately."
            ]
          },
          {
            title: "Impersonators",
            content: [
              "People posing as 'Bitcoin Support' or Admins.",
              "They ask for your seed words to 'fix' a transaction.",
              "Support will NEVER ask for your seed words."
            ]
          },
          {
            title: "Social Engineering",
            content: [
              "Creating urgency. 'Do it now or lose funds!'.",
              "Panic causes mistakes. Slow down.",
              "Verify identities through a second channel."
            ]
          },
          {
            title: "QR Code Swaps",
            content: [
              "Physical attack. Someone pastes their QR code over yours.",
              "Check your printed signs regularly.",
              "Digital screens are safer than printed stickers."
            ]
          }
        ]
      },
      {
        title: "Securing Your Recovery Phrase From Theft And Fire",
        description: "Your backup is your bank vault. Fortify it.",
        subtopics: [
          {
            title: "Never Digital",
            content: [
              "Do not type words into a computer or phone.",
              "Keyloggers steal them instantly.",
              "Pen and paper (or steel) only."
            ]
          },
          {
            title: "Fire Protection",
            content: [
              "House fires happen. Paper burns at 233°C.",
              "Steel melts at 1370°C.",
              "A steel backup is cheap insurance for your life savings."
            ]
          },
          {
            title: "Location Redundancy",
            content: [
              "Don't keep the backup next to the device.",
              "If the house burns down, both are gone.",
              "Store the backup at a relative's house or bank box."
            ]
          },
          {
            title: "Access Control",
            content: [
              "Who has access to your safe?",
              "Limit knowledge. The fewer people know, the better.",
              "Use a tamper-evident bag to know if it was opened."
            ]
          },
          {
            title: "Phishing Sites",
            content: [
              "Fake websites (e.g., 'Ledqer.com') ask for words.",
              "Check URLs carefully.",
              "Bookmark official sites."
            ]
          },
          {
            title: "Passphrases (Decoys)",
            content: [
              "Add a '13th word' passphrase.",
              "Even if they find the 12 words, they can't access funds without the passphrase.",
              "Store the passphrase in a separate location."
            ]
          }
        ]
      },
      {
        title: "Why You Should Never Use Custodial Services For Storage",
        description: "Not your keys, not your coins. History is full of lessons.",
        subtopics: [
          {
            title: "Exchange Hacks",
            content: [
              "Mt Gox, Bitfinex, FTX. Billions lost.",
              "Exchanges are honey pots for hackers.",
              "Don't be a statistic. Self-custody."
            ]
          },
          {
            title: "Frozen Accounts",
            content: [
              "Exchanges bow to political pressure.",
              "They can freeze you for 'suspicious activity' (using Coinjoin).",
              "You have zero recourse."
            ]
          },
          {
            title: "Withdrawal Limits",
            content: [
              "Try withdrawing 10 BTC during a crisis. They will stop you.",
              "It is their money, not yours, until you withdraw it.",
              "They create friction to keep your liquidity."
            ]
          },
          {
            title: "Fractional Reserve (Paper Bitcoin)",
            content: [
              "Exchanges often sell more Bitcoin than they have (FTX).",
              "You own an IOU, not real BTC.",
              "Run on the bank exposes the insolvency."
            ]
          },
          {
            title: "Privacy Leaks",
            content: [
              "Exchanges have your ID (KYC).",
              "Database breaches leak your home address and balance.",
              "This puts you at physical risk of robbery."
            ]
          },
          {
            title: "Rug Pulls",
            content: [
              "Owners can disappear with funds (Exit scam).",
              "Africrypt, QuadrigaCX.",
              "Trust code, not CEOs."
            ]
          }
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Growing Your Local Community And Closing The Circular Loop",
    icon: Store,
    color: "bg-pink-600",
    activity: "Ask one of your suppliers if they will accept a partial payment in Bitcoin.",
    topics: [
      {
        title: "Convincing Your Suppliers To Accept Bitcoin Payments Directly",
        description: "The loop is closed when you spend BTC on business expenses.",
        subtopics: [
          {
            title: "Negotiating",
            content: [
              "Ask the question: 'Do you take Bitcoin?'.",
              "Even if they say no, it plants the seed.",
              "Offer to show them how. Be the educator."
            ]
          },
          {
            title: "Benefits for Them",
            content: [
              "Explain instant settlement.",
              "They get cash faster than a bank transfer.",
              "They save on POS fees too."
            ]
          },
          {
            title: "Partial Payments",
            content: [
              "Start small. 'Can I pay 10% of this invoice in Bitcoin?'.",
              "Low risk for them to try it out.",
              "Once they have a wallet, they are likely to want more."
            ]
          },
          {
            title: "Onboarding Supply Chain",
            content: [
              "Help them install a wallet.",
              "Send them their first sats.",
              "Create a local trade network independent of banks."
            ]
          },
          {
            title: "Supply Chain Robustness",
            content: [
              "If banks fail or freeze, you can still trade.",
              "This resilience is a strategic advantage.",
              "Build relationships based on sovereign money."
            ]
          },
          {
            title: "Cash Discounts",
            content: [
              "Treat Bitcoin like cash.",
              "Ask for the 'Cash Discount' when paying in BTC.",
              "Suppliers prefer final settlement too."
            ]
          }
        ]
      },
      {
        title: "Paying Your Employees Or Yourself In Sound Money",
        description: "Bitcoin is the best savings technology for your staff too.",
        subtopics: [
          {
            title: "Opt-In Payroll",
            content: [
              "Never force it. Make it voluntary.",
              "Ask who wants a portion of salary in BTC.",
              "Usually the youngest/smartest staff will say yes first."
            ]
          },
          {
            title: "Split Pay",
            content: [
              "Don't go 100%. Rent is still in KES.",
              "Start with 5-10% allocation.",
              "It acts as an automated savings plan for them."
            ]
          },
          {
            title: "Education First",
            content: [
              "Don't pay them in BTC until they know how to secure it.",
              "Run a workshop. Teach them backups.",
              "Responsible employers educate."
            ]
          },
          {
            title: "Savings Culture",
            content: [
              "Help your staff build wealth.",
              "Staff with savings are less stressed and more productive.",
              "It aligns their incentives with the business success."
            ]
          },
          {
            title: "Payroll Tools",
            content: [
              "Use BitWage or just manual transfers.",
              "Batch transactions to save fees.",
              "Lightning allows daily streaming payroll (advanced)."
            ]
          },
          {
            title: "Retention Perk",
            content: [
              "Paying in Bitcoin is a unique benefit.",
              "Attract forward-thinking talent.",
              "Differentiates you from other boring employers."
            ]
          }
        ]
      },
      {
        title: "Hosting Meetups And Teaching Others In Your Shop",
        description: "Become the Citadel.",
        subtopics: [
          {
            title: "Hosting Meetups",
            content: [
              "Your shop has chairs and sells food.",
              "Bitcoiners need a place to meet.",
              "Match made in heaven. Consistent revenue on slow nights."
            ]
          },
          {
            title: "Revenue Boost",
            content: [
              "Meetups generate sales.",
              "Attendees buy coffee, beer, snacks.",
              "They pay in Bitcoin, increasing your stack."
            ]
          },
          {
            title: "Branding",
            content: [
              "Become known as 'The Bitcoin Place'.",
              "Press and media will come to you for quotes.",
              "Free publicity."
            ]
          },
          {
            title: "Networking",
            content: [
              "Meet developers, investors, and other merchants.",
              "Opportunities arise from these connections.",
              "You become a hub of the network."
            ]
          },
          {
            title: "Education Nights",
            content: [
              "Host a 'Bitcoin 101' night for locals.",
              "Orange pill your neighbors.",
              "A stronger community benefits your business."
            ]
          },
          {
            title: "Community Defense",
            content: [
              "If you get attacked (regulators/banks), the community defends you.",
              "Strength in numbers.",
              "You are not alone."
            ]
          }
        ]
      }
    ]
  }
];

const GenericTool: React.FC<{ label: string, action: string }> = ({ label, action }) => (
  <div className="bg-slate-100 p-4 rounded-xl border-2 border-slate-200">
    <div className="flex items-center gap-2 mb-2">
      <Lightbulb className="text-[#F7931A]" size={20} />
      <span className="font-bold uppercase text-xs text-slate-500">Suggested Action</span>
    </div>
    <h4 className="font-bold text-sm uppercase mb-1">{label}</h4>
    <p className="text-xs text-slate-600">{action}</p>
  </div>
);

const PriceTicker: React.FC = () => {
    const [price, setPrice] = useState(100);
    return (
        <div className="bg-black text-white p-4 rounded-xl border-2 border-[#F7931A] text-center">
            <p className="text-xs font-bold uppercase text-slate-400 mb-1">Pricing Tool Example</p>
            <div className="flex items-center justify-center gap-4">
                <input 
                    type="number" 
                    value={price} 
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="bg-slate-800 w-24 text-center rounded p-1 text-white outline-none focus:border-[#F7931A] border border-transparent"
                />
                <span className="text-xl font-bold">=</span>
                <span className="text-xl font-bold text-[#F7931A]">{(price * 16).toLocaleString()} Sats</span>
            </div>
        </div>
    );
};

export const MerchantAcademy: React.FC = () => {
  const navigate = useNavigate();
  const [activeChapter, setActiveChapter] = useState<number | null>(null);
  const [activeTopic, setActiveTopic] = useState<Topic | null>(null);
  const [readingSubtopic, setReadingSubtopic] = useState<SubTopic | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [bookmarked, setBookmarked] = useState(false);
  const [showToast, setShowToast] = useState<string | null>(null);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);

  const currentChapter = merchantCourseData.find(c => c.id === activeChapter);

  // Helper to find next lesson
  const findNextLesson = (currentSub: SubTopic | null) => {
    if (!currentSub) return null;
    
    for (let cIdx = 0; cIdx < merchantCourseData.length; cIdx++) {
      const chapter = merchantCourseData[cIdx];
      for (let tIdx = 0; tIdx < chapter.topics.length; tIdx++) {
        const topic = chapter.topics[tIdx];
        for (let sIdx = 0; sIdx < topic.subtopics.length; sIdx++) {
           if (topic.subtopics[sIdx] === currentSub) {
              // Found current
              // Check next subtopic
              if (sIdx + 1 < topic.subtopics.length) {
                 return { 
                   chapter: chapter, 
                   topic: topic, 
                   subtopic: topic.subtopics[sIdx + 1] 
                 };
              }
              // Check next topic
              if (tIdx + 1 < chapter.topics.length) {
                 const nextTopic = chapter.topics[tIdx + 1];
                 if (nextTopic.subtopics.length > 0) {
                   return {
                     chapter: chapter,
                     topic: nextTopic,
                     subtopic: nextTopic.subtopics[0]
                   };
                 }
              }
              // Check next chapter
              if (cIdx + 1 < merchantCourseData.length) {
                 const nextChapter = merchantCourseData[cIdx + 1];
                 if (nextChapter.topics.length > 0 && nextChapter.topics[0].subtopics.length > 0) {
                    return {
                       chapter: nextChapter,
                       topic: nextChapter.topics[0],
                       subtopic: nextChapter.topics[0].subtopics[0]
                    };
                 }
              }
              return null; // End of course
           }
        }
      }
    }
    return null;
  };

  const nextLessonData = findNextLesson(readingSubtopic);

  // Reset slide when opening new topic
  useEffect(() => {
    if (readingSubtopic) {
      setCurrentSlide(0);
      setBookmarked(false);
      setShowShareMenu(false);
    }
  }, [readingSubtopic]);

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

  useEffect(() => {
     if (readingSubtopic && currentSlide === readingSubtopic.content.length) {
        triggerConfetti();
     }
  }, [currentSlide, readingSubtopic]);

  const handleNext = () => {
    if (readingSubtopic && currentSlide < readingSubtopic.content.length) {
      setCurrentSlide(curr => curr + 1);
    } else {
      // This case is now handled by the completion UI
    }
  };

  const handleNextLesson = () => {
     if (nextLessonData) {
        setActiveChapter(nextLessonData.chapter.id);
        setActiveTopic(nextLessonData.topic);
        setReadingSubtopic(nextLessonData.subtopic);
        setCurrentSlide(0); // Reset slide
     } else {
        setReadingSubtopic(null); // Finish course
        triggerToast("Course Completed!");
     }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(curr => curr - 1);
    }
  };

  const handleCopy = () => {
    if (readingSubtopic) {
      const text = readingSubtopic.content[currentSlide] || "Lesson Complete";
      navigator.clipboard.writeText(text);
      triggerToast("Text Copied");
    }
  };

  const executeShare = (platform: string) => {
    if (!readingSubtopic) return;
    const text = `I just mastered "${readingSubtopic.title}" at Bitcoin Nairobi Merchant Academy! 🎓 #keepspedn #btcnairobi Learn here: btcnairobi.org Support the mission: coinos.io/btcnairobi`;
    const encodedText = encodeURIComponent(text);

    let shareUrl = '';

    switch(platform) {
      case 'Twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodedText}`;
        break;
      case 'WhatsApp':
        shareUrl = `https://wa.me/?text=${encodedText}`;
        break;
      case 'Telegram':
        shareUrl = `https://t.me/share/url?url=${encodeURIComponent('btcnairobi.org')}&text=${encodedText}`;
        break;
      case 'LinkedIn':
        shareUrl = `https://www.linkedin.com/feed/?shareActive=true&text=${encodedText}`;
        break;
      case 'Facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('btcnairobi.org')}&quote=${encodedText}`;
        break;
      case 'Nostr':
        shareUrl = `https://primal.net/composer?content=${encodedText}`;
        break;
      case 'Email':
        shareUrl = `mailto:?subject=${encodeURIComponent(`I mastered ${readingSubtopic.title}!`)}&body=${encodedText}`;
        break;
      case 'Copy':
        navigator.clipboard.writeText(text);
        setCopiedShare(true);
        setTimeout(() => setCopiedShare(false), 2000);
        return;
    }
    
    if (shareUrl) window.open(shareUrl, '_blank');
    setShowShareMenu(false);
  };

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
    triggerToast(bookmarked ? "Bookmark Removed" : "Lesson Bookmarked");
  };

  const triggerToast = (msg: string) => {
    setShowToast(msg);
    setTimeout(() => setShowToast(null), 2000);
  };

  return (
    <PageLayout title="Merchant Academy" subtitle="Sovereign Business Course">
      
      {/* --- READER MODAL (SLIDE BASED) --- */}
      {readingSubtopic && (
        <div className="fixed inset-0 z-[100] bg-slate-900 flex flex-col animate-in fade-in duration-200">
           
           {/* Header Bar */}
           <div className="bg-[#F7931A] p-4 flex justify-between items-center border-b-4 border-black shrink-0 relative z-10">
              <div className="flex items-center gap-3 text-white overflow-hidden">
                 <BookOpen size={24} className="shrink-0" />
                 <div className="overflow-hidden">
                   <p className="text-[10px] font-bold uppercase text-black/60 leading-none mb-1">Current Lesson</p>
                   <h3 className="font-bold uppercase text-sm md:text-lg leading-none truncate pr-2 max-w-[200px] md:max-w-md">{readingSubtopic.title}</h3>
                 </div>
              </div>
              
              <div className="flex items-center gap-3">
                 <button onClick={toggleBookmark} className="text-white hover:text-black transition-colors">
                    <Bookmark size={24} fill={bookmarked ? "white" : "none"} />
                 </button>
                 <button onClick={() => setShowShareMenu(true)} className="text-white hover:text-black transition-colors">
                    <Share2 size={24} />
                 </button>
                 <button onClick={handleCopy} className="text-white hover:text-black transition-colors">
                    <Copy size={24} />
                 </button>
                 <div className="w-px h-8 bg-black/20 mx-1"></div>
                 <button onClick={() => setReadingSubtopic(null)} className="bg-black text-white p-2 rounded-full hover:bg-slate-800 shadow-hard-sm active:translate-y-1 active:shadow-none transition-all">
                    <X size={20} />
                 </button>
              </div>
           </div>

           {/* Progress Line */}
           <div className="w-full bg-slate-800 h-1">
              <div 
                className="h-full bg-green-500 transition-all duration-300" 
                style={{ width: `${((currentSlide) / readingSubtopic.content.length) * 100}%` }}
              ></div>
           </div>

           {/* Slide Content Area - Scrollable */}
           <div className="flex-grow overflow-y-auto bg-white relative">
              <div className="min-h-full flex flex-col justify-center p-6 md:p-12">
                  <div className="max-w-2xl w-full mx-auto relative">
                     
                     {/* Toast Notification - Fixed position so it stays visible on scroll */}
                     {showToast && (
                        <div className="fixed top-32 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-full text-xs font-bold uppercase animate-in fade-in slide-in-from-top-4 shadow-lg z-50 flex items-center gap-2 pointer-events-none">
                           <Check size={14} /> {showToast}
                        </div>
                     )}

                     {/* Breadcrumbs - Moved out of slide animation for stability */}
                     {currentSlide < readingSubtopic.content.length && (
                        <div className="flex flex-wrap items-center gap-y-1 gap-x-2 mb-8 text-[10px] md:text-xs font-bold uppercase tracking-widest leading-none text-slate-400 animate-in fade-in">
                            <span>Chapter {currentChapter?.id}</span>
                            <ChevronRight size={10} />
                            <span className="max-w-[100px] md:max-w-[200px] truncate">{activeTopic?.title}</span>
                            <ChevronRight size={10} />
                            <span className="text-[#F7931A]">{readingSubtopic.title}</span>
                        </div>
                     )}

                     {currentSlide < readingSubtopic.content.length ? (
                        <div className="animate-in slide-in-from-right duration-300" key={currentSlide}>
                           <p className="text-xl md:text-3xl font-medium text-slate-800 leading-relaxed md:leading-normal">
                              {readingSubtopic.content[currentSlide]}
                           </p>
                        </div>
                     ) : (
                        // Completion Slide (Enhanced)
                        <div className="text-center animate-in zoom-in duration-300 flex flex-col items-center py-10">
                           <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-6 shadow-hard border-4 border-black animate-bounce shrink-0">
                              <Trophy size={48} className="text-white" />
                           </div>
                           <h2 className="text-3xl md:text-5xl font-bold uppercase mb-2 font-display">Congratulations!</h2>
                           <p className="text-slate-600 mb-8 font-medium text-lg">You have mastered <strong>{readingSubtopic.title}</strong>.</p>
                           
                           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl mb-8">
                               <button onClick={() => setShowShareMenu(true)} className="bg-blue-500 text-white p-4 rounded-xl font-bold uppercase shadow-hard hover:translate-y-1 hover:shadow-sm transition-all flex flex-col items-center gap-2 border-2 border-black">
                                  <Share2 size={24} /> Share
                               </button>
                               
                               <button onClick={() => navigate('/give')} className="bg-[#F7931A] text-white p-4 rounded-xl font-bold uppercase shadow-hard hover:translate-y-1 hover:shadow-sm transition-all flex flex-col items-center gap-2 border-2 border-black">
                                  <Heart size={24} /> Donate
                               </button>

                               {nextLessonData ? (
                                 <button onClick={handleNextLesson} className="bg-black text-white p-4 rounded-xl font-bold uppercase shadow-hard hover:translate-y-1 hover:shadow-sm transition-all flex flex-col items-center gap-2 border-2 border-black md:col-span-1">
                                    <FastForward size={24} /> Next Lesson
                                 </button>
                               ) : (
                                 <button onClick={() => setReadingSubtopic(null)} className="bg-slate-800 text-white p-4 rounded-xl font-bold uppercase shadow-hard hover:translate-y-1 hover:shadow-sm transition-all flex flex-col items-center gap-2 border-2 border-black md:col-span-1">
                                    <Check size={24} /> Complete Course
                                 </button>
                               )}
                           </div>

                           <div className="flex flex-wrap justify-center gap-3">
                              <span className="text-xs font-bold uppercase bg-slate-100 border border-slate-300 px-3 py-1 rounded-full text-slate-500">#keepspedn</span>
                              <span className="text-xs font-bold uppercase bg-slate-100 border border-slate-300 px-3 py-1 rounded-full text-slate-500">#btcnairobi</span>
                           </div>
                       </div>
                     )}
                  </div>
              </div>
           </div>

           {/* Share Menu Overlay */}
           {showShareMenu && (
              <div className="absolute inset-0 bg-white/95 backdrop-blur z-50 flex flex-col items-center justify-center animate-in zoom-in-95 p-4">
                 <button onClick={() => setShowShareMenu(false)} className="absolute top-4 right-4 p-2 bg-slate-100 rounded-full hover:bg-slate-200 border-2 border-slate-200">
                    <X size={24} />
                 </button>
                 
                 <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-[#F7931A] rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-black shadow-hard-sm">
                       <Share2 className="text-white" size={32} />
                    </div>
                    <h4 className="text-3xl font-bold uppercase font-display">Share Lesson</h4>
                    <p className="text-slate-500 font-medium mt-2">Spread the word about Bitcoin Nairobi</p>
                 </div>

                 <div className="grid grid-cols-4 gap-4 px-4 max-w-md">
                   <button onClick={() => executeShare('Twitter')} className="bg-black text-white w-14 h-14 rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-md hover:shadow-lg border-2 border-transparent" title="X / Twitter">
                     <Twitter size={24} />
                   </button>
                   
                   <button onClick={() => executeShare('WhatsApp')} className="bg-green-500 text-white w-14 h-14 rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-md hover:shadow-lg border-2 border-transparent" title="WhatsApp">
                     <MessageCircle size={24} />
                   </button>

                   <button onClick={() => executeShare('Telegram')} className="bg-blue-500 text-white w-14 h-14 rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-md hover:shadow-lg border-2 border-transparent" title="Telegram">
                     <Send size={24} />
                   </button>

                   <button onClick={() => executeShare('Nostr')} className="bg-purple-700 text-white w-14 h-14 rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-md hover:shadow-lg border-2 border-transparent" title="Nostr">
                     <Radio size={24} />
                   </button>

                   <button onClick={() => executeShare('LinkedIn')} className="bg-blue-700 text-white w-14 h-14 rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-md hover:shadow-lg border-2 border-transparent" title="LinkedIn">
                     <Linkedin size={24} />
                   </button>

                   <button onClick={() => executeShare('Facebook')} className="bg-blue-800 text-white w-14 h-14 rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-md hover:shadow-lg border-2 border-transparent" title="Facebook">
                     <Facebook size={24} />
                   </button>

                   <button onClick={() => executeShare('Email')} className="bg-slate-500 text-white w-14 h-14 rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-md hover:shadow-lg border-2 border-transparent" title="Email">
                      <Mail size={24} />
                   </button>

                   <button onClick={() => executeShare('Copy')} className={`${copiedShare ? 'bg-green-500' : 'bg-slate-400'} text-white w-14 h-14 rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-md hover:shadow-lg border-2 border-transparent`} title="Copy Text">
                     {copiedShare ? <Check size={24} /> : <Copy size={24} />}
                   </button>
                </div>
                {copiedShare && <p className="text-sm text-green-600 font-bold mt-6 animate-in fade-in uppercase bg-green-100 px-4 py-2 rounded-full border border-green-200">Text Copied to Clipboard!</p>}
              </div>
           )}

           {/* Footer Navigation (Fixed) - Only show if not completed */}
           {currentSlide < readingSubtopic.content.length && (
               <div className="bg-slate-50 p-4 md:p-6 border-t-2 border-slate-200 shrink-0">
                  <div className="max-w-2xl mx-auto flex items-center gap-4">
                     <button 
                       onClick={handlePrev}
                       disabled={currentSlide === 0}
                       className="w-16 h-16 rounded-2xl flex items-center justify-center border-2 border-slate-300 text-slate-400 hover:border-black hover:text-black disabled:opacity-30 disabled:hover:border-slate-300 transition-all"
                     >
                       <ChevronLeft size={32} />
                     </button>

                     <button 
                       onClick={handleNext}
                       className="flex-grow h-16 bg-black text-white rounded-2xl font-bold uppercase text-xl hover:bg-slate-800 shadow-hard active:shadow-none active:translate-y-1 transition-all flex items-center justify-center gap-2 border-2 border-black"
                     >
                       {currentSlide < readingSubtopic.content.length - 1 ? (
                          <>Next Step <ChevronRight size={24} /></>
                       ) : (
                          <>Finish Lesson <Check size={24} /></>
                       )}
                     </button>
                  </div>
               </div>
           )}

        </div>
      )}

      {/* --- MAIN DASHBOARD --- */}
      <div className="space-y-8">
         
         {/* INTRO */}
         <div className="bg-white border-4 border-black rounded-3xl p-6 md:p-8 shadow-hard text-center">
            <h2 className="text-3xl font-bold uppercase font-display mb-2">Welcome, Merchant</h2>
            <p className="text-slate-600 font-medium max-w-2xl mx-auto mb-6">
               This is a complete 9-chapter course designed to take you from "broken money" to running a fully sovereign business. Select a chapter to begin.
            </p>
            <div className="flex justify-center gap-4">
               <div className="flex items-center gap-2 text-xs font-bold uppercase text-slate-400">
                  <div className="w-3 h-3 bg-black rounded-full"></div> 9 Chapters
               </div>
               <div className="flex items-center gap-2 text-xs font-bold uppercase text-slate-400">
                  <div className="w-3 h-3 bg-black rounded-full"></div> 27 Topics
               </div>
               <div className="flex items-center gap-2 text-xs font-bold uppercase text-slate-400">
                  <div className="w-3 h-3 bg-black rounded-full"></div> 162 Lessons
               </div>
            </div>
         </div>

         {/* --- NAVIGATION GRID --- */}
         {!activeChapter ? (
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {merchantCourseData.map((chapter) => (
                 <button 
                   key={chapter.id} 
                   onClick={() => setActiveChapter(chapter.id)}
                   className="bg-white border-4 border-black rounded-3xl p-6 shadow-hard hover:translate-y-1 hover:shadow-sm transition-all text-left flex flex-col h-full group"
                 >
                    <div className="flex justify-between items-start mb-4">
                       <div className={`w-14 h-14 rounded-full border-2 border-black flex items-center justify-center text-white shadow-sm ${chapter.color}`}>
                          <chapter.icon size={28} />
                       </div>
                       <span className="text-4xl font-black text-slate-100 group-hover:text-slate-200 transition-colors">0{chapter.id}</span>
                    </div>
                    <h3 className="text-xl font-bold uppercase font-display leading-tight mb-4 flex-grow group-hover:text-[#F7931A] transition-colors">
                       {chapter.title}
                    </h3>
                    <div className="mt-auto pt-4 border-t-2 border-slate-100 flex items-center justify-between text-xs font-bold uppercase text-slate-400">
                       <span>3 Topics</span>
                       <div className="flex items-center gap-1 group-hover:gap-2 transition-all text-black">
                          Start <ArrowRight size={14} />
                       </div>
                    </div>
                 </button>
              ))}
           </div>
         ) : (
           /* --- CHAPTER VIEW --- */
           <div className="animate-in slide-in-from-right">
              {/* Back Button */}
              <button 
                 onClick={() => { setActiveChapter(null); setActiveTopic(null); }}
                 className="mb-6 flex items-center gap-2 font-bold uppercase text-sm hover:text-[#F7931A] transition-colors"
              >
                 <ArrowRight className="rotate-180" size={16} /> Back to Curriculum
              </button>

              <div className="bg-white border-4 border-black rounded-3xl overflow-hidden shadow-hard">
                 {/* Chapter Header */}
                 <div className={`p-8 text-white border-b-4 border-black ${currentChapter?.color}`}>
                    <div className="flex items-center gap-4 mb-2 opacity-80">
                       <currentChapter.icon size={24} />
                       <span className="text-xs font-bold uppercase tracking-widest">Chapter {currentChapter?.id}</span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold uppercase font-display leading-none max-w-3xl">
                       {currentChapter?.title}
                    </h2>
                 </div>

                 <div className="grid grid-cols-1 lg:grid-cols-3">
                    
                    {/* TOPICS SIDEBAR */}
                    <div className="bg-slate-50 border-r-0 lg:border-r-4 border-b-4 lg:border-b-0 border-black p-6 space-y-4">
                       <h4 className="font-bold uppercase text-slate-400 text-xs mb-2">Select a Topic</h4>
                       {currentChapter?.topics.map((topic, idx) => (
                          <button
                             key={idx}
                             onClick={() => setActiveTopic(topic)}
                             className={`w-full text-left p-4 rounded-xl border-2 transition-all ${activeTopic?.title === topic.title ? 'bg-black text-white border-black shadow-lg' : 'bg-white text-slate-600 border-slate-200 hover:border-black'}`}
                          >
                             <div className="flex justify-between items-start">
                                <span className="text-[10px] font-bold uppercase opacity-60 mb-1 block">Topic {currentChapter.id}.{idx+1}</span>
                                {activeTopic?.title === topic.title && <Play size={12} className="mt-1" fill="white" />}
                             </div>
                             <h5 className="font-bold uppercase leading-tight text-sm">{topic.title}</h5>
                          </button>
                       ))}
                       
                       {/* Activity Card */}
                       <div className="mt-8 bg-[#F7931A]/10 border-2 border-[#F7931A] rounded-xl p-4">
                          <div className="flex items-center gap-2 mb-2 text-[#F7931A]">
                             <CheckCircle2 size={20} />
                             <span className="font-bold uppercase text-xs">Practical Activity</span>
                          </div>
                          <p className="text-sm font-bold text-slate-800 leading-tight">
                             {currentChapter?.activity}
                          </p>
                       </div>
                    </div>

                    {/* SUBTOPICS AREA */}
                    <div className="col-span-2 p-6 md:p-8 bg-white min-h-[500px]">
                       {activeTopic ? (
                          <div className="animate-in fade-in slide-in-from-bottom-4">
                             <div className="mb-8">
                                <span className="text-[#F7931A] font-bold uppercase text-xs tracking-widest mb-2 block">Current Topic</span>
                                <h3 className="text-2xl font-bold uppercase mb-4 leading-tight">{activeTopic.title}</h3>
                                <p className="text-slate-600 font-medium text-lg leading-relaxed border-l-4 border-slate-200 pl-4">
                                   {activeTopic.description}
                                </p>
                             </div>

                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {activeTopic.subtopics.map((sub, i) => (
                                   <button 
                                      key={i}
                                      onClick={() => setReadingSubtopic(sub)}
                                      className="bg-slate-50 border-2 border-slate-100 p-5 rounded-xl hover:border-black hover:bg-white hover:shadow-md transition-all text-left group flex flex-col h-full"
                                   >
                                      <div className="flex justify-between items-start mb-2">
                                         <span className="text-[10px] font-bold uppercase text-slate-400">Lesson {i+1}</span>
                                         <BookOpen size={16} className="text-slate-300 group-hover:text-[#F7931A] transition-colors" />
                                      </div>
                                      <h4 className="font-bold uppercase text-sm leading-snug group-hover:underline decoration-2 underline-offset-2 flex-grow">
                                         {sub.title}
                                      </h4>
                                      <div className="mt-4 pt-4 border-t border-slate-200 flex items-center gap-2 text-xs font-bold uppercase text-[#F7931A] opacity-0 group-hover:opacity-100 transition-opacity">
                                         Start Lesson <ArrowRight size={12} />
                                      </div>
                                   </button>
                                ))}
                             </div>

                             {/* Contextual Tool Suggestion */}
                             <div className="mt-8 pt-8 border-t-2 border-slate-100">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                   <GenericTool label="Recommended Tool" action="Search for 'Lightning Wallet' in your App Store." />
                                   <PriceTicker />
                                </div>
                             </div>

                          </div>
                       ) : (
                          <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                             <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                                <ChevronRight size={40} />
                             </div>
                             <h3 className="text-xl font-bold uppercase">Select a Topic to Begin</h3>
                             <p className="font-medium text-sm">Choose from the menu on the left.</p>
                          </div>
                       )}
                    </div>

                 </div>
              </div>
           </div>
         )}

      </div>
    </PageLayout>
  );
};
