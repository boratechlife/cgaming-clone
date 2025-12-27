import React from "react";

const WhyMatter = () => {
  return (
    <div
      className="py-20 px-4 lg:px-40 text-white relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(30, 10, 60, 0.95) 0%, rgba(20, 5, 40, 0.95) 100%)",
      }}
    >
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(100, 70, 200, 0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Gradient border effect */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-600 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex justify-center mb-8">
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
        </div>

        <h2
          className="text-white font-semibold leading-tight mb-12 text-center"
          style={{
            fontFamily: '"Karla", "Karla Placeholder", sans-serif',
            fontSize: "clamp(36px, 5vw, 60px)",
            letterSpacing: "-2px",
            lineHeight: "1.1em",
            textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
          }}
        >
          Why the Canadian Game Awards Matter
        </h2>

        <div className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-gray-800/50 shadow-2xl">
          <p
            className="text-gray-100 text-center max-w-4xl mx-auto leading-relaxed"
            style={{
              fontFamily: '"Karla", "Karla Placeholder", sans-serif',
              fontSize: "clamp(20px, 2.5vw, 24px)",
              letterSpacing: "-0.03em",
              lineHeight: "1.8em",
            }}
          >
            In a rapidly evolving industry, the CGAs serve as a beacon for
            Canadian creativity and excellence. They not only recognize
            groundbreaking work but also inspire future generations of
            developers, foster national pride, and strengthen the bonds within
            our gaming community. By celebrating diverse voices and innovations,
            the CGAs ensure that Canadian stories and talents continue to
            influence the global landscape of interactive entertainment.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent" />
    </div>
  );
};

export default WhyMatter;
