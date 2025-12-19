"use client";
import React, { useState } from "react";
import { Search, ArrowUpRight, Menu, X } from "lucide-react";
import AnimatedButton from "./AnimatedButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNomineesOpen, setIsNomineesOpen] = useState(false);

  return (
    <>
      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 bg-black z-40 transition-opacity duration-500 ${
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
                  className="text-white text-2xl font-medium"
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
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[980px] px-4">
        <div
          className="relative rounded-[40px] p-px"
          style={{
            background:
              "linear-gradient(180deg, rgb(33,33,33) 0%, rgba(33,33,33,0.4) 100%)",
          }}
        >
          <nav className="bg-[rgb(5,5,5)] rounded-[40px] px-6 py-4">
            <div className="flex items-center justify-between">
              {/* LOGO */}
              <a href="./">
                <img
                  src="https://framerusercontent.com/images/BaSvDfQZfE4UubCPmSB77sRFkY.png"
                  alt="Logo"
                  className="h-[26px]"
                />
              </a>

              {/* DESKTOP LINKS */}
              <div className="hidden lg:flex items-center gap-8 mx-8">
                <a href="/" className="text-white text-[15px] font-medium">
                  Home
                </a>
                <a
                  href="/ehgameexpo"
                  className="text-white text-[15px] font-medium"
                >
                  Eh! Game
                </a>

                {/* NOMINEES DROPDOWN */}
                <div className="relative group">
                  <a
                    href="/categories"
                    className="text-white text-[15px] font-medium cursor-pointer"
                  >
                    Nominees
                  </a>

                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4
    transition-all duration-200 ease-out z-[60]
    opacity-0 -translate-y-2 pointer-events-none
    group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto"
                    style={{ zIndex: 60 }}
                  >
                    <div className="bg-white rounded-[22px] shadow-xl px-10 py-8 w-[680px]">
                      <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-[15px]">
                        <div className="flex flex-col gap-3">
                          <a href="/nominees#bestartdirection">
                            Best Art Direction
                          </a>
                          <a href="/nominees#bestgamedesign">
                            Best Game Design
                          </a>
                          <a href="/nominees#bestscore">
                            Best Score / Soundtrack
                          </a>
                          <a href="/nominees#bestnarrative">Best Narrative</a>
                          <a href="/nominees#bestperformance">
                            Best Performance
                          </a>
                          <a href="/nominees#bestaudiodesign">
                            Best Audio Design
                          </a>
                          <a href="/nominees#besttechnology">
                            Best Technology / Innovation
                          </a>
                          <a href="/nominees#bestdebutindie">
                            Best Debut Indie Game
                          </a>
                        </div>

                        <div className="flex flex-col gap-3">
                          <a
                            href="/nominees#bestdebutstudio"
                            className="text-gray-400"
                          >
                            Best Debut Studio
                          </a>
                          <a
                            href="/nominees#mostinnovativestudio"
                            className="text-gray-400"
                          >
                            Most Innovative Studio
                          </a>
                          <a href="/nominees#esportsplayer">Esports Player</a>
                          <a href="/nominees#esportsorg">Esports Org</a>
                          <a href="/nominees#esportsevent">Esports Event</a>
                          <a href="/nominees#contentcreator">
                            Content Creator / Show
                          </a>
                          <a href="/nominees#gameoftheyear">Game of the Year</a>
                          <a href="/nominees#studiooftheyear">
                            Studio of the Year
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="/partners"
                  className="text-white text-[15px] font-medium"
                >
                  Partners
                </a>

                {/* MORE DROPDOWN */}
                <div className="relative group">
                  <span className="text-white text-[15px] font-medium cursor-pointer">
                    More
                  </span>

                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4
    transition-all duration-200 ease-out z-[60]
    opacity-0 -translate-y-2 pointer-events-none
    group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto"
                    style={{ zIndex: 60 }}
                  >
                    <div className="bg-[rgb(5,5,5)] rounded-[22px] shadow-xl px-10 py-8 w-[300px]">
                      <div className="flex flex-col gap-4 text-[15px]">
                        <a href="/media" className="text-white">
                          Media
                        </a>
                        <a href="/adjudication" className="text-white">
                          Adjudication
                        </a>
                        <a href="/about" className="text-white">
                          About us
                        </a>
                        <a href="/contact" className="text-white">
                          Contact
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT ACTIONS */}
              <div className="flex items-center gap-3">
                <button
                  className={`w-10 h-10 flex items-center justify-center transition-all duration-500 ${
                    isMenuOpen ? "translate-x-[200px] opacity-0" : "opacity-100"
                  }`}
                >
                  <Search className="w-6 h-6 text-[rgb(69,22,130)]" />
                </button>

                <button
                  className="lg:hidden w-10 h-10 flex items-center justify-center"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? (
                    <X className="text-white" />
                  ) : (
                    <Menu className="text-[rgb(69,22,130)]" />
                  )}
                </button>

                {/* Sign Up Button with Glow Effect - Hidden on mobile */}
                <a
                  href="https://cgameawards.com/#:~:text=Be,Tickets"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group hidden lg:block"
                >
                  <AnimatedButton
                    size="md"
                    text="Sign up for tickets"
                    className="text-sm"
                  />
                  {/* Button Container */}
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
