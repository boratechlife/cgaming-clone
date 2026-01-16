import Link from "next/link";
import NominateButton from "./NominateButton";
import { GameShowCard } from "./GameShowCard";
import { GameShowEvents } from "@/data/events";
import GamePromoSection from "./GamePromoSection";
import GameshowPartners from "./GameshowPartners";
import { satoshi } from "@/app/layout";
import { ShowcaseCarousel } from "./ShowcaseCarousel";

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
        whitespace-nowrap
      `}
            >
              Why You Should{" "}
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

          <ShowcaseCarousel />
          {/* --- FOR PLAYERS & FANS --- */}
          <div className="mt-20 pt-20 border-t border-white/10 flex flex-col gap-12">
            <div className="text-center space-y-4">
              <h2
                className={`
        ${satoshi.className} 
        text-4xl md:text-6xl lg:text-7xl 
        font-black text-white 
        tracking-tighter leading-tight
        whitespace-nowrap
      `}
              >
                Discover What’s Next{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500">
                  In Canadian Games
                </span>
              </h2>
              <p className="text-neutral-400 max-w-2xl mx-auto text-lg leading-relaxed">
                The Eh! Game Showcase is a hands-on celebration of Canadian
                games and the people behind them.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Video Embed Container - Starts at 0:15 to skip "Eh! Game Expo" intro card */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-neutral-900">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/RBmOYrQ8nC4?start=15"
                  title="Eh! Game Showcase"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Client Content Body */}
              <div className="flex flex-col gap-6">
                <p
                  className={`${satoshi.className} text-xl text-neutral-200 leading-relaxed font-medium`}
                >
                  The Eh! Game Showcase is a hands-on celebration of Canadian
                  games and the people behind them.
                </p>

                <div className="space-y-4 text-neutral-400 leading-relaxed">
                  <p>
                    Designed as a travelling showcase, Eh! Game brings Canadian
                    games to players and communities across the country. Each
                    stop highlights local studios alongside projects from coast
                    to coast, creating space for discovery, conversation, and
                    connection through play.
                  </p>

                  {/* Primary Action: Exhibit */}
                  <div className="pt-2">
                    <Link
                      href="https://zfrmz.ca/b3X3zhsIG6vFGZr7vMi9"
                      className="inline-block px-6 py-3 bg-blue-800 text-white font-bold rounded-lg hover:bg-blue-900 transition-all shadow-lg shadow-red-600/20"
                    >
                      Apply to Exhibit
                    </Link>
                  </div>

                  <p>
                    Discover upcoming and in-development titles, play games
                    before they’re released, and connect directly with the
                    developers, artists, and creators shaping them. Part
                    playtest, part conversation, and part community gathering,
                    the showcase invites players to experience games early and
                    be part of their journey.
                  </p>

                  <p>
                    For exhibitors, Eh! Game offers a dedicated space to present
                    games to engaged audiences, gather real player feedback, and
                    build meaningful connections with press, industry peers, and
                    the wider game community.
                  </p>

                  <p>
                    The Eh! Game Showcase is free to attend and offers a unique
                    window into what’s being built across Canada.
                  </p>

                  <p>
                    Continue the experience with the Canadian Game Awards later
                    that evening, celebrating the games and creators featured
                    throughout the day. Keep the conversation going by joining
                    the Eh! Game Discord.
                  </p>
                </div>

                {/* Secondary Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    href="https://canadiangameawards.zohobackstage.ca/CGA2026#/buyTickets/selectTickets?lang=en"
                    className="px-6 py-3 bg-neutral-800 text-white font-bold rounded-lg hover:bg-neutral-700 transition-all border border-white/10"
                  >
                    Buy Awards Tickets
                  </Link>
                  <Link
                    href="https://discord.gg/Q8NMbHtfbS"
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
