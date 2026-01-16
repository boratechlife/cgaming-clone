import { karla } from "@/app/layout";
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
    {
      title: "Upcoming Events at the Canadian Game Awards",
      image: "/images/media/placeholder-event.avif",
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
      image: "/images/media/placeholder-developers.avif",
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
      <div
        className={`framer-n4lyna flex flex-col items-center ${karla.className} gap-20 min-h-min overflow-visible relative w-full max-w-7xl`}
      >
        <div className="framer-xb97td w-full text-center">
          <h1
            className="framer-text text-5xl lg:text-7xl font-medium tracking-tight text-white"
            style={{
              fontFamily: '"Satoshi", "Satoshi Placeholder", sans-serif',
              letterSpacing: "-2px",
              lineHeight: "1.1em",
            }}
          >
            Latest News & Updates <br />
            <span className="text-white/80">from the Canadian Game Awards</span>
          </h1>
          <p
            className="framer-text text-gray-300 mt-6 max-w-3xl mx-auto"
            style={{
              fontFamily: '"Karla", "Karla Placeholder", sans-serif',
              letterSpacing: "-0.02em",
              lineHeight: "1.6em",
              fontSize: "20px",
            }}
          >
            Stay informed with the latest announcements, partnerships,
            behind-the-scenes insights, and event updates from the CGA.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "All",
            "Announcements",
            "Partnerships",
            "Behind the Scenes",
            "Events",
          ].map((filter) => (
            <button
              key={filter}
              className="px-5 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full text-sm font-medium transition-colors backdrop-blur-md"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Media Accreditation Banner CTA */}
        <div className="w-full max-w-7xl bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h3 className="text-2xl font-medium text-white">
              Media Attending CGA?
            </h3>
            <p className="text-gray-300 mt-2">
              Apply for accreditation to attend events. Confirmation emails sent
              February 13, 2026.
            </p>
          </div>
          <a
            href="https://zfrmz.ca/9dm7I3fhijatLu2ZnZeg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-8 py-4 text-white bg-purple-600 hover:bg-purple-500 rounded-full text-base font-bold whitespace-nowrap cursor-pointer transition-all hover:scale-105"
          >
            Apply for Accreditation →
          </a>
        </div>
      </div>

      {/* Featured Article Section */}
      {featuredPost && (
        <div className="framer-1i3nsgi flex flex-col items-center gap-16 min-h-min overflow-hidden relative w-full max-w-7xl mt-12">
          <div className="w-full">
            <a
              href={featuredPost.link}
              className="group flex flex-col lg:flex-row items-center gap-10 bg-gray-900/40 border border-white/5 hover:border-white/20 rounded-3xl p-8 backdrop-blur-sm transition-all"
            >
              <div className="flex-none w-full lg:w-1/2 h-80 relative rounded-2xl overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col gap-4 w-full lg:w-1/2">
                <span className="text-sm font-bold text-purple-400 uppercase tracking-widest">
                  {featuredPost.category}
                </span>
                <h2 className="text-4xl font-medium text-white leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex gap-4 text-gray-400 text-sm">
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <span className="text-purple-400 font-bold group-hover:translate-x-2 transition-transform">
                  Read full story →
                </span>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* Blog Grid Section */}
      <div className="framer-1i3nsgi flex flex-col items-center gap-16 min-h-min overflow-hidden relative w-full max-w-7xl mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[95%] lg:w-full">
          {otherPosts.map((post, index) => (
            <a
              key={index}
              href={post.link}
              className="group flex flex-col gap-4 bg-gray-900/40 border border-white/5 hover:border-white/20 rounded-3xl p-6 backdrop-blur-sm transition-all"
            >
              <div className="relative h-56 rounded-2xl overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">
                {post.category}
              </span>
              <h3 className="text-2xl font-medium text-white line-clamp-2 leading-snug">
                {post.title}
              </h3>
              <p className="text-gray-400 line-clamp-3 text-sm leading-relaxed">
                {post.excerpt}
              </p>
              <div className="mt-auto pt-4 flex justify-between items-center border-t border-white/5 text-gray-500 text-xs">
                <span>{post.date}</span>
                <span className="text-purple-400 font-bold group-hover:translate-x-1 transition-transform">
                  Read more →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Brand Assets CTA */}
      <div className="framer-n4lyna flex flex-col items-center gap-20 min-h-min overflow-visible relative w-full max-w-7xl mt-20">
        <div className="w-full max-w-7xl bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-medium text-white">
              CGA's Brand Assets
            </h3>
            <p className="text-gray-300 mt-2">
              Download colours, typography, and official design elements.
            </p>
          </div>
          <a
            href="https://framerusercontent.com/assets/o8cSE1OsNY6WnKUwsLJf3wojmY.zip"
            download
            className="flex items-center gap-2.5 px-8 py-4 text-white border border-white/20 hover:bg-white/10 rounded-full text-sm font-bold whitespace-nowrap cursor-pointer transition-all"
          >
            Download Assets Zip ↓
          </a>
        </div>
      </div>
    </div>
  );
};

export default MediaWorkersSection;
