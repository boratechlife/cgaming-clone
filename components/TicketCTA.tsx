import React from 'react';
import Link from 'next/link';

const TicketCTA: React.FC = () => {
  return (
    <div className="w-full py-12 md:py-16 border border-b border-white/20 bg-[#5630bf]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-sans">
            Don't Miss the Celebration of Canadian Gaming
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join us at TIFF Lightbox for an unforgettable evening celebrating
            Canada's gaming achievements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="https://canadiangameawards.zohobackstage.ca/CGA2026#/buyTickets/selectTickets?lang=en"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#5630bf] rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
              target="_blank"
            >
              Buy Tickets Now
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCTA;
