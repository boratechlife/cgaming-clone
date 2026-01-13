import React from "react";

const TitlePartnerSection = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-none gap-[24px] h-min overflow-hidden w-full relative pb-[100px] md:order-2 sm:pb-[80px] 2xl:order-2 2xl:py-[90px] 2xl:pb-[40px]">
      <div
        className="max-w-[800px] mx-auto bg-white/3 backdrop-blur-[20px] border-2 rounded-[24px] shadow-inner p-[64px] flex flex-col items-center gap-[32px] group"
        style={{
          borderImage: "linear-gradient(to bottom, #f4d03f, #4fc3f7) 1",
        }}
      >
        <div className="text-[12px] uppercase tracking-[0.1em] text-white/70">
          ✦ TITLE PARTNER
        </div>

        <div className="place-self-center flex flex-col items-center flex-none h-[120px] relative w-full md:h-[120px] 2xl:h-[120px]">
          <a
            href="https://www.valnetinc.com/en/"
            target="_blank"
            rel="noopener"
            className="flex items-center justify-center h-[120px] relative no-underline w-full lg:w-auto"
          >
            <div className="w-full max-w-[480px] rounded-[24px] inset-0 flex items-center justify-center relative">
              {/* Radial glow that appears on hover */}
              <div className="absolute inset-0 bg-cyan-500/15 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <img
                decoding="auto"
                width="1080"
                height="481"
                srcSet="/images/O5BKcDiv7AuQwsYNYECqEZKctpY.avif?scale-down-to=512 512w,/images/O5BKcDiv7AuQwsYNYECqEZKctpY.avif?scale-down-to=1024 1024w,/images/O5BKcDiv7AuQwsYNYECqEZKctpY.avif 1080w"
                src="/images/O5BKcDiv7AuQwsYNYECqEZKctpY.avif"
                alt="Valnet logo – Title Partner"
                /* Applied grayscale and opacity matches AwardsPartners 
                   Added group-hover classes to restore color/scale
                */
                className="relative max-h-[120px] object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition duration-300"
              />
            </div>
          </a>
        </div>

        <p className="text-[16px] text-white/60 text-center max-w-[600px]">
          Valnet Inc. is a leading digital media investment company with premium
          content brands in gaming and entertainment.
        </p>
      </div>
    </div>
  );
};

export default TitlePartnerSection;
