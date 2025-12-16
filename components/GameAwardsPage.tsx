import Link from 'next/link';
import NominateButton from './NominateButton';
import { GameShowCard } from './GameShowCard';
import { GameShowEvents } from '@/data/events';

const GameAwardsPage = () => {
  // RichTextContainer styles
  const richTextContainerStyles =
    'flex flex-col justify-start outline-none flex-shrink-0';

  return (
    <div className="flex flex-col items-center justify-center gap-[41px] w-full h-min p-[80px_60px_63px] scroll-mt-10 bg-[#110e0b] relative overflow-visible">
      <div className="flex flex-col items-center justify-start gap-[80px] w-full max-w-[1280px] h-min px-[60px] relative overflow-visible">
        {/* Main container - framer-qdrccq */}

        <div className="grid grid-cols-2 gap-[120px] w-full h-min relative overflow-visible">
          {/* Row - framer-u2fpml */}

          {/* Content column - framer-oid8rj */}
          <div className="flex flex-col items-start justify-start gap-[32px] w-full h-full relative overflow-visible">
            {/* Heading - framer-13mejwn */}
            <div className="flex flex-col justify-start outline-none flex-shrink-0 w-full h-auto relative">
              <h2
                className="text-white"
                style={{
                  fontFamily: '"Satoshi", "Satoshi Placeholder", sans-serif',
                  fontSize: '52px',
                  fontWeight: 500,
                  letterSpacing: '-1px',
                  lineHeight: '1.25em',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                  wordWrap: 'break-word',
                }}
              >
                Build hype for your game before launch.
              </h2>
            </div>

            {/* Supporting text - framer-zc32l6 */}
            <div className="flex flex-col justify-start outline-none flex-shrink-0 w-full h-auto relative">
              <p
                className="text-[#afafaf]"
                style={{
                  fontFamily: '"Karla", "Karla Placeholder", sans-serif',
                  fontSize: '18px',
                  letterSpacing: '-0.07em',
                  lineHeight: '1.6em',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                  wordWrap: 'break-word',
                }}
              >
                Showcase your playable demo to an audience eager to discover
                something new. Create buzz, generate anticipation, and get
                people talking about your game months before release.
              </p>
            </div>
          </div>

          {/* Image column - framer-1g8xpfz */}
          <div className="rounded-[25px] w-full h-full relative">
            <div className="absolute inset-0 rounded-[25px] overflow-hidden">
              <img
                decoding="async"
                width="2500"
                height="1667"
                sizes="max((min(100vw - 120px, 1280px) - 240px) / 2, 50px)"
                srcSet="https://framerusercontent.com/images/SZQqqHYnhQLmhPJZYN56uvq9IA.jpg?scale-down-to=512 512w, https://framerusercontent.com/images/SZQqqHYnhQLmhPJZYN56uvq9IA.jpg?scale-down-to=1024 1024w, https://framerusercontent.com/images/SZQqqHYnhQLmhPJZYN56uvq9IA.jpg?scale-down-to=2048 2048w, https://framerusercontent.com/images/SZQqqHYnhQLmhPJZYN56uvq9IA.jpg 2500w"
                src="https://framerusercontent.com/images/SZQqqHYnhQLmhPJZYN56uvq9IA.jpg"
                alt="Game showcase"
                className="w-full h-full object-cover object-center"
                style={{ display: 'block', borderRadius: 'inherit' }}
              />
            </div>
          </div>
        </div>

        <h2 className="text-white font-satoshi font-medium text-[52px] leading-[1.25] tracking-[-1px] whitespace-pre-wrap break-words break-all">
          Tour Stops and Deadlines
        </h2>
        <div className="w-full">
          {GameShowEvents.map((event, index) => (
            <GameShowCard
              key={index}
              href={event.href}
              imageSrc={event.imageSrc}
              imageAlt={event.imageAlt}
              dates={event.dates}
              deadline={event.deadline}
              NominateButton={
                <NominateButton
                  href={event.buttonHref}
                  label={event.buttonLabel}
                />
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameAwardsPage;
