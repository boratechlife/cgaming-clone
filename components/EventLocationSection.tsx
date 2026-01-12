"use client";
import React, { useState } from "react";

const EventLocationSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <div
      className="flex flex-col items-center justify-start w-full min-h-screen pt-24 pb-16 px-6 text-white text-center bg-gradient-to-b from-[#5630bf] via-[#3c2185] to-[#0d021b]"
      id="event-hero"
    >
      <div className="max-w-[1100px] w-full flex flex-col items-center">
        {/* Main Heading */}
        <h1
          className="text-4xl md:text-6xl lg:text-[76px] font-bold tracking-tight leading-[1.1] mb-8"
          style={{ fontFamily: "Satoshi, sans-serif" }}
        >
          6th edition of the Canadian Game Awards: <br />
          <span className="font-medium text-white/90">February 21st, 2026</span>
        </h1>

        {/* Description Text */}
        <div className="max-w-3xl mb-16">
          <p
            className="text-lg md:text-xl text-gray-300 leading-relaxed font-light"
            style={{ fontFamily: "Karla, sans-serif" }}
          >
            The Canadian Game Awards (CGA) are a celebration of Canada’s growing
            gaming industry, one of the largest in the world. This award show
            highlights Canada’s position on the global stage as a leader in
            interactive entertainment. Designed “by the industry, for the
            industry,” the CGA also strives to engage the public and fans in
            celebrating this thriving sector.
          </p>
        </div>

        {/* Nomination Section */}
        <div className="flex flex-col items-center gap-6 mb-12">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Nominate your game <br />
            <span className="text-2xl md:text-4xl lg:text-5xl font-semibold opacity-90">
              Deadline: November 20th, 2025
            </span>
          </h2>

          <div className="mt-4">
            <a
              href="/nominate"
              className="group flex items-center gap-3 bg-black/90 hover:bg-black border border-white/10 px-6 py-4 rounded-sm transition-all duration-300"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">
                ↗ NOMINATE YOUR GAME
              </span>
              <div className="w-10 h-[1.5px] bg-[#4de8ff] group-hover:w-16 transition-all duration-300"></div>
            </a>
          </div>
        </div>

        {/* Video Integration Fixed */}
        <div className="w-full max-w-[850px] mt-8 shadow-2xl rounded-[20px] overflow-hidden border border-white/5 bg-black">
          <div className="relative aspect-video w-full">
            <article
              onClick={handlePlayVideo}
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                borderRadius: "20px",
                cursor: "pointer",
                overflow: "hidden",
              }}
              role="presentation"
            >
              <link rel="preconnect" href="https://www.youtube.com" />

              {/* Thumbnail - Hidden when playing */}
              {!isPlaying && (
                <>
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      height: "100%",
                      width: "100%",
                      background:
                        "center / cover url(https://i.ytimg.com/vi_webp/LDNn0rg5x1k/sddefault.webp) no-repeat",
                    }}
                  ></div>
                  <button
                    aria-label="Play"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "68px",
                      height: "48px",
                      padding: 0,
                      border: "none",
                      background: "transparent",
                      cursor: "pointer",
                      zIndex: 10,
                    }}
                  >
                    <svg
                      height="100%"
                      version="1.1"
                      viewBox="0 0 68 48"
                      width="100%"
                    >
                      <path
                        d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                        fill="#212121"
                        fillOpacity="0.8"
                        style={{
                          transition:
                            "fill .1s cubic-bezier(0.4, 0, 1, 1), fill-opacity .1s cubic-bezier(0.4, 0, 1, 1)",
                        }}
                      ></path>
                      <path d="M 45,24 27,14 27,34" fill="#fff"></path>
                    </svg>
                  </button>
                  {/* Visual Label from Image */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <h3 className="mt-32 text-4xl md:text-6xl font-black italic tracking-tighter uppercase text-white drop-shadow-2xl">
                      EVENT RECAP
                    </h3>
                  </div>
                </>
              )}

              {/* Iframe - Shown when isPlaying is true */}
              {isPlaying && (
                <iframe
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: "100%",
                  }}
                  title="Youtube Video"
                  allow="autoplay; fullscreen; accelerometer; encrypted-media; gyroscope; picture-in-picture"
                  src="https://www.youtube.com/embed/LDNn0rg5x1k?autoplay=1&modestbranding=1&rel=0"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              )}
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventLocationSection;
