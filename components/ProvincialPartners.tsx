import React from "react";
const ProvincialPartners = () => {
  const partners = [
    {
      name: "Digital Alberta",
      url: "https://digitalalberta.com/",
      image: "/images/rmrnpE9KCIxlgZf3QkTaqGwUpec.avif",
    },
    {
      name: "La Guilde du jeu vidéo du Québec",
      url: "https://www.laguilde.quebec/",
      image: "/images/HYv2N7JvT5Gbo9rHzT5qhbxDKM.avif",
    },
    {
      name: "Interactive Ontario",
      url: "https://interactiveontario.com/",
      image: "/images/CSf7kU9YCIyyoWdwqMEviVdes.avif",
    },
    {
      name: "DigiBC",
      url: "https://digibc.org/",
      image: "/images/OPBw3JXDDhDnQX6uwYv45X6ceQ.avif",
    },
  ];
  return (
    <div className="framer-NVjQy px-[16px] md:px-[48px] lg:px-[80px] py-[48px] pb-[60px] flex flex-col items-center gap-[48px] min-h-min overflow-hidden relative w-full">
      <div className="flex flex-col items-center gap-[16px] w-full">
        <h2 className="framer-text text-[24px] font-semibold tracking-tight text-white flex items-center gap-[8px]">
          <span>🌍</span> Provincial Partners
        </h2>
        <hr className="w-[60%] h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
        <p className="text-[16px] text-white/50 text-center max-w-[800px]">
          Acknowledging the vital support from provincial organizations
          advancing the gaming industry across Canada.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-[20px] md:grid-cols-4 xl:grid-cols-6 justify-center w-full relative ">
        {partners.map((partner, index) => (
          <a
            key={index}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center h-[130px] group"
          >
            <img
              src={partner.image}
              alt={`${partner.name} logo – Provincial Partner`}
              className="max-h-[120px] object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300"
              loading="lazy"
            />
          </a>
        ))}
      </div>
    </div>
  );
};
export default ProvincialPartners;
