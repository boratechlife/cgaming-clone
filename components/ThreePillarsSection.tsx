import { karla, satoshi } from "@/app/layout";
import React from "react";
import { ArrowUpRight } from "lucide-react";

const ThreePillarsSection = () => {
  const mailchimpUrl =
    "https://cgameawards.us18.list-manage.com/subscribe/post?u=b71f8ca57eab220be5354b8c0&id=77d43e63a9&f_id=00b6ade6f0";

  // Shared Link Styles for the Pillar Cards
  const cardStyle =
    "relative flex flex-col items-center gap-4 p-10 rounded-[32px] transition-all duration-300 border border-transparent hover:border-white/20 hover:bg-white/5 hover:-translate-y-2 group no-underline";

  return (
    <section
      className="flex flex-col justify-center items-center w-full pt-[120px] pb-[80px] px-4 lg:px-[60px] relative bg-[#5630bf]"
      id="works"
    >
      {/* 1. UNCLICKABLE HEADER SECTION */}
      <div className="w-full max-w-4xl mx-auto mb-16">
        <div className="group flex flex-col items-center no-underline outline-none transition-transform duration-300 hover:scale-[1.02]">
          <h2
            className={`text-center ${karla.className}`}
            style={{
              fontSize: "clamp(42px, 8vw, 62px)",
              fontWeight: 500,
              letterSpacing: "-2px",
              lineHeight: "1.1",
              color: "#ffffff",
            }}
          >
            The Three Pillars of the CGA
          </h2>
        </div>
      </div>

      {/* 2. UNCLICKABLE PILLARS GRID */}
      <div className="flex flex-col items-center justify-center w-full max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
          {/* Developers Pillar - Now a div instead of a link */}
          <div className={cardStyle}>
            <h4
              className={`text-white text-center ${satoshi.className}`}
              style={{
                fontSize: "32px",
                fontWeight: 600,
                letterSpacing: "-0.02em",
              }}
            >
              Developers
            </h4>
            <p
              className={`text-center max-w-[320px] ${karla.className}`}
              style={{
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: "1.6",
                color: "#b8b8ff",
              }}
            >
              Showcasing Canadian culture and talent, the CGAs celebrate the
              incredible depth and creativity present in hundreds of studios
              across the country.
            </p>
          </div>

          {/* Content Creators Pillar - Now a div instead of a link */}
          <div className={cardStyle}>
            <h4
              className={`text-white text-center ${satoshi.className}`}
              style={{
                fontSize: "32px",
                fontWeight: 600,
                letterSpacing: "-0.02em",
              }}
            >
              Content Creators
            </h4>
            <p
              className={`text-center max-w-[320px] ${karla.className}`}
              style={{
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: "1.6",
                color: "#b8b8ff",
              }}
            >
              Honoring the community builders who bring us together to share our
              passion for made-in-Canada gaming experiences.
            </p>
          </div>

          {/* Esports Pillar - Now a div instead of a link */}
          <div className={cardStyle}>
            <h4
              className={`text-white text-center ${satoshi.className}`}
              style={{
                fontSize: "32px",
                fontWeight: 600,
                letterSpacing: "-0.02em",
              }}
            >
              Esports
            </h4>
            <p
              className={`text-center max-w-[320px] ${karla.className}`}
              style={{
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: "1.6",
                color: "#b8b8ff",
              }}
            >
              Recognizing the excitement and skill of Canada's best players,
              coaches, and teams as they light up stages and inspire fans.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreePillarsSection;
