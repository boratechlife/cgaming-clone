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
        className="max-w-[600px] mx-auto bg-white/3 backdrop-blur-[20px] border-2 rounded-[20px] p-[48px] flex flex-col items-center gap-[32px] group"
        style={{
          borderImage: "linear-gradient(to bottom, #4fc3f7, #f4d03f) 1",
        }}
      >
        <div className="text-[12px] uppercase tracking-[0.1em] text-white/70">
          ✦ OFFICIAL MEDIA
        </div>

        <a
          href="https://screenrant.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center relative w-full h-[100px]"
        >
          <div className="relative">
            {/* Soft glow effect that intensifies on hover */}
            <div className="absolute inset-0 bg-cyan-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <img
              src="/images/VZMraHXkD4ZhHAooepxno4tn9Q.avif"
              alt="SCREENRANT logo – Official Media Partner"
              className="relative max-h-[100px] object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition duration-300"
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
