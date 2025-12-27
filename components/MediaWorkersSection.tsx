import React from "react";

const MediaWorkersSection = () => {
  const blogPosts = [
    {
      title:
        "The Canadian Game Awards Announces Multi-Year Agreement with TIFF Lightbox",
      image: "/images/media/L8Ru192n0yvI8yqAbQHbhS5eA8w.avif",
      link: "./blog/tifflightbox",
      category: "Announcements",
      date: "December 15, 2024",
      excerpt:
        "The Canadian Game Awards is thrilled to announce a multi-year partnership with TIFF Lightbox, bringing exciting events and collaborations to the gaming community.",
      readTime: "5 min read",
      isFeatured: true,
    },
    {
      title:
        "Behind the Scenes of the Canadian Game Awards: Ensuring Fairness and Integrity in the Adjudication Process",
      image: "/images/media/npqQAPtKmBV1Gd8HGcdayxD4kk.avif",
      link: "./blog/cga-process",
      category: "Behind the Scenes",
      date: "November 20, 2024",
      excerpt:
        "Dive into the meticulous process that ensures every nomination and award at the CGA is handled with the utmost fairness and transparency.",
      readTime: "7 min read",
      isFeatured: false,
    },
    {
      title:
        "Valnet Joins as Title Sponsor of the Canadian Game Awards. Screen Rant Named Official Media Partner",
      image: "/images/media/KmWrBL9b5c4Fx4akLc5BfHCYTFs.avif",
      link: "./blog/valnet-screenrant-cga-2025",
      category: "Partnerships",
      date: "October 10, 2024",
      excerpt:
        "We're excited to welcome Valnet as our title sponsor and Screen Rant as our official media partner for the 2025 Canadian Game Awards.",
      readTime: "4 min read",
      isFeatured: false,
    },
    // Add more articles here for scalability; assuming client will upload/add more
    {
      title: "Upcoming Events at the Canadian Game Awards",
      image: "/images/media/placeholder-event.avif", // Placeholder; replace with actual
      link: "./blog/upcoming-events",
      category: "Events",
      date: "January 5, 2025",
      excerpt:
        "Get a sneak peek at the lineup of events planned for the CGA, including panels, awards ceremonies, and networking opportunities.",
      readTime: "6 min read",
      isFeatured: false,
    },
    {
      title: "Spotlight on Canadian Game Developers",
      image: "/images/media/placeholder-developers.avif", // Placeholder; replace with actual
      link: "./blog/developer-spotlight",
      category: "Announcements",
      date: "December 1, 2024",
      excerpt:
        "Highlighting the innovative work of Canadian game developers who are pushing the boundaries of interactive entertainment.",
      readTime: "8 min read",
      isFeatured: false,
    },
  ];

  const featuredPost = blogPosts.find((post) => post.isFeatured);

  const otherPosts = blogPosts.filter((post) => !post.isFeatured);

  return (
    <div
      className="framer-NFhrK pt-[200px] lg:px-40 pb-[179px] framer-h69w26 flex flex-col items-center gap-23 min-h-min overflow-visible relative w-full"
      style={{
        background:
          "linear-gradient(180deg, #5630bf 0%, rgba(60, 33, 133, 1) 52.702702702702695%, #0d021b 100%)",
        scrollMarginTop: "40px",
      }}
    >
      {/* Hero Section */}
      <div className="framer-n4lyna flex flex-col items-center gap-20 min-h-min overflow-visible relative w-full max-w-7xl">
        <div className="framer-xb97td w-full text-center">
          <h1
            className="framer-text text-5xl lg:text-6xl font-medium tracking-tight text-white"
            style={{
              fontFamily: '"Satoshi", "Satoshi Placeholder", sans-serif',
              letterSpacing: "-1px",
              lineHeight: "1.25em",
            }}
          >
            Latest News & Updates from the Canadian Game Awards
          </h1>
          <p
            className="framer-text text-gray-300 mt-4 max-w-3xl mx-auto"
            style={{
              fontFamily: '"Karla", "Karla Placeholder", sans-serif',
              letterSpacing: "-0.07em",
              lineHeight: "1.6em",
              fontSize: "20px",
            }}
          >
            Stay informed with the latest announcements, partnerships,
            behind-the-scenes insights, and event updates from the CGA.
          </p>
        </div>

        {/* Optional Filters (Static for now) */}
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-4 py-2 bg-gray-800 text-white rounded-full text-sm font-medium">
            All
          </button>
          <button className="px-4 py-2 bg-gray-800 text-white rounded-full text-sm font-medium">
            Announcements
          </button>
          <button className="px-4 py-2 bg-gray-800 text-white rounded-full text-sm font-medium">
            Partnerships
          </button>
          <button className="px-4 py-2 bg-gray-800 text-white rounded-full text-sm font-medium">
            Behind the Scenes
          </button>
          <button className="px-4 py-2 bg-gray-800 text-white rounded-full text-sm font-medium">
            Events
          </button>
        </div>

        {/* Media Accreditation Banner CTA */}
        <div className="w-full max-w-7xl bg-gray-800 rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-medium text-white">
              Media Attending CGA?
            </h3>
            <p className="text-gray-300 mt-2">
              Apply for accreditation to attend events. Confirmation emails sent
              February 13, 2025.
            </p>
          </div>
          <a
            href="https://forms.gle/siW4ezwY82xvQhFW7"
            className="flex items-center gap-2.5 px-5 py-3 text-white bg-purple-600 rounded-full text-sm font-medium whitespace-nowrap cursor-pointer"
          >
            Apply Now →
          </a>
        </div>
      </div>

      {/* Featured Article Section */}
      {featuredPost && (
        <div className="framer-1i3nsgi flex flex-col items-center gap-16 min-h-min overflow-hidden relative w-full max-w-7xl mt-12">
          <div className="w-full">
            <a
              href={featuredPost.link}
              className="flex flex-col lg:flex-row items-center gap-10 bg-gray-900/50 rounded-3xl p-8 backdrop-blur-sm"
            >
              <div className="flex-none w-full lg:w-1/2 h-64 relative rounded-2xl overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-4 w-full lg:w-1/2">
                <span className="text-sm font-medium text-purple-400 uppercase">
                  {featuredPost.category}
                </span>
                <h2 className="text-4xl font-medium text-white">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-300 text-lg">{featuredPost.excerpt}</p>
                <div className="flex gap-4 text-gray-400 text-sm">
                  <span>{featuredPost.date}</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <span className="text-purple-400 font-medium">Read more →</span>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* Blog Grid Section */}
      <div className="framer-1i3nsgi flex flex-col items-center gap-16 min-h-min overflow-hidden relative w-full max-w-7xl mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[95%]">
          {otherPosts.map((post, index) => (
            <a
              key={index}
              href={post.link}
              className="flex flex-col gap-4 bg-gray-900/50 rounded-3xl p-6 backdrop-blur-sm"
            >
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm font-medium text-purple-400 uppercase">
                {post.category}
              </span>
              <h3 className="text-2xl font-medium text-white line-clamp-2">
                {post.title}
              </h3>
              <p className="text-gray-300 line-clamp-3">{post.excerpt}</p>
              <div className="flex gap-4 text-gray-400 text-sm">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <span className="text-purple-400 font-medium">Read more →</span>
            </a>
          ))}
        </div>
      </div>

      {/* Brand Assets CTA (Moved to bottom as a small section) */}
      <div className="framer-n4lyna flex flex-col items-center gap-20 min-h-min overflow-visible relative w-full max-w-7xl mt-12">
        <div className="w-full max-w-7xl bg-gray-800 rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-medium text-white">
              CGA's Brand Assets
            </h3>
            <p className="text-gray-300 mt-2">
              Download colors, typography, and design elements.
            </p>
          </div>
          <a
            href="https://framerusercontent.com/assets/o8cSE1OsNY6WnKUwsLJf3wojmY.zip"
            download
            className="flex items-center gap-2.5 px-5 py-3 text-white bg-purple-600 rounded-full text-sm font-medium whitespace-nowrap cursor-pointer"
          >
            Download Files →
          </a>
        </div>
      </div>
    </div>
  );
};

export default MediaWorkersSection;
