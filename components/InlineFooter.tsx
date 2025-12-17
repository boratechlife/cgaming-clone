import React from 'react';

const InlineFooter: React.FC = () => {
  return (
    <div className="w-full">
      <footer className="w-full py-4 lg:min-h-[200px] flex items-center bg-gradient-to-b from-[#5b35b5] via-[#4a2da0] to-[#3b237f]">
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-20">
          {/* Left section */}
          <div className="flex items-center lg:items-start flex-col gap-4">
            {/* Logo */}
            <div className="w-44 h-16 relative flex-shrink-0">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="https://framerusercontent.com/images/QpfRERS028JTTMK15ucTYWGXDM.png"
                  alt="Canadian Game Awards Logo"
                  className="w-full h-full object-contain"
                  width="171"
                  height="68"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Text */}
            <div className="px-4 lg:px-auto lg:ml-6 flex flex-col items-center lg:items-start text-center justify-center">
              <div className="text-white/90">
                <h5 className="text-sm font-normal leading-6">
                  The Canadian Game Awards © 2025 All Rights Reserved /{' '}
                  <a
                    href="./partners"
                    className="hover:text-white transition-colors"
                  >
                    Our Partners
                  </a>
                </h5>
              </div>

              <div className="mt-2 text-white/60">
                <h5 className="text-xs font-normal leading-6">
                  <a
                    href="https://www.ridgeagency.ca/"
                    target="_blank"
                    rel="noopener"
                    className="hover:text-white transition-colors"
                  >
                    Website by RIDGE Agency (ridgeagency.ca)
                  </a>
                </h5>
              </div>
            </div>
          </div>

          {/* Right section */}
          <div className="flex flex-col lg:flex-row  items-center">
            <nav className="flex flex-col lg:flex-row gap-3 lg:gap-8">
              {[
                ['Instagram', 'https://www.instagram.com/cgameawards/'],
                ['Twitch', 'https://www.twitch.tv/cgameawards'],
                ['X/Twitter', 'https://x.com/cgameawards'],
                ['Facebook', 'https://www.facebook.com/CGameAwards'],
                ['YouTube', 'https://www.youtube.com/@cgameawards'],
              ].map(([label, url]) => (
                <div key={label} className="text-white/80">
                  <h5 className="text-base font-normal tracking-normal">
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener"
                      className="hover:text-white transition-colors"
                    >
                      {label}
                    </a>
                  </h5>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InlineFooter;
