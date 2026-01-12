import React from 'react';
import {
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Twitch,
  Music2,
  ArrowUpRight,
  Mail,
  Linkedin, // Added for LinkedIn
  MessageSquare, // Used as a clean alternative for Discord if specialized icon isn't in set
} from 'lucide-react';

const InlineFooter: React.FC = () => {
  const socialLinks = [
    {
      label: 'Instagram',
      url: 'https://www.instagram.com/cgameawards/',
      Icon: Instagram,
    },
    { label: 'Twitch', url: 'https://www.twitch.tv/cgameawards', Icon: Twitch },
    { label: 'X', url: 'https://x.com/cgameawards', Icon: Twitter },
    {
      label: 'Facebook',
      url: 'https://www.facebook.com/CGameAwards',
      Icon: Facebook,
    },
    {
      label: 'YouTube',
      url: 'https://www.youtube.com/@cgameawards',
      Icon: Youtube,
    },
    {
      label: 'TikTok',
      url: 'https://www.tiktok.com/@cgameawards',
      Icon: Music2,
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/company/canadian-game-awards/posts/',
      Icon: Linkedin,
    },
    {
      label: 'Discord',
      url: 'https://discord.gg/Q8NMbHtfbS',
      Icon: MessageSquare, // Standard clean Discord representation in Lucide
    },
  ];

  return (
    <footer className="bg-neutral-950 text-neutral-400 py-16 px-6 border-t border-neutral-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand Section */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/images/BaSvDfQZfE4UubCPmSB77sRFkY-full.webp"
                alt="Canadian Game Awards Logo"
                className="w-64"
              />
            </div>

            <p className="max-w-xs text-sm leading-relaxed">
              Celebrating the talent, innovation, and excellence of the Canadian
              video game industry on a global stage.
            </p>

            <a
              href="mailto:info@canadiangameawards.ca"
              className="inline-flex items-center gap-2 text-white hover:text-red-500 transition-colors group"
            >
              <Mail size={16} />
              <span className="text-sm font-medium">
                info@canadiangameawards.ca
              </span>
            </a>
          </div>

          {/* Location Section */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-white font-semibold uppercase tracking-widest text-xs">
              Headquarters
            </h3>
            <address className="not-italic text-sm leading-6 space-y-1">
              <p>TIFF Lightbox, Festival Tower</p>
              <p>350 King Street West</p>
              <p>Toronto, Ontario, M5V 3X5</p>
              <p className="text-neutral-500 italic">Canada</p>
            </address>
          </div>

          {/* Partnership/Action Section */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-white font-semibold uppercase tracking-widest text-xs">
              Get Involved
            </h3>
            <a
              href="#"
              className="group flex items-center justify-between p-4 border border-neutral-800 rounded-lg hover:border-red-600/50 hover:bg-red-600/5 transition-all"
            >
              <span className="text-white font-medium">Our Partners</span>
              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Copyright */}
          <div className="text-xs tracking-wide">
            © {new Date().getFullYear()} The Canadian Game Awards.
            <span className="hidden md:inline mx-2 text-neutral-700">|</span>
            <span className="block md:inline mt-2 md:mt-0 opacity-60 hover:opacity-100 cursor-default">
              Website by CGA Agency
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            {socialLinks.map(({ label, url, Icon }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-neutral-500 hover:text-white transition-all transform hover:scale-110"
              >
                <Icon size={20} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default InlineFooter;
