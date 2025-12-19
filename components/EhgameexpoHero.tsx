// components/HeroSection.tsx
import Image from 'next/image';

const EhgameExpoHeroSection = () => {
  // RichTextContainer styles
  const richTextContainerStyles =
    'flex flex-col justify-start outline-none flex-shrink-0';

  return (
    <div className="relative w-full h-max border-b border-gray-800" id="top">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://framerusercontent.com/images/t77F9dNTIAm0knTnkab3cK5Z7NA.png"
          alt="Hero background"
          className="object-cover h-full w-full hidden lg:block"
        />
        <img
          src=" https://framerusercontent.com/images/y6kWXjFONpoyTOQk1tsZipgYDA.png"
          alt="Hero background"
          className="object-cover  object-center h-full w-full lg:hidden opacity-30"
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
            <h1 className="font-karla font-semibold text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight">
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
              className={`${richTextContainerStyles} flex-none h-auto max-w-full lg:max-w-[40%] relative whitespace-pre-wrap  break-words`}
            >
              <p className="font-karla text-lg md:text-xl text-white leading-relaxed tracking-tight">
                <span className="block">
                  This fall we are taking Canadian indie games to some of the
                  biggest pop culture and gaming events in the country. These
                  events bring together the exact players, fans, and industry
                  professionals you want to reach. Build hype, grow your
                  community, and make valuable connections, all in one place.
                </span>
                <span className="block mt-4">
                  Showcase your demo and let Canada experience what you have
                  been working on. Whether you are preparing for launch or
                  building momentum for the future, the Eh! Game Showcase is
                  your platform to shine!
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
