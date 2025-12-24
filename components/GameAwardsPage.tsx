import Link from 'next/link';
import NominateButton from './NominateButton';
import { GameShowCard } from './GameShowCard';
import { GameShowEvents } from '@/data/events';
import GamePromoSection from './GamePromoSection';
import GameshowPartners from './GameshowPartners';

const GameAwardsPage = () => {
  // RichTextContainer styles
  const richTextContainerStyles =
    'flex flex-col justify-start outline-none flex-shrink-0';

  return (
    <div className="flex flex-col items-center justify-center gap-[41px] w-full h-min scroll-mt-10 bg-[#110e0b] relative overflow-visible">
      <div className="flex flex-col items-center justify-start gap-[80px] w-full max-w-7xl h-min px-[0px] relative overflow-visible">
        {/* Main container - framer-qdrccq */}

        <div
          className="framer-5v5wd4 flex flex-col gap-20 gap-y-30 w-full h-min relative "
          data-framer-name="Works"
          id="works"
        >
          <div
            className="framer-1c0uklb"
            data-framer-name="Heading"
            data-framer-component-type="RichTextContainer"
          >
            <h2 className="framer-text">Why You Should Be There</h2>
          </div>

          <div
            className="framer-qdrccq"
            data-framer-name="Container"
            id="testimonials-b"
          >
            <GamePromoSection
              heading="Build hype for your game before launch."
              supportingText="Showcase your playable demo to an audience eager to discover something new. Create buzz, generate anticipation, and get people talking about your game months before release."
              imageUrl="/images/SZQqqHYnhQLmhPJZYN56uvq9IA.avif"
              imageAlt="Game showcase"
            />
          </div>

          <div
            className="framer-1tp5k5b"
            data-framer-name="Container"
            id="testimonials-b-1"
          >
            <GamePromoSection
              heading="Get valuable feedback from live players."
              supportingText="Watch real players interact with your game in real time. Gain insights you can use to refine mechanics, improve the experience, and ensure a stronger launch."
              imageUrl="/images/CUQPjW48It43eXdqimL1YWWpSM.avif"
              imageAlt="Players testing game"
              headingSize="52px"
              reverseLayout={true}
            />
          </div>

          <div
            className="framer-1sdot2p"
            data-framer-name="Container"
            id="testimonials-b-2"
          >
            <GamePromoSection
              heading="Meet press, influencers, and other developers."
              supportingText="Network with industry professionals who can help amplify your game's reach. Build relationships that open doors to media coverage and collaboration opportunities."
              imageUrl="/images/noasRBIeW4tt8X1SUoyHnG3ic.avif"
              imageAlt="Networking event"
              headingSize="42px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameAwardsPage;
