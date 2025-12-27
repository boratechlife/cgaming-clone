import React from "react";
const MediaPartners = () => {
  const partners = [
    {
      name: "AGN A Gaming Network",
      url: "https://www.agamingnetwork.com/",
      image: "/images/7sjXy8OlDizGPBENcKd9M5bkBgc.avif",
      categories: ["Media", "Cocktail"],
    },
    // SCREENRANT removed as it's Official Media Partner
    {
      name: "MobileSyrup",
      url: "https://mobilesyrup.com/",
      image: "/images/nqnyIUgCEZ33FxJCDPe5sv58YE.avif",
      categories: ["Media", "Cocktail"],
    },
    {
      name: "Indie Game Reviewer",
      url: "https://indiegamereviewer.com/",
      image: "/images/OE76Dh6x4mfkyil4NUUKwnlUOp0.avif",
      categories: ["Media", "Cocktail"],
    },
    {
      name: "Canadian Podcast Awards",
      url: "https://canpodawards.ca/",
      image: "/images/A09yCyAK37Musop3kvfWUKAvX0w.svg",
      categories: ["Media", "Cocktail"],
    },
    {
      name: "The Lodgge",
      url: "https://thelodgge.com/",
      image: "/images/4C17mxCfwPiLs3YF1yF3azQpyD8.avif",
      categories: ["Media", "Cocktail"],
    },
  ];
  return (
    <div className="framer-NVjQy py-[80px] md:py-[60px] flex flex-col items-center gap-[48px] min-h-min overflow-hidden relative w-full px-[16px] md:px-[28px] lg:px-[80px]">
      <div className="flex flex-col items-center gap-[16px] w-full">
        <h2 className="framer-text text-[32px] font-semibold tracking-tight text-white flex items-center gap-[8px]">
          <span>📣</span> Media Partners
        </h2>
        <hr className="w-[60%] h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      </div>
      <div className="grid grid-cols-2 gap-[16px] md:grid-cols-3 md:gap-[24px] xl:grid-cols-4 xl:gap-[32px] justify-center w-full relative">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="aspect-square bg-white/3 border border-white/8 rounded-[16px] p-[24px] flex flex-col items-center justify-center group hover:bg-white/6 transition duration-300"
          >
            <a
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-full w-full no-underline"
            >
              <img
                src={partner.image}
                alt={`${partner.name} logo – Media Partner`}
                className="max-h-[200px] object-fit grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition duration-300"
                loading="lazy"
              />
            </a>
            {partner.categories.length > 1 && (
              <div className="flex gap-[4px] mt-[2px]">
                {partner.categories.slice(0, 2).map((cat, i) => (
                  <span
                    key={i}
                    className="px-[10px] py-[4px] text-[10px] uppercase bg-yellow-500/100 border border-white/20 rounded-[12px]"
                  >
                    {cat}
                  </span>
                ))}
                {partner.categories.length > 2 && (
                  <span className="px-[10px] py-[4px] text-[10px] uppercase bg-yellow-500/100 border border-white/20 rounded-[12px]">
                    +{partner.categories.length - 2}
                  </span>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default MediaPartners;
