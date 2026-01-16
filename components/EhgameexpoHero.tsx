// components/HeroSection.tsx
import { karla } from "@/app/layout";
import Image from "next/image";
import Link from "next/link";

const EhgameExpoHeroSection = () => {
  const richTextContainerStyles =
    "flex flex-col justify-start outline-none flex-shrink-0";

  return (
    <div
      className="relative w-full h-max border-b border-gray-800 py-20"
      id="top"
    >
      {/* Background Image - FIXED: Removed white bar */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <img
          src="https://framerusercontent.com/images/y6kWXjFONpoyTOQk1tsZipgYDA.png"
          alt="Hero background"
          className="object-cover transform object-center h-full w-full opacity-40"
          style={{ transform: "scale(1.0)" }}
        />
        {/* Subtle Overlay for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
      </div>

      <section
        className="relative z-10 flex flex-col lg:flex-row flex-none gap-10 h-min max-w-full overflow-hidden px-6 sm:px-10 pt-20 lg:p-[65px_96px_65px_130px] w-full place-content-center items-center lg:items-start"
        id="hero-section"
      >
        <div className="flex flex-col flex-[6_0_0px] gap-6 h-min overflow-visible p-0 relative place-content-[flex-start_center] items-start">
          {/* Main Heading */}
          <div
            className={`${richTextContainerStyles} flex-none h-auto relative whitespace-pre-wrap w-full lg:w-[60%] break-words`}
          >
            <h1
              className={`font-karla font-semibold text-4xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tight ${karla.className}`}
            >
              <span className="inline-block">Eh!</span>{" "}
              <span className="inline-block">Game</span>{" "}
              <span className="inline-block">Showcase</span>
              <br />
              <span className="inline-block">is</span>{" "}
              <span className="inline-block">here!</span>
            </h1>
          </div>

          {/* Description Text - UPDATED WITH FULL CLIENT TEXT */}
          <div className="flex flex-col flex-none gap-6 h-min overflow-visible p-0 relative w-full place-content-[flex-start_center] items-start">
            <div
              className={`${richTextContainerStyles} flex-none ${karla.className} h-auto max-w-full lg:max-w-[85%] relative whitespace-pre-wrap break-words`}
            >
              <div className="font-karla text-lg md:text-xl text-white/90 leading-relaxed tracking-tight space-y-6">
                <p>
                  Eh! Game is a Canadian platform dedicated to celebrating,
                  promoting, and supporting video games and interactive creators
                  from across Canada.
                </p>

                <p>
                  Through live events, showcases, awards, and digital
                  initiatives, Eh! Game helps Canadian games reach new
                  audiences, connects creators with industry partners, and
                  highlights the diversity and impact of game development in
                  Canada.
                </p>

                <p>
                  Best known as the organization behind the Canadian Game
                  Awards, Eh! Game operates at the intersection of culture,
                  industry, and community — creating spaces where Canadian games
                  are discovered, experienced, and recognized, both at home and
                  internationally.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Logo and CTA */}
        <div className="flex flex-col items-center lg:items-center gap-8 mt-10 lg:mt-4 w-full lg:w-auto lg:sticky lg:top-20">
          {/* Logo Container */}
          <div className="flex-none h-auto w-[220px] lg:w-[280px] relative overflow-hidden flex items-center justify-center">
            <img
              src="/images/zHziUHnbr5bQPXjnNbfMwM7r40M.webp"
              alt="Eh! Game Logo"
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* Action Button */}
          <div className="flex justify-center w-full">
            <Link
              href="https://zfrmz.ca/b3X3zhsIG6vFGZr7vMi9"
              target="_blank"
              className={`${karla.className} 
                relative inline-flex items-center justify-center
                px-12 py-5 
                bg-gradient-to-r from-blue-700 to-blue-600
                text-white font-bold uppercase tracking-[0.2em] text-sm
                rounded-full 
                shadow-[0_0_25px_rgba(37,99,235,0.4)]
                hover:shadow-[0_0_35px_rgba(239,68,68,0.6)]
                hover:from-red-600 hover:to-red-500
                hover:-translate-y-1
                active:translate-y-0
                transition-all duration-300 ease-out
                group overflow-hidden`}
            >
              <span className="relative z-10">Apply to Exhibit</span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EhgameExpoHeroSection;
