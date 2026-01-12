// components/HeroSection.tsx
import { karla } from '@/app/layout';
import Image from 'next/image';

const EhgameExpoHeroSection = () => {
  // RichTextContainer styles
  const richTextContainerStyles =
    'flex flex-col justify-start outline-none flex-shrink-0';

  return (
    <div className="relative w-full h-max border-b border-gray-800" id="top">
      {/* Background Image */}
      <div className="absolute inset-0  overflow-hidden z-0">
        <img
          src=" https://framerusercontent.com/images/y6kWXjFONpoyTOQk1tsZipgYDA.png"
          alt="Hero background"
          className="object-cover transform   object-center h-full w-full  opacity-100"
        />
      </div>

      {/* Hero Content */}
      <section
        className="relative z-10 flex flex-col lg:flex-row flex-none gap-0 h-min max-w-full overflow-hidden px-4 sm:px-6 pt-20 lg:p-[65px_96px_5px_130px] w-full place-content-center items-center"
        id="hero-section"
      >
        <div className="flex flex-col flex-[6_0_0px] gap-4 h-min overflow-visible p-0 relative  place-content-[flex-start_center] items-start">
          {/* Decorative Image */}
          <div className="aspect-[2.46353/1] flex-none h-[57px] overflow-visible relative w-[140px]">
            <img
              src="/images/zHziUHnbr5bQPXjnNbfMwM7r40M.webp"
              alt="Decorative element"
              className=" w-full h-full object-cover object-center"
            />
          </div>

          {/* Main Heading */}
          <div
            className={`${richTextContainerStyles} flex-none h-auto relative whitespace-pre-wrap w-full lg:w-[40%] break-words`}
          >
            <h1
              className={`font-karla font-semibold text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight ${karla.className}`}
            >
              <span className="inline-block">Eh!</span>{' '}
              <span className="inline-block">Game</span>{' '}
              <span className="inline-block">Showcase</span>
              <br />
              <span className="inline-block">is</span>{' '}
              <span className="inline-block">here!</span>
            </h1>
          </div>

          {/* Description Text */}
          <div className="flex flex-col flex-none gap-9 h-min overflow-visible p-0 relative w-full place-content-[flex-start_center] items-start">
            <div
              className={`${richTextContainerStyles}  flex-none ${karla.className} h-auto max-w-full lg:max-w-[40%] relative whitespace-pre-wrap  break-words`}
            >
              <p className="font-karla text-lg md:text-xl text-white leading-relaxed tracking-tight py-4 pr-6">
                <span className="block">
                  Eh! Game is a Canadian platform dedicated to celebrating,
                  promoting, and supporting video games and interactive creators
                  from across Canada.
                </span>
                <span className="block mt-4">
                  Through live events, showcases, awards, and digital
                  initiatives, Eh! Game helps Canadian games reach new
                  audiences, connects creators with industry partners, and
                  highlights the diversity and impact of game development in
                  Canada.
                </span>
                <span className="block mt-4">
                  Best known as the organization behind the Canadian Game
                  Awards, Eh! Game operates at the intersection of culture,
                  industry, and community — creating spaces where Canadian games
                  are discovered, experienced, and recognized, both at home and
                  internationally.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EhgameExpoHeroSection;
