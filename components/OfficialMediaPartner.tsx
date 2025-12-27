import React from "react";
const OfficialMediaPartner = () => {
  return (
    <div className="framer-NVjQy framer-1026bmz flex flex-col items-center gap-[48px] min-h-min overflow-hidden relative w-full py-[80px] md:py-[60px] px-[16px] md:px-[48px] lg:px-[80px]">
      <div className="flex flex-col items-center gap-[16px] w-full">
        <h2 className="framer-text text-[32px] font-semibold tracking-tight text-white flex items-center gap-[8px]">
          <span>📣</span> Official Media Partner
        </h2>
        <hr className="w-[60%] h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      </div>
      <div
        className="max-w-[600px] mx-auto bg-white/3 backdrop-blur-[20px] border-2 rounded-[20px] p-[48px] flex flex-col items-center gap-[32px]"
        style={{
          borderImage: "linear-gradient(to bottom, #4fc3f7, #f4d03f) 1", // Reversed for variety
        }}
      >
        <div className="text-[12px] uppercase tracking-[0.1em] text-white/70">
          ✦ OFFICIAL MEDIA
        </div>
        <a
          href="https://screenrant.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center relative w-full h-[100px] group hover:scale-105 transition duration-300"
        >
          <div className="relative before:content-[''] before:absolute before:inset-0 before:bg-radial-gradient from-cyan-500/20 to-transparent before:blur-md before:opacity-60 group-hover:before:opacity-100 transition-opacity">
            <img
              src="/images/VZMraHXkD4ZhHAooepxno4tn9Q.avif"
              alt="SCREENRANT logo – Official Media Partner"
              className="max-h-[100px] object-contain"
              loading="lazy"
              width="1080"
              height="490"
            />
          </div>
        </a>
        <p className="text-[16px] text-white/60 text-center">
          Screen Rant is a leading entertainment news site covering movies, TV,
          and gaming.
        </p>
      </div>
    </div>
  );
};
export default OfficialMediaPartner;
