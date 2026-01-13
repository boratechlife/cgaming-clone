import React from "react";
const CharityPartner = () => {
  const partner = {
    name: "Surrey Place",
    url: "https://www.surreyplace.ca/",
    image: "/images/c6BHrhK4mGb6nA5uD7U856aH8hM.avif",
  };
  return (
    <div className="framer-NVjQy py-[80px] flex flex-col items-center gap-[48px] min-h-min overflow-hidden relative w-full px-[16px] md:px-[48px] lg:px-[80px]">
      <div className="flex flex-col items-center gap-[16px] w-full">
        <h2 className="framer-text text-[32px] font-semibold tracking-tight text-white flex items-center gap-[8px]">
          <span>💚</span> Charity Partner
        </h2>
        <hr className="w-[60%] h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      </div>
      <div
        className="max-w-[600px] mx-auto bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border-2 rounded-[20px] p-[64px_48px] flex flex-col items-center gap-[32px] group"
        style={{
          borderImage: "linear-gradient(to right, #4fc3f7, #f4d03f) 1", // Matching colors
        }}
      >
        <div className="text-[12px] uppercase tracking-[0.1em] text-white/70">
          ♥ CHARITY PARTNER
        </div>
        <a
          href={partner.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center relative w-full h-[100px] transition duration-300"
        >
          <img
            src={partner.image}
            alt={`${partner.name} logo – Charity Partner`}
            className="max-h-[100px] object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition duration-300"
            loading="lazy"
          />
        </a>
        <p className="text-[14px] text-white/70 text-center">
          Supporting autism and developmental support services with a
          person-centred approach across the lifespan.
        </p>
      </div>
    </div>
  );
};
export default CharityPartner;
