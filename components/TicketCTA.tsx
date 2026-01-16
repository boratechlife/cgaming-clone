import React from 'react';
import Link from 'next/link';

const TicketCTA: React.FC = () => {
  return (
    <div className="flex mt-10 lg:mt-20 flex-col items-center gap-6">
      <div className="relative group shrink-0">
        {/* Button Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#4de8ff] to-[#5630bf] rounded-full blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>

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
      </div>

      <div className="flex flex-col items-center gap-1">
        <p className="text-[#4de8ff] text-[11px] uppercase tracking-[0.3em] font-black">
          Limited Seating Available
        </p>
        <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-[#4de8ff] to-transparent opacity-50"></div>
      </div>
    </div>
  );
};

export default TicketCTA;
