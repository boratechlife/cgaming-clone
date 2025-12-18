"use client";
import React, { useState } from "react";
import { Search, ArrowUpRight, Menu, X } from "lucide-react";
import AnimatedButton from "./AnimatedButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black z-40 transition-opacity duration-500 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div className="flex flex-col items-center justify-start pt-24 px-8">
          <div className="flex flex-col items-center gap-8 w-full max-w-md">
            <a
              href="./"
              className="text-white text-2xl font-medium transition-colors duration-200"
              style={{ fontFamily: "Manrope, sans-serif" }}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="./ehgameexpo"
              className="text-white text-2xl font-medium transition-colors duration-200"
              style={{ fontFamily: "Manrope, sans-serif" }}
              onClick={() => setIsMenuOpen(false)}
            >
              Eh! Game
            </a>
            <a
              href="./categories"
              className="text-white text-2xl font-medium transition-colors duration-200"
              style={{ fontFamily: "Manrope, sans-serif" }}
              onClick={() => setIsMenuOpen(false)}
            >
              Nominees
            </a>
            <a
              href="./partners"
              className="text-white text-2xl font-medium transition-colors duration-200"
              style={{ fontFamily: "Manrope, sans-serif" }}
              onClick={() => setIsMenuOpen(false)}
            >
              Partners
            </a>
            <button
              className="text-white text-2xl font-medium"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              More
            </button>

            {/* Mobile Sign Up Button */}
            <a
              href="https://cgameawards.com/#:~:text=Be,Tickets"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group mt-8"
            >
              <AnimatedButton size="lg" text="Sign up for tickets" />
            </a>
          </div>
        </div>
      </div>

      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[980px] px-4">
        {/* Outer gradient border container */}
        <div
          className="relative rounded-[40px] p-px"
          style={{
            background:
              "linear-gradient(180deg, rgb(33, 33, 33) 0%, rgba(33, 33, 33, 0.4) 100%)",
          }}
        >
          {/* Inner content container */}
          <nav className="bg-[rgb(5,5,5)] rounded-[40px] px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <a href="./" className="flex-shrink-0">
                <img
                  src="https://framerusercontent.com/images/BaSvDfQZfE4UubCPmSB77sRFkY.png?width=2663&height=601"
                  alt="Canadian Game Changers"
                  className="h-[26px] w-auto object-contain"
                />
              </a>

              {/* Navigation Links */}
              <div className="hidden lg:flex items-center gap-8 mx-8">
                <a
                  href="./"
                  className="text-white hover:text-white text-[15px] font-medium transition-colors duration-200"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  Home
                </a>
                <a
                  href="./ehgameexpo"
                  className="text-white hover:text-white text-[15px] font-medium transition-colors duration-200"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  Eh! Game
                </a>
                <a
                  href="./categories"
                  className="text-white hover:text-white text-[15px] font-medium transition-colors duration-200"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  Nominees
                </a>
                <a
                  href="./partners"
                  className="text-white hover:text-white text-[15px]  transition-colors duration-200 font-medium"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  Partners
                </a>
                <button
                  className="text-white text-[15px] font-medium"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  More
                </button>
              </div>

              {/* Right Actions */}
              <div className="flex items-center gap-3">
                {/* Search Button - slides out on mobile menu open */}
                <button
                  className={`w-10 h-10 flex items-center justify-center rounded-[10px] hover:bg-white/5 transition-all duration-500 ${
                    isMenuOpen
                      ? "translate-x-[200px] opacity-0"
                      : "translate-x-0 opacity-100"
                  }`}
                  aria-label="Search"
                >
                  <Search
                    className="w-6 h-6 text-[rgb(69,22,130)]"
                    strokeWidth={2}
                  />
                </button>

                {/* Mobile Menu Toggle */}
                <button
                  className="lg:hidden w-10 h-10 flex items-center justify-center rounded-[10px] hover:bg-white/5 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? (
                    <X className="w-6 h-6 text-white" strokeWidth={2} />
                  ) : (
                    <Menu
                      className="w-6 h-6 text-[rgb(69,22,130)]"
                      strokeWidth={2}
                    />
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
                    size="sm"
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
