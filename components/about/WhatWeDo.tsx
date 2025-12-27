import React from "react";

const WhatWeDo = () => {
  const features = [
    {
      title: "Awards & Recognition",
      description:
        "We honor outstanding achievements in game development, design, and innovation across Canada. Through expert judging and fan involvement, we spotlight the best talent and projects that define the industry.",
    },
    {
      title: "Community Engagement",
      description:
        "We connect developers, fans, and industry leaders through events, discussions, and online platforms. This builds a vibrant ecosystem that supports collaboration and shared passion for gaming.",
    },
    {
      title: "Industry Promotion",
      description:
        "We elevate Canadian games on the global stage via partnerships, media coverage, and advocacy. Our efforts highlight Canada's role as a hub for interactive entertainment and drive economic growth.",
    },
  ];

  return (
    <div className="py-20 px-4 lg:px-40 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-white font-semibold leading-tight mb-12 text-center"
          style={{
            fontFamily: '"Karla", "Karla Placeholder", sans-serif',
            fontSize: "clamp(36px, 5vw, 60px)",
            letterSpacing: "-2px",
            lineHeight: "1.1em",
          }}
        >
          What We Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-black/50 p-8 rounded-3xl flex flex-col gap-4 border border-[#545454]"
            >
              <h3
                className="text-white font-medium"
                style={{
                  fontFamily: '"Satoshi", "Satoshi Placeholder", sans-serif',
                  fontSize: "28px",
                  fontWeight: "500",
                  letterSpacing: "-1px",
                  lineHeight: "1.25em",
                }}
              >
                {feature.title}
              </h3>
              <p
                className="text-gray-300"
                style={{
                  fontFamily: '"Karla", "Karla Placeholder", sans-serif',
                  fontSize: "18px",
                  letterSpacing: "-0.07em",
                  lineHeight: "1.6em",
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
