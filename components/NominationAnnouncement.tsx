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
        <p className="text-3xl font-bold text-yellow-300">March 21st</p>
        <p className="text-white mt-6 max-w-2xl mx-auto">
          Stay tuned as we announce the talented nominees across all categories.
          This year's awards celebrate excellence in game development, esports,
          and content creation across Canada.
        </p>
      </div>
    </div>
  );
};
