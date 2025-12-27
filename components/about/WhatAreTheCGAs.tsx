import React from "react";

const WhatAreTheCGAs = () => {
  return (
    <div
      className="py-32 px-4 lg:px-40 bg-black text-white border-b border-[#545454]"
      id="top"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10">
        <div className="lg:w-1/2 flex flex-col gap-6">
          <h1
            className="text-white font-semibold leading-tight"
            style={{
              fontFamily: '"Karla", "Karla Placeholder", sans-serif',
              fontSize: "clamp(36px, 6vw, 72px)",
              letterSpacing: "-3px",
              lineHeight: "1.05em",
            }}
          >
            What Are the Canadian Game Awards?
          </h1>
          <div className="w-32 h-[2px] bg-white/50 mb-4" />
          <p
            className="text-white max-w-xl"
            style={{
              fontFamily: '"Karla", "Karla Placeholder", sans-serif',
              fontSize: "clamp(18px, 2vw, 22px)",
              letterSpacing: "-0.07em",
              lineHeight: "1.6em",
            }}
          >
            The Canadian Game Awards (CGA) are a celebration of Canada's growing
            gaming industry, one of the largest in the world. This award show
            highlights Canada's position on the global stage as a leader in
            interactive entertainment. Designed "by the industry, for the
            industry," the CGA also strives to engage the public and fans in
            celebrating this thriving sector.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img
            src="/images/aboutus/K6MpepzIoEx1Eh22pTWT1wY3zw.avif"
            alt="Canadian Game Awards event"
            className="w-full h-auto object-cover rounded-3xl"
            width="1920"
            height="1080"
            sizes="100vw"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatAreTheCGAs;
