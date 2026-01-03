'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import AnimatedButton from './AnimatedButton';
import { manrope } from '@/app/layout';

/* ---------------- TYPES ---------------- */

type DropdownLinkProps = {
  href: string;
  children: React.ReactNode;
  isFaint?: boolean;
};

/* ---------------- COMPONENTS ---------------- */

const DropdownLink: React.FC<DropdownLinkProps> = ({
  href,
  children,
  isFaint = false,
}) => {
  return (
    <a
      href={href}
      className={`transition-colors duration-200 font-medium ${
        isFaint
          ? 'text-white/60 hover:text-white'
          : 'text-white hover:text-[#B189FF]'
      }`}
    >
      {children}
    </a>
  );
};

/* ---------------- NAVBAR ---------------- */

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-md z-40 transition-all duration-500 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div className="flex flex-col items-center pt-24 px-8">
          <div className="flex flex-col items-center gap-8 w-full max-w-md">
            {['Home', 'Eh! Game', 'Nominees', 'Partners', 'More'].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white text-3xl font-bold tracking-tight hover:text-[#B189FF] transition-colors"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {item}
                </button>
              )
            )}

            <a
              href="https://cgameawards.com/#:~:text=Be,Tickets"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8"
            >
              <AnimatedButton size="lg" text="Sign up for tickets" />
            </a>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <div
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[980px] px-4 ${manrope.className}`}
      >
        <div
          className="relative rounded-[40px] p-px"
          style={{
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 100%)',
          }}
        >
          <nav className="bg-[rgb(5,5,5)] rounded-[40px] px-6 py-4 shadow-2xl">
            <div className="flex items-center justify-between">
              {/* LOGO */}
              <Link href="/">
                <img
                  src="https://framerusercontent.com/images/BaSvDfQZfE4UubCPmSB77sRFkY.png"
                  alt="Logo"
                  className="h-[26px] hover:opacity-80 transition-opacity"
                />
              </Link>

              {/* RIGHT ACTIONS */}
              <div className="flex items-center gap-3">
                <button
                  className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                  aria-label="Toggle Menu"
                >
                  {isMenuOpen ? (
                    <X className="text-white" />
                  ) : (
                    <Menu className="text-white" />
                  )}
                </button>

                <a
                  href="https://cgameawards.com/#:~:text=Be,Tickets"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden lg:block"
                >
                  <AnimatedButton size="md" text="Sign up for tickets" />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
