// footer.tsx
import Image from "next/image";
import {
  FaInstagram,
  FaTwitch,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/cgameawards/",
      icon: <FaInstagram className="w-6 h-6" />,
    },
    {
      name: "Twitch",
      url: "https://www.twitch.tv/cgameawards",
      icon: <FaTwitch className="w-6 h-6" />,
    },
    {
      name: "X/Twitter",
      url: "https://x.com/cgameawards",
      icon: <FaTwitter className="w-6 h-6" />,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/CGameAwards",
      icon: <FaFacebookF className="w-6 h-6" />,
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@cgameawards",
      icon: <FaYoutube className="w-6 h-6" />,
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@cgameawards",
      icon: <FaTiktok className="w-6 h-6" />,
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-[#5630BF] to-[#3A1F82] w-full">
      <div className="relative p-4">
        {/* Image section */}
        <div className="absolute inset-0">
          <Image
            src="/images/QpfRERS028JTTMK15ucTYWGXDM.avif"
            alt=""
            objectFit="cover"
            objectPosition="center"
            height={100}
            width={200}
            quality={100}
          />
        </div>
        {/* Overlay content */}
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start text-white">
          {/* Left column with text links */}
          <div className="mt-4 md:mt-0">
            <h5 className="text-left text-sm font-medium tracking-tighter text-white">
              The Canadian Game Awards © 2025 All Rights Reserved /{" "}
              <a href="./media" className="underline hover:text-gray-300">
                Our Partners
              </a>
            </h5>
            <h5 className="text-left text-xs font-medium tracking-tighter text-gray-400 mt-2">
              <a
                href="https://www.ridgeagency.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-300"
              >
                Website by RIDGE Agency (ridgeagency.ca)
              </a>
            </h5>
            {/* Added address here - placed after existing content with appropriate styling */}
            <address className="text-left text-xs font-medium tracking-tighter text-gray-400 mt-2 not-italic">
              TIFF Lightbox, Festival Tower, 350 King Street West, Toronto,
              Ontario, M5V 3X5, Canada
            </address>
          </div>

          {/* Logo section - empty in original, so kept minimal */}
          <div className="hidden md:block">
            {/* Add logo content here if available, e.g., an image or text */}
          </div>

          {/* Right column with social links as icons */}
          <nav className="mt-4 md:mt-0 flex flex-wrap justify-center gap-6 p-2 items-center">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors duration-200"
                aria-label={`Visit our ${social.name} page`}
              >
                {social.icon}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
