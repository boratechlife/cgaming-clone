import React from "react";

const HeroSection = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center w-full 
                 h-[420px] lg:h-[588px] 
                 border-b border-[#545454]"
      style={{ paddingTop: "42px" }}
      id="top"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Mobile Image Background */}
        <img
          decoding="auto"
          className="block lg:hidden w-full h-full object-cover"
          width="1920"
          height="1080"
          sizes="100vw"
          src="/images/aboutus/K6MpepzIoEx1Eh22pTWT1wY3zw.avif"
          alt=""
        />

        {/* Desktop Video Background */}
        <video
          src="/videos/SW98RkaeO79SEfSU86gJLxDqXE.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="hidden lg:block w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* ================= CONTENT ================= */}
      <section className="relative z-10 w-full h-full flex items-center">
        <div className="w-full px-6 lg:px-[130px]">
          <div className="max-w-[600px] flex flex-col gap-6">
            {/* Heading */}
            <h1
              className="text-white font-semibold leading-tight"
              style={{
                fontFamily: '"Karla", "Karla Placeholder", sans-serif',
                fontSize: "clamp(36px, 6vw, 72px)",
                letterSpacing: "-3px",
                lineHeight: "1.05em",
              }}
            >
              About “Canadian Game Awards”
            </h1>

            {/* Description */}
            <p
              className="text-white"
              style={{
                fontFamily: '"Karla", "Karla Placeholder", sans-serif',
                fontSize: "18px",
                letterSpacing: "-0.07em",
                lineHeight: "1.6em",
              }}
            >
              The Canadian Game Awards are back! Join us at the prestigious TIFF
              Lightbox on February 15th as we celebrate the very best of the
              Canadian gaming scene.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
