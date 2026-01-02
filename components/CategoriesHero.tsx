// components/CategoriesHero.tsx
import { karla } from "@/app/layout";
import Image from "next/image";

const CategoriesHero = () => {
  return (
    <div
      className={`relative ${karla.className} w-full h-max lg:h-[90vh] `}
      id="top"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/nominees/hero.png"
          alt="Hero background"
          className="object-cover h-full w-full opacity-25"
        />
        {/* GRADIENT OVERLAY: 
            Starts transparent at the top and transitions to the 
            exact purple (#5B2C91) used in the next section.
        */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%,#5B2C91 70%, #5B2C91 100%)",
          }}
        />
      </div>

      {/* Hero Content */}
      <section
        className="relative py-20 lg:py-auto z-10 flex flex-col items-center justify-center lg:min-h-screen px-4 lg:py-20"
        id="hero-section"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="font-karla font-semibold text-5xl md:text-6xl lg:text-7xl text-white leading-tight tracking-tight">
              <span className="inline-block">Categories</span>
            </h1>
          </div>

          {/* Description Text */}
          <div className="max-w-3xl mx-auto">
            <p className="font-karla text-lg md:text-xl text-white leading-relaxed tracking-tight">
              Discover 16 categories celebrating the best in Canadian gaming at
              the Canadian Game Awards, where we honor exceptional talent and
              recognize the outstanding achievements of this year&apos;s
              nominees.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoriesHero;
