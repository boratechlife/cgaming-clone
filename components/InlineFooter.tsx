import React from "react";
import {
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Twitch,
  Music2,
} from "lucide-react";

const InlineFooter: React.FC = () => {
  const socialLinks = [
    {
      label: "Instagram",
      url: "https://www.instagram.com/cgameawards/",
      Icon: Instagram,
    },
    { label: "Twitch", url: "https://www.twitch.tv/cgameawards", Icon: Twitch },
    { label: "X/Twitter", url: "https://x.com/cgameawards", Icon: Twitter },
    {
      label: "Facebook",
      url: "https://www.facebook.com/CGameAwards",
      Icon: Facebook,
    },
    {
      label: "YouTube",
      url: "https://www.youtube.com/@cgameawards",
      Icon: Youtube,
    },
    {
      label: "TikTok",
      url: "https://www.tiktok.com/@cgameawards",
      Icon: Music2,
    },
  ];

  return (
    <div className="w-full">
      <footer className="w-full bg-gradient-to-b from-[#5b35b5] via-[#4a2da0] to-[#3b237f] border-t border-white/10">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-12">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left section: Logo & Info */}
            <div className="flex flex-col gap-6">
              {/* Logo */}
              <div className="w-48 h-auto">
                <img
                  src="/images/QpfRERS028JTTMK15ucTYWGXDM.avif"
                  alt="Canadian Game Awards Logo"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>

              {/* Copyright & Links */}
              <div className="flex flex-col gap-3">
                <p className="text-white/90 text-sm leading-relaxed">
                  ©2026 The Canadian Game Awards. All Rights Reserved.
                </p>
                <a
                  href="./partners"
                  className="text-white/80 text-sm hover:text-white transition-colors inline-flex items-center gap-2 w-fit"
                >
                  Our Partners
                  <span className="text-white/60">→</span>
                </a>
              </div>

              {/* Contact */}
              {/* <div className="pt-2 border-t border-white/10">
                <p className="text-white/50 text-xs leading-relaxed">
                  Website by Canadian Game Awards Agency
                </p>
                <a
                  href="mailto:info@canadiangameawards.ca"
                  className="text-white/60 text-xs hover:text-white/90 transition-colors inline-block mt-1"
                >
                  info@canadiangameawards.ca
                </a>
              </div> */}
            </div>

            {/* Right section: Social Media */}
            <div className="flex flex-col gap-6 lg:items-end">
              <div className="flex flex-col gap-4">
                <h3 className="text-white/90 text-sm font-semibold tracking-wide uppercase">
                  Follow Us
                </h3>
                <nav className="flex flex-wrap gap-4">
                  {socialLinks.map(({ label, url, Icon }) => (
                    <a
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={label}
                      className="group flex items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-all duration-300 hover:scale-105"
                    >
                      <Icon size={20} strokeWidth={1.5} />
                      <span className="sr-only">{label}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InlineFooter;
