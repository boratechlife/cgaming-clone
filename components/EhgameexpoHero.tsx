// components/HeroSection.tsx
import { karla } from '@/app/layout';
import Image from 'next/image';
import Link from 'next/link';

const EhgameExpoHeroSection = () => {
  const richTextContainerStyles =
    'flex flex-col justify-start outline-none flex-shrink-0';

  return (
    <div className="relative w-full h-max border-b border-gray-800" id="top">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <img
          src="https://framerusercontent.com/images/y6kWXjFONpoyTOQk1tsZipgYDA.png"
          alt="Hero background"
          className="object-cover transform object-center h-full w-full opacity-100"
        />
      </div>

      <section
        className="relative z-10 flex flex-col lg:flex-row flex-none gap-0 h-min max-w-full overflow-hidden px-4 sm:px-6 pt-20 lg:p-[65px_96px_5px_130px] w-full place-content-center items-center"
        id="hero-section"
      >
        <div className="flex flex-col flex-[6_0_0px] gap-4 h-min overflow-visible p-0 relative place-content-[flex-start_center] items-start">
          {/* Decorative Logo - FIXED: Centered and not cut out */}
          <div className="flex-none h-[57px] w-[140px] relative overflow-hidden flex items-center justify-center">
            <img
              src="/images/zHziUHnbr5bQPXjnNbfMwM7r40M.webp"
              alt="Eh! Game Logo"
              className="w-full h-full object-contain"
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
              className={`${richTextContainerStyles} flex-none ${karla.className} h-auto max-w-full lg:max-w-[40%] relative whitespace-pre-wrap break-words`}
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
                  audiences...
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Large Image and Button Below */}
        <div className="flex flex-col items-center lg:items-end gap-6 mt-10 lg:mt-0">
          {/* New Button below the large image */}
          <div className="h-80"></div>
          <Link
            href="https://zfrmz.ca/b3X3zhsIG6vFGZr7vMi9"
            target="_blank"
            className={`${karla.className} 
              relative inline-flex items-center justify-center
              px-10 py-4 
              bg-gradient-to-r from-blue-700 to-blue-600
              text-white font-bold uppercase tracking-[0.15em] text-sm
              rounded-full 
              shadow-[0_0_20px_rgba(37,99,235,0.3)]
              hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]
              hover:from-red-600 hover:to-red-500
              hover:-translate-y-0.5
              active:translate-y-0
              transition-all duration-300 ease-out
              group overflow-hidden`}
          >
            <span className="relative z-10">Apply to Exhibit</span>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EhgameExpoHeroSection;
