import { satoshi } from '@/app/layout';

// New component for the nomination announcement
export const NominationAnnouncement = () => {
  return (
    <div className="bg-[#5630bf] py-16 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-4">
          Nomination Announcement
        </h2>
        <p className="text-xl text-white mb-2">
          The nominees for the Canadian Game Awards will be revealed on:
        </p>
        {/* Updated Date */}
        <p
          className={`text-3xl font-bold text-yellow-300 ${satoshi.className}`}
        >
          January 21st
        </p>

        <p className="text-white mt-6 max-w-2xl mx-auto leading-relaxed">
          Stay tuned as we announce the talented nominees across all categories.
          This year's awards celebrate excellence in game development,
          {/* Breaking titles into two lines where appropriate for visual balance */}
          <span className="block md:inline-block md:max-w-none max-w-[250px] mx-auto mt-2">
            Esports Organizations, and content creation across Canada.
          </span>
        </p>

        {/* Example of how category titles are handled if listed here */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-white/80 text-sm font-semibold uppercase tracking-wider">
          <div>
            Game <br /> Development
          </div>
          <div>
            Esports <br /> Organization
          </div>
          <div>
            Content <br /> Creation
          </div>
        </div>
      </div>
    </div>
  );
};
