import React from "react";
const ExpoPartners = () => {
  const partners = [
    {
      name: "City of Toronto",
      url: "https://www.toronto.ca/",
      image: "/images/9T5taSmSffnn8GIAVEIcUxwYnOk.avif",
      categories: ["Expo"],
    },
    {
      name: "Intel",
      url: "https://www.intel.com/",
      image: "/images/NQBChkYQtlqc749YjrtOHJGDg.avif",
      categories: ["Expo"],
    },
    {
      name: "MSI",
      url: "https://ca.msi.com/",
      image: "/images/1Jqcun75YhOXKBaLuqwb28kTDk.png",
      categories: ["Expo"],
    },
  ];
  return (
    <div className="framer-NVjQy py-[80px] md:py-[60px] flex flex-col items-center gap-[48px] min-h-min overflow-hidden relative w-full px-[16px] md:px-[48px] lg:px-[80px]">
      <div className="flex flex-col items-center gap-[16px] w-full">
        <h2 className="framer-text text-[32px] font-semibold tracking-tight text-white flex items-center gap-[8px]">
          <span>🎮</span> Eh! Game Showcase Partners
        </h2>
        <hr className="w-[60%] h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      </div>
      {/* Updated grid classes to ensure centering when items are fewer than the column count */}
      <div className="grid grid-cols-2 gap-[16px] md:grid-cols-3 xl:grid-cols-4 xl:gap-[32px] justify-center justify-items-center max-w-max mx-auto relative">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="aspect-square bg-white/3 border border-white/8 rounded-[16px] p-[10px] flex flex-col items-center justify-center group hover:bg-white/6 transition duration-300 w-full min-w-[140px] md:min-w-[200px]"
          >
            <a
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-full w-full no-underline"
            >
              <img
                src={partner.image}
                alt={`${partner.name} logo – Eh! Game Showcase Partner`}
                className="max-h-[150px] object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition duration-300"
                loading="lazy"
              />
            </a>
            {partner.categories.length > 1 && (
              <div className="flex gap-[4px] mt-[8px]">
                {partner.categories.slice(0, 2).map((cat, i) => (
                  <span
                    key={i}
                    className="px-[10px] py-[4px] text-[10px] uppercase bg-white/10 border border-white/20 rounded-[12px]"
                  >
                    {cat}
                  </span>
                ))}
                {partner.categories.length > 2 && (
                  <span className="px-[10px] py-[4px] text-[10px] uppercase bg-white/10 border border-white/20 rounded-[12px]">
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
export default ExpoPartners;
