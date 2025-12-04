// components/GameAwardsPage.tsx
import Image from "next/image";
import Link from "next/link";

const GameAwardsPage = () => {
  // RichTextContainer styles
  const richTextContainerStyles =
    "flex flex-col justify-start outline-none flex-shrink-0";

  return (
    <div className="min-h-screen w-auto bg-[rgb(13,2,27)]">
      {/* Event Section */}
      <section className="py-20 px-4 md:px-8" id="section-3">
        <div className="max-w-4xl mx-auto">
          {/* Event Image */}
          <Link
            href="https://www.torontogameexpo.ca/"
            target="_blank"
            rel="noopener"
            className="block mb-12"
          >
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
              <img
                src="https://framerusercontent.com/images/qVxzjaBzGchcIWETqpnOYCQvIO0.png"
                alt="Toronto Game Expo"
                className="object-cover"
              />
            </div>
          </Link>

          {/* Decorative Line */}
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-teal-400 to-transparent mb-12"></div>

          {/* Event Dates */}
          <div className="text-center mb-8">
            <h2 className="font-satoshi font-medium text-4xl md:text-5xl text-white leading-tight tracking-tight mb-4">
              Dates: November 22-23, 2025
            </h2>
            <h2 className="font-satoshi font-medium text-4xl md:text-5xl text-white leading-tight tracking-tight">
              Applications Deadline: November 1
            </h2>
          </div>

          {/* Apply Button */}
          <div className="flex justify-center mb-16">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSeTshIBs6be5uZsS2z892liOunJl5Y-yY6aWI7p8QyUmO9qSA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group px-8 py-4 bg-gray-900 text-gray-200 rounded-lg border-2 border-teal-400 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/50 w-full max-w-xs"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg"></div>

              {/* Button content */}
              <span className="relative flex items-center justify-center text-xl">
                Apply
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </span>
            </Link>
          </div>

          {/* Partners Heading */}
          <div className="text-center mb-12">
            <h3 className="font-onest text-3xl md:text-4xl text-gray-400 leading-normal">
              <span className="block mb-4"></span>
              <span className="block">Eh! Game Showcase Partners</span>
            </h3>
          </div>

          {/* Partner Logo */}
          <div className="flex justify-center">
            <Link
              href="https://ca.msi.com/"
              target="_blank"
              rel="noopener"
              className="block w-44 h-44 md:w-52 md:h-52"
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <img
                  src="https://framerusercontent.com/images/1Jqcun75YhOXKBaLuqwb28kTDk.png"
                  alt="MSI Partner"
                  className="object-cover"
                />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GameAwardsPage;
