// footer.tsx
import Image from "next/image"; // Using next/image for better optimization; if you prefer a standard img, you can replace it.

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#5630BF] to-[#3A1F82] w-full">
      <div className="relative p-4">
        {" "}
        {/* Added padding for spacing; adjust as needed */}
        {/* Image section */}
        <div className="absolute inset-0">
          <Image
            src="https://framerusercontent.com/images/QpfRERS028JTTMK15ucTYWGXDM.png"
            alt=""
            objectFit="cover"
            objectPosition="center"
            height={100}
            width={200}
            quality={100} // Optional: maintains image quality; adjust based on needs
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
            <h5 className="text-left text-xs font-medium  tracking-tighter text-gray-400 mt-2">
              <a
                href="https://www.ridgeagency.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-300"
              >
                Website by RIDGE Agency (ridgeagency.ca)
              </a>
            </h5>
          </div>

          {/* Logo section - empty in original, so kept minimal */}
          <div className="hidden md:block">
            {" "}
            {/* Assuming it's meant for larger screens; adjust visibility as needed */}
            {/* Add logo content here if available, e.g., an image or text */}
          </div>

          {/* Right column with social links */}
          <nav className="mt-4 md:mt-0 flex flex-col lg:flex-row p-2 items-center">
            <h5 className="text-left text-xl font-medium tracking-tighter capitalize text-white">
              <a
                href="https://www.instagram.com/cgameawards/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-300"
              >
                Instagram
              </a>
            </h5>
            <h5 className="text-left text-xl font-medium  tracking-tighter capitalize text-white">
              <a
                href="https://www.twitch.tv/cgameawards"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-300"
              >
                Twitch
              </a>
            </h5>
            <h5 className="text-left text-xl font-medium  tracking-tighter capitalize text-white">
              <a
                href="https://x.com/cgameawards"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-300"
              >
                X/Twitter
              </a>
            </h5>
            <h5 className="text-left text-xl font-medium  tracking-tighter capitalize text-white">
              <a
                href="https://www.facebook.com/CGameAwards"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-300"
              >
                Facebook
              </a>
            </h5>
            <h5 className="text-left text-xl font-medium tracking-tighter capitalize text-white">
              <a
                href="https://www.youtube.com/@cgameawards"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-300"
              >
                YouTube
              </a>
            </h5>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
