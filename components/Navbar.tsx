"use client";
import React, { useState } from "react";
import { Search, ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link"; // Ensure you use Next.js Link for internal routing
import AnimatedButton from "./AnimatedButton";
import { manrope } from "@/app/layout";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Helper component for dropdown links to ensure consistency
  const DropdownLink = ({ href, children, isFaint = false }) => (
    <a
      href={href}
      className={`transition-colors duration-200 font-medium ${
        isFaint
          ? "text-white/60 hover:text-white" // Improved "faint" text to be readable but distinct
          : "text-white hover:text-[#B189FF]" // Custom accent color for better visual feedback
      }`}
    >
      {children}
    </a>
  );

  return (
    <>
      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-md z-40 transition-all duration-500 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div className="flex flex-col items-center justify-start pt-24 px-8">
          <div className="flex flex-col items-center gap-8 w-full max-w-md">
            {["Home", "Eh! Game", "Nominees", "Partners", "More"].map(
              (item) => (
                <a
                  key={item}
                  className="text-white text-3xl font-bold tracking-tight hover:text-[#B189FF] transition-colors"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              )
            )}

            <a
              href="https://cgameawards.com/#:~:text=Be,Tickets"
              target="_blank"
              className="relative mt-8"
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
              "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 100%)",
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
                <Link
                  href="/"
                  className="text-white text-[15px] font-semibold hover:text-[#B189FF] transition-colors"
                >
                  Home
                </Link>

                <a
                  href="/ehgameexpo"
                  className="text-white text-[15px] font-semibold hover:text-[#B189FF] transition-colors"
                >
                  Eh! Game
                </a>

                {/* NOMINEES DROPDOWN */}
                <div className="relative group">
                  <a
                    href="/categories"
                    className="text-white text-[15px] font-semibold flex items-center gap-1 hover:text-[#B189FF] transition-colors"
                  >
                    Nominees
                  </a>

                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ease-out z-[60] opacity-0 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
                    {/* Darker, higher contrast background for the dropdown */}
                    <div className="bg-[#111] border border-white/10 rounded-[22px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] px-10 py-8 w-[680px]">
                      <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-[15px]">
                        <div className="flex flex-col gap-4">
                          <DropdownLink href="/nominees#bestartdirection">
                            Best Art Direction
                          </DropdownLink>
                          <DropdownLink href="/nominees#bestgamedesign">
                            Best Game Design
                          </DropdownLink>
                          <DropdownLink href="/nominees#bestscore">
                            Best Score / Soundtrack
                          </DropdownLink>
                          <DropdownLink href="/nominees#bestnarrative">
                            Best Narrative
                          </DropdownLink>
                          <DropdownLink href="/nominees#bestperformance">
                            Best Performance
                          </DropdownLink>
                          <DropdownLink href="/nominees#bestaudiodesign">
                            Best Audio Design
                          </DropdownLink>
                          <DropdownLink href="/nominees#besttechnology">
                            Best Technology / Innovation
                          </DropdownLink>
                          <DropdownLink href="/nominees#bestdebutindie">
                            Best Debut Indie Game
                          </DropdownLink>
                        </div>

                        <div className="flex flex-col gap-4">
                          {/* Replaced 'text-gray-400' with a clearer readable style */}
                          <DropdownLink href="/nominees#bestdebutstudio">
                            Best Debut Studio
                          </DropdownLink>
                          <DropdownLink href="/nominees#mostinnovativestudio">
                            Most Innovative Studio
                          </DropdownLink>
                          <DropdownLink href="/nominees#esportsplayer">
                            Esports Player
                          </DropdownLink>
                          <DropdownLink href="/nominees#esportsorg">
                            Esports Org
                          </DropdownLink>
                          <DropdownLink href="/nominees#esportsevent">
                            Esports Event
                          </DropdownLink>
                          <DropdownLink href="/nominees#contentcreator">
                            Content Creator / Show
                          </DropdownLink>
                          <DropdownLink href="/nominees#gameoftheyear">
                            Game of the Year
                          </DropdownLink>
                          <DropdownLink href="/nominees#studiooftheyear">
                            Studio of the Year
                          </DropdownLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="/partners"
                  className="text-white text-[15px] font-semibold hover:text-[#B189FF] transition-colors"
                >
                  Partners
                </a>

                {/* MORE DROPDOWN */}
                <div className="relative group">
                  <span className="text-white text-[15px] font-semibold cursor-pointer hover:text-[#B189FF] transition-colors">
                    More
                  </span>
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
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
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
                  className="relative group hidden lg:block"
                >
                  <AnimatedButton
                    size="md"
                    text="Sign up for tickets"
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
