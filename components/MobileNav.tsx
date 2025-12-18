'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-[90%] fixed top-4 left-1/2 -translate-x-1/2 z-50">
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
          className="flex items-center justify-center px-5 py-4"
          style={{ backgroundColor: 'rgb(5,5,5)' }}
        >
          {/* Logo */}
          <a href="./" className="h-[30px] w-[110px] relative">
            <Image
              src="https://framerusercontent.com/images/BaSvDfQZfE4UubCPmSB77sRFkY.png"
              alt="Logo"
              fill
              className="object-contain"
            />
          </a>

          {/* ICON GROUP (Hamburger / Close + Search) */}
          <div className="flex items-center gap-3">
            {/* Hamburger / Close */}
            <button
              aria-label="Toggle Menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              className="w-[40px] h-[40px] flex items-center justify-center"
            >
              {isOpen ? (
                <span className="text-white text-2xl leading-none">✕</span>
              ) : (
                <div className="relative w-[20px] h-[14px]">
                  <span className="absolute top-0 w-full h-[2px] bg-gray-400 rounded" />
                  <span className="absolute bottom-0 w-full h-[2px] bg-gray-400 rounded" />
                </div>
              )}
            </button>

            {/* SEARCH ICON (ALWAYS VISIBLE) */}
            <button
              aria-label="Search"
              className="w-[40px] h-[40px] flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                width="22"
                height="22"
                className="text-[rgb(69,22,130)]"
              >
                <path
                  d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* SLIDE-DOWN MENU */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen
              ? 'max-h-[520px] opacity-100 translate-y-0'
              : 'max-h-0 opacity-0 -translate-y-4'
          }`}
        >
          <div className="flex flex-col items-center justify-center gap-6 py-10 text-white">
            <a className="text-lg">Home</a>
            <a className="text-lg">Eh! Game</a>
            <a className="text-lg">Nominees</a>
            <a className="text-lg">Partners</a>
            <a className="text-lg">More</a>

            <div className="mt-6 text-gray-300 flex items-center gap-2">
              <span>↗</span>
              <span className="underline">Sign up for tickets</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;
