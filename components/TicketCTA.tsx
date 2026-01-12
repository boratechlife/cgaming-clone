import React from 'react';
import Link from 'next/link';

const TicketCTA: React.FC = () => {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden bg-[#1a0b3b]">
      {/* 1. Dynamic Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* Deep Primary Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#5630bf] opacity-30 blur-[160px] rounded-full" />
        {/* Accent Spotlight */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4de8ff] opacity-10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Content: Typography & Context */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4de8ff] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4de8ff]"></span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-bold">
                Live Event 2026
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-[1.1]">
              Don't Miss the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
                Celebration
              </span>{' '}
              <br />
              <span className="italic font-serif font-light text-[#4de8ff]">
                of Canadian Gaming
              </span>
            </h2>

            {/* Location Card: Glassmorphism */}
            <div className="inline-flex items-start text-left p-6 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-2xl transition-transform hover:scale-[1.02] duration-500">
              <div className="mr-5 p-3 bg-gradient-to-br from-[#5630bf] to-[#4de8ff] rounded-xl shadow-lg shadow-[#5630bf]/20">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-bold text-white text-lg tracking-tight">
                  TIFF Lightbox & Festival Tower
                </p>
                <p className="text-white/50 font-medium text-sm leading-relaxed mt-1">
                  350 King Street West, Toronto, ON <br />
                  M5V 3X5, Canada
                </p>
              </div>
            </div>
          </div>

          {/* Right Content: Action & Scarcity */}
          <div className="relative group shrink-0">
            {/* Button Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#4de8ff] to-[#5630bf] rounded-full blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>

            <div className="relative flex flex-col items-center gap-6">
              <Link
                href="https://canadiangameawards.zohobackstage.ca/CGA2026#/buyTickets/selectTickets?lang=en"
                target="_blank"
                className="relative flex items-center gap-4 px-12 py-6 bg-white text-[#1a0b3b] rounded-full font-black text-xl overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl shadow-white/10"
              >
                <span>Buy Tickets Now</span>
                <svg
                  className="w-6 h-6 transition-transform group-hover:translate-x-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>

              <div className="flex flex-col items-center gap-1">
                <p className="text-[#4de8ff] text-[11px] uppercase tracking-[0.3em] font-black">
                  Limited Seating Available
                </p>
                <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-[#4de8ff] to-transparent opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Border Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
};

export default TicketCTA;
