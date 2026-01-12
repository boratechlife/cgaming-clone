'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // State for sub-menus
  const [isNomineesOpen, setIsNomineesOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const nomineesLinks = [
    { name: 'Best Art Direction', href: '/nominees#bestartdirection' },
    { name: 'Best Game Design', href: '/nominees#bestgamedesign' },
    { name: 'Best Score / Soundtrack', href: '/nominees#bestscore' },
    { name: 'Best Narrative', href: '/nominees#bestnarrative' },
    { name: 'Best Performance', href: '/nominees#bestperformance' },
    { name: 'Best Audio Design', href: '/nominees#bestaudiodesign' },
    { name: 'Game of the Year', href: '/nominees#gameoftheyear' },
    // ... add others as needed
  ];

  const moreLinks = [
    { name: 'Media', href: '/media' },
    { name: 'Adjudication', href: '/adjudication' },
    { name: 'About us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="w-[90%] fixed top-4 left-1/2 -translate-x-1/2 z-50 lg:hidden">
      <nav
        className="relative overflow-hidden transition-all duration-500"
        style={{
          background:
            'linear-gradient(180deg, rgb(10,10,10) 0%, rgba(10,10,10,0.85) 100%)',
          borderRadius: '40px',
        }}
      >
        {/* TOP BAR */}
        <div
          className="flex items-center justify-between px-6 py-4"
          style={{ backgroundColor: 'rgb(5,5,5)' }}
        >
          <a href="./" className="h-[30px] w-[110px] relative">
            <Image
              src="https://framerusercontent.com/images/BaSvDfQZfE4UubCPmSB77sRFkY.png"
              alt="Logo"
              fill
              className="object-contain"
            />
          </a>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-[40px] h-[40px] flex items-center justify-center text-white"
            >
              {isOpen ? (
                <span className="text-2xl">✕</span>
              ) : (
                <div className="relative w-[20px] h-[14px]">
                  <span className="absolute top-0 w-full h-[2px] bg-gray-400 rounded" />
                  <span className="absolute bottom-0 w-full h-[2px] bg-gray-400 rounded" />
                </div>
              )}
            </button>

            <button className="w-[40px] h-[40px] flex items-center justify-center text-[rgb(69,22,130)]">
              <svg
                viewBox="0 0 256 256"
                width="22"
                height="22"
                fill="currentColor"
              >
                <path d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z" />
              </svg>
            </button>
          </div>
        </div>

        {/* SLIDE-DOWN MENU */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-y-auto ${
            isOpen ? 'max-h-[85vh] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col items-center gap-4 py-8 text-white px-6">
            <a href="/" className="text-lg py-2">
              Home
            </a>
            <a href="/ehgameexpo" className="text-lg py-2">
              Eh! Game
            </a>

            {/* NOMINEES ACCORDION */}
            <div className="w-full flex flex-col items-center">
              <button
                onClick={() => setIsNomineesOpen(!isNomineesOpen)}
                className="flex items-center gap-2 text-lg py-2"
              >
                Nominees
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isNomineesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`flex flex-col items-center gap-3 overflow-hidden transition-all duration-300 ${
                  isNomineesOpen ? 'max-h-[400px] mt-2 mb-4' : 'max-h-0'
                }`}
              >
                {nomineesLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <a href="/partners" className="text-lg py-2">
              Partners
            </a>

            {/* MORE ACCORDION */}
            <div className="w-full flex flex-col items-center">
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className="flex items-center gap-2 text-lg py-2"
              >
                More
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isMoreOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`flex flex-col items-center gap-3 overflow-hidden transition-all duration-300 ${
                  isMoreOpen ? 'max-h-[200px] mt-2 mb-4' : 'max-h-0'
                }`}
              >
                {moreLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <a
              href="https://canadiangameawards.zohobackstage.ca/CGA2026#/buyTickets/selectTickets?lang=en"
              target="_blank"
              className="mt-6 px-8 py-3 bg-[rgb(69,22,130)] rounded-full text-white font-medium flex items-center gap-2"
            >
              Buy tickets <span>↗</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;
