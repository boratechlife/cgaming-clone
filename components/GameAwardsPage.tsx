import Link from 'next/link';
import NominateButton from './NominateButton';
import { GameShowCard } from './GameShowCard';
import { GameShowEvents } from '@/data/events';
import GamePromoSection from './GamePromoSection';
import GameshowPartners from './GameshowPartners';
import { satoshi } from '@/app/layout';

const GameAwardsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[41px] w-full h-min scroll-mt-10 bg-[#110e0b] relative overflow-visible">
      <div className="flex flex-col items-center justify-start gap-[80px] w-full max-w-7xl h-min px-[24px] md:px-[40px] relative overflow-visible">
        <div
          className="flex flex-col gap-20 w-full h-min relative"
          data-framer-name="Works"
          id="works"
        >
          {/* Section Heading */}
          <div className="flex flex-col items-center text-center space-y-4 mb-4">
            <h2
              className={`
                ${satoshi.className} 
                text-4xl md:text-6xl lg:text-7xl 
                font-black text-white 
                tracking-tighter leading-tight
                max-w-4xl
              `}
            >
              Why You Should <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500">
                Be There
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-red-600 rounded-full shadow-[0_0_20px_rgba(220,38,38,0.5)]" />
          </div>

          {/* --- FOR EXHIBITORS & INDUSTRY --- */}
          <div className="flex flex-col gap-20">
            {/* 1. Networking */}
            <div className="framer-1sdot2p" id="testimonials-b-2">
              <GamePromoSection
                heading="Meet the creative team, other developers, press, and influencers."
                supportingText="Network with industry professionals who can help amplify your game's reach. Build relationships that open doors to media coverage and collaboration opportunities."
                imageUrl="/images/noasRBIeW4tt8X1SUoyHnG3ic.avif"
                imageAlt="Networking event"
                headingSize="48px"
              />
            </div>

            {/* 2. Feedback */}
            <div className="framer-1tp5k5b" id="testimonials-b-1">
              <GamePromoSection
                heading="Get valuable feedback from live players."
                supportingText="Watch real players interact with your game in real time. Gain insights you can use to refine mechanics, improve the experience, and ensure a stronger launch."
                imageUrl="/images/CUQPjW48It43eXdqimL1YWWpSM.avif"
                imageAlt="Players testing game"
                headingSize="48px"
                reverseLayout={true}
              />
            </div>

            {/* 3. Marketing */}
            <div className="framer-qdrccq" id="testimonials-b">
              <GamePromoSection
                heading="Build hype for your game before launch."
                supportingText="Showcase your playable demo to an audience eager to discover something new. Create buzz, generate anticipation, and get people talking about your game months before release."
                imageUrl="/images/SZQqqHYnhQLmhPJZYN56uvq9IA.avif"
                imageAlt="Game showcase"
                headingSize="48px"
              />
            </div>

            <div className="flex justify-center -mt-8">
              <Link
                href="https://zfrmz.ca/b3X3zhsIG6vFGZr7vMi9"
                className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-all hover:scale-105"
              >
                Apply to Exhibit
              </Link>
            </div>
          </div>

          {/* --- FOR PLAYERS & FANS --- */}
          <div className="mt-20 pt-20 border-t border-white/10 flex flex-col gap-12">
            <div className="text-center space-y-4">
              <h3
                className={`${satoshi.className} text-3xl md:text-5xl font-bold text-white tracking-tight`}
              >
                Discover what’s next in Canadian games
              </h3>
              <p className="text-neutral-400 max-w-2xl mx-auto text-lg leading-relaxed">
                The Eh! Game Showcase is a hands-on celebration of Canadian
                games and the people behind them.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Video Embed Container with Intro Skip (?start=10) */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-neutral-900">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/RBmOYrQ8nC4?start=10"
                  title="Eh! Game Showcase"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Public Body Text */}
              <div className="flex flex-col gap-6">
                <p
                  className={`${satoshi.className} text-xl text-neutral-200 leading-relaxed font-medium`}
                >
                  Discover upcoming and in-development titles from across
                  Canada, play games before they are released, and connect
                  directly with the creators shaping them.
                </p>
                <div className="space-y-4 text-neutral-400 leading-relaxed">
                  <p>
                    Part playtest, part community gathering, the showcase
                    invites players to experience games early and be part of
                    their journey. It is free to attend and offers a unique
                    window into what is being built across Canada.
                  </p>
                  <p>
                    Continue the experience with the Canadian Game Awards taking
                    place later that evening, celebrating the games and creators
                    featured throughout the day.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    href="https://canadiangameawards.zohobackstage.ca/CGA2026#/buyTickets/selectTickets?lang=en"
                    className="px-6 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-all shadow-lg shadow-red-600/20"
                  >
                    Buy Awards Tickets
                  </Link>
                  <Link
                    href="#" // Update with your actual Discord link
                    className="px-6 py-3 bg-neutral-800 text-white font-bold rounded-lg hover:bg-neutral-700 transition-all border border-white/10"
                  >
                    Join our Discord
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameAwardsPage;
