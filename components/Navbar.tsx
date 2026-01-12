'use client';

import React, { useState, MouseEvent } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import AnimatedButton from './AnimatedButton';
import { manrope } from '@/app/layout';

// Types for our shared link component
interface InternalLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: (e?: MouseEvent) => void;
  className?: string;
  style?: React.CSSProperties;
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const closeMenu = (e?: MouseEvent) => {
    e?.stopPropagation();
    setIsMenuOpen(false);
  };

  const InternalLink = ({
    href,
    children,
    onClick,
    className,
    style,
  }: InternalLinkProps) => (
    <Link
      href={href}
      onClick={onClick}
      style={style}
      className={
        className ||
        'transition-colors duration-200 font-medium text-white hover:text-[#B189FF]'
      }
    >
      {children}
    </Link>
  );

  const DropdownLink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <InternalLink
      href={href}
      className="text-white/70 hover:text-[#B189FF] transition-colors duration-200"
    >
      {children}
    </InternalLink>
  );

  const mobileMenuItems = [
    { label: 'Home', href: '/' },
    { label: 'Eh! Game', href: '/ehgameexpo' },
    { label: 'Nominees', href: '/categories' },
    { label: 'Partners', href: '/partners' },
    { label: 'About', href: '/about' },
  ];

  const nomineeCategories = [
    { label: 'Best Art Direction', href: '/nominees#bestartdirection' },
    { label: 'Best Game Design', href: '/nominees#bestgamedesign' },
    { label: 'Best Score / Soundtrack', href: '/nominees#bestscore' },
    { label: 'Best Narrative', href: '/nominees#bestnarrative' },
    { label: 'Best Performance', href: '/nominees#bestperformance' },
    { label: 'Best Audio Design', href: '/nominees#bestaudiodesign' },
    { label: 'Best Technology / Innovation', href: '/nominees#besttechnology' },
    { label: 'Best Debut Indie Game', href: '/nominees#bestdebutindie' },
    { label: 'Best Debut Studio', href: '/nominees#bestdebutstudio' },
    { label: 'Most Innovative Studio', href: '/nominees#mostinnovativestudio' },
    { label: 'Esports Player', href: '/nominees#esportsplayer' },
    { label: 'Esports Org', href: '/nominees#esportsorg' },
    { label: 'Esports Event', href: '/nominees#esportsevent' },
    { label: 'Content Creator / Show', href: '/nominees#contentcreator' },
    { label: 'Game of the Year', href: '/nominees#gameoftheyear' },
    { label: 'Studio of the Year', href: '/nominees#studiooftheyear' },
  ];

  return (
    <>
      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-md z-40 transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMenu}
      >
        <div
          className="flex flex-col items-center justify-start pt-24 px-8"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col items-center gap-8 w-full max-w-md">
            {mobileMenuItems.map((item) => (
              <InternalLink
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="text-white text-3xl font-bold tracking-tight hover:text-[#B189FF] transition-colors"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                {item.label}
              </InternalLink>
            ))}

            <a
              href="https://cgameawards.com/#:~:text=Be,Tickets"
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-8"
              onClick={closeMenu}
            >
              <AnimatedButton size="lg" text="Buy tickets" />
            </a>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <div
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[980px] px-4 ${
          manrope.className ?? ''
        }`}
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

              {/* DESKTOP LINKS */}
              <div className="hidden lg:flex items-center gap-8 mx-8">
                <InternalLink href="/">Home</InternalLink>
                <InternalLink href="/ehgameexpo">Eh! Game</InternalLink>

                {/* NOMINEES DROPDOWN */}
                <div className="relative group">
                  <a
                    href="/categories"
                    className="flex items-center gap-1 text-white text-[15px] font-medium hover:text-[#B189FF] transition-colors"
                  >
                    Nominees{' '}
                    <ChevronDown
                      size={14}
                      className="group-hover:rotate-180 transition-transform"
                    />
                  </a>

                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ease-out z-[60] opacity-0 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
                    <div className="bg-[#111] border border-white/10 rounded-[22px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] px-10 py-8 w-[680px]">
                      <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-[15px]">
                        {nomineeCategories.map((cat) => (
                          <DropdownLink key={cat.href} href={cat.href}>
                            {cat.label}
                          </DropdownLink>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <InternalLink href="/partners">Partners</InternalLink>

                {/* MORE DROPDOWN */}
                <div className="relative group">
                  <button className="text-white text-[15px] font-medium hover:text-[#B189FF] transition-colors bg-transparent border-none cursor-pointer">
                    More
                  </button>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ease-out z-[60] opacity-0 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
                    <div className="bg-[#111] border border-white/10 rounded-[22px] shadow-xl px-10 py-8 w-[240px]">
                      <div className="flex flex-col gap-4 text-[15px]">
                        <DropdownLink href="/media">Media</DropdownLink>
                        <DropdownLink href="/adjudication">
                          Adjudication
                        </DropdownLink>
                        <DropdownLink href="/about">About us</DropdownLink>
                        <DropdownLink href="/contact">Contact</DropdownLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT ACTIONS */}
              <div className="flex items-center gap-3">
                <button
                  className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
                  onClick={toggleMenu}
                  aria-label="Toggle Menu"
                >
                  {isMenuOpen ? (
                    <X className="text-white" />
                  ) : (
                    <Menu className="text-white" />
                  )}
                </button>

                <a
                  href="https://canadiangameawards.zohobackstage.ca/CGA2026#/buyTickets/selectTickets?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden lg:block"
                >
                  <AnimatedButton
                    size="md"
                    text="Buy tickets"
                    className="text-sm font-bold"
                  />
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
