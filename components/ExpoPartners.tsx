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
      {/* Header Section */}
      <div className="flex flex-col items-center gap-[16px] w-full text-center">
        <h2 className="framer-text text-[32px] font-semibold tracking-tight text-white flex items-center justify-center gap-[8px]">
          <span>🎮</span> Eh! Game Showcase Partners
        </h2>
        <hr className="w-[60%] h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      </div>

      {/* FLEXBOX SECTION:
          - 'flex-wrap' allows items to move to a new line on smaller screens.
          - 'justify-center' keeps all items (1, 2, or 3+) perfectly centered.
          - 'gap' replaces the grid gutter.
      */}
      <div className="flex flex-wrap justify-center gap-[16px] xl:gap-[32px] w-full max-w-[1200px] mx-auto relative">
        {partners.map((partner, index) => (
          <div
            key={index}
            /* Width adjustments to mimic your grid:
               - w-[calc(50%-16px)]: roughly 2 per row on mobile
               - md:w-[200px] & lg:w-[240px]: consistent sizing on desktop
            */
            className="aspect-square bg-white/3 border border-white/8 rounded-[16px] p-[10px] flex flex-col items-center justify-center group hover:bg-white/6 transition duration-300 w-[calc(50%-16px)] md:w-[200px] lg:w-[240px]"
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
                className="max-h-[150px] max-w-full object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition duration-300"
                loading="lazy"
              />
            </a>

            {partner.categories.length > 1 && (
              <div className="flex gap-[4px] mt-[8px]">
                {partner.categories.slice(0, 2).map((cat, i) => (
                  <span
                    key={i}
                    className="px-[10px] py-[4px] text-[10px] uppercase bg-white/10 border border-white/20 rounded-[12px] text-white"
                  >
                    {cat}
                  </span>
                ))}
                {partner.categories.length > 2 && (
                  <span className="px-[10px] py-[4px] text-[10px] uppercase bg-white/10 border border-white/20 rounded-[12px] text-white">
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
