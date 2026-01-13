import React from "react";
const AwardsPartners = () => {
  const partners = [
    {
      name: "TIFF",
      url: "https://tiff.net/",
      image: "/images/UGpDThlQVeo64L7A9441w2I2ki4.png",
      categories: ["Awards"],
    },
    {
      name: "Entertainment Software Association of Canada",
      url: "https://theesa.ca/",
      image: "/images/VSoDIwALps7pFH4hUEhhmLEY0.png",
      categories: ["Awards"],
    },
    {
      name: "Loto Québec",
      url: "https://loteries.lotoquebec.com/fr/accueil",
      image: "/images/DQtaMioPXxnRAedrlRd3ED1m6c.png",
      categories: ["Awards"],
    },
    {
      name: "Intel",
      url: "https://www.intel.com/",
      image: "/images/NQBChkYQtlqc749YjrtOHJGDg.avif",
      categories: ["Awards"],
    },
    {
      name: "OverActive Media Group",
      url: "https://overactive-media-group.prezly.com/",
      image: "/images/LK5j5HfHIB2SWKKz9G9yVULr0fs.png",
      categories: ["Awards"],
    },
    // Valnet removed as it's Title Partner
    {
      name: "MSI",
      url: "https://ca.msi.com/",
      image: "/images/1Jqcun75YhOXKBaLuqwb28kTDk.png",
      categories: ["Awards"],
    },
    {
      name: "Gameloft Montréal",
      url: "https://www.gameloft.com/gameloft-studios/montreal",
      image: "/images/EVYtPqxWNlqaFARm7yQtpxDSN9g.png",
      categories: ["Awards"],
    },
  ];
  return (
    <div className="framer-NVjQy framer-3xy9jw flex flex-col items-center gap-[48px] min-h-min overflow-hidden relative w-full lg:px-[80px] md:px-[48px] px-[16px]">
      <div className="flex flex-col items-center gap-[16px] w-full">
        <h2 className="framer-text text-[32px] font-semibold tracking-tight text-white flex items-center gap-[8px]">
          <span>🏆</span> Awards Partners
        </h2>
        <hr className="w-[60%] h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      </div>
      <div className="grid grid-cols-2 gap-[16px] md:grid-cols-3 md:gap-[24px] xl:grid-cols-4 xl:gap-[32px] justify-center w-full relative">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="aspect-square bg-white/3 border border-white/8 rounded-2xl p-2.5 flex flex-col items-center justify-center group hover:bg-white/6 transition duration-300"
          >
            <a
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-full w-full no-underline"
            >
              <img
                src={partner.image}
                alt={`${partner.name} logo – Awards Partner`}
                className="max-h-[100px] object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition duration-300"
                loading="lazy"
              />
            </a>
            {partner.categories.length > 1 && (
              <div className="flex gap-[4px] mt-[8px]">
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
export default AwardsPartners;
